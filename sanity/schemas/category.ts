import { defineField, defineType } from "sanity";

export const category = defineType({
  name: "category",
  title: "Property Categories",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Category", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "image", title: "Category Image", type: "image", options: { hotspot: true } })
  ],
  preview: { select: { title: "title", media: "image" } }
});
