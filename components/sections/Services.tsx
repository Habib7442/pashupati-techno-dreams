"use client";

import React from "react";
import Image from "next/image";
import {
  FileText,
  Shield,
  Home,
  Layers,
  Compass,
  Sun,
  Calculator,
} from "lucide-react";
import { motion } from "framer-motion";

export interface ServicesProps {
  openEnquiryModal: (serviceName: string) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
} as const;

export default function Services({ openEnquiryModal }: ServicesProps) {
  return (
    <section id="services" className="py-16 lg:py-24 bg-bg-soft border-b border-border-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left md:text-center max-w-3xl md:mx-auto mb-16 flex flex-col space-y-4 items-start md:items-center">
          <div className="inline-flex self-start md:self-center items-center space-x-2 text-accent-amber font-heading font-extrabold text-xs uppercase tracking-widest">
            <span className="w-6 h-0.5 bg-accent-amber inline-block"></span>
            <span>Our Capabilities</span>
            <span className="w-6 h-0.5 bg-accent-amber inline-block"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-headings-ink">
            Our Professional Engineering Services
          </h2>
          <p className="text-body-slate text-sm sm:text-base leading-relaxed">
            We offer comprehensive services ranging from conceptual sketches and plans to heavy-duty structural calculations,
            precision soil/land measurements, bridge layout designs, and interior configurations.
          </p>
        </div>

        {/* Services Grid (8 Services) */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Service 1 */}
          <motion.div 
            className="group bg-[#112233] text-white rounded-xl p-6 shadow-sm border border-white/5 hover:shadow-xl hover:border-accent-amber/20 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
            variants={cardVariants}
            whileHover={{ y: -6 }}
          >
            <Image
              src="/about_cad.png"
              alt="2D & 3D AutoCAD Drawings background"
              fill
              className="object-cover opacity-15 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 pointer-events-none -z-0"
              sizes="(max-w-768px) 100vw, 300px"
            />
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary-navy to-accent-amber transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="text-accent-amber p-3 bg-white/5 rounded-lg inline-self-start mb-4 transition-colors duration-300 group-hover:bg-accent-amber group-hover:text-primary-navy border border-white/10 shadow-sm w-12 h-12 flex items-center justify-center">
                <FileText className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-base font-extrabold text-white mb-2 transition-colors duration-300 group-hover:text-accent-amber">2D & 3D AutoCAD Drawings</h3>
              <p className="text-xs text-white/70 leading-relaxed mb-4">
                Detailed 2D layout planning, structural blueprints, elevations, cross-sections, and detailed architectural CAD files.
              </p>
              <button
                onClick={() => openEnquiryModal("AutoCAD Drawings")}
                className="w-full bg-white/5 hover:bg-accent-amber text-white hover:text-primary-navy text-xs font-bold py-3 rounded-lg text-center transition-all duration-300 mt-auto border border-white/10 hover:border-transparent cursor-pointer"
              >
                Inquire Service
              </button>
            </div>
          </motion.div>

          {/* Service 2 - Featured */}
          <motion.div 
            className="group bg-[#112233] text-white rounded-xl p-6 shadow-md border border-accent-amber/40 hover:shadow-xl hover:border-accent-amber transition-all duration-300 flex flex-col h-full relative overflow-hidden"
            variants={cardVariants}
            whileHover={{ y: -6 }}
          >
            <Image
              src="/rcc_building.png"
              alt="Structural Design background"
              fill
              className="object-cover opacity-15 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 pointer-events-none -z-0"
              sizes="(max-w-768px) 100vw, 300px"
            />
            <div className="absolute top-0 inset-x-0 h-1 bg-accent-amber z-10"></div>
            <div className="absolute top-4 right-4 bg-accent-amber/20 text-accent-amber text-[8px] font-extrabold uppercase px-2 py-0.5 rounded-full tracking-wider z-20">
              Core Expertise
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="text-accent-amber p-3 bg-white/5 rounded-lg inline-self-start mb-4 transition-colors duration-300 group-hover:bg-accent-amber group-hover:text-primary-navy border border-white/10 shadow-sm w-12 h-12 flex items-center justify-center">
                <Shield className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-base font-extrabold text-white mb-2 transition-colors duration-300 group-hover:text-accent-amber">Structural Design</h3>
              <p className="text-xs text-white/70 leading-relaxed mb-4">
                High-integrity concrete/steel design, column alignments, foundation designs, and load estimations following BIS codes.
              </p>
              <button
                onClick={() => openEnquiryModal("Structural Design")}
                className="w-full bg-white/5 hover:bg-accent-amber text-white hover:text-primary-navy text-xs font-bold py-3 rounded-lg text-center transition-all duration-300 mt-auto border border-white/10 hover:border-transparent cursor-pointer"
              >
                Inquire Service
              </button>
            </div>
          </motion.div>

          {/* Service 3 - Featured */}
          <motion.div 
            className="group bg-[#112233] text-white rounded-xl p-6 shadow-md border border-accent-amber/40 hover:shadow-xl hover:border-accent-amber transition-all duration-300 flex flex-col h-full relative overflow-hidden"
            variants={cardVariants}
            whileHover={{ y: -6 }}
          >
            <Image
              src="/indian_rcc_house.png"
              alt="Building Planning & Construction background"
              fill
              className="object-cover opacity-15 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 pointer-events-none -z-0"
              sizes="(max-w-768px) 100vw, 300px"
            />
            <div className="absolute top-0 inset-x-0 h-1 bg-accent-amber z-10"></div>
            <div className="absolute top-4 right-4 bg-accent-amber/20 text-accent-amber text-[8px] font-extrabold uppercase px-2 py-0.5 rounded-full tracking-wider z-20">
              Core Expertise
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="text-accent-amber p-3 bg-white/5 rounded-lg inline-self-start mb-4 transition-colors duration-300 group-hover:bg-accent-amber group-hover:text-primary-navy border border-white/10 shadow-sm w-12 h-12 flex items-center justify-center">
                <Home className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-base font-extrabold text-white mb-2 transition-colors duration-300 group-hover:text-accent-amber">Building Planning & Construction</h3>
              <p className="text-xs text-white/70 leading-relaxed mb-4">
                Complete site planning, municipal drawing approvals, construction estimation, and supervised execution.
              </p>
              <button
                onClick={() => openEnquiryModal("Building Planning & Construction")}
                className="w-full bg-white/5 hover:bg-accent-amber text-white hover:text-primary-navy text-xs font-bold py-3 rounded-lg text-center transition-all duration-300 mt-auto border border-white/10 hover:border-transparent cursor-pointer"
              >
                Inquire Service
              </button>
            </div>
          </motion.div>

          {/* Service 4 */}
          <motion.div 
            className="group bg-[#112233] text-white rounded-xl p-6 shadow-sm border border-white/5 hover:shadow-xl hover:border-accent-amber/20 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
            variants={cardVariants}
            whileHover={{ y: -6 }}
          >
            <Image
              src="/bridge_construction.png"
              alt="Bridge & Highway Engineering background"
              fill
              className="object-cover opacity-15 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 pointer-events-none -z-0"
              sizes="(max-w-768px) 100vw, 300px"
            />
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary-navy to-accent-amber transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="text-accent-amber p-3 bg-white/5 rounded-lg inline-self-start mb-4 transition-colors duration-300 group-hover:bg-accent-amber group-hover:text-primary-navy border border-white/10 shadow-sm w-12 h-12 flex items-center justify-center">
                <Layers className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-base font-extrabold text-white mb-2 transition-colors duration-300 group-hover:text-accent-amber">Bridge & Highway Engineering</h3>
              <p className="text-xs text-white/70 leading-relaxed mb-4">
                Design planning for roadway corridors, concrete bridge structures, drainage structures, and road layouts.
              </p>
              <button
                onClick={() => openEnquiryModal("Bridge & Highway Engineering")}
                className="w-full bg-white/5 hover:bg-accent-amber text-white hover:text-primary-navy text-xs font-bold py-3 rounded-lg text-center transition-all duration-300 mt-auto border border-white/10 hover:border-transparent cursor-pointer"
              >
                Inquire Service
              </button>
            </div>
          </motion.div>

          {/* Service 5 */}
          <motion.div 
            className="group bg-[#112233] text-white rounded-xl p-6 shadow-sm border border-white/5 hover:shadow-xl hover:border-accent-amber/20 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
            variants={cardVariants}
            whileHover={{ y: -6 }}
          >
            <Image
              src="/land_survey.png"
              alt="Land Surveying background"
              fill
              className="object-cover opacity-15 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 pointer-events-none -z-0"
              sizes="(max-w-768px) 100vw, 300px"
            />
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary-navy to-accent-amber transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="text-accent-amber p-3 bg-white/5 rounded-lg inline-self-start mb-4 transition-colors duration-300 group-hover:bg-accent-amber group-hover:text-primary-navy border border-white/10 shadow-sm w-12 h-12 flex items-center justify-center">
                <Compass className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-base font-extrabold text-white mb-2 transition-colors duration-300 group-hover:text-accent-amber">Land Surveying (Total Station)</h3>
              <p className="text-xs text-white/70 leading-relaxed mb-4">
                High-precision boundary surveying, topographic contours, area mapping, and elevation markings using digital instruments.
              </p>
              <button
                onClick={() => openEnquiryModal("Land Surveying")}
                className="w-full bg-white/5 hover:bg-accent-amber text-white hover:text-primary-navy text-xs font-bold py-3 rounded-lg text-center transition-all duration-300 mt-auto border border-white/10 hover:border-transparent cursor-pointer"
              >
                Inquire Service
              </button>
            </div>
          </motion.div>

          {/* Service 6 */}
          <motion.div 
            className="group bg-[#112233] text-white rounded-xl p-6 shadow-sm border border-white/5 hover:shadow-xl hover:border-accent-amber/20 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
            variants={cardVariants}
            whileHover={{ y: -6 }}
          >
            <Image
              src="/modern_house.png"
              alt="Vastu-Compliant Planning background"
              fill
              className="object-cover opacity-15 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 pointer-events-none -z-0"
              sizes="(max-w-768px) 100vw, 300px"
            />
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary-navy to-accent-amber transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="text-accent-amber p-3 bg-white/5 rounded-lg inline-self-start mb-4 transition-colors duration-300 group-hover:bg-accent-amber group-hover:text-primary-navy border border-white/10 shadow-sm w-12 h-12 flex items-center justify-center">
                <Sun className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-base font-extrabold text-white mb-2 transition-colors duration-300 group-hover:text-accent-amber">Vastu-Compliant Planning</h3>
              <p className="text-xs text-white/70 leading-relaxed mb-4">
                Spatial configurations, room positioning, and entryway orientations aligned with principles of traditional Vastu Shastra.
              </p>
              <button
                onClick={() => openEnquiryModal("Vastu-Compliant Planning")}
                className="w-full bg-white/5 hover:bg-accent-amber text-white hover:text-primary-navy text-xs font-bold py-3 rounded-lg text-center transition-all duration-300 mt-auto border border-white/10 hover:border-transparent cursor-pointer"
              >
                Inquire Service
              </button>
            </div>
          </motion.div>

          {/* Service 7 */}
          <motion.div 
            className="group bg-[#112233] text-white rounded-xl p-6 shadow-sm border border-white/5 hover:shadow-xl hover:border-accent-amber/20 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
            variants={cardVariants}
            whileHover={{ y: -6 }}
          >
            <Image
              src="/interior_render.png"
              alt="Interior 3D Design background"
              fill
              className="object-cover opacity-15 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 pointer-events-none -z-0"
              sizes="(max-w-768px) 100vw, 300px"
            />
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary-navy to-accent-amber transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="text-accent-amber p-3 bg-white/5 rounded-lg inline-self-start mb-4 transition-colors duration-300 group-hover:bg-accent-amber group-hover:text-primary-navy border border-white/10 shadow-sm w-12 h-12 flex items-center justify-center">
                <Layers className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-base font-extrabold text-white mb-2 transition-colors duration-300 group-hover:text-accent-amber">Interior 3D Design</h3>
              <p className="text-xs text-white/70 leading-relaxed mb-4">
                Space planning, customized lighting layouts, modern kitchen visualisations, and photorealistic 3D interior renders.
              </p>
              <button
                onClick={() => openEnquiryModal("Interior Design")}
                className="w-full bg-white/5 hover:bg-accent-amber text-white hover:text-primary-navy text-xs font-bold py-3 rounded-lg text-center transition-all duration-300 mt-auto border border-white/10 hover:border-transparent cursor-pointer"
              >
                Inquire Service
              </button>
            </div>
          </motion.div>

          {/* Service 8 */}
          <motion.div 
            className="group bg-[#112233] text-white rounded-xl p-6 shadow-sm border border-white/5 hover:shadow-xl hover:border-accent-amber/20 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
            variants={cardVariants}
            whileHover={{ y: -6 }}
          >
            <Image
              src="/hero_blueprint.png"
              alt="Estimation & Valuation background"
              fill
              className="object-cover opacity-15 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 pointer-events-none -z-0"
              sizes="(max-w-768px) 100vw, 300px"
            />
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary-navy to-accent-amber transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="text-accent-amber p-3 bg-white/5 rounded-lg inline-self-start mb-4 transition-colors duration-300 group-hover:bg-accent-amber group-hover:text-primary-navy border border-white/10 shadow-sm w-12 h-12 flex items-center justify-center">
                <Calculator className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-base font-extrabold text-white mb-2 transition-colors duration-300 group-hover:text-accent-amber">Estimation & Valuation</h3>
              <p className="text-xs text-white/70 leading-relaxed mb-4">
                Detailed bills of quantity (BOQ), material estimation, building valuation reports, and civil project costing.
              </p>
              <button
                onClick={() => openEnquiryModal("Estimation & Valuation")}
                className="w-full bg-white/5 hover:bg-accent-amber text-white hover:text-primary-navy text-xs font-bold py-3 rounded-lg text-center transition-all duration-300 mt-auto border border-white/10 hover:border-transparent cursor-pointer"
              >
                Inquire Service
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
