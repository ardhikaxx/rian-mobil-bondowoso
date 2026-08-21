export const SITE_CONFIG = {
  name: "Rian Mobil Bondowoso",
  shortName: "Rian Mobil",
  description:
    "Rian Mobil Bondowoso - Jual beli mobil bekas berkualitas di Prajekan, Bondowoso, Jawa Timur. Temukan mobil impian Anda dengan harga terjangkau.",
  url: "https://rianmobilbondowoso.com",
  phone: "082312436886",
  phoneInternational: "6282312436886",
  whatsappLink: "https://wa.me/6282312436886",
  tiktokUrl: "https://www.tiktok.com/@rian.mobil.bondow",
  location: {
    area: "Prajekan",
    city: "Bondowoso",
    province: "Jawa Timur",
    full: "Prajekan, Bondowoso, Jawa Timur",
  },
} as const;

export const NAVIGATION = [
  { label: "Beranda", href: "#beranda" },
  { label: "Mobil Tersedia", href: "#mobil-tersedia" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Tentang Kami", href: "#tentang-kami" },
  { label: "Cara Pembelian", href: "#cara-pembelian" },
  { label: "Kontak", href: "#kontak" },
] as const;

export const VEHICLE_CATEGORIES = [
  "Semua",
  "MPV",
  "SUV",
  "City Car",
  "Sedan",
  "Lainnya",
] as const;

export type VehicleCategory = (typeof VEHICLE_CATEGORIES)[number];
