import Icon from "@/components/ui/Icon";
import { SITE_CONFIG } from "@/data/constants";

export default function About() {
  return (
    <section id="tentang-kami" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold">
              <Icon name="heart" size={14} />
              <span>Tentang Kami</span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight">
              Jual Beli Mobil Bekas Terpercaya di{" "}
              <span className="text-red-600">Bondowoso</span>
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong className="text-gray-900">{SITE_CONFIG.name}</strong>{" "}
                adalah usaha jual beli mobil bekas yang berlokasi di{" "}
                <strong className="text-gray-900">
                  {SITE_CONFIG.location.full}
                </strong>
                . Kami melayani kebutuhan masyarakat Bondowoso dan sekitarnya
                yang mencari kendaraan bekas berkualitas dengan harga yang
                terjangkau.
              </p>
              <p>
                Dengan lokasi yang strategis di Prajekan, Bondowoso, kami
                berusaha memberikan kemudahan bagi calon pembeli untuk melihat
                langsung kondisi kendaraan yang tersedia. Setiap mobil yang kami
                tawarkan telah melalui pengecekan untuk memastikan kondisi
                terbaik bagi pembeli.
              </p>
              <p>
                Kami percaya bahwa transparansi dan kejujuran adalah kunci dalam
                bisnis jual beli mobil bekas. Oleh karena itu, informasi
                mengenai kondisi kendaraan disampaikan secara jelas kepada calon
                pembeli.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-red-500/20">
                  <Icon name="check" size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Transparan
                  </p>
                  <p className="text-xs text-gray-500">Info jujur kendaraan</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-red-500/20">
                  <Icon name="check" size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Terjangkau
                  </p>
                  <p className="text-xs text-gray-500">Harga bersaing</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-red-500/20">
                  <Icon name="check" size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Lokasi Strategis
                  </p>
                  <p className="text-xs text-gray-500">Mudah dijangkau</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-red-500/20">
                  <Icon name="check" size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Ramah & Profesional
                  </p>
                  <p className="text-xs text-gray-500">Pelayanan terbaik</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl flex items-center justify-center">
                    <Icon
                      name="car"
                      size={56}
                      className="text-gray-400 opacity-60"
                    />
                  </div>
                  <p className="text-gray-500 text-sm font-medium">
                    Placeholder untuk foto lokasi atau showroom
                  </p>
                  <p className="text-gray-400 text-xs">
                    Ganti dengan foto asli Rian Mobil Bondowoso
                  </p>
                </div>
              </div>
            </div>

            {/* Location Badge */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-5 shadow-2xl border border-gray-800">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-600/30">
                  <Icon name="location" size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Lokasi Kami</p>
                  <p className="text-sm font-black text-white">
                    {SITE_CONFIG.location.area}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
