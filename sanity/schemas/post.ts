import { defineField, defineType } from "sanity";
import { contentBlock, seoFields } from "@/sanity/schemas/objects";

export const post = defineType({
  name: "post",
  title: "Blog / Insights",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    defineField({ name: "category", title: "Category", type: "string", options: { list: ["Buying Property", "Real Estate Investment", "Land", "Property Guides", "Neighbourhood Guides", "Market Insights"] } }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3 }),
    defineField({ name: "image", title: "Featured Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "publishedAt", title: "Published At", type: "datetime" }),
    defineField({ name: "body", title: "Article Body", type: "contentBlock" }),
    ...seoFields
  ],
  preview: { select: { title: "title", subtitle: "category", media: "image" } }
});
