import type { MetadataRoute } from "next";
import { getDevelopments, getProperties } from "@/sanity/lib/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const [properties, developments] = await Promise.all([getProperties(), getDevelopments()]);
  return [
    "", "/properties", "/developments", "/about", "/contact", "/list-your-property", "/property-request", "/insights"
  ].map((path) => ({ url: `${base}${path}` })).concat(
    properties.map((item) => ({ url: `${base}/properties/${item.slug}` })),
    developments.map((item) => ({ url: `${base}/developments/${item.slug}` }))
  );
}
