import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Banknote, Building2, Handshake, Landmark, MapPin, ShieldCheck } from "lucide-react";
import { MotionDiv, MotionSection } from "@/components/motion";
import { PropertyCard } from "@/components/property-card";
import { SearchPanel } from "@/components/search-panel";
import { formatPrice } from "@/lib/format";
import { getDevelopments, getFeaturedProperties, getInsights, getLatestProperties } from "@/sanity/lib/queries";

const categories = [
  ["Residential", "Curated homes for families, professionals and long-term ownership.", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=82", "/properties?type=Residential"],
  ["Land", "Plots, estates and documented land opportunities for development or investment.", "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=82", "/properties?type=Land"],
  ["Commercial", "Offices, retail, mixed-use and business-ready real estate.", "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=82", "/properties?type=Commercial"],
  ["Luxury Homes", "Premium residences with distinctive locations, finishes and amenities.", "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=82", "/properties?type=Luxury%20Home"]
];

const reasons = [
  [ShieldCheck, "Verified Property Opportunities", "Listings are structured for proper review, documentation and clear availability updates."],
  [Banknote, "Flexible Payment Options", "Where a seller provides plans, Metro Properties presents the exact terms clearly."],
  [Handshake, "Property Advisory", "Guidance for buyers comparing neighbourhoods, asset types and ownership goals."],
  [MapPin, "Inspection Assistance", "Simple inspection requests and property-specific contact flows."]
];

export default async function Home() {
  const [featured, latest, developments, insights] = await Promise.all([
    getFeaturedProperties(),
    getLatestProperties(),
    getDevelopments(),
    getInsights()
  ]);

  return (
    <>
      <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-ink text-ivory">
        <Image src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=85" alt="Premium modern property interior" fill priority className="object-cover opacity-60" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/15" />
        <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col justify-end px-5 pb-8 pt-24 lg:px-8">
          <MotionDiv initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-gold">Homes. Land. Commercial. Investments.</p>
            <h1 className="font-heading text-5xl font-semibold leading-[0.98] md:text-7xl lg:text-8xl">Find More Than Property. Find Opportunity.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ivory/78">Metro Properties helps clients discover residential, commercial, land and investment opportunities with calm guidance and clear property information.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/properties" className="inline-flex items-center justify-center gap-2 bg-gold px-6 py-4 font-semibold text-ink transition hover:bg-ivory">Explore Properties <ArrowRight size={18} /></Link>
              <Link href="/contact?inquiry=inspection" className="inline-flex items-center justify-center border border-ivory/30 px-6 py-4 font-semibold text-ivory transition hover:border-gold">Book an Inspection</Link>
            </div>
          </MotionDiv>
          <div className="mt-12">
            <SearchPanel />
          </div>
        </div>
      </section>

      <SectionIntro eyebrow="Featured Properties" title="Selected opportunities from the Metro catalogue." href="/properties?status=Featured" link="View all properties" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {featured.map((property, index) => <PropertyCard key={property._id} property={property} priority={index < 2} />)}
      </div>

      <MotionSection initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Explore By Category</p>
              <h2 className="mt-4 font-heading text-4xl font-semibold md:text-6xl">Every property type has its own rhythm.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {categories.map(([title, copy, image, href]) => (
                <Link href={href} key={title} className="group relative min-h-72 overflow-hidden bg-ink p-6 text-ivory focus-ring">
                  <Image src={image} alt={title} fill className="object-cover opacity-64 transition duration-700 group-hover:scale-105" sizes="(min-width: 768px) 50vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                  <div className="relative flex h-full flex-col justify-end">
                    <h3 className="font-heading text-3xl font-semibold">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-ivory/76">{copy}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      <section className="architectural-grid py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Why Metro Properties</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold md:text-6xl">A steady way to evaluate property decisions.</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {reasons.map(([Icon, title, copy]) => (
              <div key={String(title)} className="border-t border-ink/15 pt-5">
                <Icon className="mb-5 text-gold" />
                <h3 className="font-heading text-2xl font-semibold">{title as string}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/62">{copy as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-20 text-ivory">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <Landmark className="mb-6 text-gold" size={34} />
            <h2 className="font-heading text-5xl font-semibold leading-tight">Real Estate Is More Than Ownership.</h2>
          </div>
          <div className="self-end">
            <p className="text-lg leading-8 text-ivory/74">From emerging developments to established neighbourhoods, Metro Properties helps clients identify opportunities aligned with their property and investment goals.</p>
            <Link href="/properties?type=Investment" className="mt-8 inline-flex items-center gap-2 border border-gold px-6 py-4 font-semibold text-gold">Explore Investment Opportunities <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      <SectionIntro eyebrow="Latest Properties" title="Newest listings added through the catalogue." href="/properties" link="View all properties" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {latest.slice(0, 3).map((property) => <PropertyCard key={property._id} property={property} />)}
      </div>

      <section className="bg-paper py-20">
        <SectionIntro eyebrow="Developments" title="New developments, off-plan projects and estates." href="/developments" link="View developments" tight />
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-2 lg:px-8">
          {developments.map((development) => (
            <Link href={`/developments/${development.slug}`} key={development._id} className="group grid gap-5 border-t border-ink/15 pt-5 md:grid-cols-[0.9fr_1fr]">
              <div className="relative aspect-[4/3] overflow-hidden bg-stone">
                {development.image && <Image src={development.image} alt={development.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="50vw" />}
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-gold">{development.status}</p>
                <h3 className="mt-3 font-heading text-3xl font-semibold">{development.title}</h3>
                <p className="mt-3 text-sm text-ink/60">{development.unitsAvailable} property units available</p>
                <p className="mt-5 text-xl font-semibold text-gold">From {formatPrice(development.startingPrice, development.currency)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <BadgeCheck className="mb-5 text-gold" />
            <h2 className="font-heading text-4xl font-semibold">Insights for clearer property decisions.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {insights.map((item) => (
              <Link href="/insights" key={item._id} className="border-t border-ink/15 pt-5">
                <p className="text-sm uppercase tracking-[0.18em] text-gold">{item.category}</p>
                <h3 className="mt-3 font-heading text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/62">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function SectionIntro({ eyebrow, title, href, link, tight = false }: { eyebrow: string; title: string; href: string; link: string; tight?: boolean }) {
  return (
    <div className={`mx-auto flex max-w-7xl flex-col gap-6 px-5 lg:flex-row lg:items-end lg:justify-between lg:px-8 ${tight ? "pb-10" : "py-16"}`}>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">{eyebrow}</p>
        <h2 className="mt-4 max-w-3xl font-heading text-4xl font-semibold leading-tight md:text-6xl">{title}</h2>
      </div>
      <Link href={href} className="inline-flex items-center gap-2 font-semibold text-ink transition hover:text-gold">{link} <ArrowRight size={18} /></Link>
    </div>
  );
}
