import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "@/sanity/lib/client";

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: unknown) {
  return builder.image(source as never);
}
