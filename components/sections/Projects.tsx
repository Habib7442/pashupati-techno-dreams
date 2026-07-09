"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

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
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // Show top 10 images on the homepage Projects section
  const homepageImages = galleryImages.slice(0, 10);

  const nextSlide = () => {
    setActiveIdx((prev) => (prev < homepageImages.length - 1 ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : homepageImages.length - 1));
  };

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

  // Keyboard navigation for active slide
  useEffect(() => {
    if (selectedIdx !== null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
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

  const getImageClasses = (path: string, isLightbox = false) => {
    const isRotated = path.includes("20220103_150458");
    if (isRotated) {
      return isLightbox 
        ? "object-contain rotate-90 scale-[0.75] md:scale-[0.7]" 
        : "object-contain rotate-90 scale-[0.75] transition-all duration-500 group-hover:scale-[0.8]";
    }
    return isLightbox
      ? "object-contain"
      : "object-cover group-hover:scale-105 transition-all duration-500";
  };

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

        {/* Main Big Carousel wrapper - Clean Full Width of parent container */}
        <div className="relative w-full mb-12">

          {/* Primary Card Frame */}
          <div className="relative aspect-[16/10] md:aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl border border-border-grey bg-neutral-900 group flex items-center justify-center z-20">
            
            {/* Left Control Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-4 p-2 rounded-full bg-white/95 hover:bg-white text-primary-navy hover:scale-105 transition cursor-pointer z-30 shadow-md border border-border-grey/55"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 h-5" />
            </button>

            {/* Slide Image Wrapper */}
            <div 
              onClick={() => setSelectedIdx(activeIdx)}
              className="relative w-full h-full cursor-pointer overflow-hidden flex items-center justify-center z-20"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full flex items-center justify-center bg-neutral-900"
                >
                  <Image
                    src={homepageImages[activeIdx]}
                    alt={`Project Gallery ${activeIdx + 1}`}
                    fill
                    className={getImageClasses(homepageImages[activeIdx])}
                    sizes="(max-width: 768px) 100vw, 1200px"
                    priority
                  />
                  {/* Glassmorphic hover overlay */}
                  <div className="absolute inset-0 bg-primary-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white/95 text-primary-navy text-xs font-bold px-5 py-3 rounded-lg shadow-lg uppercase tracking-wider scale-95 group-hover:scale-100 transition-all duration-300 inline-flex items-center space-x-2">
                      <Maximize2 className="w-4 h-4" />
                      <span>Expand Project View</span>
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Control Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-4 p-2 rounded-full bg-white/95 hover:bg-white text-primary-navy hover:scale-105 transition cursor-pointer z-30 shadow-md border border-border-grey/55"
              aria-label="Next Image"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 h-5" />
            </button>

            {/* Slide Counter Overlay */}
            <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur text-white text-[10px] font-bold px-3 py-1.5 rounded z-30">
              {activeIdx + 1} / {homepageImages.length}
            </div>
          </div>

          {/* Pagination dots below carousel */}
          <div className="flex justify-center space-x-2.5 mt-6">
            {homepageImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                  idx === activeIdx ? "bg-accent-amber w-6" : "bg-border-grey hover:bg-accent-amber/55"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

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
              <div className="relative w-full h-full max-h-[75vh] aspect-4/3 flex items-center justify-center">
                <Image
                  src={homepageImages[selectedIdx]}
                  alt={`Expanded Gallery Image ${selectedIdx + 1}`}
                  fill
                  className={getImageClasses(homepageImages[selectedIdx], true)}
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
