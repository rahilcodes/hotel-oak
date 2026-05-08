"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { AnimatedText } from "@/components/ui/AnimatedText";

const stats = [
  { value: "3+",  label: "Room types" },
  { value: "5km", label: "From airport" },
  { value: "24/7",label: "Concierge" },
  { value: "5★",  label: "Guest rating" },
];

export function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="about" className="sec bg-oak-black overflow-hidden">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">

          {/* Image col */}
          <AnimatedText direction="left" className="relative">
            <div className="relative aspect-[4/5] max-h-[600px] rounded-sm overflow-hidden shadow-luxury">
              <Image
                src="/images/team.jpg"
                alt="Hotel Oak team and lobby — warm professional hospitality at Shamshabad Hyderabad"
                fill sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 10, scale: 0.92 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="absolute -right-4 md:-right-6 bottom-10 glass rounded-sm p-5 min-w-[155px]"
            >
              <p className="eyebrow mb-1 text-[0.5rem]">Est. Since</p>
              <p className="font-playfair text-4xl text-oak-gold leading-none">2020</p>
              <p className="text-oak-muted text-xs font-light mt-2 leading-snug">
                Shamshabad,<br />Hyderabad, India
              </p>
            </motion.div>
          </AnimatedText>

          {/* Text col */}
          <div className="flex flex-col gap-6 md:gap-7">
            <AnimatedText delay={0.1}>
              <span className="eyebrow">Our Story</span>
              <div className="gold-line mt-3" />
            </AnimatedText>

            <AnimatedText delay={0.2}>
              <h2 className="font-playfair text-3xl md:text-4xl xl:text-5xl text-oak-cream leading-[1.15]">
                A Sanctuary for the{" "}
                <span className="italic text-oak-gold">Modern Traveler</span>
              </h2>
            </AnimatedText>

            <AnimatedText delay={0.3}>
              <p className="text-oak-muted-light text-sm md:text-base font-light leading-[1.9]">
                Nestled moments from Rajiv Gandhi International Airport, Hotel Oak by Maxx Group redefines the airport hotel experience. We believe proximity to the airport should never mean compromising on luxury — and so we've crafted a world where both coexist beautifully.
              </p>
            </AnimatedText>

            <AnimatedText delay={0.4}>
              <p className="text-oak-muted text-sm md:text-base font-light leading-[1.9]">
                Whether you arrive on business or leisure, solo or with family — our thoughtfully designed spaces, impeccable service, and modern amenities ensure your stay is not just comfortable, but truly memorable.
              </p>
            </AnimatedText>

            {/* Stats */}
            <AnimatedText delay={0.5}>
              <div className="grid grid-cols-4 gap-4 pt-6 border-t border-white/8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-playfair text-2xl md:text-3xl text-oak-gold leading-none">{s.value}</p>
                    <p className="text-oak-muted text-[0.6rem] font-light mt-1.5 leading-tight uppercase tracking-wide">{s.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedText>
          </div>

        </div>
      </div>
    </section>
  );
}
