import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";

export const hasWriteConfig = Boolean(projectId && dataset && process.env.SANITY_API_WRITE_TOKEN);

export const sanityWriteClient = createClient({
  projectId: projectId || "demo",
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN
});
