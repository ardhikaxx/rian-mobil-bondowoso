import Link from "next/link";
import { NAVIGATION, SITE_CONFIG } from "@/data/constants";
import Icon from "@/components/ui/Icon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-600/20">
                <Icon name="car" size={20} className="text-white" />
              </div>
              <div>
                <p className="font-black text-white text-sm leading-tight">
                  Rian Mobil
                </p>
                <p className="text-[10px] text-red-400 font-bold tracking-widest uppercase leading-tight">
                  Bondowoso
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Jual beli mobil bekas berkualitas di Prajekan, Bondowoso, Jawa
              Timur. Temukan mobil impian Anda dengan harga terjangkau.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-black text-sm mb-4 uppercase tracking-wider">
              Navigasi
            </h3>
            <ul className="space-y-2.5">
              {NAVIGATION.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-red-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-black text-sm mb-4 uppercase tracking-wider">
              Kontak
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-600/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <Icon
                    name="location"
                    size={14}
                    className="text-red-400"
                  />
                </div>
                <span className="text-sm">{SITE_CONFIG.location.full}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-600/20 rounded-lg flex items-center justify-center shrink-0">
                  <Icon name="phone" size={14} className="text-red-400" />
                </div>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="text-sm hover:text-red-400 transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-black text-sm mb-4 uppercase tracking-wider">
              Ikuti Kami
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={SITE_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-green-400 transition-colors group"
              >
                <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center group-hover:bg-green-600/30 transition-colors">
                  <Icon name="whatsapp" size={14} className="text-green-400" />
                </div>
                WhatsApp
              </a>
              <a
                href={SITE_CONFIG.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Icon name="tiktok" size={14} className="text-white" />
                </div>
                TikTok
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} {SITE_CONFIG.name}. Hak cipta dilindungi.
            </p>
            <p className="text-xs text-gray-600">
              {SITE_CONFIG.location.full}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
