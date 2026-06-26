"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export interface ProjectsProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  openEnquiryModal: (serviceName: string) => void;
}

const galleryItems = [
  {
    id: 1,
    category: "buildings",
    title: "Multi-Story RCC Structure",
    subtitle: "Structural Design & Drawings",
    image: "/rcc_building.png",
  },
  {
    id: 2,
    category: "bridges",
    title: "Assam Highway Bridge",
    subtitle: "Government Highway Engineering",
    image: "/bridge_construction.png",
  },
  {
    id: 3,
    category: "surveying",
    title: "Topographical Contour Survey",
    subtitle: "Total Station Land Surveying",
    image: "/land_survey.png",
  },
  {
    id: 4,
    category: "interior",
    title: "Modern Executive Lounge",
    subtitle: "3D Rendering & Space Planning",
    image: "/interior_render.png",
  },
];

export default function Projects({
  activeFilter,
  setActiveFilter,
  openEnquiryModal,
}: ProjectsProps) {
  const filteredGallery =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="projects" className="py-16 lg:py-24 bg-white border-b border-border-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col space-y-4">
          <div className="inline-flex self-center items-center space-x-2 text-accent-amber font-heading font-extrabold text-xs uppercase tracking-widest">
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

        {/* Filtering buttons */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-12 bg-bg-soft p-1.5 rounded-full max-w-3xl mx-auto border border-border-grey/60">
          {[
            { id: "all", label: "Show All" },
            { id: "buildings", label: "Buildings" },
            { id: "bridges", label: "Bridges" },
            { id: "surveying", label: "Surveying" },
            { id: "interior", label: "3D Interior Design" },
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full font-heading font-extrabold text-[10px] sm:text-xs uppercase tracking-wider transition-all duration-300 relative ${
                activeFilter === filter.id
                  ? "text-white z-10"
                  : "text-body-slate hover:text-primary-navy"
              }`}
            >
              {activeFilter === filter.id && (
                <motion.span 
                  layoutId="activeFilterBg"
                  className="absolute inset-0 bg-primary-navy rounded-full -z-10 shadow-md"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {filter.label}
            </button>
          ))}
        </div>

        {/* Image grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[300px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="group bg-white rounded-xl overflow-hidden border border-border-grey hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="overflow-hidden aspect-4/3 relative bg-border-grey">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-500"
                    sizes="(max-w-720px) 100vw, 300px"
                  />
                  <div className="absolute inset-0 bg-primary-navy/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <button
                      onClick={() => {
                        const serviceMap: Record<string, string> = {
                          buildings: "Structural Design",
                          bridges: "Bridge & Highway Engineering",
                          surveying: "Land Surveying",
                          interior: "Interior Design",
                        };
                        openEnquiryModal(serviceMap[item.category] || "");
                      }}
                      className="bg-white text-primary-navy text-xs font-extrabold px-5 py-2.5 rounded shadow-lg uppercase tracking-wider scale-95 group-hover:scale-100 transition-all duration-300 cursor-pointer"
                    >
                      Inquire Details
                    </button>
                  </div>
                </div>
                <div className="p-5 border-t border-border-grey flex flex-col justify-between flex-grow">
                  <div>
                    <span className="inline-block text-[8px] font-extrabold text-accent-amber uppercase tracking-widest bg-accent-amber/5 px-2 py-0.5 rounded mb-2">
                      {item.category === "buildings"
                        ? "Residential & Commercial"
                        : item.category === "bridges"
                        ? "Infrastructure"
                        : item.category}
                    </span>
                    <h3 className="text-sm font-extrabold text-headings-ink leading-snug group-hover:text-primary-navy transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-body-slate mt-2 leading-relaxed">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
