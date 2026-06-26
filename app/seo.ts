import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pashupati Techno Dreams | Engineering & Architecture Consultancy in Silchar",
  description:
    "Pashupati Techno Dreams (P Techno) is a leading engineering and architecture consultancy in Silchar, Cachar, Assam. Providing structural design, AutoCAD drawings, land surveying, Vastu planning, and highway engineering since 2020.",
  keywords: [
    "civil engineer Silchar",
    "architecture firm Silchar",
    "structural design Silchar",
    "land surveying Silchar",
    "Vastu planner Assam",
    "Pashupati Techno Dreams",
    "P Techno Silchar",
    "highway engineering Assam",
    "construction consultancy Barak Valley",
  ],
  authors: [{ name: "Pashupati Techno Dreams" }],
  creator: "Pashupati Techno Dreams",
  publisher: "Pashupati Techno Dreams",
  metadataBase: new URL("https://pashupatitechno.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pashupati Techno Dreams | Engineering & Architecture Consultancy in Silchar",
    description:
      "A house of skilled engineers delivering Vastu-compliant house planning, structural design, bridge/highway engineering, and precise land surveying in Silchar, Assam.",
    url: "https://pashupatitechno.in",
    siteName: "Pashupati Techno Dreams",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pashupati Techno Dreams - Engineering & Architecture Consultancy",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pashupati Techno Dreams | Engineering & Architecture Consultancy in Silchar",
    description:
      "A house of skilled engineers delivering structural design, drawings, surveying, and construction in Silchar, Assam.",
    images: ["/og-image.jpg"],
  },
};
