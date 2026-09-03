"use client";

import Link from "next/link";
import { useState } from "react";
import { CalendarCheck, Menu, Phone, Search, X } from "lucide-react";

const links = [
  ["Home", "/"],
  ["Properties", "/properties"],
  ["Land", "/properties?type=Land"],
  ["Residential", "/properties?type=Residential"],
  ["Commercial", "/properties?type=Commercial"],
  ["Developments", "/developments"],
  ["About", "/about"],
  ["Contact", "/contact"]
];

export function Header() {
  const [open, setOpen] = useState(false);
  const phone = process.env.NEXT_PUBLIC_METRO_PHONE || "";
  const whatsapp = process.env.NEXT_PUBLIC_METRO_WHATSAPP || "";

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-ivory/92 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="group flex items-center gap-3 focus-ring">
          <span>
            <span className="block font-heading text-lg font-semibold tracking-wide text-ink">Metro Properties</span>
            <span className="block text-xs uppercase tracking-[0.24em] text-ink/55">Real Estate Advisory</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-ink/72 lg:flex">
          {links.map(([label, href]) => (
            <Link key={label} href={href} className="transition hover:text-ink focus-ring">
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/properties" aria-label="Search properties" className="grid h-11 w-11 place-items-center border border-ink/15 transition hover:border-gold focus-ring">
            <Search size={18} />
          </Link>
          <Link href="/contact?inquiry=inspection" className="inline-flex items-center gap-2 bg-gold px-5 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-ivory focus-ring">
            <CalendarCheck size={17} /> Book an Inspection
          </Link>
        </div>

        <button className="grid h-11 w-11 place-items-center border border-ink/15 lg:hidden focus-ring" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu size={22} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-ink text-ivory lg:hidden">
          <div className="flex h-20 items-center justify-between border-b border-ivory/10 px-5">
            <span className="font-heading text-xl font-semibold">Metro Properties</span>
            <button className="grid h-11 w-11 place-items-center border border-ivory/20 focus-ring" onClick={() => setOpen(false)} aria-label="Close menu">
              <X />
            </button>
          </div>
          <nav className="grid gap-1 px-5 py-8">
            {links.map(([label, href]) => (
              <Link key={label} href={href} onClick={() => setOpen(false)} className="border-b border-ivory/10 py-4 font-heading text-3xl">
                {label}
              </Link>
            ))}
          </nav>
          <div className="fixed bottom-0 grid w-full grid-cols-3 border-t border-ivory/10 bg-ink">
            <Link href={whatsapp ? `https://wa.me/${whatsapp.replace(/\D/g, "")}` : "/contact"} className="p-4 text-center text-sm">WhatsApp</Link>
            <Link href={phone ? `tel:${phone}` : "/contact"} className="flex items-center justify-center gap-2 p-4 text-sm"><Phone size={16} /> Call</Link>
            <Link href="/contact?inquiry=inspection" className="bg-gold p-4 text-center text-sm font-semibold text-ink">Book Inspection</Link>
          </div>
        </div>
      )}
    </header>
  );
}
