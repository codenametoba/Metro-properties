import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Bath, BedDouble, Building2, Car, FileText, MapPin, Maximize2, Phone, Ruler, Share2 } from "lucide-react";
import { AddToCompare } from "@/components/saved-and-compare";
import { InspectionDialog, ContactForm } from "@/components/inquiry-form";
import { PropertyGallery } from "@/components/property-gallery";
import { PropertyCard } from "@/components/property-card";
import { buildWhatsAppUrl, formatPrice } from "@/lib/format";
import { getPropertyBySlug, getSimilarProperties } from "@/sanity/lib/queries";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);
  if (!property) return {};
  const title = property.seoTitle || `${property.title} in ${property.location.city || property.location.name || "Nigeria"}`;
  const description = property.seoDescription || property.shortDescription || `View ${property.title}, ${property.type}, ${formatPrice(property.price, property.currency, property.priceLabel)}.`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: property.featuredImage ? [property.featuredImage] : []
    }
  };
}

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);
  if (!property) notFound();
  const similar = await getSimilarProperties(property);
  const sold = property.status === "Sold";
  const images = property.gallery?.length ? property.gallery : property.featuredImage ? [property.featuredImage] : [];
  const whatsApp = buildWhatsAppUrl(property.agent?.whatsapp, property.title, property.reference);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: property.title,
    address: [property.location.address, property.location.city, property.location.state].filter(Boolean).join(", "),
    image: images,
    offers: property.price ? { "@type": "Offer", price: property.price, priceCurrency: property.currency || "NGN", availability: sold ? "https://schema.org/SoldOut" : "https://schema.org/InStock" } : undefined
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <PropertyGallery title={property.title} images={images} />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px]">
          <article>
            <div className="mb-6 flex flex-wrap gap-3">
              <span className="bg-ink px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ivory">{property.status}</span>
              <span className="border border-gold px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">{property.reference}</span>
              <span className="border border-ink/15 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">{property.type}</span>
            </div>
            <h1 className="font-heading text-5xl font-semibold leading-tight md:text-7xl">{property.title}</h1>
            <p className="mt-5 flex items-center gap-2 text-lg text-ink/62"><MapPin size={20} /> {[property.location.name, property.location.city, property.location.state].filter(Boolean).join(", ")}</p>
            <p className="mt-7 font-heading text-4xl font-semibold text-gold">{formatPrice(property.price, property.currency, property.priceLabel)}</p>

            <div className="mt-10 grid grid-cols-2 gap-px bg-ink/10 md:grid-cols-4">
              <Fact icon={<BedDouble />} label="Bedrooms" value={property.bedrooms} />
              <Fact icon={<Bath />} label="Bathrooms" value={property.bathrooms} />
              <Fact icon={<Car />} label="Parking" value={property.parking} />
              <Fact icon={<Maximize2 />} label="Size" value={property.propertySize || property.landSize} />
            </div>

            <Section title="Description">
              <p className="text-lg leading-8 text-ink/70">{property.description || property.shortDescription}</p>
            </Section>

            {property.features?.length ? <Section title="Features"><BulletGrid items={property.features} /></Section> : null}
            {property.amenities?.length ? <Section title="Amenities"><BulletGrid items={property.amenities} /></Section> : null}

            {property.paymentPlans?.length ? (
              <Section title="Payment Plan">
                <div className="grid gap-4 md:grid-cols-2">
                  {property.paymentPlans.map((plan) => (
                    <div key={plan.title} className="border border-ink/12 bg-paper p-5">
                      <p className="text-sm uppercase tracking-[0.16em] text-ink/50">{plan.title}</p>
                      <p className="mt-3 font-heading text-3xl font-semibold text-gold">{formatPrice(plan.amount, property.currency)}</p>
                      {plan.schedule && <p className="mt-2 text-sm text-ink/62">{plan.schedule}</p>}
                      {plan.notes && <p className="mt-3 text-sm leading-6 text-ink/62">{plan.notes}</p>}
                    </div>
                  ))}
                </div>
              </Section>
            ) : null}

            {property.location.landmarks?.length ? <Section title="Nearby Landmarks"><BulletGrid items={property.location.landmarks} /></Section> : null}

            <Section title="Location">
              <div className="grid gap-4 border border-ink/12 bg-paper p-5">
                <p className="text-ink/70">{[property.location.address, property.location.neighbourhood, property.location.city, property.location.state].filter(Boolean).join(", ") || "Location details available on request."}</p>
                {property.location.mapUrl && <Link href={property.location.mapUrl} className="font-semibold text-gold">Open map location</Link>}
              </div>
            </Section>

            {(property.videoUrl || property.virtualTourUrl || property.documents?.length) && (
              <Section title="Media & Documents">
                <div className="flex flex-wrap gap-3">
                  {property.videoUrl && <Link href={property.videoUrl} className="border border-ink/15 px-4 py-3 font-semibold">Property Video</Link>}
                  {property.virtualTourUrl && <Link href={property.virtualTourUrl} className="border border-ink/15 px-4 py-3 font-semibold">Virtual Tour</Link>}
                  {property.documents?.map((doc) => <Link key={doc.url} href={doc.url} className="inline-flex items-center gap-2 border border-ink/15 px-4 py-3 font-semibold"><FileText size={18} /> {doc.title}</Link>)}
                </div>
              </Section>
            )}
          </article>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="border border-ink/12 bg-paper p-5 shadow-soft">
              <h2 className="font-heading text-3xl font-semibold">Discuss this property.</h2>
              <p className="mt-3 text-sm leading-6 text-ink/62">Use the reference ID when speaking with Metro Properties so the inquiry is easy to track.</p>
              <div className="mt-6 grid gap-3">
                <InspectionDialog propertyTitle={property.title} reference={property.reference} sold={sold} />
                <Link href={whatsApp} className="bg-forest px-5 py-3 text-center font-semibold text-ivory">Chat About This Property</Link>
                <Link href={`tel:${property.agent?.phone || ""}`} className="inline-flex items-center justify-center gap-2 border border-ink/15 px-5 py-3 font-semibold"><Phone size={18} /> Call</Link>
                <AddToCompare property={property} />
              </div>
              {property.agent && (
                <div className="mt-8 border-t border-ink/12 pt-5">
                  <p className="text-sm uppercase tracking-[0.16em] text-gold">Advisor</p>
                  <p className="mt-2 font-heading text-2xl font-semibold">{property.agent.name}</p>
                  <p className="text-sm text-ink/55">{property.agent.position}</p>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <h2 className="mb-8 font-heading text-4xl font-semibold">Send an Inquiry</h2>
        <ContactForm propertyTitle={property.title} reference={property.reference} />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <h2 className="mb-8 font-heading text-4xl font-semibold">Similar Properties</h2>
        <div className="grid gap-10 md:grid-cols-3">{similar.map((item) => <PropertyCard key={item._id} property={item} />)}</div>
      </section>

      <div className="fixed bottom-0 left-0 z-40 grid w-full grid-cols-3 border-t border-ink/10 bg-ivory lg:hidden">
        <Link href={`tel:${property.agent?.phone || ""}`} className="p-4 text-center text-sm font-semibold">Call</Link>
        <Link href={whatsApp} className="bg-forest p-4 text-center text-sm font-semibold text-ivory">WhatsApp</Link>
        <div className="grid place-items-center p-2"><InspectionDialog propertyTitle={property.title} reference={property.reference} sold={sold} /></div>
      </div>
    </>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return <section className="mt-14 border-t border-ink/12 pt-8"><h2 className="mb-6 font-heading text-3xl font-semibold">{title}</h2>{children}</section>;
}

function Fact({ icon, label, value }: { icon: ReactNode; label: string; value?: string | number }) {
  return <div className="bg-ivory p-5">{icon}<p className="mt-3 text-xs uppercase tracking-[0.16em] text-ink/45">{label}</p><p className="mt-1 font-heading text-xl font-semibold">{value || "-"}</p></div>;
}

function BulletGrid({ items }: { items: string[] }) {
  return <div className="grid gap-3 md:grid-cols-2">{items.map((item) => <div key={item} className="flex items-center gap-3 border-t border-ink/10 py-3"><Ruler size={16} className="text-gold" /> <span>{item}</span></div>)}</div>;
}
