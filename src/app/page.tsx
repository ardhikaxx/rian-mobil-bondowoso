import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import Hero from "@/components/sections/Hero";
import TiktokShowcase from "@/components/sections/TiktokShowcase";
import VehicleCatalog from "@/components/sections/VehicleCatalog";
import Advantages from "@/components/sections/Advantages";
import About from "@/components/sections/About";
import PurchaseProcess from "@/components/sections/PurchaseProcess";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TiktokShowcase />
        <VehicleCatalog />
        <Advantages />
        <About />
        <PurchaseProcess />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
