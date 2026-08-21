"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { generateWhatsAppLink } from "@/lib/utils";

export default function CTA() {
  return (
    <section className="py-16 lg:py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.3) 0%, transparent 50%)" }} />
        <motion.div className="absolute top-10 left-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-10 right-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl" animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 px-5 py-2.5 rounded-full text-sm font-bold mb-8 backdrop-blur-sm border border-red-600/20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <Icon name="whatsapp" size={14} />
          <span>Siap Membantu Anda</span>
        </motion.div>

        <motion.h2 className="text-3xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-tight" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          Sudah Menemukan Mobil{" "}
          <span className="text-red-600">yang Anda Cari?</span>
        </motion.h2>

        <motion.p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          Hubungi <strong className="text-white">Rian Mobil Bondowoso</strong> untuk mengetahui ketersediaan unit dan informasi lebih lanjut. Tim kami siap membantu Anda menemukan mobil impian.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
          <motion.a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="whatsapp" size="lg" className="sm:w-auto">
              <Icon name="whatsapp" size={20} />
              Chat WhatsApp Sekarang
            </Button>
          </motion.a>
          <motion.a href="tel:+6282312436886" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-white hover:text-gray-900 hover:border-white sm:w-auto">
              <Icon name="phone" size={20} />
              082312436886
            </Button>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
