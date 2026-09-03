import { ContactForm } from "@/components/inquiry-form";

export default function ListYourPropertyPage() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">List Your Property</p>
        <h1 className="mt-4 font-heading text-5xl font-semibold md:text-7xl">Submit a property for Metro review.</h1>
        <p className="mt-6 text-lg leading-8 text-ink/68">Owners and developers can submit opportunities for consideration. Submissions become leads only and are not published automatically.</p>
      </div>
      <ContactForm listing />
    </section>
  );
}
