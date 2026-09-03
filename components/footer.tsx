import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.6fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <h2 className="font-heading text-2xl font-semibold">Metro Properties</h2>
          <p className="mt-4 max-w-sm text-sm leading-7 text-ivory/68">
            Property opportunities for buyers, investors, homeowners and businesses, managed through a scalable real estate catalogue.
          </p>
        </div>
        <FooterGroup title="Properties" links={[["Residential", "/properties?type=Residential"], ["Land", "/properties?type=Land"], ["Commercial", "/properties?type=Commercial"], ["Developments", "/developments"]]} />
        <FooterGroup title="Company" links={[["About", "/about"], ["Contact", "/contact"], ["List Your Property", "/list-your-property"], ["Property Request", "/property-request"]]} />
        <FooterGroup title="Contact" links={[["WhatsApp", "#"], ["Email", "mailto:sales@metroproperties.ng"], ["Privacy Policy", "/privacy"], ["Terms", "/terms"]]} />
      </div>
      <div className="border-t border-ivory/10 px-5 py-6 text-center text-xs text-ivory/50">
        Copyright {new Date().getFullYear()} Metro Properties. All rights reserved.
      </div>
    </footer>
  );
}

function FooterGroup({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-gold">{title}</h3>
      <div className="grid gap-3 text-sm text-ivory/70">
        {links.map(([label, href]) => (
          <Link key={label} href={href} className="transition hover:text-ivory">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
