import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await request.formData();
  return NextResponse.redirect(new URL("/thank-you", request.url), 303);
}
