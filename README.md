# Metro Properties

Premium real estate website for Metro Properties, built with Next.js, TypeScript, Tailwind CSS, Framer Motion, Lucide icons, and Sanity CMS.

## Local Development

```bash
npm install
npm run dev
```

Open:

- Website: `http://localhost:3000`
- Sanity Studio: `http://localhost:3000/studio`

## Required Environment Variables

Public website/CMS values:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=t7hoictb
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_USE_DEMO_CONTENT=true
NEXT_PUBLIC_METRO_PHONE=
NEXT_PUBLIC_METRO_WHATSAPP=
```

Optional private value for saving website form submissions into Sanity:

```env
SANITY_API_WRITE_TOKEN=
```

Use `NEXT_PUBLIC_USE_DEMO_CONTENT=true` while the Sanity dataset is empty. After real content is published in Sanity, change it to `false`.

## Client CMS Guide

See [docs/sanity-client-guide.md](docs/sanity-client-guide.md) for step-by-step content entry guidance, examples, and launch checks.
