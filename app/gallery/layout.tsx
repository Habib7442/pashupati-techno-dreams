import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Gallery | Pashupati Techno Dreams",
  description:
    "Explore our complete portfolio of civil projects, topographical land surveys, bridge construction milestones, and 3D architectural models designed by our engineers in Silchar, Assam.",
  openGraph: {
    title: "Project Gallery | Pashupati Techno Dreams",
    description:
      "Explore our complete portfolio of civil projects, topographical land surveys, bridge construction milestones, and 3D architectural models.",
    url: "https://pashupatitechno.in/gallery",
    siteName: "Pashupati Techno Dreams",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pashupati Techno Dreams - Project Gallery",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Gallery | Pashupati Techno Dreams",
    description:
      "Explore our complete portfolio of civil projects, topographical land surveys, bridge construction milestones, and 3D architectural models.",
    images: ["/og-image.jpg"],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
