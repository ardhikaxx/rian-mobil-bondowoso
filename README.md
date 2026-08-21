# Rian Mobil Bondowoso

Website landing page profesional untuk bisnis jual beli mobil bekas **Rian Mobil Bondowoso** yang berlokasi di Prajekan, Bondowoso, Jawa Timur.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**

## Instalasi & Menjalankan

```bash
# Clone repository
git clone <repository-url>

# Masuk ke direktori project
cd rian-mobil-bondowoso

# Install dependencies
npm install

# Jalankan development server
npm run dev

# Buka browser
# http://localhost:3000
```

## Build Production

```bash
# Build untuk production
npm run build

# Jalankan production server
npm start
```

## Struktur Folder

```
rian-mobil-bondowoso/
├── src/
│   ├── app/                    # Halaman dan routing
│   │   ├── layout.tsx          # Root layout dengan SEO metadata
│   │   ├── page.tsx            # Halaman utama (landing page)
│   │   ├── globals.css         # Global styles
│   │   └── mobil/
│   │       ├── page.tsx        # Katalog semua kendaraan
│   │       └── [slug]/
│   │           └── page.tsx    # Detail kendaraan (dynamic route)
│   ├── components/
│   │   ├── ui/                 # Komponen UI reusable
│   │   │   ├── Button.tsx      # Tombol dengan berbagai variant
│   │   │   ├── Badge.tsx       # Label/status badge
│   │   │   ├── Icon.tsx        # SVG icons
│   │   │   ├── VehicleCard.tsx # Card kendaraan
│   │   │   └── TestimonialCard.tsx
│   │   ├── layout/             # Komponen layout
│   │   │   ├── Navbar.tsx      # Navigasi + mobile menu
│   │   │   ├── Footer.tsx      # Footer website
│   │   │   └── FloatingWhatsApp.tsx
│   │   └── sections/           # Section halaman
│   │       ├── Hero.tsx        # Hero section
│   │       ├── VehicleCatalog.tsx  # Katalog dengan filter & search
│   │       ├── Advantages.tsx  # Keunggulan bisnis
│   │       ├── About.tsx       # Tentang kami
│   │       ├── PurchaseProcess.tsx  # Cara pembelian
│   │       ├── CTA.tsx         # Call to action
│   │       └── Contact.tsx     # Kontak & social media
│   ├── data/                   # Data dan types
│   │   ├── types.ts            # TypeScript interfaces
│   │   ├── constants.ts        # Konstanta aplikasi
│   │   ├── vehicles.ts         # Data kendaraan (dummy)
│   │   └── content.ts          # Konten advantages, testimonials, steps
│   └── lib/                    # Utility functions
│       └── utils.ts            # Helper functions
├── public/                     # Static assets
│   └── images/
│       └── vehicles/           # Foto kendaraan
├── next.config.ts              # Konfigurasi Next.js
├── tsconfig.json               # Konfigurasi TypeScript
└── package.json
```

## Cara Mengganti Informasi Bisnis

### Mengganti Nomor WhatsApp

Edit file `src/data/constants.ts`:

```typescript
export const SITE_CONFIG = {
  phone: "082312436886",           // Nomor tampil
  phoneInternational: "6282312436886", // Format internasional
  whatsappLink: "https://wa.me/6282312436886",
  // ...
};
```

### Mengganti Link TikTok

Edit file `src/data/constants.ts`:

```typescript
export const SITE_CONFIG = {
  tiktokUrl: "https://www.tiktok.com/@rian.mobil.bondow",
  // ...
};
```

### Mengganti Lokasi

Edit file `src/data/constants.ts`:

```typescript
export const SITE_CONFIG = {
  location: {
    area: "Prajekan",
    city: "Bondowoso",
    province: "Jawa Timur",
    full: "Prajekan, Bondowoso, Jawa Timur",
  },
};
```

## Cara Menambah Kendaraan

1. Buka file `src/data/vehicles.ts`
2. Tambah objek baru ke array `vehicles`:

```typescript
{
  id: "7",
  slug: "mobil-anda-2024",
  name: "Merek Mobil Anda 1.5 Type",
  brand: "Merek",
  model: "Model",
  year: 2024,
  price: 200000000,
  priceFormatted: "Rp 200.000.000",
  transmission: "Automatic",
  fuelType: "Bensin",
  mileage: 10000,
  mileageFormatted: "10.000 km",
  color: "Putih",
  category: "MPV", // MPV, SUV, City Car, Sedan, Lainnya
  status: "Tersedia", // Tersedia, Booking, Sold Out
  description: "Deskripsi kendaraan...",
  features: ["Fitur 1", "Fitur 2"],
  condition: ["Kondisi 1", "Kondisi 2"],
  images: ["/images/vehicles/mobil-anda-1.jpg"],
  thumbnail: "/images/vehicles/mobil-anda-1.jpg",
  isDummy: false, // Set false untuk data asli
}
```

3. Tambah foto kendaraan ke `public/images/vehicles/`

## Cara Mengganti Foto Kendaraan

1. Letakkan foto di `public/images/vehicles/`
2. Update path `images` dan `thumbnail` di data kendaraan
3. Gunakan format JPG, PNG, atau WebP
4. Rekomendasi ukuran: 800x600px untuk thumbnail

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

1. Push ke GitHub/GitLab
2. Hubungkan repository di Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

### Manual Server

```bash
# Build
npm run build

# Copy folder .next, node_modules, package.json ke server
# Jalankan npm start
```

## SEO

Website sudah dilengkapi dengan:
- Title & description meta tags
- Open Graph metadata
- Twitter Card metadata
- JSON-LD structured data (LocalBusiness)
- Semantic HTML structure
- Alt text pada gambar
- Responsive design

## Catatan

- Data kendaraan saat ini adalah **data dummy/placeholder**
- Ganti dengan data asli dari Rian Mobil Bondowoso
- Semua placeholder foto harus diganti dengan foto asli
- Nomor WhatsApp sudah benar: 082312436886 (6282312436886)
- Link TikTok sudah benar: https://www.tiktok.com/@rian.mobil.bondow

## License

Hak cipta dilindungi. Untuk penggunaan internal Rian Mobil Bondowoso.
