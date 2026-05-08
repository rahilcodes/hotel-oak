"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Plane, UtensilsCrossed, ParkingCircle, Wifi, Bell, Users, Clock, Coffee, ShoppingBag } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";

const amenities = [
  { icon: Plane,           title: "Airport Shuttle",  body: "Complimentary transfers to and from Rajiv Gandhi International Airport, available 24 hours a day." },
  { icon: UtensilsCrossed, title: "Fine Dining",      body: "Multi-cuisine restaurant serving authentic Indian, Asian, and Chinese cuisine in an elegant ambience." },
  { icon: ParkingCircle,   title: "Free Parking",     body: "Secure, spacious on-site parking at no additional charge for all our guests and their vehicles." },
  { icon: Wifi,            title: "High-Speed WiFi",  body: "Ultra-fast complimentary WiFi throughout the entire property — ideal for business and leisure." },
  { icon: Bell,            title: "Concierge",        body: "Our expert team is ready to fulfil every request — from local recommendations to special experiences." },
  { icon: Users,           title: "Family Rooms",     body: "Spacious, family-friendly accommodations designed with extra care for guests travelling with children." },
  { icon: Clock,           title: "24/7 Front Desk",  body: "Round-the-clock reception ensuring seamless check-in, check-out, and assistance at any hour." },
  { icon: Coffee,          title: "Breakfast",        body: "A curated morning spread featuring local favourites and international classics, served fresh daily." },
  { icon: ShoppingBag,     title: "Room Service",     body: "In-room dining available all day — indulge in our full menu from the comfort of your suite." },
];

export function AmenitiesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section id="amenities" className="sec bg-oak-black overflow-hidden">
      <div className="wrap">

        {/* Header */}
        <div className="max-w-xl mb-12 md:mb-16">
          <AnimatedText>
            <span className="eyebrow">World-Class Amenities</span>
            <div className="gold-line mt-3" />
          </AnimatedText>
          <AnimatedText delay={0.15}>
            <h2 className="font-playfair text-3xl md:text-4xl xl:text-5xl text-oak-cream mt-5 mb-4 leading-[1.15]">
              Every Comfort,{" "}
              <span className="italic text-oak-gold">Thoughtfully Curated</span>
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.25}>
            <p className="text-oak-muted text-sm md:text-base font-light leading-relaxed max-w-lg">
              From the moment you arrive, every detail has been carefully considered to elevate your stay beyond expectation.
            </p>
          </AnimatedText>
        </div>

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-sm overflow-hidden">
          {amenities.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.06, duration: 0.65 }}
              className="group bg-oak-black hover:bg-oak-dark-2 transition-colors duration-350 p-7 md:p-8 flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-full border border-oak-gold/20 group-hover:border-oak-gold/50 flex items-center justify-center transition-colors duration-300 shrink-0">
                <a.icon size={16} className="text-oak-gold" />
              </div>
              <h3 className="font-playfair text-lg xl:text-xl text-oak-cream">{a.title}</h3>
              <p className="text-oak-muted text-sm font-light leading-relaxed flex-grow">{a.body}</p>
              <div className="w-0 h-px bg-oak-gold/60 group-hover:w-8 transition-all duration-500 mt-auto" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
