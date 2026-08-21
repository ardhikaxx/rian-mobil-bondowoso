"use client";

import Link from "next/link";
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
    <article className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 hover:-translate-y-2">
      <Link href={`/mobil/${vehicle.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          <div className="w-full h-full flex items-center justify-center text-gray-400 group-hover:scale-110 transition-transform duration-700">
            <Icon name="car" size={72} className="opacity-20" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-3 left-3">
            <Badge variant={statusVariant}>{vehicle.status}</Badge>
          </div>
          <div className="absolute top-3 right-3">
            <Badge variant="info">{vehicle.category}</Badge>
          </div>
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
              <p className="text-lg font-black text-gray-900">{vehicle.priceFormatted}</p>
            </div>
          </div>
        </div>
      </Link>

      <div className="p-5">
        <Link href={`/mobil/${vehicle.slug}`} className="block">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-1">
            {vehicle.name}
          </h3>
          <p className="text-2xl font-black text-red-600 mt-2 tracking-tight">
            {vehicle.priceFormatted}
          </p>
        </Link>

        <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1.5 text-sm text-gray-600">
            <div className="w-6 h-6 bg-red-50 rounded-md flex items-center justify-center">
              <Icon name="calendar" size={12} className="text-red-500" />
            </div>
            <span className="font-medium">{vehicle.year}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-gray-600">
            <div className="w-6 h-6 bg-red-50 rounded-md flex items-center justify-center">
              <Icon name="gear" size={12} className="text-red-500" />
            </div>
            <span className="font-medium truncate">{vehicle.transmission}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-gray-600">
            <div className="w-6 h-6 bg-red-50 rounded-md flex items-center justify-center">
              <Icon name="fuel" size={12} className="text-red-500" />
            </div>
            <span className="font-medium truncate">{vehicle.fuelType}</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-sm text-gray-500 mt-2">
          <Icon name="speedometer" size={14} className="text-red-400" />
          <span>{vehicle.mileageFormatted}</span>
          <span className="mx-1.5 text-gray-300">|</span>
          <Icon name="color" size={14} className="text-red-400" />
          <span>{vehicle.color}</span>
        </div>

        <div className="flex gap-2 mt-5">
          <Link href={`/mobil/${vehicle.slug}`} className="flex-1">
            <Button variant="outline" size="sm" className="w-full">
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
    </article>
  );
}
