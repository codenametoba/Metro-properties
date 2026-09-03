import Image from "next/image";
import { getInsights } from "@/sanity/lib/queries";

export default async function InsightsPage() {
  const insights = await getInsights();
  return (
    <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Insights</p>
      <h1 className="mt-4 max-w-4xl font-heading text-5xl font-semibold md:text-7xl">Guides for buying, investing and evaluating property.</h1>
      <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {insights.map((item) => (
          <article key={item._id} className="border-t border-ink/12 pt-5">
            {item.image && <div className="relative mb-5 aspect-[4/3] bg-stone"><Image src={item.image} alt={item.title} fill className="object-cover" sizes="33vw" /></div>}
            <p className="text-sm uppercase tracking-[0.18em] text-gold">{item.category}</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold">{item.title}</h2>
            <p className="mt-3 leading-7 text-ink/62">{item.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
