"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { useBookingStore } from "@/store/bookingStore";
import Link from "next/link";

export function Footer() {
  const { openBooking } = useBookingStore();

  return (
    <footer className="bg-[#09090B] text-white pt-24 pb-12 border-t border-[#27272A]">
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 border-b border-[#27272A] pb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl tracking-tight text-white mb-2">HOTEL OAK</h2>
            <p className="text-xs tracking-widest text-[#A1A1AA] uppercase mb-6">by Mega Groups</p>
            <p className="text-[#A1A1AA] text-sm font-light leading-relaxed mb-8 max-w-xs">
              A sanctuary of refined elegance moments from Rajiv Gandhi International Airport.
            </p>
            <button onClick={openBooking} className="btn-primary bg-[#18181B] text-white hover:bg-[#27272A] border border-[#27272A] text-xs">
              Reserve Your Stay
            </button>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm tracking-widest uppercase text-white mb-6">Explore</h3>
            <ul className="space-y-4 text-sm text-[#A1A1AA] font-light">
              <li><Link href="/#rooms" className="hover:text-white transition-colors">Accommodations</Link></li>
              <li><Link href="/#about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/#location" className="hover:text-white transition-colors">Location</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm tracking-widest uppercase text-white mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-[#A1A1AA] font-light">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>10-231, Near Airport Road<br/>Rudra Colony, Shamshabad<br/>Telangana 501218</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0" />
                <a href="tel:+919959503444" className="hover:text-white transition-colors">+91 99595 03444</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0" />
                <a href="mailto:reservations@hoteloaks.com" className="hover:text-white transition-colors">reservations@hoteloaks.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm tracking-widest uppercase text-white mb-6">Newsletter</h3>
            <p className="text-[#A1A1AA] text-sm font-light mb-4">
              Subscribe to receive exclusive offers and updates.
            </p>
            <form className="flex border-b border-[#27272A] focus-within:border-white transition-colors" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-none text-white text-sm py-3 px-0 focus:ring-0 w-full placeholder:text-[#A1A1AA]"
              />
              <button type="submit" className="text-xs tracking-widest uppercase text-white hover:text-[#A1A1AA] px-2 transition-colors">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#A1A1AA] font-light tracking-wide">
          <p>&copy; {new Date().getFullYear()} Hotel Oak by Mega Groups. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
