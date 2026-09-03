"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Property } from "@/lib/types";
import { formatPrice } from "@/lib/format";

const savedKey = "metro.saved.properties";
const compareKey = "metro.compare.properties";

export function AddToCompare({ property }: { property: Property }) {
  const [added, setAdded] = useState(false);
  useEffect(() => {
    const current = JSON.parse(localStorage.getItem(compareKey) || "[]") as string[];
    setAdded(current.includes(property.slug));
  }, [property.slug]);

  function toggle() {
    const current = JSON.parse(localStorage.getItem(compareKey) || "[]") as string[];
    const next = current.includes(property.slug) ? current.filter((item) => item !== property.slug) : [...current, property.slug].slice(-4);
    localStorage.setItem(compareKey, JSON.stringify(next));
    localStorage.setItem(`metro.property.${property.slug}`, JSON.stringify(property));
    setAdded(next.includes(property.slug));
  }

  return <button onClick={toggle} className="border border-ink/15 px-5 py-3 font-semibold transition hover:border-gold">{added ? "Remove Compare" : "Compare"}</button>;
}

export function SavedCompareView() {
  const [items, setItems] = useState<Property[]>([]);
  const [mode, setMode] = useState<"saved" | "compare">("saved");

  useEffect(() => {
    const key = mode === "saved" ? savedKey : compareKey;
    const slugs = JSON.parse(localStorage.getItem(key) || "[]") as string[];
    setItems(slugs.map((slug) => JSON.parse(localStorage.getItem(`metro.property.${slug}`) || "null")).filter(Boolean));
  }, [mode]);

  const amenities = useMemo(() => Array.from(new Set(items.flatMap((item) => item.amenities || []))).slice(0, 8), [items]);

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="mb-8 flex gap-2">
        <button onClick={() => setMode("saved")} className={mode === "saved" ? "bg-ink px-5 py-3 text-ivory" : "border border-ink/15 px-5 py-3"}>Saved Properties</button>
        <button onClick={() => setMode("compare")} className={mode === "compare" ? "bg-ink px-5 py-3 text-ivory" : "border border-ink/15 px-5 py-3"}>Compare</button>
      </div>
      {items.length === 0 ? (
        <div className="border border-ink/12 bg-paper p-8">
          <h1 className="font-heading text-4xl font-semibold">No properties saved yet.</h1>
          <Link href="/properties" className="mt-6 inline-block bg-gold px-5 py-3 font-semibold text-ink">Explore Properties</Link>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-[760px] w-full border-collapse text-left">
            <thead><tr><th className="border-b border-ink/15 p-4 text-sm uppercase tracking-[0.14em] text-ink/45">Compare</th>{items.map((item) => <th key={item.slug} className="border-b border-ink/15 p-4 font-heading text-xl"><Link href={`/properties/${item.slug}`}>{item.title}</Link></th>)}</tr></thead>
            <tbody>
              <Row label="Price" values={items.map((item) => formatPrice(item.price, item.currency, item.priceLabel))} />
              <Row label="Location" values={items.map((item) => [item.location.name, item.location.city].filter(Boolean).join(", "))} />
              <Row label="Bedrooms" values={items.map((item) => String(item.bedrooms || "-"))} />
              <Row label="Bathrooms" values={items.map((item) => String(item.bathrooms || "-"))} />
              <Row label="Property Size" values={items.map((item) => item.propertySize || "-")} />
              <Row label="Land Size" values={items.map((item) => item.landSize || "-")} />
              <Row label="Status" values={items.map((item) => item.status)} />
              {amenities.map((amenity) => <Row key={amenity} label={amenity} values={items.map((item) => item.amenities?.includes(amenity) ? "Yes" : "-")} />)}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

function Row({ label, values }: { label: string; values: string[] }) {
  return <tr><th className="border-b border-ink/10 bg-paper p-4 text-sm uppercase tracking-[0.14em] text-ink/55">{label}</th>{values.map((value, index) => <td key={index} className="border-b border-ink/10 p-4">{value}</td>)}</tr>;
}
