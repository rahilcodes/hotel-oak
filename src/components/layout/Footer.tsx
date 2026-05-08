"use client";

import { Phone, Mail, MapPin, Globe, Share2, Heart, MessageCircle } from "lucide-react";
import { useBookingStore } from "@/store/bookingStore";

const hotel = [
  { label: "Rooms & Suites", href: "#rooms" },
  { label: "Dining",         href: "#dining" },
  { label: "Amenities",      href: "#amenities" },
  { label: "Gallery",        href: "#gallery" },
];
const explore = [
  { label: "About Us",       href: "#about" },
  { label: "Location",       href: "#location" },
  { label: "Testimonials",   href: "#testimonials" },
  { label: "Privacy Policy", href: "#" },
  { label: "Cancellation",   href: "#" },
];

export function Footer() {
  const { openBooking } = useBookingStore();
  const go = (href: string) => { if (href !== "#") document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <footer className="bg-[#060608] border-t border-white/5">
      <div className="wrap pt-14 md:pt-18 pb-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 pb-12 border-b border-white/5">

          {/* Brand */}
          <div>
            <p className="font-playfair text-xl text-oak-cream tracking-[0.08em] leading-none">HOTEL OAK</p>
            <p className="eyebrow text-oak-gold/65 text-[0.48rem] tracking-[0.3em] mt-1.5">by Maxx Group</p>
            <p className="text-oak-muted text-sm leading-relaxed font-light max-w-[210px] mt-5 mb-7">
              Where luxury meets the sky. A world-class airport hotel in Shamshabad, Hyderabad.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Globe,         href: "#",                           label: "Website" },
                { Icon: Share2,        href: "#",                           label: "Social" },
                { Icon: Heart,         href: "#",                           label: "Reviews" },
                { Icon: MessageCircle, href: "https://wa.me/919959503444",  label: "WhatsApp" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-oak-muted hover:border-oak-gold hover:text-oak-gold transition-all duration-300"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Hotel links */}
          <div>
            <p className="eyebrow mb-5">The Hotel</p>
            <ul className="space-y-3">
              {hotel.map((l) => (
                <li key={l.label}>
                  <button onClick={() => go(l.href)}
                    className="text-oak-muted hover:text-oak-cream text-sm font-light transition-colors duration-300 text-left">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <p className="eyebrow mb-5">Explore</p>
            <ul className="space-y-3">
              {explore.map((l) => (
                <li key={l.label}>
                  <button onClick={() => go(l.href)}
                    className="text-oak-muted hover:text-oak-cream text-sm font-light transition-colors duration-300 text-left">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow mb-5">Contact Us</p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={13} className="text-oak-gold shrink-0 mt-0.5" />
                <address className="not-italic text-oak-muted text-[0.82rem] font-light leading-relaxed">
                  10-231, Near International Airport Road,<br />
                  Rudra Colony, Shamshabad,<br />
                  Hyderabad, Telangana — 501218
                </address>
              </li>
              <li>
                <a href="tel:+919959503444" className="flex items-center gap-3 group">
                  <Phone size={13} className="text-oak-gold shrink-0" />
                  <span className="text-oak-cream text-sm font-semibold group-hover:text-oak-gold transition-colors duration-300">
                    +91 99595 03444
                  </span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/919959503444" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <MessageCircle size={13} className="text-green-400 shrink-0" />
                  <span className="text-oak-muted text-sm font-light group-hover:text-green-400 transition-colors duration-300">
                    WhatsApp Enquiry
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:reservations@hoteloakhyderabad.com" className="flex items-center gap-3 group">
                  <Mail size={13} className="text-oak-gold shrink-0" />
                  <span className="text-oak-muted text-[0.78rem] font-light group-hover:text-oak-gold transition-colors duration-300 break-all">
                    reservations@hoteloakhyderabad.com
                  </span>
                </a>
              </li>
            </ul>
            <button onClick={openBooking}
              className="btn-gold w-full mt-7 text-[0.62rem] py-3.5">
              Reserve Now
            </button>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-7 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-oak-muted text-[0.72rem] font-light">
            © {new Date().getFullYear()} Hotel Oak by Maxx Group. All rights reserved.
          </p>
          <p className="text-oak-muted/40 text-[0.68rem] font-light">
            Luxury Hotel · Shamshabad, Hyderabad · +91 99595 03444
          </p>
        </div>

      </div>
    </footer>
  );
}
