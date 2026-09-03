import { agent } from "@/sanity/schemas/agent";
import { amenity } from "@/sanity/schemas/amenity";
import { category } from "@/sanity/schemas/category";
import { development } from "@/sanity/schemas/development";
import { faq } from "@/sanity/schemas/faq";
import { homepage } from "@/sanity/schemas/homepage";
import { location } from "@/sanity/schemas/location";
import { post } from "@/sanity/schemas/post";
import { property } from "@/sanity/schemas/property";
import { settings } from "@/sanity/schemas/settings";
import { testimonial } from "@/sanity/schemas/testimonial";
import { contentBlock } from "@/sanity/schemas/objects";
import { lead } from "@/sanity/schemas/lead";

export const schemaTypes = [
  contentBlock,
  property,
  development,
  location,
  category,
  amenity,
  agent,
  lead,
  testimonial,
  homepage,
  settings,
  faq,
  post
];
