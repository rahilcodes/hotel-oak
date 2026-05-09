"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { useBookingStore } from "@/store/bookingStore";
import { cn } from "@/lib/utils";

const links = [
  { label: "Rooms", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "Dining", href: "#dining" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

function goto(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openBooking } = useBookingStore();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled ? "bg-[#09090b]/90 backdrop-blur-md border-b border-[#27272A] py-4 shadow-subtle" : "bg-transparent py-6"
        )}
      >
        <div className="wrap flex items-center justify-between gap-6">
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex flex-col shrink-0 text-left">
            <span className={cn("text-xl tracking-tight font-medium transition-colors duration-300", scrolled ? "text-white" : "text-white")}>
              HOTEL OAK
            </span>
            <span className={cn("text-[0.65rem] tracking-widest uppercase transition-colors duration-300", scrolled ? "text-[#A1A1AA]" : "text-[#A1A1AA]")}>
              by Maxx Group
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => goto(l.href)}
                className={cn(
                  "text-sm tracking-wide transition-colors duration-300",
                  scrolled ? "text-[#A1A1AA] hover:text-white" : "text-white/80 hover:text-white"
                )}
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-6 shrink-0">
            <a href="tel:+919959503444" className={cn("flex items-center gap-2 transition-colors duration-300", scrolled ? "text-[#A1A1AA] hover:text-white" : "text-white/80 hover:text-white")}>
              <Phone size={14} />
              <span className="text-sm tracking-wide">+91 99595 03444</span>
            </a>
            <button
              onClick={openBooking}
              className={cn(
                "px-6 py-2.5 text-xs tracking-widest uppercase transition-all duration-300",
                scrolled ? "bg-white text-[#09090b] hover:bg-[#EAEAEA]" : "bg-white text-[#09090b] hover:bg-white/90"
              )}
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden transition-colors duration-300 text-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#09090b] flex flex-col pt-28 pb-8 px-8"
          >
            <nav className="flex flex-col gap-8 flex-1">
              {links.map((l, i) => (
                <motion.button
                  key={l.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => { setMenuOpen(false); goto(l.href); }}
                  className="text-4xl tracking-tight text-white text-left"
                >
                  {l.label}
                </motion.button>
              ))}
            </nav>
            <div className="flex flex-col gap-4">
              <a href="tel:+919959503444" className="flex items-center gap-4 border border-[#27272A] p-4 text-white">
                <Phone size={18} />
                <span className="text-lg tracking-wide">+91 99595 03444</span>
              </a>
              <button
                onClick={() => { setMenuOpen(false); openBooking(); }}
                className="btn-primary w-full py-4 text-sm"
              >
                Reserve Your Stay
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
