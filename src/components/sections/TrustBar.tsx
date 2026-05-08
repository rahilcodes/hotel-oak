"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Plane, Wifi, UtensilsCrossed, Car, BedDouble, Star } from "lucide-react";

const badges = [
  { icon: Plane,           label: "Airport Hotel",  sub: "5 km from RGIA" },
  { icon: Wifi,            label: "Free WiFi",       sub: "Ultra-fast broadband" },
  { icon: UtensilsCrossed, label: "Fine Dining",     sub: "Multi-cuisine" },
  { icon: Car,             label: "Airport Shuttle", sub: "On request" },
  { icon: BedDouble,       label: "Luxury Rooms",    sub: "160–240 m² suites" },
  { icon: Star,            label: "5-Star Service",  sub: "Award-winning" },
];

export function TrustBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <section ref={ref} className="border-y border-white/5 bg-oak-dark/60 backdrop-blur-sm">
      <div className="wrap py-7 md:py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-white/5">
          {badges.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.55 }}
              className="flex flex-col items-center gap-2 px-3 py-5 md:py-6 group hover:bg-white/2 transition-colors duration-300"
            >
              <b.icon size={20} className="text-oak-gold group-hover:scale-110 transition-transform duration-300" />
              <div className="text-center">
                <p className="text-oak-cream text-[0.78rem] font-medium tracking-wide">{b.label}</p>
                <p className="text-oak-muted text-[0.62rem] font-light mt-0.5">{b.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
