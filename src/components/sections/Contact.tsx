import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/data/constants";
import { generateWhatsAppLink } from "@/lib/utils";

export default function Contact() {
  return (
    <section id="kontak" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
            <Icon name="chat" size={14} />
            <span>Hubungi Kami</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Hubungi Kami
          </h2>
          <p className="text-gray-600 text-lg">
            Siap membantu Anda menemukan mobil bekas yang tepat. Jangan ragu
            untuk menghubungi kami.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* WhatsApp */}
          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-green-500/30 group-hover:shadow-green-500/50 group-hover:scale-110 transition-all duration-300">
                <Icon name="whatsapp" size={24} className="text-white" />
              </div>
              <h3 className="font-black text-gray-900 mb-1">WhatsApp</h3>
              <p className="text-sm text-gray-500 mb-3">
                Chat langsung dengan kami
              </p>
              <p className="text-green-600 font-bold text-sm">
                {SITE_CONFIG.phone}
              </p>
            </div>
          </a>

          {/* Location */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md border border-gray-100">
            <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-red-500/30">
              <Icon name="location" size={24} className="text-white" />
            </div>
            <h3 className="font-black text-gray-900 mb-1">Lokasi</h3>
            <p className="text-sm text-gray-500 mb-3">Kunjungi showroom kami</p>
            <p className="text-gray-900 text-sm font-bold">
              {SITE_CONFIG.location.full}
            </p>
          </div>

          {/* TikTok */}
          <a
            href={SITE_CONFIG.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-gray-300 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-black/30 group-hover:shadow-black/50 group-hover:scale-110 transition-all duration-300">
                <Icon name="tiktok" size={24} className="text-white" />
              </div>
              <h3 className="font-black text-gray-900 mb-1">TikTok</h3>
              <p className="text-sm text-gray-500 mb-3">
                Lihat video kendaraan kami
              </p>
              <p className="text-red-600 font-bold text-sm">
                @rian.mobil.bondow
              </p>
            </div>
          </a>
        </div>

        {/* Quick CTA */}
        <div className="mt-12 text-center">
          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="whatsapp" size="lg">
              <Icon name="whatsapp" size={20} />
              Hubungi Sekarang
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
