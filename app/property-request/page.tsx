import { ContactForm } from "@/components/inquiry-form";

export default function PropertyRequestPage() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Property Request</p>
        <h1 className="mt-4 font-heading text-5xl font-semibold md:text-7xl">Can’t find what you’re looking for?</h1>
        <p className="mt-6 text-lg leading-8 text-ink/68">Share your preferred type, location, budget, timeline and purpose. Metro Properties can use the request to advise you directly.</p>
      </div>
      <ContactForm request />
    </section>
  );
}
