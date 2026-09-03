"use client";

import { SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";

export function PropertyFilters({ defaults }: { defaults: Record<string, string | undefined> }) {
  const [open, setOpen] = useState(false);
  const form = <FilterForm defaults={defaults} />;

  return (
    <>
      <button onClick={() => setOpen(true)} className="mb-6 flex w-full items-center justify-center gap-2 border border-ink/15 bg-paper px-4 py-3 font-semibold lg:hidden">
        <SlidersHorizontal size={18} /> Filters
      </button>
      <aside className="hidden lg:block">{form}</aside>
      {open && (
        <div className="fixed inset-0 z-50 bg-ink/45 lg:hidden">
          <div className="ml-auto h-full w-[92%] max-w-sm overflow-y-auto bg-ivory p-5 shadow-soft">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-heading text-2xl font-semibold">Filters</h2>
              <button className="grid h-10 w-10 place-items-center border border-ink/15" onClick={() => setOpen(false)} aria-label="Close filters"><X size={20} /></button>
            </div>
            {form}
          </div>
        </div>
      )}
    </>
  );
}

function FilterForm({ defaults }: { defaults: Record<string, string | undefined> }) {
  return (
    <form action="/properties" className="grid gap-4 border border-ink/12 bg-paper p-5">
      <Field name="search" label="Search" placeholder="Name, ID, location" defaults={defaults} />
      <Field name="city" label="City" placeholder="Lagos" defaults={defaults} />
      <Field name="state" label="State" placeholder="Lagos" defaults={defaults} />
      <Select name="type" label="Property Type" defaults={defaults} options={["Residential", "Land", "Commercial", "Apartment", "Luxury Home", "Development", "Investment"]} />
      <Select name="status" label="Status" defaults={defaults} options={["Available", "New Listing", "Featured", "Reserved", "Sold", "Coming Soon", "Off Plan", "Under Construction", "Price Reduced"]} />
      <Select name="bedrooms" label="Bedrooms" defaults={defaults} options={["1", "2", "3", "4", "5"]} suffix="+" />
      <Select name="bathrooms" label="Bathrooms" defaults={defaults} options={["1", "2", "3", "4", "5"]} suffix="+" />
      <Field name="maxPrice" label="Max Price" placeholder="250000000" defaults={defaults} />
      <Select name="sort" label="Sort" defaults={defaults} options={["newest", "price-low", "price-high", "featured"]} labels={["Newest", "Price Low to High", "Price High to Low", "Featured"]} />
      <button className="bg-ink px-4 py-3 font-semibold text-ivory transition hover:bg-gold hover:text-ink">Apply Filters</button>
    </form>
  );
}

function Field({ name, label, placeholder, defaults }: { name: string; label: string; placeholder: string; defaults: Record<string, string | undefined> }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-ink">
      {label}
      <input name={name} defaultValue={defaults[name] || ""} placeholder={placeholder} className="h-12 border border-ink/15 bg-white px-3 font-normal focus-ring" />
    </label>
  );
}

function Select({ name, label, options, defaults, suffix = "", labels }: { name: string; label: string; options: string[]; defaults: Record<string, string | undefined>; suffix?: string; labels?: string[] }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-ink">
      {label}
      <select name={name} defaultValue={defaults[name] || ""} className="h-12 border border-ink/15 bg-white px-3 font-normal focus-ring">
        <option value="">Any</option>
        {options.map((option, index) => <option key={option} value={option}>{labels?.[index] || `${option}${suffix}`}</option>)}
      </select>
    </label>
  );
}
