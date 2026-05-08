"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Wifi, Tv, Coffee, Bath, Wind, Shield, Minimize2, Users, ChevronRight, BedDouble, Eye } from "lucide-react";
import { ROOM_TYPES } from "@/lib/roomData";
import { formatCurrency } from "@/lib/utils";
import { useBookingStore } from "@/store/bookingStore";
import { AnimatedText } from "@/components/ui/AnimatedText";

const iconMap: Record<string, React.ElementType> = {
  wifi: Wifi, tv: Tv, coffee: Coffee, bath: Bath, ac: Wind,
  safe: Shield, minibar: Coffee, lounge: Minimize2, dining: Users, concierge: Users,
};

function RoomCard({ room, index }: { room: (typeof ROOM_TYPES)[0]; index: number }) {
  const [hov, setHov] = useState(false);
  const { openBooking, addRoom } = useBookingStore();

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="card relative flex flex-col h-full overflow-hidden group transition-all duration-400"
    >
      {/* Badge */}
      {room.badge && (
        <div className="absolute top-4 left-4 z-20">
          <span className="glass eyebrow text-[0.5rem] tracking-[0.2em] px-3 py-1.5 rounded-sm">
            {room.badge}
          </span>
        </div>
      )}

      {/* ── Image ── */}
      <div className="relative overflow-hidden shrink-0" style={{ height: "240px" }}>
        <motion.div
          animate={{ scale: hov ? 1.04 : 1 }}
          transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <Image
            src={room.image}
            alt={`${room.name} — ${room.size}, ${room.bedType}, ${room.view}`}
            fill sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
            className="object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-oak-dark-2/90 to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col flex-grow p-6 md:p-7">

        {/* Title + Price */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="min-w-0">
            <p className="eyebrow text-[0.5rem] tracking-[0.18em] mb-1.5 opacity-80">{room.tagline}</p>
            <h3 className="font-playfair text-2xl text-oak-cream leading-tight truncate">{room.name}</h3>
          </div>
          <div className="text-right shrink-0">
            <p className="font-playfair text-xl text-oak-gold leading-tight">{formatCurrency(room.pricePerNight)}</p>
            <p className="text-oak-muted text-[0.55rem] font-light tracking-widest uppercase mt-1">per night</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-oak-muted-light text-sm font-light leading-relaxed mb-6 line-clamp-2">
          {room.description}
        </p>

        {/* Meta */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-3 mb-5">
          {[
            { Icon: BedDouble, text: room.bedType },
            { Icon: Minimize2, text: room.size },
            { Icon: Eye,       text: room.view },
            { Icon: Users,     text: `Up to ${room.maxOccupancy} guests` },
          ].map(({ Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon size={12} className="text-oak-gold shrink-0" />
              <span className="text-oak-muted-light text-xs font-light truncate">{text}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 my-6" />

        {/* Amenity tags */}
        <div className="flex flex-wrap gap-x-2 gap-y-3 mb-8">
          {room.amenities.slice(0, 4).map((a) => {
            const Icon = iconMap[a.icon] || Shield;
            return (
              <div key={a.label} className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-sm px-2.5 py-1.5">
                <Icon size={11} className="text-oak-gold shrink-0" />
                <span className="text-oak-cream text-[0.65rem] font-light leading-none">{a.label}</span>
              </div>
            );
          })}
          {room.amenities.length > 4 && (
            <span className="text-oak-gold text-[0.65rem] font-light italic self-center px-1">
              +{room.amenities.length - 4} more
            </span>
          )}
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <button
            onClick={() => { addRoom(room.id); openBooking(); }}
            className="w-full flex items-center justify-center gap-2 py-3.5 bg-oak-gold/5 border border-oak-gold/40 hover:bg-oak-gold hover:text-oak-black text-oak-cream transition-all duration-300 text-[0.65rem] tracking-[0.15em] uppercase font-medium rounded-sm group"
          >
            Reserve This Room
            <ChevronRight size={14} className="text-oak-gold group-hover:text-oak-black transition-colors" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export function RoomsSection() {
  return (
    <section id="rooms" className="sec bg-oak-dark/20">
      <div className="wrap">

        {/* Header */}
        <div className="w-full flex justify-center mb-14 md:mb-16">
          <div className="flex flex-col items-center text-center max-w-xl">
            <AnimatedText className="flex flex-col items-center w-full">
              <span className="eyebrow">Accommodations</span>
              <div className="w-10 h-px bg-oak-gold mt-3 mb-0" />
            </AnimatedText>
            <AnimatedText delay={0.15}>
              <h2 className="font-playfair text-3xl md:text-4xl xl:text-5xl text-oak-cream mt-6 mb-4 leading-[1.15]">
                Rooms Crafted for{" "}
                <span className="italic text-oak-gold">Exceptional Rest</span>
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.25}>
              <p className="text-oak-muted text-sm md:text-base font-light leading-relaxed">
                Each room is a sanctuary unto itself — thoughtfully designed to offer the perfect balance of luxury, comfort, and modern convenience.
              </p>
            </AnimatedText>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {ROOM_TYPES.map((room, i) => (
            <RoomCard key={room.id} room={room} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
