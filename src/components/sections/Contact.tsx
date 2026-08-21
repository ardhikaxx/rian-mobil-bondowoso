"use client";

import { motion } from "framer-motion";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/data/constants";
import { generateWhatsAppLink } from "@/lib/utils";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function Contact() {
  return (
    <section id="kontak" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center max-w-2xl mx-auto mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
            <Icon name="chat" size={14} />
            <span>Hubungi Kami</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight">Hubungi Kami</h2>
          <p className="text-gray-600 text-lg">Siap membantu Anda menemukan mobil bekas yang tepat. Jangan ragu untuk menghubungi kami.</p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="block group" variants={item}>
            <motion.div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-300" whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-green-500/30 group-hover:shadow-green-500/50 group-hover:scale-110 transition-all duration-300">
                <Icon name="whatsapp" size={24} className="text-white" />
              </div>
              <h3 className="font-black text-gray-900 mb-1">WhatsApp</h3>
              <p className="text-sm text-gray-500 mb-3">Chat langsung dengan kami</p>
              <p className="text-green-600 font-bold text-sm">{SITE_CONFIG.phone}</p>
            </motion.div>
          </motion.a>

          <motion.div variants={item}>
            <motion.div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md border border-gray-100" whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-red-500/30">
                <Icon name="location" size={24} className="text-white" />
              </div>
              <h3 className="font-black text-gray-900 mb-1">Lokasi</h3>
              <p className="text-sm text-gray-500 mb-3">Kunjungi showroom kami</p>
              <p className="text-gray-900 text-sm font-bold">{SITE_CONFIG.location.full}</p>
            </motion.div>
          </motion.div>

          <motion.a href={SITE_CONFIG.tiktokUrl} target="_blank" rel="noopener noreferrer" className="block group" variants={item}>
            <motion.div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-gray-300 transition-all duration-300" whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
              <div className="w-14 h-14 bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-black/30 group-hover:shadow-black/50 group-hover:scale-110 transition-all duration-300">
                <Icon name="tiktok" size={24} className="text-white" />
              </div>
              <h3 className="font-black text-gray-900 mb-1">TikTok</h3>
              <p className="text-sm text-gray-500 mb-3">Lihat video kendaraan kami</p>
              <p className="text-red-600 font-bold text-sm">@rian.mobil.bondow</p>
            </motion.div>
          </motion.a>
        </motion.div>

        <motion.div className="mt-12 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }}>
          <motion.a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="whatsapp" size="lg">
              <Icon name="whatsapp" size={20} />
              Hubungi Sekarang
            </Button>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
