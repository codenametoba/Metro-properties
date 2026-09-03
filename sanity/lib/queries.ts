import { demoDevelopments, demoInsights, demoProperties } from "@/lib/demo-content";
import type { Development, Insight, Property } from "@/lib/types";
import { hasSanityConfig, sanityClient } from "@/sanity/lib/client";
import { useDemoContent } from "@/sanity/env";

const propertyProjection = `{
  _id,
  title,
  "slug": slug.current,
  reference,
  shortDescription,
  description,
  type,
  "category": category->title,
  status,
  featured,
  price,
  currency,
  priceLabel,
  "location": {
    "name": location->title,
    "address": address,
    "neighbourhood": neighbourhood,
    "city": city,
    "state": state,
    "latitude": latitude,
    "longitude": longitude,
    "mapUrl": mapUrl,
    "landmarks": nearbyLandmarks
  },
  bedrooms,
  bathrooms,
  toilets,
  parking,
  propertySize,
  landSize,
  "featuredImage": featuredImage.asset->url,
  "gallery": gallery[].asset->url,
  videoUrl,
  virtualTourUrl,
  amenities[]->{ "title": title }.title,
  features,
  paymentPlans,
  documents[]{ title, "url": file.asset->url },
  agent->{ name, position, phone, whatsapp, email, bio, "photo": photo.asset->url },
  datePublished,
  seoTitle,
  seoDescription
}`;

async function fetchOrDemo<T>(query: string, params: Record<string, unknown>, demo: T): Promise<T> {
  if (!hasSanityConfig && useDemoContent) return demo;
  try {
    return await sanityClient.fetch<T>(query, params, { next: { revalidate: 60 } });
  } catch {
    if (useDemoContent) return demo;
    throw new Error("Sanity is not configured. Add NEXT_PUBLIC_SANITY_PROJECT_ID and dataset values.");
  }
}

export async function getProperties(filters: Record<string, string | undefined> = {}) {
  const query = `*[_type == "property" && !archived] | order(featured desc, datePublished desc) ${propertyProjection}`;
  let items = await fetchOrDemo<Property[]>(query, {}, demoProperties);

  const search = filters.search?.toLowerCase();
  const type = filters.type;
  const status = filters.status;
  const city = filters.city?.toLowerCase();
  const state = filters.state?.toLowerCase();
  const bedrooms = Number(filters.bedrooms || 0);
  const bathrooms = Number(filters.bathrooms || 0);
  const maxPrice = Number(filters.maxPrice || 0);

  if (search) {
    items = items.filter((item) =>
      [item.title, item.reference, item.location.name, item.location.city, item.location.state, item.shortDescription]
        .filter(Boolean)
        .some((value) => value!.toLowerCase().includes(search))
    );
  }
  if (type) items = items.filter((item) => item.type === type || item.category === type);
  if (status) items = items.filter((item) => item.status === status || (status === "Featured" && item.featured));
  if (city) items = items.filter((item) => item.location.city?.toLowerCase().includes(city));
  if (state) items = items.filter((item) => item.location.state?.toLowerCase().includes(state));
  if (bedrooms) items = items.filter((item) => (item.bedrooms || 0) >= bedrooms);
  if (bathrooms) items = items.filter((item) => (item.bathrooms || 0) >= bathrooms);
  if (maxPrice) items = items.filter((item) => item.price && item.price <= maxPrice);

  if (filters.sort === "price-low") items = [...items].sort((a, b) => (a.price || Infinity) - (b.price || Infinity));
  if (filters.sort === "price-high") items = [...items].sort((a, b) => (b.price || 0) - (a.price || 0));
  if (filters.sort === "featured") items = [...items].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));

  return items;
}

export async function getFeaturedProperties() {
  const query = `*[_type == "property" && !archived && featured == true] | order(datePublished desc)[0...6] ${propertyProjection}`;
  return fetchOrDemo<Property[]>(query, {}, demoProperties.filter((item) => item.featured));
}

export async function getLatestProperties() {
  const query = `*[_type == "property" && !archived] | order(datePublished desc)[0...6] ${propertyProjection}`;
  return fetchOrDemo<Property[]>(query, {}, demoProperties);
}

export async function getPropertyBySlug(slug: string) {
  const query = `*[_type == "property" && slug.current == $slug][0] ${propertyProjection}`;
  return fetchOrDemo<Property | null>(query, { slug }, demoProperties.find((item) => item.slug === slug) || null);
}

export async function getSimilarProperties(property: Property) {
  const properties = await getProperties();
  return properties
    .filter((item) => item.slug !== property.slug && (item.type === property.type || item.location.city === property.location.city))
    .slice(0, 3);
}

export async function getDevelopments() {
  const query = `*[_type == "development" && !archived] | order(_createdAt desc) {
    _id, title, "slug": slug.current, summary, status, startingPrice, currency, unitsAvailable,
    "image": image.asset->url, "gallery": gallery[].asset->url,
    "location": {"city": city, "state": state, "landmarks": nearbyLandmarks},
    amenities[]->{ "title": title }.title, paymentPlans, expectedCompletion, developerInfo
  }`;
  return fetchOrDemo<Development[]>(query, {}, demoDevelopments);
}

export async function getDevelopmentBySlug(slug: string) {
  const items = await getDevelopments();
  return items.find((item) => item.slug === slug) || null;
}

export async function getInsights() {
  const query = `*[_type == "post"] | order(publishedAt desc)[0...12] {
    _id, title, "slug": slug.current, category, excerpt, "image": image.asset->url, publishedAt
  }`;
  return fetchOrDemo<Insight[]>(query, {}, demoInsights);
}
