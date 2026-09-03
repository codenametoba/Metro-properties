import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Metro Properties</p>
          <h1 className="mt-4 font-heading text-5xl font-semibold md:text-7xl">Property advisory with a long-term view.</h1>
        </div>
        <p className="self-end text-lg leading-8 text-ink/68">Metro Properties markets and sells residential, land, commercial and investment real estate. The company profile is built to be CMS-managed, so leadership, mission, vision and team content can evolve as the business grows.</p>
      </div>
      <div className="relative h-[52vh] bg-stone">
        <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=84" alt="Modern architectural building" fill className="object-cover" sizes="100vw" />
      </div>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3 lg:px-8">
        {["Who We Are", "Our Approach", "Why Clients Choose Us"].map((title) => (
          <div key={title} className="border-t border-ink/12 pt-5">
            <h2 className="font-heading text-3xl font-semibold">{title}</h2>
            <p className="mt-4 leading-7 text-ink/64">We focus on clear property information, practical guidance, inspection support and transparent client communication across property categories.</p>
          </div>
        ))}
      </div>
      <div className="bg-ink px-5 py-16 text-center text-ivory">
        <h2 className="font-heading text-4xl font-semibold">Ready to find your property?</h2>
        <Link href="/properties" className="mt-6 inline-block bg-gold px-6 py-4 font-semibold text-ink">Find Your Property</Link>
      </div>
    </section>
  );
}
