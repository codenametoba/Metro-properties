import Image from "next/image";
import Link from "next/link";
import { Bath, BedDouble, MapPin, Maximize2 } from "lucide-react";
import type { Property } from "@/lib/types";
import { formatPrice } from "@/lib/format";
import { SavePropertyButton } from "@/components/save-property-button";

export function PropertyCard({ property, priority = false }: { property: Property; priority?: boolean }) {
  return (
    <article className="group border-t border-ink/12 pt-5">
      <Link href={`/properties/${property.slug}`} className="block focus-ring">
        <div className="relative aspect-[4/3] overflow-hidden bg-stone">
          {property.featuredImage && (
            <Image src={property.featuredImage} alt={property.title} fill priority={priority} className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 100vw" />
          )}
          <div className="absolute left-4 top-4 bg-ink/86 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ivory">{property.status}</div>
        </div>
      </Link>
      <div className="flex items-start justify-between gap-4 pt-5">
        <div>
          <p className="mb-2 flex items-center gap-1 text-sm text-ink/55"><MapPin size={15} /> {[property.location.name, property.location.city, property.location.state].filter(Boolean).join(", ")}</p>
          <Link href={`/properties/${property.slug}`} className="font-heading text-2xl font-semibold leading-tight text-ink transition hover:text-gold focus-ring">
            {property.title}
          </Link>
          <p className="mt-3 text-xl font-semibold text-gold">{formatPrice(property.price, property.currency, property.priceLabel)}</p>
        </div>
        <SavePropertyButton property={property} />
      </div>
      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-ink/10 pt-4 text-sm text-ink/65">
        {property.bedrooms ? <span className="inline-flex items-center gap-1"><BedDouble size={16} /> {property.bedrooms} Beds</span> : null}
        {property.bathrooms ? <span className="inline-flex items-center gap-1"><Bath size={16} /> {property.bathrooms} Baths</span> : null}
        {property.propertySize || property.landSize ? <span className="inline-flex items-center gap-1"><Maximize2 size={16} /> {property.propertySize || property.landSize}</span> : null}
      </div>
    </article>
  );
}
