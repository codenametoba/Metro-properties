import { defineField, defineType } from "sanity";
import { contactFields } from "@/sanity/schemas/objects";

export const agent = defineType({
  name: "agent",
  title: "Agents",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "photo", title: "Photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "position", title: "Position", type: "string" }),
    ...contactFields,
    defineField({ name: "bio", title: "Biography", type: "text", rows: 4 })
  ],
  preview: { select: { title: "name", subtitle: "position", media: "photo" } }
});
