"use client";

import React from "react";
import { motion } from "framer-motion";

export interface StatsProps {
  yearsCount: number;
  reviewsCount: number;
  ratingCount: number;
}

export default function Stats({ yearsCount, reviewsCount, ratingCount }: StatsProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-navy via-[#0c2f52] to-[#06182a] text-white relative overflow-hidden">
      {/* Background grids and decorative glow */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-amber/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Copy */}
          <motion.div 
            className="lg:col-span-6 flex flex-col space-y-6 text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-start space-x-2 text-accent-amber font-heading font-extrabold text-xs uppercase tracking-widest">
              <span className="w-6 h-0.5 bg-accent-amber inline-block"></span>
              <span>Why Choose Pashupati Techno Dreams</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white leading-tight tracking-tight">
              Delivering Structural Safety & Design Innovation Since 2020
            </h2>
            <p className="text-white/80 leading-relaxed text-sm sm:text-base text-justify">
              We combine technical expertise, rigorous calculations, and regional experience to deliver
              projects that are safe, Vastu-friendly, and cost-effective. Holding PWD registrations, Chartered Status,
              and RTP licenses, we ensure your building complies with local laws and standard regulations.
            </p>
          </motion.div>

          {/* Right Stats Grid */}
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
          >
            <div className="grid grid-cols-2 gap-6 max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-accent-amber/5 rounded-2xl blur-xl pointer-events-none -z-10"></div>
              
              <motion.div 
                className="group/stat bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-7 text-center backdrop-blur-md shadow-lg hover:border-accent-amber/30 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
              >
                <span className="block text-4xl sm:text-5xl font-extrabold text-accent-amber mb-2 tracking-tight font-heading drop-shadow-[0_2px_8px_rgba(229,168,23,0.15)]">
                  {yearsCount}+
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 transition-colors duration-300 group-hover/stat:text-white">
                  Years Lead Experience
                </span>
              </motion.div>

              <motion.div 
                className="group/stat bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-7 text-center backdrop-blur-md shadow-lg hover:border-accent-amber/30 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
              >
                <span className="block text-4xl sm:text-5xl font-extrabold text-accent-amber mb-2 tracking-tight font-heading drop-shadow-[0_2px_8px_rgba(229,168,23,0.15)]">
                  {reviewsCount}+
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 transition-colors duration-300 group-hover/stat:text-white">
                  Google Reviewers
                </span>
              </motion.div>

              <motion.div 
                className="group/stat bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-7 text-center backdrop-blur-md shadow-lg hover:border-accent-amber/30 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
              >
                <span className="block text-4xl sm:text-5xl font-extrabold text-accent-amber mb-2 tracking-tight font-heading drop-shadow-[0_2px_8px_rgba(229,168,23,0.15)]">
                  {ratingCount.toFixed(1)} ★
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 transition-colors duration-300 group-hover/stat:text-white">
                  Google Average Rating
                </span>
              </motion.div>

              <motion.div 
                className="group/stat bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-7 text-center backdrop-blur-md shadow-lg hover:border-accent-amber/30 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
              >
                <span className="block text-4xl sm:text-5xl font-extrabold text-accent-amber mb-2 tracking-tight font-heading drop-shadow-[0_2px_8px_rgba(229,168,23,0.15)]">
                  Est. 2020
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 transition-colors duration-300 group-hover/stat:text-white">
                  Consultancy Estd.
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
