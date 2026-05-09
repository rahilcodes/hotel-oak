"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { RoomsSection } from "@/components/sections/RoomsSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { BookingModal } from "@/components/booking/BookingModal";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <RoomsSection />
        <LocationSection />
      </main>
      <Footer />
      <BookingModal />
    </>
  );
}
