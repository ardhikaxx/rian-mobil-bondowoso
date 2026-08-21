"use client";

import { useState, useEffect } from "react";
import Icon from "@/components/ui/Icon";
import { generateWhatsAppLink } from "@/lib/utils";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href={generateWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 animate-pulse-glow"
      aria-label="Chat WhatsApp dengan Rian Mobil Bondowoso"
    >
      <Icon name="whatsapp" size={28} className="text-white" />
    </a>
  );
}
