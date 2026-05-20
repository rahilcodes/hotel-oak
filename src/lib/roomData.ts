export interface RoomAmenity {
  icon: string;
  label: string;
}

export interface RoomType {
  id: string;
  name: string;
  tagline: string;
  description: string;
  bedType: string;
  view: string;
  pricePerNight: number;
  maxOccupancy: number;
  size: string;
  image: string;
  gallery: string[];
  amenities: RoomAmenity[];
  badge?: string;
}

export const ROOM_TYPES: RoomType[] = [
  {
    id: "queen-room",
    name: "Queen Room",
    tagline: "Elegant Comfort",
    bedType: "1 Full Bed",
    view: "City View",
    description:
      "A generously proportioned 160 m² retreat featuring a plush full bed, marble floors, and a serene city-view workspace. Designed for the discerning traveler who expects refined comfort at every turn.",
    pricePerNight: 1499,
    maxOccupancy: 2,
    size: "160 m²",
    image: "/images/queen-room/322632394.jpg",
    gallery: [
      "/images/queen-room/322632394.jpg",
      "/images/queen-room/322632396.jpg",
      "/images/queen-room/322632398.jpg",
      "/images/queen-room/322632414.jpg",
      "/images/queen-room/322633685.jpg",
    ],
    amenities: [
      { icon: "ac", label: "Air Conditioning" },
      { icon: "tv", label: "Flat-Screen TV" },
      { icon: "wifi", label: "High-Speed WiFi" },
      { icon: "coffee", label: "Tea / Coffee Maker" },
      { icon: "bath", label: "Private Bathroom" },
      { icon: "lounge", label: "Sitting Area" },
      { icon: "safe", label: "Wake-up Service" },
      { icon: "dining", label: "Dining Area" },
    ],
    badge: "Most Popular",
  },
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    tagline: "Elevated Luxury",
    bedType: "1 King Bed",
    view: "City View",
    description:
      "An expansive 210 m² sanctuary with a commanding king bed, tile and marble floors, and sweeping city views. Every detail — from the electric kettle to the sofa — is curated for the modern luxury traveler.",
    pricePerNight: 1699,
    maxOccupancy: 3,
    size: "210 m²",
    image: "/images/deluxe-room/322632661.jpg",
    gallery: [
      "/images/deluxe-room/322632661.jpg",
      "/images/deluxe-room/322632663.jpg",
      "/images/deluxe-room/322632665.jpg",
      "/images/deluxe-room/322633607.jpg",
      "/images/deluxe-room/322633615.jpg",
      "/images/deluxe-room/322632408.jpg",
      "/images/deluxe-room/512557602.jpg",
      "/images/deluxe-room/512557604.jpg",
      "/images/deluxe-room/512557627.jpg",
    ],
    amenities: [
      { icon: "ac", label: "Air Conditioning" },
      { icon: "tv", label: "Flat-Screen TV" },
      { icon: "wifi", label: "Ultra-Fast WiFi" },
      { icon: "coffee", label: "Electric Kettle" },
      { icon: "bath", label: "Shower + Toiletries" },
      { icon: "lounge", label: "Sofa + Sitting Area" },
      { icon: "minibar", label: "Satellite Channels" },
      { icon: "dining", label: "Dining Table" },
    ],
    badge: "Best Value",
  },
  {
    id: "superior-suite",
    name: "Superior Suite",
    tagline: "The Pinnacle of Luxury",
    bedType: "1 Queen Bed",
    view: "City View",
    description:
      "Our crown jewel — a palatial 240 m² suite offering city views, a private dining area, sofa lounge, and an indulgent marble bathroom. Elevator access, impeccable linens, and unrivaled airport-side opulence.",
    pricePerNight: 1999,
    maxOccupancy: 4,
    size: "240 m²",
    image: "/images/suite-room/322632671.jpg",
    gallery: [
      "/images/suite-room/322632671.jpg",
      "/images/suite-room/322633594.jpg",
      "/images/suite-room/322633685.jpg",
    ],
    amenities: [
      { icon: "ac", label: "Air Conditioning" },
      { icon: "tv", label: "Flat-Screen TV" },
      { icon: "wifi", label: "Dedicated WiFi" },
      { icon: "coffee", label: "Tea / Coffee + Kettle" },
      { icon: "bath", label: "Spa Bathroom" },
      { icon: "lounge", label: "Private Lounge" },
      { icon: "dining", label: "Private Dining Area" },
      { icon: "concierge", label: "Elevator Access" },
    ],
    badge: "Signature Stay",
  },
];

export const TAX_RATE = 0.12; // 12% GST
export const SERVICE_FEE = 0.05; // 5% service charge

export function getRoomById(id: string): RoomType | undefined {
  return ROOM_TYPES.find((r) => r.id === id);
}
