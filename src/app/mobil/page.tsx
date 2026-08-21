import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import VehicleCatalog from "@/components/sections/VehicleCatalog";
import { SITE_CONFIG } from "@/data/constants";

export const metadata: Metadata = {
  title: `Mobil Tersedia | ${SITE_CONFIG.name}`,
  description: `Lihat daftar mobil bekas yang tersedia di ${SITE_CONFIG.name}, ${SITE_CONFIG.location.full}. Beragam pilihan mobil berkualitas dengan harga terjangkau.`,
};

export default function MobilPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16 lg:pt-20">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-gray-950 via-black to-red-950/30 py-12 lg:py-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl lg:text-5xl font-black text-white mb-4 tracking-tight">
              Mobil Tersedia
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Temukan mobil bekas pilihan Anda di {SITE_CONFIG.name}. Semua
              kendaraan dalam kondisi terawat dan siap dikendarai.
            </p>
          </div>
        </section>

        {/* Vehicle Catalog */}
        <VehicleCatalog />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
