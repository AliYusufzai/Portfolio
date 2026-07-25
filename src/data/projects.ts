export interface Project {
  name: string;
  tagline: string;
  image: string;
  accent: string;
  url?: string;
}

export const projects: Project[] = [
  {
    name: "GUPI",
    tagline: "Social Media & Short Videos",
    image: "/gupi-new.webp",
    accent: "border-blue-500",
    url: "https://play.google.com/store/apps/details?id=com.gupi.app&hl=en",
  },
  {
    name: "Kampus Konnect",
    tagline: "Dating, Networking & More",
    image: "/k2.jpg",
    accent: "border-gray-300",
    url: "https://play.google.com/store/apps/details?id=com.kampuskonnect.com&hl=en",
  },
  {
    name: "Demoda",
    tagline: "Live Streaming Application",
    image: "/demoda.webp",
    accent: "border-purple-400",
    url: "https://play.google.com/store/apps/details?id=com.dem0dav2.app&hl=en",
  },
  {
    name: "MrYellow",
    tagline: "Food Delivery Application",
    image: "/yellow.webp",
    accent: "border-white-400",
    url: "https://play.google.com/store/apps/details?id=com.mryellow.customer&hl=en",
  },
];
