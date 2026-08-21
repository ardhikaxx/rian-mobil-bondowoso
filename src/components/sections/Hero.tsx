"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { SITE_CONFIG } from "@/data/constants";
import { generateWhatsAppLink } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function Hero() {
  const scrollToVehicles = () => {
    const element = document.querySelector("#mobil-tersedia");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center bg-black overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-red-950/30" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(220, 38, 38, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.2) 0%, transparent 40%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-red-600/5 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-red-600/5 rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <motion.div
              className="space-y-4"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 px-5 py-2.5 rounded-full text-sm font-bold backdrop-blur-sm border border-red-500/20">
                <Icon name="location" size={14} />
                <span>{SITE_CONFIG.location.full}</span>
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Temukan Mobil Bekas{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">
                Pilihan Anda
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-400 leading-relaxed max-w-xl"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              {SITE_CONFIG.description}. Lihat pilihan kendaraan kami dan hubungi
              tim melalui WhatsApp untuk informasi unit dan harga terbaik.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <Button
                variant="primary"
                size="lg"
                onClick={scrollToVehicles}
                className="sm:w-auto"
              >
                <Icon name="car" size={20} />
                Lihat Mobil Tersedia
              </Button>
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="whatsapp" size="lg">
                  <Icon name="whatsapp" size={20} />
                  Chat WhatsApp
                </Button>
              </a>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-6 pt-4"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
            >
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-6 h-6 bg-red-600/20 rounded-full flex items-center justify-center">
                  <Icon name="check" size={12} className="text-red-400" />
                </div>
                <span>Informasi Transparan</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-6 h-6 bg-red-600/20 rounded-full flex items-center justify-center">
                  <Icon name="check" size={12} className="text-red-400" />
                </div>
                <span>Respon Cepat</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-6 h-6 bg-red-600/20 rounded-full flex items-center justify-center">
                  <Icon name="check" size={12} className="text-red-400" />
                </div>
                <span>Lokasi Strategis</span>
              </div>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            className="relative hidden lg:block"
            variants={scaleIn}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl overflow-hidden shadow-2xl border border-gray-800"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-[4/3] flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-3xl flex items-center justify-center border border-red-600/20">
                    <Icon name="car" size={56} className="text-red-500/40" />
                  </div>
                  <p className="text-gray-500 text-sm font-medium">
                    Placeholder untuk foto showroom kendaraan
                  </p>
                  <p className="text-gray-600 text-xs">
                    Ganti dengan foto asli dari Rian Mobil Bondowoso
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Stats */}
            <motion.div
              className="absolute -bottom-8 -left-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-5 shadow-2xl border border-gray-800"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-600/30">
                  <Icon name="check" size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Unit Tersedia</p>
                  <p className="font-black text-white">Beragam Pilihan</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-8 h-12 border-2 border-gray-600 rounded-full flex justify-center pt-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1.5 h-3 bg-red-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
