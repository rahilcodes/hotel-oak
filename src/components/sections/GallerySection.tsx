"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";

interface GalleryImage {
  src: string;
  alt: string;
  h: "short" | "medium" | "tall";
  category: string;
}

const galleryImages: GalleryImage[] = [
  // Exterior & Hotel Building
  {
    src: "/images/hotel-building-view.jpg",
    alt: "Hotel Oak — Building Exterior at Night",
    h: "tall",
    category: "Exterior",
  },
  // Reception & Lobby
  {
    src: "/images/team.jpg",
    alt: "Hotel Oak — Lobby & Hospitality Team",
    h: "medium",
    category: "Lobby",
  },
  // Queen Room (160 m²)
  {
    src: "/images/queen-room/322632394.jpg",
    alt: "Queen Room — 160 m² · 1 Full Bed",
    h: "short",
    category: "Queen Room",
  },
  {
    src: "/images/queen-room/322632396.jpg",
    alt: "Queen Room — Cosy Interior",
    h: "tall",
    category: "Queen Room",
  },
  {
    src: "/images/queen-room/322632398.jpg",
    alt: "Queen Room — Elegant Bedroom View",
    h: "medium",
    category: "Queen Room",
  },
  {
    src: "/images/queen-room/322632414.jpg",
    alt: "Queen Room — TV & Work Desk",
    h: "short",
    category: "Queen Room",
  },
  // Deluxe Room (210 m²)
  {
    src: "/images/deluxe-room/322632661.jpg",
    alt: "Deluxe Room — 210 m² · 1 King Bed",
    h: "tall",
    category: "Deluxe Room",
  },
  {
    src: "/images/deluxe-room/322632663.jpg",
    alt: "Deluxe Room — Premium Interiors",
    h: "medium",
    category: "Deluxe Room",
  },
  {
    src: "/images/deluxe-room/322633607.jpg",
    alt: "Deluxe Room — Sitting Area",
    h: "short",
    category: "Deluxe Room",
  },
  {
    src: "/images/deluxe-room/512557602.jpg",
    alt: "Deluxe Room — Bedroom Detail",
    h: "medium",
    category: "Deluxe Room",
  },
  // Superior Suite (240 m²)
  {
    src: "/images/suite-room/322632671.jpg",
    alt: "Superior Suite — 240 m² · City View",
    h: "tall",
    category: "Superior Suite",
  },
  {
    src: "/images/suite-room/322633594.jpg",
    alt: "Superior Suite — Lounge & Décor",
    h: "short",
    category: "Superior Suite",
  },
  // Restaurant & Dining
  {
    src: "/images/restaurant.jpg",
    alt: "Hotel Oak Restaurant — Manu's Indian Spices",
    h: "medium",
    category: "Restaurant",
  },
  {
    src: "/images/reception.jpg",
    alt: "Hotel Oak — Buffet & Dining Counter",
    h: "short",
    category: "Restaurant",
  },
];

const heightMap: Record<string, string> = {
  short: "h-48",
  medium: "h-64",
  tall: "h-80",
};

export function GallerySection() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="sec bg-oak-black overflow-hidden">
      <div className="wrap">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-12 md:mb-16">
          <AnimatedText className="flex flex-col items-center w-full">
            <span className="eyebrow">Visual Journey</span>
            <div className="w-10 h-px bg-oak-gold mt-3" />
          </AnimatedText>
          <AnimatedText delay={0.15}>
            <h2 className="font-playfair text-3xl md:text-4xl xl:text-5xl text-oak-cream mt-6 mb-4 leading-[1.15]">
              Spaces That{" "}
              <span className="italic text-oak-gold">Speak for Themselves</span>
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.25}>
            <p className="text-oak-muted text-sm md:text-base font-light leading-relaxed max-w-lg mx-auto">
              Step inside. Every photograph tells a story of elegance, comfort, and the Hotel Oak experience.
            </p>
          </AnimatedText>
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <div key={i} className="break-inside-avoid mb-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.7 }}
                onClick={() => setLightbox(img.src)}
                className={`relative ${heightMap[img.h]} overflow-hidden rounded-sm cursor-pointer group`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-oak-black/0 group-hover:bg-oak-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 border border-transparent group-hover:border-oak-gold/25 transition-colors duration-300 rounded-sm" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span
                    className="eyebrow text-[0.58rem]"
                    style={{
                      background: "rgba(15,15,15,0.8)",
                      backdropFilter: "blur(8px)",
                      padding: "4px 10px",
                      borderRadius: "2px",
                      display: "inline-block",
                    }}
                  >
                    {img.category}
                  </span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 bg-oak-black/95 flex items-center justify-center p-4"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-oak-cream hover:text-oak-gold transition-colors"
          >
            <X size={24} />
          </button>
          <div className="relative max-w-5xl w-full max-h-[85vh] aspect-video">
            <Image
              src={lightbox}
              alt="Hotel Oak Gallery"
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}
