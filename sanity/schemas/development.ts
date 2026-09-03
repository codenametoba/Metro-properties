import { defineField, defineType } from "sanity";
import { paymentPlanField, seoFields } from "@/sanity/schemas/objects";

export const development = defineType({
  name: "development",
  title: "Developments",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Development Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    defineField({ name: "summary", title: "Overview", type: "text", rows: 5 }),
    defineField({ name: "status", title: "Construction Status", type: "string", options: { list: ["New Development", "Off Plan", "Under Construction", "Completed", "Upcoming"] } }),
    defineField({ name: "archived", title: "Archive development", type: "boolean", initialValue: false }),
    defineField({ name: "startingPrice", title: "Starting Price", type: "number" }),
    defineField({ name: "currency", title: "Currency", type: "string", initialValue: "NGN" }),
    defineField({ name: "unitsAvailable", title: "Property Units Available", type: "number" }),
    defineField({ name: "city", title: "City", type: "string" }),
    defineField({ name: "state", title: "State", type: "string" }),
    defineField({ name: "mapUrl", title: "Map URL", type: "url" }),
    defineField({ name: "image", title: "Cover Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "gallery", title: "Gallery", type: "array", of: [{ type: "image", options: { hotspot: true } }] }),
    defineField({ name: "masterplan", title: "Masterplan", type: "image", options: { hotspot: true } }),
    defineField({ name: "availablePropertyTypes", title: "Available Property Types", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "amenities", title: "Amenities", type: "array", of: [{ type: "reference", to: [{ type: "amenity" }] }] }),
    paymentPlanField,
    defineField({ name: "expectedCompletion", title: "Expected Completion", type: "string" }),
    defineField({ name: "developerInfo", title: "Developer Information", type: "text", rows: 4 }),
    defineField({ name: "brochure", title: "Brochure", type: "file" }),
    defineField({ name: "nearbyLandmarks", title: "Nearby Landmarks", type: "array", of: [{ type: "string" }] }),
    ...seoFields
  ],
  preview: { select: { title: "title", subtitle: "status", media: "image" } }
});
