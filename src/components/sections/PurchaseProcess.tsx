"use client";

import { motion } from "framer-motion";
import { purchaseSteps } from "@/data/content";
import Icon from "@/components/ui/Icon";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
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

export default function PurchaseProcess() {
  return (
    <section id="cara-pembelian" className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center max-w-2xl mx-auto mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
            <Icon name="check" size={14} />
            <span>Proses Mudah</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight">Cara Pembelian Mobil</h2>
          <p className="text-gray-600 text-lg">Proses pembelian yang mudah dan transparan. Ikuti langkah-langkah berikut untuk mendapatkan mobil impian Anda.</p>
        </motion.div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <div className="hidden lg:block absolute top-24 left-[calc(12.5%+32px)] right-[calc(12.5%+32px)] h-0.5 bg-gradient-to-r from-gray-200 via-red-200 to-gray-200" />

          {purchaseSteps.map((step) => (
            <motion.div key={step.id} className="relative" variants={item}>
              <div className="text-center">
                <motion.div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-lg shadow-red-600/30 mb-6" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                  <Icon name={step.icon} size={24} className="text-white" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-white rounded-full shadow-lg flex items-center justify-center text-xs font-black text-red-600 border-2 border-red-100">{step.id}</span>
                </motion.div>
                <h3 className="text-lg font-black text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="mt-16 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-6 py-3 shadow-sm">
            <Icon name="info" size={16} className="text-red-500" />
            <p className="text-sm text-gray-600">Detail proses transaksi dapat dikonfirmasi langsung kepada pihak <strong className="text-gray-900">Rian Mobil Bondowoso</strong> melalui WhatsApp.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
