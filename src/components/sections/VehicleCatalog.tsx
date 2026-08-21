"use client";

import { useState, useMemo } from "react";
import { vehicles } from "@/data/vehicles";
import { VEHICLE_CATEGORIES, VehicleCategory } from "@/data/constants";
import VehicleCard from "@/components/ui/VehicleCard";
import Icon from "@/components/ui/Icon";

export default function VehicleCatalog() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<VehicleCategory>("Semua");

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle) => {
      const matchesCategory =
        selectedCategory === "Semua" || vehicle.category === selectedCategory;
      const matchesSearch =
        search === "" ||
        vehicle.name.toLowerCase().includes(search.toLowerCase()) ||
        vehicle.brand.toLowerCase().includes(search.toLowerCase()) ||
        vehicle.model.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory]);

  return (
    <section id="mobil-tersedia" className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
            <Icon name="car" size={14} />
            <span>Inventory Kami</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Mobil Tersedia
          </h2>
          <p className="text-gray-600 text-lg">
            Pilihan mobil bekas berkualitas untuk Anda. Semua kendaraan dalam
            kondisi terawat dan siap dikendarai.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search Input */}
          <div className="relative flex-1">
            <Icon
              name="search"
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Cari mobil berdasarkan nama atau brand..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all shadow-sm"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
            {VEHICLE_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-3 rounded-xl text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-600/30"
                    : "bg-white text-gray-600 hover:bg-gray-100 border-2 border-gray-200 hover:border-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 font-medium">
            Menampilkan <span className="text-red-600 font-bold">{filteredVehicles.length}</span> dari <span className="font-bold">{vehicles.length}</span> unit
          </p>
        </div>

        {/* Vehicle Grid */}
        {filteredVehicles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
            <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon
                name="car"
                size={40}
                className="text-red-300"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              Tidak ada mobil yang ditemukan
            </h3>
            <p className="text-gray-500 text-sm">
              Coba ubah filter atau kata kunci pencarian Anda.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
