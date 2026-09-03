import type { StructureResolver } from "sanity/structure";

const hiddenTypes = new Set(["homepage", "settings", "lead", "media.tag", "contentBlock"]);

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title("Metro Properties")
    .items([
      S.listItem()
        .title("Property Catalogue")
        .child(
          S.list()
            .title("Property Catalogue")
            .items([
              S.documentTypeListItem("property").title("All Properties"),
              S.listItem()
                .title("Featured Properties")
                .child(S.documentList().title("Featured Properties").filter('_type == "property" && featured == true')),
              S.listItem()
                .title("Available Properties")
                .child(S.documentList().title("Available Properties").filter('_type == "property" && status in ["Available", "New Listing", "Featured", "Price Reduced"] && archived != true')),
              S.listItem()
                .title("Sold / Reserved")
                .child(S.documentList().title("Sold / Reserved").filter('_type == "property" && status in ["Sold", "Reserved"]')),
              S.listItem()
                .title("Archived Properties")
                .child(S.documentList().title("Archived Properties").filter('_type == "property" && archived == true'))
            ])
        ),
      S.documentTypeListItem("development").title("Developments"),
      S.divider(),
      S.listItem()
        .title("Website Leads")
        .child(S.documentList().title("Website Leads").filter('_type == "lead"').defaultOrdering([{ field: "createdAt", direction: "desc" }])),
      S.divider(),
      S.documentTypeListItem("location").title("Locations"),
      S.documentTypeListItem("category").title("Property Categories"),
      S.documentTypeListItem("amenity").title("Amenities"),
      S.documentTypeListItem("agent").title("Agents"),
      S.divider(),
      S.documentTypeListItem("post").title("Blog / Insights"),
      S.documentTypeListItem("faq").title("FAQs"),
      S.documentTypeListItem("testimonial").title("Testimonials"),
      S.divider(),
      S.listItem().title("Homepage Content").child(S.document().schemaType("homepage").documentId("homepage")),
      S.listItem().title("Site Settings").child(S.document().schemaType("settings").documentId("siteSettings")),
      ...S.documentTypeListItems().filter((item) => !hiddenTypes.has(item.getId() || ""))
    ]);
