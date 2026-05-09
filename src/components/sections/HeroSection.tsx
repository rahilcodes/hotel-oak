"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useBookingStore } from "@/store/bookingStore";

export function HeroSection() {
  const { openBooking } = useBookingStore();

  return (
    <section className="relative w-full h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#09090B]">
      {/* Background Image Wrapper for Parallax effect later if needed */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hotel-building-view.jpg"
          alt="Hotel Oak by Maxx Group"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#09090B]" />

      {/* Content */}
      <div className="relative z-10 wrap w-full h-full flex flex-col justify-end pb-24 md:pb-32">
        <div className="max-w-4xl text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <span className="eyebrow text-white tracking-[0.2em] bg-black/60 backdrop-blur px-4 py-2 uppercase text-xs border border-white/10">
              5 km from Rajiv Gandhi International Airport
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[3.5rem] sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tighter leading-[1.05] mb-8 font-light"
          >
            Refined Elegance, <br />
            <span className="font-medium">Moments Away.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button onClick={openBooking} className="btn-primary w-full sm:w-auto border-white">
              Reserve Your Stay
            </button>
            <button
              onClick={() => document.querySelector("#rooms")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-secondary w-full sm:w-auto"
            >
              Explore Rooms
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
