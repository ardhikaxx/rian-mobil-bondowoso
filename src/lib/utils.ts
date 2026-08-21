import { SITE_CONFIG } from "@/data/constants";

export function generateWhatsAppLink(
  vehicleName?: string,
  customMessage?: string
): string {
  const phone = SITE_CONFIG.phoneInternational;
  let message: string;

  if (customMessage) {
    message = customMessage;
  } else if (vehicleName) {
    message = `Halo Rian Mobil Bondowoso, saya tertarik dengan ${vehicleName} yang saya lihat di website. Apakah unit tersebut masih tersedia?`;
  } else {
    message = "Halo Rian Mobil Bondowoso, saya ingin bertanya tentang mobil bekas yang tersedia.";
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
