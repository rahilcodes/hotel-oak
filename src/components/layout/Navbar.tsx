"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { useBookingStore } from "@/store/bookingStore";
import { cn } from "@/lib/utils";

const links = [
  { label: "Rooms",     href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "Dining",    href: "#dining" },
  { label: "Gallery",   href: "#gallery" },
  { label: "Location",  href: "#location" },
];

function goto(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const { openBooking }             = useBookingStore();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Desktop / tablet navbar ── */}
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-400",
          scrolled
            ? "bg-oak-black/95 backdrop-blur-xl border-b border-white/5 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="wrap flex items-center justify-between gap-6">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex flex-col shrink-0 group"
          >
            <span className="font-playfair text-oak-cream text-xl tracking-[0.08em] leading-none group-hover:text-oak-gold transition-colors duration-300">
              HOTEL OAK
            </span>
            <span className="eyebrow text-oak-gold/70 mt-0.5 tracking-[0.3em] text-[0.5rem]">
              by Maxx Group
            </span>
          </button>

          {/* Nav links */}
          <nav className="hidden lg:flex items-center gap-9" aria-label="Main navigation">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => goto(l.href)}
                className="eyebrow text-oak-muted hover:text-oak-cream transition-colors duration-300 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-oak-gold transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-5 shrink-0">
            <a
              href="tel:+919959503444"
              className="flex items-center gap-2 text-oak-muted hover:text-oak-gold transition-colors duration-300"
            >
              <Phone size={13} />
              <span className="eyebrow text-[0.58rem]">+91 99595 03444</span>
            </a>
            <a
              href="https://wa.me/919959503444"
              target="_blank" rel="noopener noreferrer"
              className="text-oak-muted hover:text-green-400 transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle size={16} />
            </a>
            <button onClick={openBooking} className="btn-gold text-[0.62rem] px-5 py-2.5">
              Book Now
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-oak-cream hover:text-oak-gold transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 bg-oak-black flex flex-col pt-24 pb-6 px-6"
          >
            <nav className="flex flex-col gap-5 flex-1">
              {links.map((l, i) => (
                <motion.button
                  key={l.href}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.055 }}
                  onClick={() => { setMenuOpen(false); goto(l.href); }}
                  className="font-playfair text-3xl text-oak-cream hover:text-oak-gold transition-colors duration-300 text-left italic border-b border-white/5 pb-5"
                >
                  {l.label}
                </motion.button>
              ))}
            </nav>
            <div className="flex flex-col gap-3 pt-5 border-t border-white/8">
              <a href="tel:+919959503444" className="flex items-center gap-3 bg-oak-dark-2 border border-white/8 rounded-sm px-4 py-3.5">
                <Phone size={15} className="text-oak-gold shrink-0" />
                <div>
                  <p className="eyebrow text-oak-gold text-[0.52rem] mb-0.5">Call Now</p>
                  <p className="text-oak-cream text-sm font-medium">+91 99595 03444</p>
                </div>
              </a>
              <a href="https://wa.me/919959503444" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-900/20 border border-green-500/15 rounded-sm px-4 py-3.5">
                <MessageCircle size={15} className="text-green-400 shrink-0" />
                <div>
                  <p className="eyebrow text-green-400 text-[0.52rem] mb-0.5">WhatsApp</p>
                  <p className="text-oak-cream text-sm font-medium">+91 99595 03444</p>
                </div>
              </a>
              <button
                onClick={() => { setMenuOpen(false); openBooking(); }}
                className="btn-gold w-full py-4"
              >
                Reserve Your Stay
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile bottom bar ── */}
      <div className="mobile-cta-bar bg-oak-black/98 backdrop-blur-lg">
        <a href="tel:+919959503444"
          className="flex-1 flex flex-col items-center justify-center py-3.5 gap-1 bg-oak-dark-2 border-r border-white/6">
          <Phone size={16} className="text-oak-gold" />
          <span className="text-oak-cream text-[0.6rem] font-medium tracking-wide">Call</span>
        </a>
        <a href="https://wa.me/919959503444" target="_blank" rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-3.5 gap-1 bg-green-900/25 border-r border-white/6">
          <MessageCircle size={16} className="text-green-400" />
          <span className="text-green-300 text-[0.6rem] font-medium tracking-wide">WhatsApp</span>
        </a>
        <button onClick={openBooking}
          className="flex-1 flex flex-col items-center justify-center py-3.5 gap-1 bg-oak-gold hover:bg-oak-gold-light transition-colors duration-200">
          <span className="text-oak-black text-[0.6rem] font-bold tracking-widest uppercase">Book Now</span>
        </button>
      </div>

      {/* ── Desktop floating buttons ── */}
      <div className="float-cta">
        <motion.a href="https://wa.me/919959503444" target="_blank" rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.2 }}
          className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-500 flex items-center justify-center shadow-luxury transition-all duration-300 hover:scale-110"
          aria-label="WhatsApp Hotel Oak"
        >
          <MessageCircle size={20} className="text-white" />
        </motion.a>
        <motion.a href="tel:+919959503444"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.4 }}
          className="w-12 h-12 rounded-full bg-oak-gold hover:bg-oak-gold-light flex items-center justify-center shadow-luxury transition-all duration-300 hover:scale-110"
          aria-label="Call Hotel Oak"
        >
          <Phone size={18} className="text-oak-black" />
        </motion.a>
      </div>
    </>
  );
}
