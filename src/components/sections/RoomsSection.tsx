"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ROOM_TYPES } from "@/lib/roomData";
import { formatCurrency } from "@/lib/utils";
import { useBookingStore } from "@/store/bookingStore";
import { AnimatedText } from "@/components/ui/AnimatedText";

function RoomCard({ room, index }: { room: (typeof ROOM_TYPES)[0]; index: number }) {
  const { openBooking, addRoom } = useBookingStore();

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col bg-[#18181B] border border-[#27272A] overflow-hidden transition-all duration-500 hover:shadow-hover hover:border-[#A1A1AA]/30"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#09090B]">
        <motion.div 
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        >
          <Image
            src={room.image}
            alt={room.name}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
            className="object-cover object-center"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl text-white font-light mb-1">{room.name}</h3>
            <p className="text-sm text-[#A1A1AA]">{room.size} · {room.bedType} · Up to {room.maxOccupancy} Guests</p>
          </div>
        </div>

        <p className="text-[#A1A1AA] font-light leading-relaxed mb-8">
          {room.description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-6 border-t border-[#27272A]">
          <div>
            <span className="text-xl text-white font-medium">{formatCurrency(room.pricePerNight)}</span>
            <span className="text-xs text-[#A1A1AA] uppercase tracking-wide ml-2">/ night</span>
          </div>
          <button
            onClick={() => { addRoom(room.id); openBooking(); }}
            className="text-sm uppercase tracking-widest text-white font-medium hover:text-[#A1A1AA] transition-colors"
          >
            Book
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export function RoomsSection() {
  return (
    <section id="rooms" className="sec bg-[#09090B]">
      <div className="wrap">
        {/* Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <AnimatedText>
              <span className="eyebrow block mb-4">Accommodations</span>
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <h2 className="text-4xl md:text-5xl text-white font-light leading-[1.1] tracking-tight">
                Designed for <span className="font-medium">Rest</span> & <span className="font-medium">Refinement.</span>
              </h2>
            </AnimatedText>
          </div>
          <AnimatedText delay={0.2} className="shrink-0">
            <p className="text-[#A1A1AA] font-light max-w-sm text-lg">
              Each room offers a meticulous balance of comfort, natural light, and premium amenities.
            </p>
          </AnimatedText>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROOM_TYPES.map((room, i) => (
            <RoomCard key={room.id} room={room} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
