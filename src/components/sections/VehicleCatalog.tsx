"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { vehicles } from "@/data/vehicles";
import { VEHICLE_CATEGORIES, VehicleCategory } from "@/data/constants";
import VehicleCard from "@/components/ui/VehicleCard";
import Icon from "@/components/ui/Icon";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function VehicleCatalog() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<VehicleCategory>("Semua");

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle) => {
      const matchesCategory = selectedCategory === "Semua" || vehicle.category === selectedCategory;
      const matchesSearch = search === "" || vehicle.name.toLowerCase().includes(search.toLowerCase()) || vehicle.brand.toLowerCase().includes(search.toLowerCase()) || vehicle.model.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory]);

  return (
    <section id="mobil-tersedia" className="py-16 lg:py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center max-w-2xl mx-auto mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 border border-red-600/20 px-4 py-2 rounded-full text-sm font-bold mb-4">
            <Icon name="car" size={14} />
            <span>Inventory Kami</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-4 tracking-tight">Mobil Tersedia</h2>
          <p className="text-gray-400 text-lg">Pilihan mobil bekas berkualitas untuk Anda. Semua kendaraan dalam kondisi terawat dan siap dikendarai.</p>
        </motion.div>

        <motion.div className="flex flex-col sm:flex-row gap-4 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
          <div className="relative flex-1">
            <Icon name="search" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input type="text" placeholder="Cari mobil berdasarkan nama atau brand..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-12 pr-4 py-3.5 bg-gray-900 border-2 border-gray-800 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all shadow-sm" />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
            {VEHICLE_CATEGORIES.map((category) => (
              <motion.button key={category} onClick={() => setSelectedCategory(category)} className={`px-5 py-3 rounded-xl text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${selectedCategory === category ? "bg-red-600 text-white shadow-lg shadow-red-600/20" : "bg-gray-900 text-gray-400 hover:bg-gray-800 border-2 border-gray-800 hover:border-gray-700 hover:text-white"}`} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="mb-6">
          <p className="text-sm text-gray-500 font-medium">Menampilkan <span className="text-red-600 font-bold">{filteredVehicles.length}</span> dari <span className="font-bold">{vehicles.length}</span> unit</p>
        </div>

        <AnimatePresence mode="wait">
          {filteredVehicles.length > 0 ? (
            <motion.div key={selectedCategory + search} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" variants={container} initial="hidden" animate="visible">
              {filteredVehicles.map((vehicle) => (
                <motion.div key={vehicle.id} variants={item}>
                  <VehicleCard vehicle={vehicle} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div key="empty" className="text-center py-20 bg-gray-900 rounded-3xl border border-gray-800" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }}>
              <div className="w-20 h-20 bg-red-600/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-red-600/20">
                <Icon name="car" size={40} className="text-red-500/50" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Tidak ada mobil yang ditemukan</h3>
              <p className="text-gray-400 text-sm">Coba ubah filter atau kata kunci pencarian Anda.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
