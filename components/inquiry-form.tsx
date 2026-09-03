"use client";

import { useState } from "react";
import { CalendarCheck, X } from "lucide-react";

export function InspectionDialog({ propertyTitle, reference, sold }: { propertyTitle?: string; reference?: string; sold?: boolean }) {
  const [open, setOpen] = useState(false);

  if (sold) {
    return <button disabled className="bg-ink/20 px-5 py-3 font-semibold text-ink/45">Inspection Unavailable</button>;
  }

  return (
    <>
      <button onClick={() => setOpen(true)} className="inline-flex items-center justify-center gap-2 bg-gold px-5 py-3 font-semibold text-ink transition hover:bg-ink hover:text-ivory focus-ring">
        <CalendarCheck size={18} /> Book Inspection
      </button>
      {open && (
        <div className="fixed inset-0 z-[60] grid place-items-end bg-ink/50 md:place-items-center">
          <form action="/api/leads" method="post" className="grid max-h-[92vh] w-full gap-4 overflow-y-auto bg-ivory p-5 md:max-w-xl md:p-8">
            <input type="hidden" name="leadType" value="Inspection" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-heading text-3xl font-semibold">Book an Inspection</h2>
                {propertyTitle && <p className="mt-2 text-sm text-ink/60">{propertyTitle} / {reference}</p>}
              </div>
              <button type="button" onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center border border-ink/15" aria-label="Close form"><X size={18} /></button>
            </div>
            <FormGrid propertyTitle={propertyTitle} reference={reference} />
            <button className="bg-ink px-5 py-3 font-semibold text-ivory">Send Inspection Request</button>
          </form>
        </div>
      )}
    </>
  );
}

export function ContactForm({ propertyTitle, reference, request = false, listing = false }: { propertyTitle?: string; reference?: string; request?: boolean; listing?: boolean }) {
  return (
    <form action="/api/leads" method="post" encType="multipart/form-data" className="grid gap-4 border border-ink/12 bg-paper p-5 md:p-8">
      <input type="hidden" name="leadType" value={listing ? "List Property" : request ? "Property Request" : "Inquiry"} />
      <FormGrid propertyTitle={propertyTitle} reference={reference} request={request} listing={listing} />
      <button className="bg-ink px-5 py-3 font-semibold text-ivory transition hover:bg-gold hover:text-ink">Send Inquiry</button>
    </form>
  );
}

function FormGrid({ propertyTitle, reference, request, listing }: { propertyTitle?: string; reference?: string; request?: boolean; listing?: boolean }) {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        <Input label="Full Name" name="name" />
        <Input label="Phone Number" name="phone" />
        <Input label="Email" name="email" type="email" />
        <Input label="Preferred Date" name="preferredDate" type="date" />
        <Input label="Preferred Time" name="preferredTime" type="time" />
        {request || listing ? <Input label={listing ? "Expected Price" : "Budget"} name={listing ? "expectedPrice" : "budget"} /> : <Input label="Property" name="property" defaultValue={[propertyTitle, reference].filter(Boolean).join(" / ")} />}
      </div>
      {listing && (
        <div className="grid gap-4">
          <Input label="Property Type" name="propertyType" />
          <Input label="Property Location" name="propertyLocation" />
          <label className="grid gap-2 text-sm font-semibold">
            Upload Photos
            <input name="photos" type="file" multiple accept="image/*" className="border border-ink/15 bg-white p-3 font-normal focus-ring" />
          </label>
        </div>
      )}
      {request && (
        <div className="grid gap-4 md:grid-cols-2">
          <Input label="Preferred Type" name="type" />
          <Input label="Location" name="location" />
          <Input label="Bedrooms" name="bedrooms" />
          <Input label="Purpose" name="purpose" placeholder="Buy / Rent / Invest" />
          <Input label="Timeline" name="timeline" />
        </div>
      )}
      <label className="grid gap-2 text-sm font-semibold">
        Message
        <textarea name="message" rows={5} className="border border-ink/15 bg-white p-3 font-normal focus-ring" />
      </label>
    </>
  );
}

function Input({ label, name, type = "text", defaultValue = "", placeholder = "" }: { label: string; name: string; type?: string; defaultValue?: string; placeholder?: string }) {
  return (
    <label className="grid gap-2 text-sm font-semibold">
      {label}
      <input name={name} type={type} defaultValue={defaultValue} placeholder={placeholder} className="h-12 border border-ink/15 bg-white px-3 font-normal focus-ring" />
    </label>
  );
}
