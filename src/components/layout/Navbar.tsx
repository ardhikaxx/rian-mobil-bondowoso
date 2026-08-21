"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAVIGATION, SITE_CONFIG } from "@/data/constants";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { generateWhatsAppLink } from "@/lib/utils";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-xl shadow-2xl shadow-black/20 border-b border-red-600/20"
            : "bg-black/80 backdrop-blur-sm"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden shadow-lg shadow-red-600/20 group-hover:shadow-red-600/40 transition-all">
                <Image src="/images/logo.jpeg" alt="Logo Rian Mobil Bondowoso" fill className="object-cover" />
              </div>
              <div className="hidden sm:block">
                <p className="font-black text-white text-sm lg:text-base leading-tight tracking-tight">
                  Rian Mobil
                </p>
                <p className="text-[10px] lg:text-xs text-red-400 font-bold tracking-widest uppercase leading-tight">
                  Bondowoso
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAVIGATION.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all cursor-pointer relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-red-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="whatsapp" size="sm">
                  <Icon name="whatsapp" size={16} />
                  Hubungi Kami
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            >
              <Icon name={isOpen ? "close" : "menu"} size={24} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] bg-gradient-to-b from-gray-950 to-black shadow-2xl transition-transform duration-500 ease-out lg:hidden border-l border-red-600/20 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-600/20">
                <Icon name="car" size={18} className="text-white" />
              </div>
              <div>
                <span className="font-black text-white text-sm">Rian Mobil</span>
                <p className="text-[9px] text-red-400 font-bold tracking-widest uppercase">
                  Bondowoso
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              aria-label="Tutup menu"
            >
              <Icon name="close" size={20} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex-1 overflow-y-auto p-5">
            <div className="space-y-1">
              {NAVIGATION.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="w-full text-left px-4 py-3.5 text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all cursor-pointer flex items-center gap-3 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full group-hover:scale-150 transition-transform" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-5 border-t border-gray-800">
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button variant="whatsapp" size="lg" className="w-full">
                <Icon name="whatsapp" size={18} />
                Chat WhatsApp
              </Button>
            </a>
            <div className="mt-4 flex items-center justify-center gap-4">
              <a
                href={SITE_CONFIG.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="TikTok Rian Mobil Bondowoso"
              >
                <Icon name="tiktok" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
