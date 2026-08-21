"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Vehicle } from "@/data/types";
import Badge from "./Badge";
import Icon from "./Icon";
import Button from "./Button";
import { generateWhatsAppLink } from "@/lib/utils";

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const statusVariant =
    vehicle.status === "Tersedia"
      ? "success"
      : vehicle.status === "Booking"
        ? "warning"
        : "danger";

  const whatsappLink = generateWhatsAppLink(vehicle.name);

  return (
    <motion.article 
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group bg-gray-900 rounded-2xl overflow-hidden shadow-md shadow-black/20 hover:shadow-xl hover:shadow-red-900/10 transition-colors duration-300 border border-gray-800 hover:border-red-600/40"
    >
      <Link href={`/mobil/${vehicle.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
          <div className="w-full h-full flex items-center justify-center text-gray-700 group-hover:scale-105 transition-transform duration-[600ms] ease-out">
            <Icon name="car" size={72} className="opacity-20" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] ease-out" />
          <div className="absolute top-3 left-3">
            <Badge variant={statusVariant}>{vehicle.status}</Badge>
          </div>
          <div className="absolute top-3 right-3">
            <Badge variant="info">{vehicle.category}</Badge>
          </div>
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-[400ms] ease-out translate-y-2 group-hover:translate-y-0">
            <div className="bg-black/80 backdrop-blur-md rounded-xl px-4 py-2 shadow-lg border border-gray-800">
              <p className="text-lg font-black text-white">{vehicle.priceFormatted}</p>
            </div>
          </div>
        </div>
      </Link>

      <div className="p-5">
        <Link href={`/mobil/${vehicle.slug}`} className="block">
          <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors duration-300 ease-out line-clamp-1">
            {vehicle.name}
          </h3>
          <p className="text-2xl font-black text-red-500 mt-2 tracking-tight">
            {vehicle.priceFormatted}
          </p>
        </Link>

        <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-gray-800">
          <div className="flex items-center gap-1.5 text-sm text-gray-400">
            <div className="w-6 h-6 bg-red-600/10 rounded-md flex items-center justify-center border border-red-600/20">
              <Icon name="calendar" size={12} className="text-red-400" />
            </div>
            <span className="font-medium">{vehicle.year}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-gray-400">
            <div className="w-6 h-6 bg-red-600/10 rounded-md flex items-center justify-center border border-red-600/20">
              <Icon name="gear" size={12} className="text-red-400" />
            </div>
            <span className="font-medium truncate">{vehicle.transmission}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-gray-400">
            <div className="w-6 h-6 bg-red-600/10 rounded-md flex items-center justify-center border border-red-600/20">
              <Icon name="fuel" size={12} className="text-red-400" />
            </div>
            <span className="font-medium truncate">{vehicle.fuelType}</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-sm text-gray-500 mt-3">
          <Icon name="speedometer" size={14} className="text-red-500/70" />
          <span>{vehicle.mileageFormatted}</span>
          <span className="mx-1.5 text-gray-700">|</span>
          <Icon name="color" size={14} className="text-red-500/70" />
          <span>{vehicle.color}</span>
        </div>

        <div className="flex gap-2 mt-5">
          <Link href={`/mobil/${vehicle.slug}`} className="flex-1">
            <Button variant="outline" size="sm" className="w-full bg-transparent border-gray-700 text-gray-300 hover:text-white hover:border-red-500">
              Lihat Detail
            </Button>
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button variant="whatsapp" size="sm" className="w-full">
              <Icon name="whatsapp" size={14} />
              Tanya
            </Button>
          </a>
        </div>
      </div>
    </motion.article>
  );
}
