"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="sec bg-[#09090B]">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow block mb-6">The Hotel Oak Experience</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-light leading-[1.1] mb-8 tracking-tight">
              A Sanctuary of <br/>
              <span className="font-medium">Modern Luxury.</span>
            </h2>
            <div className="space-y-6 text-[#A1A1AA] text-lg font-light leading-relaxed">
              <p>
                Perfectly positioned just moments from Rajiv Gandhi International Airport, 
                Hotel Oak by Maxx Group redefines the transit and luxury stay experience in Hyderabad.
              </p>
              <p>
                Whether you are traveling for business, seeking a restful layover, or exploring 
                the rich heritage of Telangana, our exquisitely appointed rooms and world-class 
                hospitality ensure an unforgettable stay. Experience the perfect harmony of 
                convenience, comfort, and uncompromising luxury.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12 border-t border-[#27272A] pt-12">
              <div>
                <p className="text-3xl font-light text-white mb-2">5<span className="text-[#A1A1AA] text-xl">min</span></p>
                <p className="text-sm text-[#A1A1AA] tracking-wide uppercase">From RGIA Airport</p>
              </div>
              <div>
                <p className="text-3xl font-light text-white mb-2">24<span className="text-[#A1A1AA] text-xl">/7</span></p>
                <p className="text-sm text-[#A1A1AA] tracking-wide uppercase">Premium Room Service</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Images Grid */}
          <div className="relative h-[600px] sm:h-[700px] w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 right-0 w-[85%] h-[80%] bg-[#18181B] overflow-hidden"
            >
              <Image
                src="/images/queen-room/322632394.jpg"
                alt="Hotel Oak Luxury Room"
                fill
                className="object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-0 left-0 w-[60%] h-[50%] bg-[#18181B] p-4 shadow-hover"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/reception.jpg"
                  alt="Hotel Oak Reception"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
