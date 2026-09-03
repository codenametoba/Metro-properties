import type { Metadata } from "next";
import { PropertyCard } from "@/components/property-card";
import { PropertyFilters } from "@/components/property-filters";
import { getProperties } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Properties",
  description: "Search and filter Metro Properties listings by type, location, price, bedrooms, bathrooms and status."
};

export default async function PropertiesPage({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) {
  const params = await searchParams;
  const properties = await getProperties(params);

  return (
    <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
      <div className="mb-10 grid gap-4 lg:grid-cols-[0.7fr_1fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Property Search</p>
          <h1 className="mt-4 font-heading text-5xl font-semibold md:text-7xl">Browse Available Properties.</h1>
        </div>
        <p className="max-w-xl text-ink/62 lg:justify-self-end">Filter homes, land, commercial spaces and investment listings from the Metro Properties catalogue. Sold and reserved listings stay clearly marked.</p>
      </div>
      <div className="grid gap-10 lg:grid-cols-[310px_1fr]">
        <PropertyFilters defaults={params} />
        <div>
          <div className="mb-6 flex items-center justify-between border-y border-ink/10 py-4 text-sm text-ink/60">
            <span>{properties.length} listings found</span>
            <span>CMS-managed catalogue</span>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            {properties.map((property) => <PropertyCard key={property._id} property={property} />)}
          </div>
          {properties.length === 0 && (
            <div className="bg-paper p-8">
              <h2 className="font-heading text-3xl font-semibold">No matching properties.</h2>
              <p className="mt-3 text-ink/62">Try adjusting the filters or submit a property request so Metro Properties can advise you directly.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
