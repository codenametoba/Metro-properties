import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatPrice } from "@/lib/format";
import { getDevelopments } from "@/sanity/lib/queries";

export default async function DevelopmentsPage() {
  const developments = await getDevelopments();
  return (
    <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Developments</p>
      <h1 className="mt-4 max-w-4xl font-heading text-5xl font-semibold md:text-7xl">New developments, off-plan projects and estates.</h1>
      <div className="mt-14 grid gap-10 md:grid-cols-2">
        {developments.map((development) => (
          <Link href={`/developments/${development.slug}`} key={development._id} className="group border-t border-ink/12 pt-5">
            <div className="relative aspect-[16/10] overflow-hidden bg-stone">
              {development.image && <Image src={development.image} alt={development.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="50vw" />}
            </div>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-gold">{development.status}</p>
                <h2 className="mt-3 font-heading text-3xl font-semibold">{development.title}</h2>
                <p className="mt-3 text-ink/62">{development.summary}</p>
                <p className="mt-4 text-xl font-semibold text-gold">From {formatPrice(development.startingPrice, development.currency)}</p>
              </div>
              <ArrowRight className="mt-3 shrink-0 text-gold" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
