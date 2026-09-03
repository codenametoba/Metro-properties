import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({ name: "clientName", title: "Client Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "photo", title: "Photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "testimonial", title: "Testimonial", type: "text", rows: 5 }),
    defineField({ name: "propertyType", title: "Property Type", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "published", title: "Show on website", type: "boolean", initialValue: false })
  ],
  preview: { select: { title: "clientName", subtitle: "location", media: "photo" } }
});
