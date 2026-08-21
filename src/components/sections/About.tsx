"use client";

import { motion } from "framer-motion";
import Icon from "@/components/ui/Icon";
import { SITE_CONFIG } from "@/data/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export default function About() {
  return (
    <section id="tentang-kami" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold">
                <Icon name="heart" size={14} />
                <span>Tentang Kami</span>
              </div>
            </motion.div>

            <motion.h2 className="text-3xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
              Jual Beli Mobil Bekas Terpercaya di{" "}
              <span className="text-red-600">Bondowoso</span>
            </motion.h2>

            <motion.div className="space-y-4 text-gray-600 leading-relaxed" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
              <p>
                <strong className="text-gray-900">{SITE_CONFIG.name}</strong> adalah usaha jual beli mobil bekas yang berlokasi di{" "}
                <strong className="text-gray-900">{SITE_CONFIG.location.full}</strong>. Kami melayani kebutuhan masyarakat Bondowoso dan sekitarnya yang mencari kendaraan bekas berkualitas dengan harga yang terjangkau.
              </p>
              <p>
                Dengan lokasi yang strategis di Prajekan, Bondowoso, kami berusaha memberikan kemudahan bagi calon pembeli untuk melihat langsung kondisi kendaraan yang tersedia. Setiap mobil yang kami tawarkan telah melalui pengecekan untuk memastikan kondisi terbaik bagi pembeli.
              </p>
              <p>
                Kami percaya bahwa transparansi dan kejujuran adalah kunci dalam bisnis jual beli mobil bekas. Oleh karena itu, informasi mengenai kondisi kendaraan disampaikan secara jelas kepada calon pembeli.
              </p>
            </motion.div>

            <motion.div className="grid grid-cols-2 gap-4 pt-4" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}>
              {[
                { title: "Transparan", desc: "Info jujur kendaraan" },
                { title: "Terjangkau", desc: "Harga bersaing" },
                { title: "Lokasi Strategis", desc: "Mudah dijangkau" },
                { title: "Ramah & Profesional", desc: "Pelayanan terbaik" },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-red-500/20">
                    <Icon name="check" size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div className="relative" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl flex items-center justify-center">
                    <Icon name="car" size={56} className="text-gray-400 opacity-60" />
                  </div>
                  <p className="text-gray-500 text-sm font-medium">Placeholder untuk foto lokasi atau showroom</p>
                  <p className="text-gray-400 text-xs">Ganti dengan foto asli Rian Mobil Bondowoso</p>
                </div>
              </div>
            </div>

            <motion.div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-5 shadow-2xl border border-gray-800" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-600/30">
                  <Icon name="location" size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Lokasi Kami</p>
                  <p className="text-sm font-black text-white">{SITE_CONFIG.location.area}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
