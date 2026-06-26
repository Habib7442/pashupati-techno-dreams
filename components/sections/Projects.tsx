"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
  // Show first 8 images on the homepage Projects section
  const homepageImages = galleryImages.slice(0, 8);

  return (
    <section id="projects" className="py-16 lg:py-24 bg-white border-b border-border-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left md:text-center max-w-3xl md:mx-auto mb-16 flex flex-col space-y-4 items-start md:items-center">
          <div className="inline-flex self-start md:self-center items-center space-x-2 text-accent-amber font-heading font-extrabold text-xs uppercase tracking-widest">
            <span className="w-6 h-0.5 bg-accent-amber inline-block"></span>
            <span>Our Work & Capabilities</span>
            <span className="w-6 h-0.5 bg-accent-amber inline-block"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-headings-ink leading-tight tracking-tight">
            Civil Projects & Architectural Models
          </h2>
          <p className="text-body-slate text-sm sm:text-base leading-relaxed">
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
              className="group bg-white rounded-xl overflow-hidden border border-border-grey hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="overflow-hidden aspect-4/3 relative bg-border-grey">
                <Image
                  src={imagePath}
                  alt={`Project Gallery ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-all duration-500"
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
                />
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
    </section>
  );
}
