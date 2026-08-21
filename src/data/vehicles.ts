/**
 * DATA KENDARAAN DUMMY - PLACEHOLDER
 *
 * Data di bawah ini adalah data contoh untuk pengembangan.
 * Ganti dengan data kendaraan asli milik Rian Mobil Bondowoso.
 * Setiap kendaraan memiliki field `isDummy: true` untuk menandai
 * bahwa ini bukan data asli.
 *
 * Cara menambah kendaraan:
 * 1. Tambah objek baru ke array vehicles
 * 2. Isi semua field sesuai interface Vehicle
 * 3. Set isDummy: false untuk data asli
 * 4. Tambah foto ke public/images/vehicles/
 */

import { Vehicle } from "./types";

export const vehicles: Vehicle[] = [
  {
    id: "1",
    slug: "toyota-avanza-2020",
    name: "Toyota Avanza 1.5 G CVT",
    brand: "Toyota",
    model: "Avanza",
    year: 2020,
    price: 175000000,
    priceFormatted: "Rp 175.000.000",
    transmission: "CVT",
    fuelType: "Bensin",
    mileage: 45000,
    mileageFormatted: "45.000 km",
    color: "Putih",
    category: "MPV",
    status: "Tersedia",
    description:
      "Toyota Avanza 1.5 G CVT tahun 2020 dalam kondisi prima. Mobil terawat dengan servis berkala, interior bersih dan rapi. Cocok untuk keluarga yang mencari MPV andal dengan fitur lengkap. Mesin sehat, AC dingin, dan tidak ada bekas tabrakan.",
    features: [
      "AC Dual Zone",
      "Head Unit Touchscreen",
      "Rear Camera",
      "Electric Mirror",
      "Power Steering",
      "Power Window",
      "Remote Central Lock",
      "USB Charging",
    ],
    condition: [
      "Mesin sehat dan tidak ada kebocoran",
      "Interior bersih terawat",
      "Ban masih tebal",
      "Tidak ada bekas tabrakan",
      "Servis berkala tercatat",
    ],
    images: ["/images/vehicles/avanza-1.jpg", "/images/vehicles/avanza-2.jpg"],
    thumbnail: "/images/vehicles/avanza-1.jpg",
    isDummy: true,
  },
  {
    id: "2",
    slug: "honda-brio-2021",
    name: "Honda Brio RS CVT",
    brand: "Honda",
    model: "Brio",
    year: 2021,
    price: 165000000,
    priceFormatted: "Rp 165.000.000",
    transmission: "CVT",
    fuelType: "Bensin",
    mileage: 25000,
    mileageFormatted: "25.000 km",
    color: "Merah",
    category: "City Car",
    status: "Tersedia",
    description:
      "Honda Brio RS CVT tahun 2021, mobil city car yang irit dan gesit untuk mobilitas sehari-hari. Kondisi seperti baru, jarang dipakai. Mesin responsif, suspensi nyaman, dan desain sporty. Dokumen lengkap dan siap transfer.",
    features: [
      "Head Unit Touchscreen",
      "Rear Camera",
      "Electric Mirror",
      "Power Steering",
      "Power Window",
      "Remote Central Lock",
      "USB Charging",
      "Sport Pedal",
    ],
    condition: [
      "Mesin prima",
      "Interior seperti baru",
      "Cat original",
      "Tidak ada lecet",
      "Kilometer rendah",
    ],
    images: ["/images/vehicles/brio-1.jpg", "/images/vehicles/brio-2.jpg"],
    thumbnail: "/images/vehicles/brio-1.jpg",
    isDummy: true,
  },
  {
    id: "3",
    slug: "toyota-calya-2019",
    name: "Toyota Calya 1.2 G AT",
    brand: "Toyota",
    model: "Calya",
    year: 2019,
    price: 135000000,
    priceFormatted: "Rp 135.000.000",
    transmission: "Automatic",
    fuelType: "Bensin",
    mileage: 55000,
    mileageFormatted: "55.000 km",
    color: "Silver",
    category: "MPV",
    status: "Tersedia",
    description:
      "Toyota Calya 1.2 G AT tahun 2019, LCGC 7-seater yang ekonomis dan praktis. Cocok untuk keluarga dengan budget terjangkau. Perawatan mudah, suku cadang melimpah. Kondisi terawat, mesin halus, dan siap dipakai sehari-hari.",
    features: [
      "AC",
      "Head Unit 2-DIN",
      "Electric Mirror",
      "Power Steering",
      "Power Window",
      "Remote Central Lock",
      "USB Port",
    ],
    condition: [
      "Mesin halus",
      "AC dingin",
      "Interior rapi",
      "Ban masih bagus",
      "Surat-surat lengkap",
    ],
    images: ["/images/vehicles/calya-1.jpg", "/images/vehicles/calya-2.jpg"],
    thumbnail: "/images/vehicles/calya-1.jpg",
    isDummy: true,
  },
  {
    id: "4",
    slug: "daihatsu-xenia-2020",
    name: "Daihatsu Xenia 1.3 R AT",
    brand: "Daihatsu",
    model: "Xenia",
    year: 2020,
    price: 145000000,
    priceFormatted: "Rp 145.000.000",
    transmission: "Automatic",
    fuelType: "Bensin",
    mileage: 40000,
    mileageFormatted: "40.000 km",
    color: "Hitam",
    category: "MPV",
    status: "Tersedia",
    description:
      "Daihatsu Xenia 1.3 R AT tahun 2020, MPV handal untuk keluarga Indonesia. Transmisi automatic yang halus, suspensi nyaman di jalan Bondowoso dan sekitarnya. Mesin irit dan bandel, perawatan murah. Kondisi terawat dengan servis berkala.",
    features: [
      "AC",
      "Head Unit Touchscreen",
      "Electric Mirror",
      "Power Steering",
      "Power Window",
      "Remote Central Lock",
      "Rear Wiper",
    ],
    condition: [
      "Mesin sehat",
      "Transmisi halus",
      "Interior bersih",
      "Tidak ada noise",
      "Dokumen lengkap",
    ],
    images: ["/images/vehicles/xenia-1.jpg", "/images/vehicles/xenia-2.jpg"],
    thumbnail: "/images/vehicles/xenia-1.jpg",
    isDummy: true,
  },
  {
    id: "5",
    slug: "mitsubishi-xpander-2021",
    name: "Mitsubishi Xpander Ultimate AT",
    brand: "Mitsubishi",
    model: "Xpander",
    year: 2021,
    price: 235000000,
    priceFormatted: "Rp 235.000.000",
    transmission: "Automatic",
    fuelType: "Bensin",
    mileage: 30000,
    mileageFormatted: "30.000 km",
    color: "Putih",
    category: "MPV",
    status: "Booking",
    description:
      "Mitsubishi Xpander Ultimate AT tahun 2021, MPV premium dengan fitur lengkap. Transmisi AT responsif, kabin luas dan nyaman. Tipe Ultimate dengan fitur lengkap termasuk 360 camera, cruise control, dan head unit besar. Kondisi masih sangat baik.",
    features: [
      "360 Camera",
      "Cruise Control",
      "Head Unit 9 inch",
      "Auto AC",
      "Electric Parking Brake",
      "LED Headlamp",
      "Power Steering",
      "Power Window",
      "Remote Central Lock",
      "USB Charging All Row",
    ],
    condition: [
      "Mesin prima",
      "Interior mewah",
      "Eksterior mulus",
      "Kilometer rendah",
      "Service record lengkap",
    ],
    images: [
      "/images/vehicles/xpander-1.jpg",
      "/images/vehicles/xpander-2.jpg",
    ],
    thumbnail: "/images/vehicles/xpander-1.jpg",
    isDummy: true,
  },
  {
    id: "6",
    slug: "suzuki-ertiga-2019",
    name: "Suzuki Ertiga GX AT",
    brand: "Suzuki",
    model: "Ertiga",
    year: 2019,
    price: 140000000,
    priceFormatted: "Rp 140.000.000",
    transmission: "Automatic",
    fuelType: "Bensin",
    mileage: 60000,
    mileageFormatted: "60.000 km",
    color: "Abu-abu",
    category: "MPV",
    status: "Tersedia",
    description:
      "Suzuki Ertiga GX AT tahun 2019, MPV irit dan nyaman untuk keluarga. Transmisi automatic smooth, bahan bakar irit. Kondisi terawat, interior bersih, mesin halus. Cocok untuk daily用车 maupun perjalanan jarak jauh.",
    features: [
      "AC",
      "Head Unit Touchscreen",
      "Electric Mirror",
      "Power Steering",
      "Power Window",
      "Remote Central Lock",
      "Rear Camera",
    ],
    condition: [
      "Mesin irit dan halus",
      "AC dingin",
      "Interior rapi",
      "Ban masih tebal",
      "Surat lengkap",
    ],
    images: ["/images/vehicles/ertiga-1.jpg", "/images/vehicles/ertiga-2.jpg"],
    thumbnail: "/images/vehicles/ertiga-1.jpg",
    isDummy: true,
  },
];

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return vehicles.find((v) => v.slug === slug);
}

export function getAvailableVehicles(): Vehicle[] {
  return vehicles.filter((v) => v.status === "Tersedia");
}

export function getVehicleCategories(): string[] {
  const categories = new Set(vehicles.map((v) => v.category));
  return ["Semua", ...Array.from(categories)];
}
