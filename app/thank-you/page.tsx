import Link from "next/link";

export default function ThankYouPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Request Received</p>
      <h1 className="mt-4 font-heading text-5xl font-semibold">Thank you.</h1>
      <p className="mt-5 text-lg leading-8 text-ink/64">Metro Properties has received your request. Connect an email, CRM, or Sanity write token next to route submissions to the operations team.</p>
      <Link href="/properties" className="mt-8 inline-block bg-gold px-6 py-4 font-semibold text-ink">Explore Properties</Link>
    </section>
  );
}
