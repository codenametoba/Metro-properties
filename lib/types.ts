export type PropertyStatus =
  | "Available"
  | "New Listing"
  | "Featured"
  | "Reserved"
  | "Sold"
  | "Coming Soon"
  | "Off Plan"
  | "Under Construction"
  | "Price Reduced";

export type PropertyType =
  | "Residential"
  | "Land"
  | "Commercial"
  | "Apartment"
  | "Luxury Home"
  | "Development"
  | "Investment";

export type PaymentPlan = {
  title: string;
  amount?: number;
  schedule?: string;
  notes?: string;
};

export type Agent = {
  name: string;
  position?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  photo?: string;
  bio?: string;
};

export type LocationInfo = {
  name?: string;
  address?: string;
  neighbourhood?: string;
  city?: string;
  state?: string;
  latitude?: number;
  longitude?: number;
  mapUrl?: string;
  landmarks?: string[];
};

export type Property = {
  _id: string;
  title: string;
  slug: string;
  reference: string;
  shortDescription?: string;
  description?: string;
  type: PropertyType;
  category?: string;
  status: PropertyStatus;
  featured?: boolean;
  price?: number;
  currency?: string;
  priceLabel?: string;
  location: LocationInfo;
  bedrooms?: number;
  bathrooms?: number;
  toilets?: number;
  parking?: number;
  propertySize?: string;
  landSize?: string;
  featuredImage?: string;
  gallery?: string[];
  videoUrl?: string;
  virtualTourUrl?: string;
  amenities?: string[];
  features?: string[];
  paymentPlans?: PaymentPlan[];
  documents?: { title: string; url: string }[];
  agent?: Agent;
  datePublished?: string;
  seoTitle?: string;
  seoDescription?: string;
};

export type Development = {
  _id: string;
  title: string;
  slug: string;
  summary?: string;
  status?: string;
  location?: LocationInfo;
  startingPrice?: number;
  currency?: string;
  unitsAvailable?: number;
  image?: string;
  gallery?: string[];
  amenities?: string[];
  paymentPlans?: PaymentPlan[];
  expectedCompletion?: string;
  developerInfo?: string;
};

export type Insight = {
  _id: string;
  title: string;
  slug: string;
  category?: string;
  excerpt?: string;
  image?: string;
  publishedAt?: string;
};
