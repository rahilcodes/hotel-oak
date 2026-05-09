"use client";

import { motion } from "framer-motion";
import { MapPin, Plane, Navigation } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";

export function LocationSection() {
  return (
    <section id="location" className="sec bg-[#09090B]">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Map area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-[500px] bg-[#18181B] relative border border-[#27272A] shadow-subtle p-2"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15239.589886369286!2d78.4116298!3d17.2553955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbbdc619570891%3A0xc665c361afc59216!2sShamshabad%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(90%) hue-rotate(180deg) opacity(80%)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Text Content */}
          <div>
            <AnimatedText>
              <span className="eyebrow block mb-4">Location</span>
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <h2 className="text-4xl md:text-5xl text-white font-light leading-[1.1] mb-8 tracking-tight">
                Perfectly <span className="font-medium">Positioned.</span>
              </h2>
            </AnimatedText>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-8"
            >
              <p className="text-[#A1A1AA] font-light leading-relaxed text-lg">
                Located in Shamshabad, Hotel Oak provides unmatched accessibility to the airport while maintaining a serene atmosphere for our guests.
              </p>

              <div className="space-y-6 pt-6 border-t border-[#27272A]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#18181B] flex items-center justify-center shrink-0 border border-[#27272A]">
                    <Plane size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Rajiv Gandhi International Airport</h3>
                    <p className="text-[#A1A1AA] text-sm font-light">5.2 km away — ~10 minutes by car</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#18181B] flex items-center justify-center shrink-0 border border-[#27272A]">
                    <Navigation size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">City Center (Banjara Hills/Jubilee Hills)</h3>
                    <p className="text-[#A1A1AA] text-sm font-light">25 km away — ~40 minutes via PVNR Expressway</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#18181B] flex items-center justify-center shrink-0 border border-[#27272A]">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Hotel Oak by Maxx Group</h3>
                    <p className="text-[#A1A1AA] text-sm font-light">
                      10-231, Near International Airport Road,<br/>
                      Rudra Colony, Shamshabad, Telangana 501218
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
