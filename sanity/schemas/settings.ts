import { defineField, defineType } from "sanity";
import { contactFields } from "@/sanity/schemas/objects";

export const settings = defineType({
  name: "settings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "companyName", title: "Company Name", type: "string", initialValue: "Metro Properties" }),
    defineField({ name: "description", title: "Company Description", type: "text", rows: 3 }),
    ...contactFields,
    defineField({ name: "officeAddress", title: "Office Address", type: "text", rows: 3 }),
    defineField({ name: "businessHours", title: "Business Hours", type: "string" }),
    defineField({ name: "socialMedia", title: "Social Media", type: "array", of: [{ type: "object", fields: [defineField({ name: "platform", type: "string" }), defineField({ name: "url", type: "url" })] }] })
  ]
});
