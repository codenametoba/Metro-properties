import { Search } from "lucide-react";

export function SearchPanel({ compact = false }: { compact?: boolean }) {
  return (
    <form action="/properties" className={compact ? "grid gap-3" : "grid gap-3 bg-paper p-4 shadow-soft md:grid-cols-5"}>
      <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink/55">
        Location
        <input name="search" placeholder="Lekki, Ikoyi, Abuja..." className="h-12 border border-ink/15 bg-white px-3 text-base normal-case tracking-normal focus-ring" />
      </label>
      <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink/55">
        Property Type
        <select name="type" className="h-12 border border-ink/15 bg-white px-3 text-base normal-case tracking-normal focus-ring">
          <option value="">Any Type</option>
          <option>Residential</option>
          <option>Land</option>
          <option>Commercial</option>
          <option>Apartment</option>
          <option>Luxury Home</option>
          <option>Investment</option>
        </select>
      </label>
      <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink/55">
        Price Range
        <select name="maxPrice" className="h-12 border border-ink/15 bg-white px-3 text-base normal-case tracking-normal focus-ring">
          <option value="">Any Budget</option>
          <option value="50000000">Under ₦50M</option>
          <option value="100000000">Under ₦100M</option>
          <option value="250000000">Under ₦250M</option>
          <option value="500000000">Under ₦500M</option>
        </select>
      </label>
      <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink/55">
        Bedrooms
        <select name="bedrooms" className="h-12 border border-ink/15 bg-white px-3 text-base normal-case tracking-normal focus-ring">
          <option value="">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
      </label>
      <button className="mt-auto inline-flex h-12 items-center justify-center gap-2 bg-gold px-5 font-semibold text-ink transition hover:bg-ink hover:text-ivory focus-ring">
        <Search size={18} /> Search Properties
      </button>
    </form>
  );
}
