"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { AboutSection } from "@/components/sections/AboutSection";
import { RoomsSection } from "@/components/sections/RoomsSection";
import { AmenitiesSection } from "@/components/sections/AmenitiesSection";
import { DiningSection } from "@/components/sections/DiningSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { CTASection } from "@/components/sections/CTASection";
import { BookingModal } from "@/components/booking/BookingModal";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pb-[56px] md:pb-0">
        <HeroSection />
        <TrustBar />
        <AboutSection />
        <RoomsSection />
        <AmenitiesSection />
        <DiningSection />
        <GallerySection />
        <TestimonialsSection />
        <LocationSection />
        <CTASection />
      </main>
      <Footer />
      <BookingModal />
    </>
  );
}
