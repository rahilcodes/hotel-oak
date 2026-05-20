import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingModal } from "@/components/booking/BookingModal";
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hoteloaks.com"),
  title: {
    default: "Hotel Oak by Mega Groups | Luxury Hotel Near Hyderabad Airport",
    template: "%s | Hotel Oak by Mega Groups",
  },
  description:
    "Premium luxury hotel near Rajiv Gandhi International Airport, Shamshabad, Hyderabad. Elegant rooms (160–240 m²), fine dining, airport shuttle & world-class hospitality. Call +91 99595 03444.",
  keywords: [
    "hotel near hyderabad airport",
    "luxury hotel shamshabad",
    "airport hotel hyderabad",
    "hotel in shamshabad hyderabad",
    "hotels near RGIA hyderabad",
    "hotel oak hyderabad",
    "hotel oak mega groups",
    "shamshabad hotel telangana",
    "business hotel hyderabad airport",
    "hotel near rajiv gandhi international airport",
    "luxury stay near hyderabad airport",
  ],
  openGraph: {
    title: "Hotel Oak by Mega Groups | Luxury Airport Hotel Hyderabad",
    description:
      "Experience world-class luxury 5 minutes from Rajiv Gandhi International Airport. Queen, Deluxe & Suite rooms from ₹1,499/night. Call +91 99595 03444.",
    type: "website",
    locale: "en_IN",
    siteName: "Hotel Oak by Mega Groups",
    images: [
      {
        url: "/images/hotel-building-view.jpg",
        width: 1200,
        height: 630,
        alt: "Hotel Oak by Mega Groups — Luxury Airport Hotel, Shamshabad Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Oak by Mega Groups | Luxury Airport Hotel Hyderabad",
    description:
      "Premium airport hotel in Shamshabad, Hyderabad. Elegant rooms from ₹1,499/night. Book direct — best rate guaranteed.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  authors: [{ name: "Hotel Oak by Mega Groups" }],
  category: "hospitality",
  alternates: {
    canonical: "https://www.hoteloaks.com",
  },
};

// JSON-LD structured data for local business + hotel
const hotelSchema = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: "Hotel Oak by Mega Groups",
  description:
    "Premium luxury hotel near Rajiv Gandhi International Airport, Shamshabad, Hyderabad offering elegant rooms, fine dining, and world-class hospitality.",
  url: "https://www.hoteloaks.com",
  telephone: "+919959503444",
  priceRange: "₹₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "10-231, Near International Airport Road, Rudra Colony",
    addressLocality: "Shamshabad",
    addressRegion: "Telangana",
    postalCode: "501218",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.2312,
    longitude: 78.4209,
  },
  starRating: {
    "@type": "Rating",
    ratingValue: "4.9",
    bestRating: "5",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Free WiFi",        value: true },
    { "@type": "LocationFeatureSpecification", name: "Airport Shuttle",  value: true },
    { "@type": "LocationFeatureSpecification", name: "Free Parking",     value: true },
    { "@type": "LocationFeatureSpecification", name: "Restaurant",       value: true },
    { "@type": "LocationFeatureSpecification", name: "24-hour Front Desk", value: true },
    { "@type": "LocationFeatureSpecification", name: "Room Service",     value: true },
  ],
  containsPlace: [
    {
      "@type": "HotelRoom",
      name: "Queen Room",
      description: "160 m² city view room with 1 full bed",
      occupancy: { "@type": "QuantitativeValue", maxValue: 2 },
    },
    {
      "@type": "HotelRoom",
      name: "Deluxe Room",
      description: "210 m² city view room with 1 king bed",
      occupancy: { "@type": "QuantitativeValue", maxValue: 3 },
    },
    {
      "@type": "HotelRoom",
      name: "Superior Suite",
      description: "240 m² signature city view suite",
      occupancy: { "@type": "QuantitativeValue", maxValue: 4 },
    },
  ],
  sameAs: [
    "https://wa.me/919959503444",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#09090B" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BookingModal />
      </body>
    </html>
  );
}
