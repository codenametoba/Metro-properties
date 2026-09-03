"use client";

import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import type { Property } from "@/lib/types";

const key = "metro.saved.properties";

export function SavePropertyButton({ property }: { property: Property }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const current = JSON.parse(localStorage.getItem(key) || "[]") as string[];
    setSaved(current.includes(property.slug));
  }, [property.slug]);

  function toggle() {
    const current = JSON.parse(localStorage.getItem(key) || "[]") as string[];
    const next = current.includes(property.slug) ? current.filter((item) => item !== property.slug) : [...current, property.slug];
    localStorage.setItem(key, JSON.stringify(next));
    localStorage.setItem(`metro.property.${property.slug}`, JSON.stringify(property));
    setSaved(next.includes(property.slug));
  }

  return (
    <button onClick={toggle} className="grid h-11 w-11 shrink-0 place-items-center border border-ink/15 transition hover:border-gold focus-ring" aria-label={saved ? "Remove saved property" : "Save property"}>
      <Heart size={18} className={saved ? "fill-gold text-gold" : ""} />
    </button>
  );
}
