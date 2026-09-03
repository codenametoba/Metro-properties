# Metro Properties Sanity CMS Guide

This guide is for Metro Properties staff managing the website catalogue and content.

## What Sanity Controls

Metro Properties can manage these areas without changing website code:

- Properties
- Developments and estates
- Locations
- Property categories
- Amenities
- Agents
- Website leads
- Blog / Insights
- FAQs
- Testimonials
- Homepage content
- Site settings and contact details

## First-Time Setup

1. Open Sanity Manage: `https://www.sanity.io/manage`
2. Open project ID `t7hoictb`.
3. Confirm the dataset is named `production`.
4. Add CORS origins:
   - `http://localhost:3000`
   - the Vercel production domain
5. Open Studio:
   - Local: `http://localhost:3000/studio`
   - Live: `https://your-domain.vercel.app/studio`

## Recommended Content Order

Add content in this order so properties are easy to create:

1. Site Settings
2. Amenities
3. Property Categories
4. Locations
5. Agents
6. Properties
7. Developments
8. FAQs and Insights
9. Testimonials when real testimonials are available

## Site Settings

Use this for company-wide details.

Example:

```text
Company Name: Metro Properties
Description: Residential, land, commercial and investment property opportunities.
Phone: +234...
WhatsApp: +234...
Email: sales@metroproperties.ng
Office Address: Add official office address
Business Hours: Monday to Friday, 9:00 AM - 5:00 PM
```

Phone and WhatsApp numbers should include the country code. For WhatsApp, avoid spaces if possible.

## Amenities

Create amenities once, then reuse them on properties and developments.

Recommended starting list:

- Swimming Pool
- Security
- CCTV
- 24-Hour Electricity
- Parking
- Gym
- Elevator
- Smart Home
- Water Supply
- Gated Estate
- Playground
- Balcony
- Fitted Kitchen
- Air Conditioning
- BQ
- Generator
- Solar Power
- Road Access

## Property Categories

Create categories that help visitors browse.

Recommended starting list:

- Residential
- Land
- Commercial
- Apartments
- Luxury Homes
- Off-Plan Developments
- Investment Properties

Each category should have:

- Clear title
- Short description
- Strong category image

## Locations

Use saved locations for areas Metro Properties lists frequently.

Example:

```text
Location Name: Lekki Phase 1
Neighbourhood: Lekki
City: Lagos
State: Lagos
Latitude: optional
Longitude: optional
Google Maps URL: optional
```

For property pages, still add the specific address or nearby landmarks on the property itself when available.

## Agents

Agents are optional. If no specific agent is assigned, the listing can use the general Metro advisory team.

Example:

```text
Name: Metro Advisory Team
Position: Property Advisor
Phone: +234...
WhatsApp: +234...
Email: sales@metroproperties.ng
Biography: Brief professional bio.
```

## Properties

Every property should have a complete, trackable record.

Required fields:

- Property Name
- Slug
- Property ID
- Property Type
- Property Status
- Featured Image
- City / State

Strongly recommended fields:

- Short Description
- Full Description
- Price or Price Label
- Gallery
- Amenities
- Features
- Payment Plans
- Nearby Landmarks
- Agent
- SEO Title
- SEO Description

### Property ID

Use a consistent reference format:

```text
MP-1024
MP-1025
MP-1026
```

This ID appears on the property page, inquiry forms, and WhatsApp messages.

### Price Guidance

Use `Price` for a simple number:

```text
Price: 185000000
Currency: NGN
```

Use `Price Label` when wording matters:

```text
Price Label: From ₦45,000,000
Price Label: ₦45,000,000 per plot
Price Label: ₦42,000,000 yearly
Price Label: Price on request
```

Do not enter commas in the numeric `Price` field.

### Example Residential Property

```text
Property Name: 4 Bedroom Detached Duplex
Slug: 4-bedroom-detached-duplex-lekki
Property ID: MP-1024
Property Type: Residential
Category: Luxury Homes
Status: Available
Featured: Yes
Price: 185000000
Currency: NGN
Location: Lekki Phase 1
City: Lagos
State: Lagos
Bedrooms: 4
Bathrooms: 5
Toilets: 5
Parking: 3
Property Size: 450 sqm
Land Size: 520 sqm
Features:
- Detached family layout
- Fitted kitchen
- Private compound
- Premium sanitary fittings
Amenities:
- Security
- Parking
- Fitted Kitchen
- Water Supply
Nearby Landmarks:
- 5 minutes from Admiralty Way
- 12 minutes from Victoria Island
```

### Example Land Listing

```text
Property Name: Dry Land Plots in Emerging Estate
Property ID: MP-1112
Property Type: Land
Category: Investment Properties
Status: Off Plan
Price Label: ₦45,000,000 per plot
Land Size: 600 sqm per plot
Land Title: Registered Survey / Gazette / C of O as applicable
Survey Information: Add exact survey details
Development Status: Estate infrastructure in progress
Road Access: Accessible road
Estate Name: Metro Gardens
Allocation Information: Allocation after initial deposit
Number of Plots Available: 15
```

### Example Commercial Listing

```text
Property Name: Serviced Commercial Office Floor
Property ID: MP-1088
Property Type: Commercial
Commercial Subtype: Office
Status: New Listing
Price Label: From ₦42,000,000 yearly
Property Size: 720 sqm
Parking Spaces: 8
Floors: 1
Occupancy Status: Vacant
```

## Payment Plans

Only enter payment figures supplied by Metro Properties, the seller, or an approved calculation process.

Example:

```text
Plan Name: Initial Deposit
Amount: 10000000
Schedule: On subscription
Notes: Balance spread across selected plan.

Plan Name: 12-Month Plan
Amount: 2916667
Schedule: Monthly
Notes: Subject to final seller confirmation.
```

The website does not invent or calculate payment plans.

## Property Status Rules

Use statuses consistently:

- `Available`: can receive inquiries and inspection requests
- `New Listing`: newly added property
- `Featured`: visually highlighted property
- `Reserved`: still visible, but should be treated as limited availability
- `Sold`: remains visible for credibility, but inspection request is disabled
- `Coming Soon`: visible before full release
- `Off Plan`: development or pre-completion listing
- `Under Construction`: active construction
- `Price Reduced`: price has changed

Use `Archive property` when a listing should be removed from active catalogue pages.

## Images

Use real, high-quality property photography.

Recommended:

- Featured image: exterior, living room, aerial estate shot, or strongest first impression
- Gallery: 6 to 15 clear images
- Avoid dark, blurry, heavily filtered, or distorted images
- Use descriptive alt-friendly filenames where possible

## Developments

Use developments for estates, off-plan projects, or multi-unit projects.

Example:

```text
Development Name: Metro Gardens
Status: Off Plan
Overview: A planned estate with residential plots, serviced roads and phased amenities.
Starting Price: 45000000
Units Available: 15
City: Lagos
State: Lagos
Expected Completion: Q4 2027
Available Property Types:
- 600 sqm plots
- 4 bedroom terraces
Amenities:
- Security
- Road Access
- Water Supply
- Gated Estate
```

## Website Leads

Website form submissions can appear in the `Website Leads` section when `SANITY_API_WRITE_TOKEN` is configured in Vercel.

Lead types:

- Inquiry
- Inspection
- Property Request
- List Property

The lead document stores contact information, property reference, preferred inspection date/time, budget, message, and uploaded listing photos where supplied.

## Blog / Insights

Use insights for SEO and buyer education.

Recommended categories:

- Buying Property
- Real Estate Investment
- Land
- Property Guides
- Neighbourhood Guides
- Market Insights

Example article ideas:

- What to Review Before Buying Land in Lagos
- How Payment Plans Can Support Property Ownership
- Questions to Ask Before Buying Off-Plan Property
- Residential vs Commercial Real Estate: What Buyers Should Compare

## Testimonials

Do not add placeholder testimonials.

Only publish a testimonial when Metro Properties has real client approval. Leave unpublished testimonials hidden until they are ready.

## Launch Checklist

Before setting `NEXT_PUBLIC_USE_DEMO_CONTENT=false`, confirm:

- At least 3 real properties are published
- Each property has a featured image
- Each property has a slug
- Each property has a property ID
- Locations and statuses are filled
- Site Settings include phone, WhatsApp, and email
- Vercel has `NEXT_PUBLIC_SANITY_PROJECT_ID=t7hoictb`
- Vercel has `NEXT_PUBLIC_SANITY_DATASET=production`
- Vercel has `SANITY_API_WRITE_TOKEN` if leads should save into Sanity

## Vercel Environment Variables

Set these as Config:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=t7hoictb
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
NEXT_PUBLIC_USE_DEMO_CONTENT=true
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_METRO_PHONE=+234...
NEXT_PUBLIC_METRO_WHATSAPP=234...
```

Set this as Secret:

```env
SANITY_API_WRITE_TOKEN=your_private_sanity_write_token
```

After real CMS content is ready:

```env
NEXT_PUBLIC_USE_DEMO_CONTENT=false
```

Then redeploy.
