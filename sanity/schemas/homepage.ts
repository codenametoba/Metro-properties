import { defineField, defineType } from "sanity";

export const homepage = defineType({
  name: "homepage",
  title: "Homepage Content",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Hero Title", type: "string" }),
    defineField({ name: "subtitle", title: "Hero Subtitle", type: "text", rows: 3 }),
    defineField({ name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "featuredProperties", title: "Featured Listings", type: "array", of: [{ type: "reference", to: [{ type: "property" }] }] }),
    defineField({ name: "featuredDevelopments", title: "Featured Developments", type: "array", of: [{ type: "reference", to: [{ type: "development" }] }] })
  ]
});
