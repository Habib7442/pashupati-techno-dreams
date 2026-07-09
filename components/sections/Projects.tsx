"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
} as const;

// The 15 optimized WebP gallery images
export const galleryImages = [
  "/gallery/img_20201220_153429_rotated.webp",
  "/gallery/awc.webp",
  "/gallery/20210827_164100.webp",
  "/gallery/20220103_133347.webp",
  "/gallery/20220103_150458.webp",
  "/gallery/20211101_164046.webp",
  "/gallery/img_20170413_121004965.webp",
  "/gallery/3d-copy.webp",
  "/gallery/img_20170112_165806764.webp",
  "/gallery/img_20210425_101235.webp",
  "/gallery/img-20181121-wa0006.webp",
  "/gallery/whatsapp-image-2021-09-16-at-22.54.36.webp",
  "/gallery/whatsapp-image-2022-01-27-at-10.16.00.webp",
  "/gallery/img_20210212_115344.webp",
  "/gallery/wdadw.webp",
] as const;

export default function Projects() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // Show first 8 images on the homepage Projects section
  const homepageImages = galleryImages.slice(0, 8);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIdx]);

  // Keyboard navigation for homepage lightbox
  useEffect(() => {
    if (selectedIdx === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedIdx(null);
      } else if (e.key === "ArrowRight") {
        setSelectedIdx((prev) => (prev !== null && prev < homepageImages.length - 1 ? prev + 1 : 0));
      } else if (e.key === "ArrowLeft") {
        setSelectedIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : homepageImages.length - 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx, homepageImages.length]);

  return (
    <section id="projects" className="py-16 lg:py-24 bg-white border-b border-border-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left max-w-3xl mb-16 flex flex-col space-y-4 items-start">
          <div className="inline-flex self-start items-center space-x-2 text-accent-amber font-heading font-extrabold text-xs uppercase tracking-widest">
            <span className="w-6 h-0.5 bg-accent-amber inline-block"></span>
            <span>Our Work & Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-headings-ink leading-tight tracking-tight">
            Civil Projects & Architectural Models
          </h2>
          <p className="text-body-slate text-sm sm:text-base leading-relaxed text-justify">
            Take a look at the types of projects we design, calculate, and survey across the Barak Valley region.
          </p>
        </div>

        {/* Image Grid - 4 Columns on desktop, no filters, no text overlays */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.05 }}
        >
          {homepageImages.map((imagePath, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              onClick={() => setSelectedIdx(index)}
              className="group bg-white rounded-xl overflow-hidden border border-border-grey hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
            >
              <div className="overflow-hidden aspect-4/3 relative bg-border-grey">
                <Image
                  src={imagePath}
                  alt={`Project Gallery ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-all duration-500"
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-primary-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white/95 text-primary-navy text-xs font-bold px-4 py-2.5 rounded shadow-lg uppercase tracking-wider scale-95 group-hover:scale-100 transition-all duration-300">
                    Expand View
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show All CTA Button linking to separate /gallery route */}
        <div className="text-center mt-10">
          <Link
            href="/gallery"
            className="bg-primary-navy hover:bg-primary-navy-alt text-white font-bold px-8 py-4 rounded shadow-lg transition text-sm inline-flex items-center justify-center font-heading"
          >
            Show All Projects &rarr;
          </Link>
        </div>
      </div>

      {/* HOMEPAGE LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 select-none"
            onClick={() => setSelectedIdx(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer z-50"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Control Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : homepageImages.length - 1));
              }}
              className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer z-50"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Main Image Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-5xl max-h-[80vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full max-h-[75vh] aspect-4/3">
                <Image
                  src={homepageImages[selectedIdx]}
                  alt={`Expanded Gallery Image ${selectedIdx + 1}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
            </motion.div>

            {/* Right Control Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIdx((prev) => (prev !== null && prev < homepageImages.length - 1 ? prev + 1 : 0));
              }}
              className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer z-50"
              aria-label="Next Image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Count Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs font-semibold uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full backdrop-blur-md">
              {selectedIdx + 1} / {homepageImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
