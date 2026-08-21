export interface Vehicle {
  id: string;
  slug: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  priceFormatted: string;
  transmission: "Manual" | "Automatic" | "CVT";
  fuelType: "Bensin" | "Diesel" | "Hybrid" | "Listrik";
  mileage: number;
  mileageFormatted: string;
  color: string;
  category: string;
  status: "Tersedia" | "Sold Out" | "Booking";
  description: string;
  features: string[];
  condition: string[];
  images: string[];
  thumbnail: string;
  isDummy: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  vehicle: string;
}

export interface Advantage {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PurchaseStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}
