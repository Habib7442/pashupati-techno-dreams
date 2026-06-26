import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

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

export default function RootLayout({
  children,
  ariaLabel,
}: Readonly<{
  children: React.ReactNode;
  ariaLabel?: string;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Pashupati Techno Dreams",
    "image": "https://pashupatitechno.in/logo.png",
    "@id": "https://pashupatitechno.in/#organization",
    "url": "https://pashupatitechno.in",
    "telephone": "+91 97066 09966",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Room No. 26 (First Floor), Town Club Complex, PWD Road",
      "addressLocality": "Silchar",
      "addressRegion": "Assam",
      "postalCode": "788001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.8333,
      "longitude": 92.8000
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://www.instagram.com/dreams_p_techno",
      "https://pashupatitd.wixsite.com/ptechno"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "36"
    }
  };

  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased scroll-smooth",
        inter.variable,
        plusJakartaSans.variable
      )}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-body-slate font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
