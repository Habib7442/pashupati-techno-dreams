"use client";

import React from "react";
import Image from "next/image";
import { Award, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white border-b border-border-grey relative overflow-hidden">
      {/* Subtle grid background element */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-[radial-gradient(#E4E9F0_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-40 pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Image Column */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Dotted pattern offset */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[radial-gradient(#E5A817_1.5px,transparent_1.5px)] [background-size:10px_10px] opacity-40 -z-10 pointer-events-none"></div>
              <div className="absolute inset-0 bg-primary-navy rounded-lg transform -translate-x-3 translate-y-3 -z-10 opacity-10"></div>
              
              <div className="overflow-hidden rounded-lg shadow-2xl aspect-4/3 relative bg-border-grey border border-border-grey/30">
                <Image
                  src="/about_cad.png"
                  alt="Engineers drafting on CAD workstation"
                  fill
                  className="object-cover hover:scale-102 transition-transform duration-500"
                  sizes="(max-w-720px) 100vw, 450px"
                />
                
                {/* Floating glassmorphic badge */}
                <motion.div 
                  className="absolute bottom-4 left-4 bg-white/95 backdrop-blur shadow-md rounded border-l-4 border-primary-navy p-3 flex items-center space-x-2.5 z-10 cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-primary-navy/5 text-primary-navy p-1.5 rounded-full">
                    <Award className="w-5 h-5 text-accent-amber" />
                  </div>
                  <div>
                    <span className="block text-[9px] text-body-slate font-bold uppercase tracking-wider">Silchar Office</span>
                    <span className="block text-[11px] font-extrabold text-primary-navy">Barak Valley's Trusted Partner</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Copy Column */}
          <motion.div 
            className="lg:col-span-7 flex flex-col space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
          >
            <div className="flex items-center space-x-2 text-accent-amber font-heading font-extrabold text-xs uppercase tracking-widest">
              <span className="w-6 h-0.5 bg-accent-amber inline-block"></span>
              <span>Established 2020</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-headings-ink leading-tight tracking-tight">
              A House of Skilled Engineers in Silchar
            </h2>
            <p className="text-body-slate leading-relaxed text-sm sm:text-base">
              Pashupati Techno Dreams started operations in 2020 and established its professional central office
              in the Town Club Complex, Silchar, in September 2021. Led by certified engineers with decades of
              industry experience, our firm delivers quality civil engineering design, surveying, and construction solutions.
            </p>
            <p className="text-body-slate leading-relaxed text-sm sm:text-base">
              We believe in structural integrity, economic feasibility, and aesthetic beauty.
              Whether we are drawing a 2D floor plan for an individual client, calculating high-grade structural designs,
              conducting topographical surveys with advanced Total Station, or planning highway bridges for Assam's road networks,
              our focus remains on transparency, reliability, and precision.
            </p>

            {/* Bullet points list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 border-t border-border-grey">
              <div className="flex items-center space-x-3 text-headings-ink font-bold text-sm">
                <div className="bg-accent-amber/10 text-accent-amber p-1 rounded-full">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Certified & Chartered Engineers</span>
              </div>
              <div className="flex items-center space-x-3 text-headings-ink font-bold text-sm">
                <div className="bg-accent-amber/10 text-accent-amber p-1 rounded-full">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Experienced Leadership (33+ Yrs)</span>
              </div>
              <div className="flex items-center space-x-3 text-headings-ink font-bold text-sm">
                <div className="bg-accent-amber/10 text-accent-amber p-1 rounded-full">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Vastu-Compliant house planning</span>
              </div>
              <div className="flex items-center space-x-3 text-headings-ink font-bold text-sm">
                <div className="bg-accent-amber/10 text-accent-amber p-1 rounded-full">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>End-to-End Handover Solutions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
