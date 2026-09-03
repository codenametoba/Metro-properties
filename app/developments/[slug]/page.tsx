import Image from "next/image";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { CalendarDays, MapPin } from "lucide-react";
import { InspectionDialog } from "@/components/inquiry-form";
import { formatPrice } from "@/lib/format";
import { getDevelopmentBySlug } from "@/sanity/lib/queries";

export default async function DevelopmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const development = await getDevelopmentBySlug(slug);
  if (!development) notFound();

  return (
    <>
      <section className="relative min-h-[68vh] bg-ink text-ivory">
        {development.image && <Image src={development.image} alt={development.title} fill priority className="object-cover opacity-58" sizes="100vw" />}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="relative mx-auto flex min-h-[68vh] max-w-7xl flex-col justify-end px-5 pb-12 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">{development.status}</p>
          <h1 className="mt-4 max-w-4xl font-heading text-5xl font-semibold md:text-7xl">{development.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ivory/76">{development.summary}</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1fr_360px] lg:px-8">
        <article>
          <div className="grid grid-cols-2 gap-px bg-ink/10 md:grid-cols-4">
            <Fact label="Starting From" value={formatPrice(development.startingPrice, development.currency)} />
            <Fact label="Units" value={`${development.unitsAvailable || 0} available`} />
            <Fact label="Location" value={[development.location?.city, development.location?.state].filter(Boolean).join(", ")} />
            <Fact label="Completion" value={development.expectedCompletion || "TBA"} />
          </div>
          <Section title="Development Overview"><p className="text-lg leading-8 text-ink/70">{development.summary}</p></Section>
          {development.amenities?.length ? <Section title="Amenities"><div className="grid gap-3 md:grid-cols-2">{development.amenities.map((item) => <p key={item} className="border-t border-ink/10 py-3">{item}</p>)}</div></Section> : null}
          {development.paymentPlans?.length ? <Section title="Payment Plans"><div className="grid gap-4 md:grid-cols-2">{development.paymentPlans.map((plan) => <div key={plan.title} className="border border-ink/12 bg-paper p-5"><p className="text-sm uppercase tracking-[0.16em] text-ink/50">{plan.title}</p><p className="mt-3 font-heading text-3xl font-semibold text-gold">{formatPrice(plan.amount, development.currency)}</p><p className="mt-2 text-sm text-ink/62">{plan.schedule}</p></div>)}</div></Section> : null}
          {development.gallery?.length ? <Section title="Gallery"><div className="grid gap-4 md:grid-cols-2">{development.gallery.map((image) => <div key={image} className="relative aspect-[4/3] bg-stone"><Image src={image} alt={development.title} fill className="object-cover" sizes="50vw" /></div>)}</div></Section> : null}
        </article>
        <aside className="border border-ink/12 bg-paper p-5 lg:sticky lg:top-28 lg:self-start">
          <MapPin className="mb-4 text-gold" />
          <h2 className="font-heading text-3xl font-semibold">Request development details.</h2>
          <p className="mt-3 text-sm leading-6 text-ink/62">Ask about available property types, allocation, construction status and payment terms.</p>
          <div className="mt-6"><InspectionDialog propertyTitle={development.title} reference="Development" /></div>
        </aside>
      </section>
    </>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return <section className="mt-12 border-t border-ink/12 pt-7"><h2 className="mb-5 font-heading text-3xl font-semibold">{title}</h2>{children}</section>;
}

function Fact({ label, value }: { label: string; value?: string }) {
  return <div className="bg-ivory p-5"><CalendarDays className="mb-3 text-gold" size={18} /><p className="text-xs uppercase tracking-[0.16em] text-ink/45">{label}</p><p className="mt-1 font-heading text-xl font-semibold">{value || "-"}</p></div>;
}
