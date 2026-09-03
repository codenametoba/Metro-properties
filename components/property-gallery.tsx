"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import { useState } from "react";

export function PropertyGallery({ title, images }: { title: string; images: string[] }) {
  const [index, setIndex] = useState(0);
  const [full, setFull] = useState(false);
  const current = images[index] || images[0];

  function move(delta: number) {
    setIndex((value) => (value + delta + images.length) % images.length);
  }

  return (
    <section className="grid gap-3 lg:grid-cols-[1.6fr_0.8fr]">
      <button onClick={() => setFull(true)} className="relative aspect-[4/3] overflow-hidden bg-stone text-left focus-ring lg:aspect-[16/10]">
        {current && <Image src={current} alt={title} fill priority className="object-cover" sizes="100vw" />}
        <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 bg-ink/82 px-4 py-2 text-sm font-semibold text-ivory"><Images size={17} /> {index + 1} / {images.length}</span>
      </button>
      <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
        {images.slice(1, 4).map((image, itemIndex) => (
          <button key={image} onClick={() => setIndex(itemIndex + 1)} className="relative aspect-square overflow-hidden bg-stone focus-ring lg:aspect-[16/10]">
            <Image src={image} alt={`${title} gallery ${itemIndex + 2}`} fill className="object-cover" sizes="30vw" />
          </button>
        ))}
      </div>

      {full && (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-ink">
          <button className="absolute right-5 top-5 grid h-12 w-12 place-items-center border border-ivory/20 text-ivory" onClick={() => setFull(false)} aria-label="Close gallery"><X /></button>
          <button className="absolute left-4 grid h-12 w-12 place-items-center border border-ivory/20 text-ivory" onClick={() => move(-1)} aria-label="Previous image"><ChevronLeft /></button>
          <div className="relative h-[78vh] w-[86vw]">
            {current && <Image src={current} alt={title} fill className="object-contain" sizes="100vw" />}
          </div>
          <button className="absolute right-4 grid h-12 w-12 place-items-center border border-ivory/20 text-ivory" onClick={() => move(1)} aria-label="Next image"><ChevronRight /></button>
          <p className="absolute bottom-6 text-sm text-ivory/72">{index + 1} of {images.length}</p>
        </div>
      )}
    </section>
  );
}
