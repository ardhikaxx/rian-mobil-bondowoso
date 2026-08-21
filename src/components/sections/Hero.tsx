"use client";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { SITE_CONFIG } from "@/data/constants";
import { generateWhatsAppLink } from "@/lib/utils";
import Image from "next/image";

import type { Variants, Transition } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
} satisfies Variants;

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
} satisfies Variants;

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
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg-v2.jpg"
          alt="Showroom Rian Mobil Bondowoso"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 lg:bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0 w-full">
        <div className="max-w-3xl">
          {/* Content */}
          <div className="space-y-8">
            <motion.div className="space-y-4" variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 px-5 py-2.5 rounded-full text-sm font-bold backdrop-blur-sm border border-red-500/20">
                <Icon name="location" size={14} />
                <span>{SITE_CONFIG.location.full}</span>
              </div>
            </motion.div>

            <motion.h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
              Temukan Mobil Bekas{" "}
              <span className="text-red-500 drop-shadow-md">
                Pilihan Anda
              </span>
            </motion.h1>

            <motion.p className="text-lg text-gray-300 leading-relaxed max-w-xl font-medium drop-shadow-md" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
              {SITE_CONFIG.description}. Lihat pilihan kendaraan kami dan hubungi
              tim melalui WhatsApp untuk informasi unit dan harga terbaik.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
              <Button variant="primary" size="lg" onClick={scrollToVehicles} className="sm:w-auto">
                <Icon name="car" size={20} />
                Lihat Mobil Tersedia
              </Button>
              <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="lg">
                  <Icon name="whatsapp" size={20} />
                  Chat WhatsApp
                </Button>
              </a>
            </motion.div>

            <motion.div className="flex flex-wrap items-center gap-6 pt-4" variants={fadeUp} initial="hidden" animate="visible" custom={4}>
              {["Informasi Transparan", "Respon Cepat", "Lokasi Strategis"].map((text) => (
                <div key={text} className="flex items-center gap-2 text-sm text-red-400 drop-shadow-md">
                  <div className="w-6 h-6 bg-red-600/20 rounded-full flex items-center justify-center border border-red-600/30 backdrop-blur-sm">
                    <Icon name="check" size={12} className="text-red-500" />
                  </div>
                  <span className="font-bold tracking-wide">{text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <motion.div
          className="w-8 h-12 border-2 border-gray-600 rounded-full flex justify-center pt-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1.5 h-3 bg-red-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
