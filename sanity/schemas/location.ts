import { defineField, defineType } from "sanity";

export const location = defineType({
  name: "location",
  title: "Locations",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Location Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "neighbourhood", title: "Neighbourhood", type: "string" }),
    defineField({ name: "city", title: "City", type: "string" }),
    defineField({ name: "state", title: "State", type: "string" }),
    defineField({ name: "latitude", title: "Latitude", type: "number" }),
    defineField({ name: "longitude", title: "Longitude", type: "number" }),
    defineField({ name: "mapUrl", title: "Google Maps URL", type: "url" })
  ]
});
