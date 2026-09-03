import { defineField, defineType } from "sanity";

export const amenity = defineType({
  name: "amenity",
  title: "Amenities",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Amenity", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "category", title: "Category", type: "string" })
  ]
});
