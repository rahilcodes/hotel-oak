"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Plane, Building2, Compass, BriefcaseBusiness, MapPin, Phone } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";

const spots = [
  { icon: Plane,            label: "Rajiv Gandhi International Airport", dist: "5 km · ~10 minutes" },
  { icon: Building2,        label: "Hyderabad City Centre",              dist: "30 km · ~45 minutes" },
  { icon: Compass,          label: "Golconda Fort",                      dist: "35 km · ~55 minutes" },
  { icon: BriefcaseBusiness,label: "HITEC City (IT Hub)",               dist: "40 km · ~60 minutes" },
];

export function LocationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="location" className="sec bg-oak-black overflow-hidden">
      <div className="wrap">

        <div className="w-full flex justify-center mb-12 md:mb-16">
          <div className="flex flex-col items-center text-center max-w-xl">
            <AnimatedText className="flex flex-col items-center w-full">
              <span className="eyebrow">Location</span>
              <div className="w-10 h-px bg-oak-gold mt-3" />
            </AnimatedText>
            <AnimatedText delay={0.15}>
              <h2 className="font-playfair text-3xl md:text-4xl xl:text-5xl text-oak-cream mt-6 mb-4 leading-[1.15]">
                Perfectly <span className="italic text-oak-gold">Positioned</span>
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.25}>
              <p className="text-oak-muted text-sm md:text-base font-light leading-relaxed">
                Experience the ultimate convenience. Located just minutes from Rajiv Gandhi International Airport, offering seamless connectivity and peaceful rest.
              </p>
            </AnimatedText>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-7 lg:gap-10 items-start">

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 rounded-sm overflow-hidden border border-white/5 shadow-luxury"
            style={{ height: "420px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.7826!2d78.4209!3d17.2312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba8f7c3f5dbf1%3A0x0!2sRudra+Colony%2C+Shamshabad%2C+Hyderabad%2C+Telangana+501218!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%" height="100%"
              style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.4) brightness(0.88)" }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Oak Location — Rudra Colony, Shamshabad, Hyderabad"
            />
          </motion.div>

          {/* Sidebar */}
          <div ref={ref} className="lg:col-span-2 flex flex-col gap-3">
            <AnimatedText delay={0.1}>
              <p className="text-oak-muted text-sm font-light leading-relaxed mb-2">
                Ideally situated in Rudra Colony, Shamshabad — our location makes Hotel Oak the natural choice for all Hyderabad travellers.
              </p>
            </AnimatedText>

            {spots.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: 16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.09 + 0.2, duration: 0.6 }}
                className="flex items-center gap-3.5 px-4 py-3.5 border border-white/5 hover:border-oak-gold/25 transition-colors duration-300 group rounded-sm"
              >
                <div className="w-9 h-9 rounded-full border border-oak-gold/20 group-hover:border-oak-gold/50 flex items-center justify-center shrink-0 transition-colors duration-300">
                  <s.icon size={13} className="text-oak-gold" />
                </div>
                <div>
                  <p className="text-oak-cream text-sm font-medium leading-tight">{s.label}</p>
                  <p className="text-oak-gold text-[0.65rem] font-light mt-0.5">{s.dist}</p>
                </div>
              </motion.div>
            ))}

            {/* Address + phone card */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="mt-1 p-4 border border-white/5 rounded-sm flex flex-col gap-3"
            >
              <div className="flex gap-3">
                <MapPin size={13} className="text-oak-gold shrink-0 mt-0.5" />
                <address className="not-italic text-oak-muted text-[0.8rem] font-light leading-relaxed">
                  10-231, Near International Airport Road, Rudra Colony, Shamshabad, Hyderabad — 501218
                </address>
              </div>
              <a href="tel:+919959503444" className="flex items-center gap-3 group/phone">
                <Phone size={13} className="text-oak-gold shrink-0" />
                <span className="text-oak-cream text-sm font-semibold group-hover/phone:text-oak-gold transition-colors duration-300">
                  +91 99595 03444
                </span>
              </a>
            </motion.div>

            <motion.a
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.82 }}
              href="https://maps.google.com/?q=Hotel+Oak+Rudra+Colony+Shamshabad+Hyderabad+501218"
              target="_blank" rel="noopener noreferrer"
              className="eyebrow text-[0.58rem] tracking-[0.18em] text-oak-gold hover:text-oak-gold-light transition-colors duration-300"
            >
              Get Directions →
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  );
}
