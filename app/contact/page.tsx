import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { ContactForm } from "@/components/inquiry-form";

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-14 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Contact</p>
        <h1 className="mt-4 font-heading text-5xl font-semibold md:text-7xl">Speak with Metro Properties.</h1>
        <div className="mt-10 grid gap-5">
          <ContactLine icon={<Phone />} title="Phone" value="Add Metro Properties phone number" />
          <ContactLine icon={<MessageCircle />} title="WhatsApp" value="Add WhatsApp number in site settings" />
          <ContactLine icon={<Mail />} title="Email" value="sales@metroproperties.ng" />
          <ContactLine icon={<MapPin />} title="Office" value="Office address managed in Sanity CMS" />
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
    </section>
  );
}

function ContactLine({ icon, title, value }: { icon: ReactNode; title: string; value: string }) {
  return <div className="flex gap-4 border-t border-ink/12 pt-5 text-ink/70"><span className="text-gold">{icon}</span><p><strong className="block text-ink">{title}</strong>{value}</p></div>;
}
