"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, X, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Section Components
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

// All 15 optimized WebP gallery images
import { galleryImages } from "@/components/sections/Projects";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
} as const;

export default function GalleryPage() {
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

  // Header state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Lightbox state
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // Scroll detection for sticky header compression
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu or lightbox is open
  useEffect(() => {
    if (mobileMenuOpen || selectedIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, selectedIdx]);

  // Lightbox keyboard navigation
  useEffect(() => {
    if (selectedIdx === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedIdx(null);
      } else if (e.key === "ArrowRight") {
        setSelectedIdx((prev) => (prev !== null && prev < galleryImages.length - 1 ? prev + 1 : 0));
      } else if (e.key === "ArrowLeft") {
        setSelectedIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryImages.length - 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx]);

  // Mock handlers to satisfy Header/Footer interfaces for home anchor links
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Let browser fall back to navigation
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    // Let browser fall back to navigation
  };

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-bg-soft">
      {/* HEADER */}
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        isScrolled={isScrolled}
        scrollToTop={scrollToTop}
        scrollToSection={scrollToSection}
        handleMobileNavClick={handleMobileNavClick}
      />

      {/* GALLERY HERO */}
      <section className="bg-primary-navy py-12 lg:py-16 text-white text-left relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 bg-accent-amber/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col space-y-4">
          <Link
            href="/"
            className="inline-flex items-center text-xs font-bold text-accent-amber hover:text-white transition duration-300 self-start group mb-2"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5 transform group-hover:-translate-x-1 transition-transform" />
            Back to Homepage
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight">
            Comprehensive Project Gallery
          </h1>
          <p className="text-white/80 max-w-2xl text-sm sm:text-base leading-relaxed">
            Explore our complete portfolio of civil projects, topographical land surveys, bridge construction milestones, and 3D architectural models designed by our engineers.
          </p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <main className="flex-grow overflow-x-hidden py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {galleryImages.map((imagePath, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onClick={() => setSelectedIdx(index)}
                className="group bg-white rounded-xl overflow-hidden border border-border-grey shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col cursor-pointer"
              >
                <div className="overflow-hidden aspect-4/3 relative bg-neutral-900 flex items-center justify-center">
                  <Image
                    src={imagePath}
                    alt={`Project Gallery Image ${index + 1}`}
                    fill
                    className={getImageClasses(imagePath)}
                    sizes="(max-width-768px) 100vw, (max-w-1200px) 33vw, 25vw"
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
        </div>
      </main>

      {/* LIGHTBOX MODAL */}
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
                setSelectedIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryImages.length - 1));
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
                  src={galleryImages[selectedIdx]}
                  alt={`Expanded Gallery Image ${selectedIdx + 1}`}
                  fill
                  className={getImageClasses(galleryImages[selectedIdx], true)}
                  sizes="100vw"
                  priority
                />
              </div>
            </motion.div>

            {/* Right Control Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIdx((prev) => (prev !== null && prev < galleryImages.length - 1 ? prev + 1 : 0));
              }}
              className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer z-50"
              aria-label="Next Image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Count Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs font-semibold uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full backdrop-blur-md">
              {selectedIdx + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <Footer scrollToTop={scrollToTop} scrollToSection={scrollToSection} />
    </div>
  );
}
