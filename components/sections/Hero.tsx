"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import BookAppointmentButton from "@/components/ui/BookAppointmentButton";

export interface HeroProps {
  scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
} as const;

const checkVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 120, damping: 12 },
  },
} as const;

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-bg-soft border-b border-border-grey lg:min-h-[660px] flex items-center">
      {/* Abstract blueprint grid background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#103E6B_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      {/* Desktop full-bleed image container with diagonal clip-path */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[50%] hidden lg:block z-0 overflow-hidden [clip-path:polygon(15%_0,_100%_0,_100%_100%,_0_100%)] bg-border-grey">
        <motion.div 
          className="relative w-full h-full"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src="/indian_rcc_house.png"
            alt="Modern Indian RCC House designed by Pashupati Techno Dreams"
            fill
            className="object-cover"
            priority
            loading="eager"
            sizes="(min-width: 1024px) 50vw, 1px"
          />
          {/* Glowing gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/20 to-transparent"></div>
        </motion.div>
        
        {/* Floating badge inside desktop image */}
        <motion.div 
          className="absolute bottom-10 right-10 bg-white shadow-xl rounded-lg p-5 border border-border-grey max-w-[210px] text-center z-10 cursor-pointer"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", delay: 0.8, stiffness: 100, damping: 15 }}
          whileHover={{ scale: 1.05, translateY: -4 }}
        >
          <span className="block text-[10px] font-extrabold text-accent-amber uppercase tracking-wider mb-1">
            One-Stop Solution
          </span>
          <span className="block text-3xl font-extrabold text-primary-navy leading-none mb-1">
            24/7
          </span>
          <span className="block text-[10px] text-body-slate uppercase font-bold tracking-tight">
            Planning to Supervision
          </span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (Text & Content) */}
          <motion.div 
            className="lg:col-span-7 py-12 lg:py-24 flex flex-col space-y-4 sm:space-y-5 lg:space-y-7 text-left pr-0 lg:pr-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="inline-flex self-start items-center space-x-2 text-accent-amber font-heading font-extrabold text-xs uppercase tracking-widest"
              variants={itemVariants}
            >
              <span className="w-6 h-0.5 bg-accent-amber inline-block"></span>
              <span>A House of Skilled Engineers</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold font-heading text-headings-ink leading-tight tracking-tight"
              variants={itemVariants}
            >
              Stronger Structures.<br />
              <span className="text-accent-amber">Safer Homes.</span>
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg text-body-slate max-w-xl leading-relaxed text-justify"
              variants={itemVariants}
            >
              Your trusted partner in engineering and construction consultancy, offering integrated civil and structural engineering, architectural and Vastu-compliant planning, precision land surveying, and highway and bridge infrastructure design. We combine technical excellence, innovation, and regulatory compliance to deliver resilient, sustainable, and value-driven solutions across the built environment.
            </motion.p>

            {/* Bullet Points with Checkmarks */}
            <motion.div className="flex flex-col space-y-3 pt-2" variants={itemVariants}>
              <motion.div className="flex items-center space-x-3" variants={checkVariants}>
                <div className="bg-accent-amber/10 text-accent-amber p-1 rounded-full">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm sm:text-base font-bold text-headings-ink">
                  A House of Chartered Engineers
                </span>
              </motion.div>
              <motion.div className="flex items-center space-x-3" variants={checkVariants}>
                <div className="bg-accent-amber/10 text-accent-amber p-1 rounded-full">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm sm:text-base font-bold text-headings-ink">
                  Empanelled with the Government of Assam
                </span>
              </motion.div>
              <motion.div className="flex items-center space-x-3" variants={checkVariants}>
                <div className="bg-accent-amber/10 text-accent-amber p-1 rounded-full">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm sm:text-base font-bold text-headings-ink">
                  Empanelled with Government of India Organizations
                </span>
              </motion.div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-2 items-center sm:items-stretch"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className="bg-primary-navy text-white text-sm font-bold px-8 py-4 rounded shadow-lg hover:bg-primary-navy-alt transition text-center inline-flex items-center justify-center group w-full sm:w-auto"
                whileHover={{ scale: 1.02, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Get Your Free Quote</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.02, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto flex"
              >
                <BookAppointmentButton size="lg" className="w-full" />
              </motion.div>
            </motion.div>

            {/* Social Proof Row */}
            <motion.div 
              className="flex items-center space-x-3 pt-4 border-t border-border-grey max-w-xl"
              variants={itemVariants}
            >
              <div className="flex -space-x-2.5">
                <div className="w-8 h-8 rounded-full border-2 border-white bg-primary-navy text-[10px] font-bold text-white flex items-center justify-center shadow-sm">
                  EP
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-accent-amber text-[10px] font-bold text-primary-navy flex items-center justify-center shadow-sm">
                  PN
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-secondary-steel text-[10px] font-bold text-white flex items-center justify-center shadow-sm">
                  TD
                </div>
              </div>
              <div className="text-xs text-body-slate font-medium">
                Trusted by <span className="font-extrabold text-headings-ink">500+</span> Homeowners & Developers in Silchar & Assam
              </div>
            </motion.div>
          </motion.div>

          {/* Mobile/Tablet Fallback Image (Hidden on Desktop) */}
          <motion.div 
            className="lg:hidden col-span-1 block w-full relative aspect-16/10 rounded-lg overflow-hidden shadow-lg bg-border-grey"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              src="/indian_rcc_house.png"
              alt="Modern RCC House"
              fill
              className="object-cover"
              priority
              loading="eager"
              sizes="(max-width: 1024px) 100vw, 1px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/40 to-transparent"></div>
            
            {/* Floating badge for mobile */}
            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur shadow-md rounded p-3 text-center z-10 border border-border-grey max-w-[150px]">
              <span className="block text-[8px] font-extrabold text-accent-amber uppercase tracking-wider">
                One-Stop Solution
              </span>
              <span className="block text-xl font-extrabold text-primary-navy">
                24/7
              </span>
              <span className="block text-[8px] text-body-slate uppercase font-bold">
                Planning to Supervision
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
