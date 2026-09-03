import { NextRequest, NextResponse } from "next/server";
import { hasWriteConfig, sanityWriteClient } from "@/sanity/lib/writeClient";

export async function POST(request: NextRequest) {
  const form = await request.formData();

  if (hasWriteConfig) {
    const uploadedPhotos = [];
    const photos = form.getAll("photos").filter((item): item is File => item instanceof File && item.size > 0);

    for (const photo of photos.slice(0, 8)) {
      const asset = await sanityWriteClient.assets.upload("image", photo, {
        filename: photo.name
      });
      uploadedPhotos.push({
        _type: "image",
        asset: { _type: "reference", _ref: asset._id }
      });
    }

    await sanityWriteClient.create({
      _type: "lead",
      leadType: value(form, "leadType") || "Inquiry",
      name: value(form, "name"),
      phone: value(form, "phone"),
      email: value(form, "email"),
      property: value(form, "property"),
      preferredDate: value(form, "preferredDate"),
      preferredTime: value(form, "preferredTime"),
      budget: value(form, "budget"),
      expectedPrice: value(form, "expectedPrice"),
      propertyType: value(form, "propertyType") || value(form, "type"),
      propertyLocation: value(form, "propertyLocation"),
      location: value(form, "location"),
      bedrooms: value(form, "bedrooms"),
      purpose: value(form, "purpose"),
      timeline: value(form, "timeline"),
      message: value(form, "message"),
      uploadedPhotos,
      sourceUrl: request.headers.get("referer") || request.nextUrl.origin,
      createdAt: new Date().toISOString(),
      status: "New"
    });
  }

  return NextResponse.redirect(new URL("/thank-you", request.url), 303);
}

function value(form: FormData, key: string) {
  const entry = form.get(key);
  return typeof entry === "string" && entry.trim() ? entry.trim() : undefined;
}
