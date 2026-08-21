import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { vehicles, getVehicleBySlug } from "@/data/vehicles";
import { SITE_CONFIG } from "@/data/constants";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Icon from "@/components/ui/Icon";
import { generateWhatsAppLink } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return vehicles.map((vehicle) => ({
    slug: vehicle.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    return {
      title: "Mobil Tidak Ditemukan",
    };
  }

  return {
    title: `${vehicle.name} | ${SITE_CONFIG.name}`,
    description: `${vehicle.name} tahun ${vehicle.year}, transmisi ${vehicle.transmission}, bahan bakar ${vehicle.fuelType}, kilometer ${vehicle.mileageFormatted}. Harga ${vehicle.priceFormatted}. Hubungi ${SITE_CONFIG.name} untuk informasi lebih lanjut.`,
    openGraph: {
      title: `${vehicle.name} | ${SITE_CONFIG.name}`,
      description: `${vehicle.name} tahun ${vehicle.year} - ${vehicle.priceFormatted}`,
      type: "website",
    },
  };
}

export default async function VehicleDetailPage({ params }: Props) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    notFound();
  }

  const whatsappLink = generateWhatsAppLink(vehicle.name);

  const statusVariant =
    vehicle.status === "Tersedia"
      ? "success"
      : vehicle.status === "Booking"
        ? "warning"
        : "danger";

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16 lg:pt-20">
        {/* Breadcrumb */}
        <div className="bg-black border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-red-400 transition-colors">
                Beranda
              </Link>
              <span className="text-gray-700">/</span>
              <Link
                href="/mobil"
                className="hover:text-red-400 transition-colors"
              >
                Mobil
              </Link>
              <span className="text-gray-700">/</span>
              <span className="text-white font-bold truncate">
                {vehicle.name}
              </span>
            </nav>
          </div>
        </div>

        {/* Vehicle Detail */}
        <section className="py-8 lg:py-12 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Gallery */}
              <div className="space-y-4">
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl flex items-center justify-center">
                        <Icon
                          name="image"
                          size={48}
                          className="text-gray-400 opacity-60"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-600">
                          Placeholder Foto Utama
                        </p>
                        <p className="text-xs text-gray-400">
                          Ganti dengan foto asli kendaraan
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant={statusVariant}>{vehicle.status}</Badge>
                  </div>
                  {vehicle.isDummy && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="premium">Contoh</Badge>
                    </div>
                  )}
                </div>

                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-4 gap-2">
                  {vehicle.images.map((_, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl aspect-square flex items-center justify-center text-gray-400 cursor-pointer hover:from-red-50 hover:to-red-100 hover:text-red-400 transition-all duration-300 border-2 border-transparent hover:border-red-200"
                    >
                      <Icon name="car" size={20} className="opacity-30" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="info">{vehicle.category}</Badge>
                    <Badge variant="default">{vehicle.year}</Badge>
                  </div>
                  <h1 className="text-2xl lg:text-4xl font-black text-gray-900 tracking-tight">
                    {vehicle.name}
                  </h1>
                  <p className="text-3xl lg:text-4xl font-black text-red-600 mt-3 tracking-tight">
                    {vehicle.priceFormatted}
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-4 p-5 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-600/20 rounded-xl flex items-center justify-center">
                      <Icon name="calendar" size={18} className="text-red-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Tahun</p>
                      <p className="font-bold text-white">
                        {vehicle.year}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-600/20 rounded-xl flex items-center justify-center">
                      <Icon name="gear" size={18} className="text-red-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Transmisi</p>
                      <p className="font-bold text-white">
                        {vehicle.transmission}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-600/20 rounded-xl flex items-center justify-center">
                      <Icon name="fuel" size={18} className="text-red-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Bahan Bakar</p>
                      <p className="font-bold text-white">
                        {vehicle.fuelType}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-600/20 rounded-xl flex items-center justify-center">
                      <Icon
                        name="speedometer"
                        size={18}
                        className="text-red-400"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Kilometer</p>
                      <p className="font-bold text-white">
                        {vehicle.mileageFormatted}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-600/20 rounded-xl flex items-center justify-center">
                      <Icon name="color" size={18} className="text-red-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Warna</p>
                      <p className="font-bold text-white">
                        {vehicle.color}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="whatsapp" size="lg" className="w-full">
                      <Icon name="whatsapp" size={20} />
                      Tanya via WhatsApp
                    </Button>
                  </a>
                  <Link href="/mobil" className="flex-1">
                    <Button variant="outline" size="lg" className="w-full">
                      <Icon name="arrowRight" size={18} className="rotate-180" />
                      Kembali ke Katalog
                    </Button>
                  </Link>
                </div>

                {/* Description */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h2 className="text-lg font-black text-gray-900 mb-3 flex items-center gap-2">
                    <div className="w-1 h-5 bg-red-600 rounded-full" />
                    Deskripsi
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {vehicle.description}
                  </p>
                </div>

                {/* Features */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h2 className="text-lg font-black text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-1 h-5 bg-red-600 rounded-full" />
                    Fitur Kendaraan
                  </h2>
                  <div className="grid grid-cols-2 gap-2.5">
                    {vehicle.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2.5 text-sm text-gray-600"
                      >
                        <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                          <Icon
                            name="check"
                            size={10}
                            className="text-red-600"
                          />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Condition */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h2 className="text-lg font-black text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-1 h-5 bg-red-600 rounded-full" />
                    Kondisi Kendaraan
                  </h2>
                  <ul className="space-y-2.5">
                    {vehicle.condition.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm text-gray-600"
                      >
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                          <Icon
                            name="check"
                            size={10}
                            className="text-green-600"
                          />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {vehicle.isDummy && (
                  <div className="p-4 bg-amber-50 border-2 border-amber-200 rounded-2xl">
                    <p className="text-sm text-amber-800">
                      <strong>Catatan:</strong> Data kendaraan ini adalah contoh
                      placeholder untuk pengembangan. Ganti dengan data kendaraan
                      asli milik Rian Mobil Bondowoso.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
