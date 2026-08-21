import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { generateWhatsAppLink } from "@/lib/utils";

export default function CTA() {
  return (
    <section className="py-16 lg:py-24 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.3) 0%, transparent 50%)",
          }}
        />
        <div className="absolute top-10 left-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 px-5 py-2.5 rounded-full text-sm font-bold mb-8 backdrop-blur-sm border border-red-600/20">
          <Icon name="whatsapp" size={14} />
          <span>Siap Membantu Anda</span>
        </div>

        <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
          Sudah Menemukan Mobil{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
            yang Anda Cari?
          </span>
        </h2>

        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
          Hubungi <strong className="text-white">Rian Mobil Bondowoso</strong>{" "}
          untuk mengetahui ketersediaan unit dan informasi lebih lanjut. Tim kami
          siap membantu Anda menemukan mobil impian.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="whatsapp" size="lg" className="sm:w-auto">
              <Icon name="whatsapp" size={20} />
              Chat WhatsApp Sekarang
            </Button>
          </a>
          <a href={`tel:+6282312436886`}>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-white hover:text-gray-900 hover:border-white sm:w-auto"
            >
              <Icon name="phone" size={20} />
              082312436886
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
