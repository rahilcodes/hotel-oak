"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, MapPin, Plane, Phone, MessageCircle } from "lucide-react";
import { useBookingStore } from "@/store/bookingStore";
import { useLenis } from "@/hooks/useLenis";

export function HeroSection() {
  useLenis();
  const { openBooking } = useBookingStore();

  return (
    <section className="relative w-full h-svh min-h-[600px] max-h-[1000px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hotel-building-view.jpg"
          alt="Hotel Oak by Maxx Group — Luxury Hotel near Hyderabad Airport, Shamshabad"
          fill priority sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full wrap flex flex-col justify-center">
        <div className="max-w-xl xl:max-w-2xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex items-center gap-2 mb-6 md:mb-7"
          >
            <Plane size={11} className="text-oak-gold" />
            <span className="eyebrow tracking-[0.22em]">5 km · Rajiv Gandhi International Airport</span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-2 md:mb-3">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.45, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-playfair text-[2.8rem] sm:text-6xl md:text-7xl lg:text-8xl text-oak-cream leading-[1.05] tracking-[-0.02em]"
            >
              Where Luxury
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-7 md:mb-9">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-playfair text-[2.8rem] sm:text-6xl md:text-7xl lg:text-8xl text-oak-gold italic leading-[1.05] tracking-[-0.02em]"
            >
              Meets the Sky.
            </motion.h1>
          </div>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8 }}
            className="text-white/70 text-base md:text-lg font-light leading-relaxed max-w-md mb-8 md:mb-10"
          >
            A sanctuary of refined elegance moments from the airport — where every arrival becomes an arrival in luxury.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 mb-10 md:mb-12"
          >
            <button onClick={openBooking} className="btn-gold">
              Reserve Your Stay
            </button>
            <button
              onClick={() => document.querySelector("#rooms")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-outline"
            >
              Explore Rooms
            </button>
          </motion.div>

          {/* Contact row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="flex flex-wrap gap-6"
          >
            <a href="tel:+919959503444" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-full border border-oak-gold/30 flex items-center justify-center group-hover:border-oak-gold/70 transition-colors duration-300">
                <Phone size={12} className="text-oak-gold" />
              </div>
              <div>
                <p className="eyebrow text-oak-gold/50 text-[0.48rem] mb-0.5">Call Direct</p>
                <p className="text-white text-sm font-medium tracking-wide group-hover:text-oak-gold transition-colors duration-300">
                  +91 99595 03444
                </p>
              </div>
            </a>
            <a href="https://wa.me/919959503444" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-full border border-green-500/30 flex items-center justify-center group-hover:border-green-400/70 transition-colors duration-300">
                <MessageCircle size={12} className="text-green-400" />
              </div>
              <div>
                <p className="eyebrow text-green-400/50 text-[0.48rem] mb-0.5">WhatsApp</p>
                <p className="text-white text-sm font-medium tracking-wide group-hover:text-green-400 transition-colors duration-300">
                  +91 99595 03444
                </p>
              </div>
            </a>
            <div className="flex items-center gap-2 text-white/40">
              <MapPin size={11} />
              <span className="text-xs font-light tracking-wide">Rudra Colony, Shamshabad</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10 group"
      >
        <span className="eyebrow text-white/40 text-[0.5rem] tracking-[0.3em]">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown size={16} className="text-oak-gold/50 group-hover:text-oak-gold transition-colors duration-300" />
        </motion.div>
      </motion.button>

      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-oak-black to-transparent pointer-events-none" />
    </section>
  );
}
