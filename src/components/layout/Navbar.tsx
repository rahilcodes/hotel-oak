"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { useBookingStore } from "@/store/bookingStore";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const links = [
  { label: "Rooms", href: "#rooms" },
  { label: "About", href: "#about" },
  { label: "Location", href: "#location" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openBooking } = useBookingStore();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === "/") {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    } else {
      setMenuOpen(false);
    }
  };

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
          <Link href="/" className="flex flex-col shrink-0 text-left">
            <span className={cn("text-xl tracking-tight font-medium transition-colors duration-300", scrolled ? "text-white" : "text-white")}>
              HOTEL OAK
            </span>
            <span className={cn("text-[0.65rem] tracking-widest uppercase transition-colors duration-300", scrolled ? "text-[#A1A1AA]" : "text-[#A1A1AA]")}>
              by Maxx Group
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.href}
                href={`/${l.href}`}
                onClick={(e) => handleNavClick(e, l.href)}
                className={cn(
                  "text-sm tracking-wide transition-colors duration-300",
                  scrolled ? "text-[#A1A1AA] hover:text-white" : "text-white/80 hover:text-white"
                )}
              >
                {l.label}
              </Link>
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
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={`/${l.href}`}
                    onClick={(e) => handleNavClick(e, l.href)}
                    className="text-4xl tracking-tight text-white text-left block w-full"
                  >
                    {l.label}
                  </Link>
                </motion.div>
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
