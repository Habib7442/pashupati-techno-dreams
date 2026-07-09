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
  Award,
  Map,
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
  const servicesList = [
    {
      title: "Architectural Planning & Design",
      desc: "Concept development, detailed architectural drawings, and functional space planning.",
      img: "/about_cad.png",
      icon: FileText,
      key: "Architectural Planning",
    },
    {
      title: "Structural Engineering & Design",
      desc: "Structural analysis, RCC and steel design, structural drawings, and safety certification.",
      img: "/rcc_building.png",
      icon: Shield,
      key: "Structural Engineering",
      featured: true,
    },
    {
      title: "Construction Planning & Project Management",
      desc: "Project scheduling, cost control, quality assurance, contract administration, and site supervision.",
      img: "/bridge_construction.png",
      icon: Layers,
      key: "Project Management",
    },
    {
      title: "Vastu-Compliant Architectural Planning",
      desc: "Scientifically planned layouts integrating modern design principles with Vastu guidelines.",
      img: "/modern_house.png",
      icon: Sun,
      key: "Vastu Planning",
    },
    {
      title: "3D Architectural Visualization",
      desc: "High-quality 3D floor plans, exterior elevations, interior concepts, and realistic project renderings.",
      img: "/interior_render.png",
      icon: Layers,
      key: "3D Visualization",
    },
    {
      title: "Instant Residential Building Approval",
      desc: "Preparation and submission of drawings under MMSGNA for Residential upto G+2 building with instant approval.",
      img: "/indian_rcc_house_service.png",
      icon: Award,
      key: "Instant Building Approval",
      featured: true,
    },
    {
      title: "Building Permit & Statutory Approval Drawings",
      desc: "Approval drawings and documentation in compliance with municipal and development authority regulations.",
      img: "/hero_blueprint.png",
      icon: Home,
      key: "Building Permit Drawings",
    },
    {
      title: "Estimate & Property Valuation",
      desc: "Detailed quantity estimates, cost analysis, BOQs, DPR support, and valuation services.",
      img: "/hero_blueprint.png",
      icon: Calculator,
      key: "Estimate & Valuation",
    },
    {
      title: "Land Surveying, GIS Mapping & DPR Preparation",
      desc: "Total Station surveys, DGPS surveys, topographical and cadastral surveys, contour mapping, alignment surveys, drone survey and preparation of Detailed Project Reports (DPRs).",
      img: "/land_survey.png",
      icon: Compass,
      key: "Land Surveying & GIS",
    },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-bg-soft border-b border-border-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left md:text-center max-w-4xl md:mx-auto mb-16 flex flex-col space-y-4 items-start md:items-center">
          <div className="inline-flex self-start md:self-center items-center space-x-2 text-accent-amber font-heading font-extrabold text-xs uppercase tracking-widest">
            <span className="w-6 h-0.5 bg-accent-amber inline-block"></span>
            <span>Our Capabilities</span>
            <span className="w-6 h-0.5 bg-accent-amber inline-block"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-headings-ink">
            Our Professional Engineering Services
          </h2>
          <p className="text-body-slate text-xs sm:text-sm leading-relaxed max-w-3xl text-justify">
            We provide comprehensive engineering and construction consultancy services, delivering integrated solutions from concept to completion. Our multidisciplinary expertise encompasses architectural and Vastu-compliant planning, civil and structural engineering, precision land surveying, geospatial mapping, project management, transportation infrastructure design, and construction advisory. Every assignment is executed with technical excellence, regulatory compliance, innovation, and a commitment to delivering safe, sustainable, and cost-effective solutions.
          </p>
        </div>

        {/* Services Grid (9 Services - Symmetrical 3-Column Layout) */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div 
                key={index}
                className={`group bg-[#112233] text-white rounded-xl p-6 shadow-sm border transition-all duration-300 flex flex-col h-full relative overflow-hidden ${
                  service.featured ? "border-accent-amber/40 shadow-md" : "border-white/5 hover:border-accent-amber/20"
                }`}
                variants={cardVariants}
                whileHover={{ y: -6 }}
              >
                <Image
                  src={service.img}
                  alt={`${service.title} background`}
                  fill
                  className="object-cover opacity-15 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 pointer-events-none -z-0"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
                
                {service.featured ? (
                  <>
                    <div className="absolute top-0 inset-x-0 h-1 bg-accent-amber z-10"></div>
                    <div className="absolute top-4 right-4 bg-accent-amber/20 text-accent-amber text-[8px] font-extrabold uppercase px-2.5 py-0.5 rounded-full tracking-wider z-20">
                      Core Expertise
                    </div>
                  </>
                ) : (
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary-navy to-accent-amber transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10"></div>
                )}
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-accent-amber p-3 bg-white/5 rounded-lg inline-self-start mb-4 transition-colors duration-300 group-hover:bg-accent-amber group-hover:text-primary-navy border border-white/10 shadow-sm w-12 h-12 flex items-center justify-center">
                    <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-base font-extrabold text-white mb-2 transition-colors duration-300 group-hover:text-accent-amber">
                    {service.title}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <button
                    onClick={() => openEnquiryModal(service.title)}
                    className="w-full bg-accent-amber text-primary-navy hover:bg-white hover:text-primary-navy text-xs font-bold py-3 rounded-lg text-center transition-all duration-300 mt-auto border border-transparent cursor-pointer shadow-sm"
                  >
                    Inquire Service
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
