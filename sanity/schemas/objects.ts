import { defineField, defineType } from "sanity";

export const paymentPlanField = defineField({
  name: "paymentPlans",
  title: "Payment Plans",
  type: "array",
  of: [
    {
      type: "object",
      fields: [
        defineField({ name: "title", title: "Plan Name", type: "string", validation: (Rule) => Rule.required() }),
        defineField({ name: "amount", title: "Amount", type: "number" }),
        defineField({ name: "schedule", title: "Schedule", type: "string", description: "Example: Monthly, On allocation, 6-month plan" }),
        defineField({ name: "notes", title: "Notes", type: "text", rows: 3 })
      ]
    }
  ]
});

export const seoFields = [
  defineField({ name: "seoTitle", title: "SEO Title", type: "string" }),
  defineField({ name: "seoDescription", title: "SEO Description", type: "text", rows: 3 })
];

export const contactFields = [
  defineField({ name: "phone", title: "Phone", type: "string" }),
  defineField({ name: "whatsapp", title: "WhatsApp", type: "string" }),
  defineField({ name: "email", title: "Email", type: "string" })
];

export const contentBlock = defineType({
  name: "contentBlock",
  title: "Content Block",
  type: "array",
  of: [{ type: "block" }, { type: "image", options: { hotspot: true } }]
});
