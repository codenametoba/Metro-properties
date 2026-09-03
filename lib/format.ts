export function formatPrice(value?: number, currency = "NGN", label?: string) {
  if (label) return label;
  if (!value) return "Price on request";

  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
    maximumFractionDigits: 0
  }).format(value);
}

export function buildWhatsAppUrl(phone: string | undefined, title: string, reference: string) {
  const fallback = process.env.NEXT_PUBLIC_METRO_WHATSAPP || "";
  const target = (phone || fallback).replace(/\D/g, "");
  const message = `Hello Metro Properties, I am interested in ${title} / ${reference}. Please send me more information.`;
  return target ? `https://wa.me/${target}?text=${encodeURIComponent(message)}` : `#contact`;
}

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
