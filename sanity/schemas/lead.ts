import { defineField, defineType } from "sanity";

export const lead = defineType({
  name: "lead",
  title: "Leads",
  type: "document",
  readOnly: true,
  fields: [
    defineField({
      name: "leadType",
      title: "Lead Type",
      type: "string",
      options: {
        list: ["Inquiry", "Inspection", "Property Request", "List Property"]
      }
    }),
    defineField({ name: "name", title: "Full Name", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "property", title: "Property / Reference", type: "string" }),
    defineField({ name: "preferredDate", title: "Preferred Date", type: "date" }),
    defineField({ name: "preferredTime", title: "Preferred Time", type: "string" }),
    defineField({ name: "budget", title: "Budget", type: "string" }),
    defineField({ name: "expectedPrice", title: "Expected Price", type: "string" }),
    defineField({ name: "propertyType", title: "Property Type", type: "string" }),
    defineField({ name: "propertyLocation", title: "Property Location", type: "string" }),
    defineField({ name: "location", title: "Preferred Location", type: "string" }),
    defineField({ name: "bedrooms", title: "Bedrooms", type: "string" }),
    defineField({ name: "purpose", title: "Purpose", type: "string" }),
    defineField({ name: "timeline", title: "Timeline", type: "string" }),
    defineField({ name: "message", title: "Message", type: "text", rows: 5 }),
    defineField({
      name: "uploadedPhotos",
      title: "Uploaded Photos",
      type: "array",
      of: [{ type: "image" }]
    }),
    defineField({ name: "sourceUrl", title: "Source Page", type: "url" }),
    defineField({ name: "createdAt", title: "Created At", type: "datetime" }),
    defineField({
      name: "status",
      title: "Follow-up Status",
      type: "string",
      initialValue: "New",
      options: { list: ["New", "Contacted", "Inspection Booked", "Closed", "Archived"] }
    })
  ],
  preview: {
    select: { title: "name", subtitle: "leadType" },
    prepare({ title, subtitle }) {
      return {
        title: title || "Unnamed lead",
        subtitle: subtitle || "Website lead"
      };
    }
  }
});
