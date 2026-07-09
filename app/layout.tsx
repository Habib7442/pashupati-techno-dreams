import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { metadata } from "./seo";

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

export { metadata };

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
      data-scroll-behavior="smooth"
      suppressHydrationWarning
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
      <body 
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-background text-body-slate font-sans antialiased overflow-x-hidden"
      >
        {children}
      </body>
    </html>
  );
}
