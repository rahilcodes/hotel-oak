"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { useBookingStore } from "@/store/bookingStore";
import { AnimatedText } from "@/components/ui/AnimatedText";

const perks = [
  "Best rate guaranteed — book direct",
  "Complimentary airport shuttle included",
  "Flexible cancellation policy",
  "Personalised pre-arrival concierge",
];

export function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const { openBooking } = useBookingStore();

  return (
    <section className="relative overflow-hidden" style={{ minHeight: "620px" }}>
      <div className="absolute inset-0">
        <Image
          src="/images/hotel-building-view.jpg"
          alt="Hotel Oak — Book Your Luxury Stay, Shamshabad Hyderabad"
          fill sizes="100vw" className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div ref={ref} className="relative z-10 wrap sec flex items-center">
        <div className="max-w-lg">
          <AnimatedText>
            <span className="eyebrow">Book Direct · Best Rate Guaranteed</span>
            <div className="gold-line mt-3" />
          </AnimatedText>
          <AnimatedText delay={0.15}>
            <h2 className="font-playfair text-4xl md:text-5xl xl:text-6xl text-oak-cream mt-6 mb-5 leading-[1.1]">
              Your Perfect Stay{" "}
              <span className="italic text-oak-gold">Awaits</span>
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.25}>
            <p className="text-white/65 text-sm md:text-base font-light leading-[1.9] mb-6">
              Reserve directly with us for the best available rates, complimentary airport shuttle, and our signature warm welcome.
            </p>
          </AnimatedText>
          <AnimatedText delay={0.32}>
            <ul className="flex flex-col gap-2 mb-8">
              {perks.map((p) => (
                <li key={p} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-oak-gold shrink-0" />
                  <span className="text-white/60 text-sm font-light">{p}</span>
                </li>
              ))}
            </ul>
          </AnimatedText>
          <AnimatedText delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button onClick={openBooking} className="btn-gold">
                Reserve on WhatsApp
              </button>
              <a href="tel:+919959503444" className="btn-outline">
                <Phone size={14} />
                Call to Book
              </a>
            </div>
          </AnimatedText>
          {/* Phone contact card */}
          <AnimatedText delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 p-5 border border-white/10 rounded-sm bg-white/3 backdrop-blur-sm">
              <a href="tel:+919959503444" className="flex items-center gap-3 flex-1 group">
                <div className="w-9 h-9 rounded-full border border-oak-gold/30 flex items-center justify-center shrink-0 group-hover:border-oak-gold/70 transition-colors duration-300">
                  <Phone size={13} className="text-oak-gold" />
                </div>
                <div>
                  <p className="eyebrow text-[0.48rem] text-oak-gold/50 mb-0.5">Call Now</p>
                  <p className="text-white text-base font-semibold tracking-wide group-hover:text-oak-gold transition-colors duration-300">
                    +91 99595 03444
                  </p>
                </div>
              </a>
              <div className="w-px bg-white/8 hidden sm:block" />
              <a href="https://wa.me/919959503444" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 flex-1 group">
                <div className="w-9 h-9 rounded-full border border-green-500/30 flex items-center justify-center shrink-0 group-hover:border-green-400/70 transition-colors duration-300">
                  <MessageCircle size={13} className="text-green-400" />
                </div>
                <div>
                  <p className="eyebrow text-[0.48rem] text-green-400/50 mb-0.5">WhatsApp</p>
                  <p className="text-white text-base font-semibold tracking-wide group-hover:text-green-400 transition-colors duration-300">
                    +91 99595 03444
                  </p>
                </div>
              </a>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
}
