import { Testimonial } from "@/data/types";
import Icon from "./Icon";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-100">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Icon
            key={i}
            name={i < testimonial.rating ? "star" : "starEmpty"}
            size={18}
            className={
              i < testimonial.rating ? "text-amber-400" : "text-gray-300"
            }
          />
        ))}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-red-500/30">
          {testimonial.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)}
        </div>
        <div>
          <p className="font-bold text-gray-900 text-sm">
            {testimonial.name}
          </p>
          <p className="text-xs text-gray-500">
            {testimonial.location} • {testimonial.vehicle}
          </p>
        </div>
      </div>
    </div>
  );
}
