import type { Development, Insight, Property } from "@/lib/types";

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=82`;

export const demoProperties: Property[] = [
  {
    _id: "demo-1",
    title: "4 Bedroom Detached Duplex",
    slug: "4-bedroom-detached-duplex-lekki",
    reference: "MP-1024",
    shortDescription: "A refined family residence with generous rooms, premium finishes and estate security.",
    description:
      "Designed for calm everyday living, this detached duplex combines expansive interiors, a fitted kitchen, private parking and convenient access to Lekki's commercial corridors.",
    type: "Residential",
    category: "Luxury Homes",
    status: "Featured",
    featured: true,
    price: 185000000,
    currency: "NGN",
    location: {
      name: "Lekki Phase 1",
      neighbourhood: "Lekki",
      city: "Lagos",
      state: "Lagos",
      landmarks: ["5 minutes from Admiralty Way", "12 minutes from Victoria Island"]
    },
    bedrooms: 4,
    bathrooms: 5,
    toilets: 5,
    parking: 3,
    propertySize: "450 sqm",
    landSize: "520 sqm",
    featuredImage: img("photo-1600585154340-be6161a56a0c"),
    gallery: [
      img("photo-1600585154340-be6161a56a0c"),
      img("photo-1600607687939-ce8a6c25118c"),
      img("photo-1600566753190-17f0baa2a6c3")
    ],
    amenities: ["Security", "Fitted Kitchen", "Parking", "Balcony", "Water Supply"],
    features: ["Detached family layout", "Modern kitchen", "Private compound", "Premium sanitary fittings"],
    paymentPlans: [
      { title: "Initial Deposit", amount: 50000000, schedule: "On allocation" },
      { title: "6-Month Plan", amount: 22500000, schedule: "Monthly" }
    ],
    agent: { name: "Metro Advisory Team", position: "Property Advisor", phone: "", whatsapp: "", email: "sales@metroproperties.ng" },
    datePublished: "2026-08-28"
  },
  {
    _id: "demo-2",
    title: "Serviced Commercial Office Floor",
    slug: "serviced-commercial-office-floor-victoria-island",
    reference: "MP-1088",
    shortDescription: "Flexible office floor plate for firms seeking visibility, parking and a prime business address.",
    description:
      "A polished commercial floor with lift access, structured parking, reception control and excellent road connectivity.",
    type: "Commercial",
    category: "Office",
    status: "New Listing",
    featured: true,
    priceLabel: "From ₦42,000,000 yearly",
    location: { name: "Victoria Island", city: "Lagos", state: "Lagos", landmarks: ["3 minutes from Ozumba Mbadiwe", "Near major banks and hotels"] },
    bathrooms: 4,
    parking: 8,
    propertySize: "720 sqm",
    featuredImage: img("photo-1497366754035-f200968a6e72"),
    gallery: [img("photo-1497366754035-f200968a6e72"), img("photo-1497366811353-6870744d04b2")],
    amenities: ["Elevator", "Security", "CCTV", "Parking", "Generator"],
    features: ["Open-plan workspace", "Reception lobby", "Dedicated parking", "Backup power"],
    datePublished: "2026-08-24"
  },
  {
    _id: "demo-3",
    title: "Dry Land Plots in Emerging Estate",
    slug: "dry-land-plots-ibeju-lekki",
    reference: "MP-1112",
    shortDescription: "Documented plots with road access in a fast-growing investment corridor.",
    description:
      "A land opportunity suited for medium-term investment and residential development, with clear allocation details and flexible payment options.",
    type: "Land",
    category: "Investment Properties",
    status: "Off Plan",
    featured: false,
    price: 45000000,
    currency: "NGN",
    priceLabel: "₦45,000,000 per plot",
    location: { name: "Ibeju-Lekki", city: "Lagos", state: "Lagos", landmarks: ["10 minutes from major road", "Within the Lekki growth corridor"] },
    landSize: "600 sqm per plot",
    featuredImage: img("photo-1500382017468-9049fed747ef"),
    gallery: [img("photo-1500382017468-9049fed747ef"), img("photo-1500530855697-b586d89ba3ee")],
    amenities: ["Gated Estate", "Security", "Road Access"],
    features: ["Registered survey", "Dry land", "Estate allocation", "Flexible payment"],
    paymentPlans: [
      { title: "Initial Deposit", amount: 10000000, schedule: "On subscription" },
      { title: "12-Month Plan", amount: 2916667, schedule: "Monthly" }
    ],
    datePublished: "2026-08-18"
  },
  {
    _id: "demo-4",
    title: "Off-Plan Waterfront Apartments",
    slug: "off-plan-waterfront-apartments-ikoyi",
    reference: "MP-1140",
    shortDescription: "Premium apartments in a planned waterfront development with curated resident amenities.",
    description:
      "An off-plan residential development designed for long-term value, calm views and efficient city access.",
    type: "Apartment",
    category: "Off-Plan Developments",
    status: "Under Construction",
    featured: true,
    price: 320000000,
    currency: "NGN",
    location: { name: "Ikoyi", city: "Lagos", state: "Lagos", landmarks: ["Waterfront setting", "Close to business districts"] },
    bedrooms: 3,
    bathrooms: 4,
    parking: 2,
    propertySize: "260 sqm",
    featuredImage: img("photo-1600607688969-a5bfcd646154"),
    gallery: [img("photo-1600607688969-a5bfcd646154"), img("photo-1600566752355-35792bedcfea")],
    amenities: ["Swimming Pool", "Gym", "Elevator", "Security", "CCTV", "Generator"],
    features: ["Waterfront views", "Resident lounge", "Smart access", "Concierge reception"],
    datePublished: "2026-08-10"
  }
];

export const demoDevelopments: Development[] = [
  {
    _id: "dev-1",
    title: "Metro Gardens",
    slug: "metro-gardens",
    summary: "A planned estate with residential plots, serviced roads and phased amenities.",
    status: "Off Plan",
    startingPrice: 45000000,
    currency: "NGN",
    unitsAvailable: 15,
    image: img("photo-1600047509807-ba8f99d2cdde"),
    location: { city: "Lagos", state: "Lagos" },
    amenities: ["Security", "Road Access", "Water Supply", "Gated Estate"],
    expectedCompletion: "Q4 2027"
  },
  {
    _id: "dev-2",
    title: "The Metro Residences",
    slug: "the-metro-residences",
    summary: "A contemporary apartment development with carefully planned resident facilities.",
    status: "Under Construction",
    startingPrice: 120000000,
    currency: "NGN",
    unitsAvailable: 24,
    image: img("photo-1605146769289-440113cc3d00"),
    location: { city: "Lagos", state: "Lagos" },
    amenities: ["Gym", "Elevator", "Parking", "Security"],
    expectedCompletion: "Q2 2028"
  }
];

export const demoInsights: Insight[] = [
  {
    _id: "insight-1",
    title: "What to Review Before Buying Land in Lagos",
    slug: "review-before-buying-land-lagos",
    category: "Land",
    excerpt: "A practical look at title, survey, access and allocation questions buyers should understand.",
    image: img("photo-1500382017468-9049fed747ef"),
    publishedAt: "2026-08-12"
  },
  {
    _id: "insight-2",
    title: "How Payment Plans Can Support Property Ownership",
    slug: "payment-plans-property-ownership",
    category: "Property Guides",
    excerpt: "How structured payments work and what to clarify before committing to a plan.",
    image: img("photo-1560518883-ce09059eeffa"),
    publishedAt: "2026-08-05"
  }
];
