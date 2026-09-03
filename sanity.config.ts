import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { schemaTypes } from "@/sanity/schemas";
import { deskStructure } from "@/sanity/deskStructure";

export default defineConfig({
  name: "metro-properties",
  title: "Metro Properties CMS",
  projectId: projectId || "replace-with-project-id",
  dataset,
  apiVersion,
  basePath: "/studio",
  plugins: [structureTool({ structure: deskStructure }), visionTool()],
  schema: { types: schemaTypes }
});
