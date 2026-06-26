"use client";

import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
} as const;

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 lg:py-24 bg-white border-b border-border-grey relative overflow-hidden">
      {/* Decorative backdrop mesh */}
      <div className="absolute left-10 bottom-0 w-72 h-72 bg-bg-soft rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col space-y-4">
          <div className="inline-flex self-center items-center space-x-2 text-accent-amber font-heading font-extrabold text-xs uppercase tracking-widest">
            <span className="w-6 h-0.5 bg-accent-amber inline-block"></span>
            <span>Reviews from Google Business Profile</span>
            <span className="w-6 h-0.5 bg-accent-amber inline-block"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-headings-ink leading-tight tracking-tight">
            Trust & Real Feedback (4.9★)
          </h2>
          <p className="text-body-slate text-sm sm:text-base leading-relaxed">
            We hold a 4.9 average review score from verified Google Review submissions. Read some of our real reviews below.
          </p>
        </div>

        {/* Testimonial Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Review 1 */}
          <motion.div 
            className="group bg-bg-soft border border-border-grey rounded-xl p-7 flex flex-col h-full relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-white hover:border-accent-amber/20 hover:-translate-y-0.5 border-l-4 hover:border-l-accent-amber"
            variants={cardVariants}
          >
            <span className="absolute -right-2 -top-6 text-9xl font-serif text-primary-navy/5 select-none pointer-events-none group-hover:text-primary-navy/10 transition-colors duration-300">
              &ldquo;
            </span>
            <div className="flex items-center space-x-1 text-accent-amber mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-accent-amber text-accent-amber" />
              ))}
            </div>
            <p className="text-xs text-headings-ink font-medium leading-relaxed italic mb-6 flex-grow relative z-10">
              &ldquo;People, please go ahead &mdash; experienced professionals. Splendid work and quality.&rdquo;
            </p>
            <div className="border-t border-border-grey/55 pt-4 flex justify-between items-center">
              <div>
                <span className="block font-bold text-xs text-headings-ink">Google Reviewer</span>
                <span className="text-[9px] text-body-slate uppercase font-semibold">Verified Customer Review</span>
              </div>
              <div className="flex items-center space-x-1 text-[10px] text-accent-amber bg-white border border-border-grey/55 px-2 py-0.5 rounded shadow-sm">
                <Star className="w-3 h-3 fill-accent-amber text-accent-amber" />
                <span className="font-extrabold text-headings-ink">5.0</span>
              </div>
            </div>
          </motion.div>

          {/* Review 2 */}
          <motion.div 
            className="group bg-bg-soft border border-border-grey rounded-xl p-7 flex flex-col h-full relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-white hover:border-accent-amber/20 hover:-translate-y-0.5 border-l-4 hover:border-l-accent-amber"
            variants={cardVariants}
          >
            <span className="absolute -right-2 -top-6 text-9xl font-serif text-primary-navy/5 select-none pointer-events-none group-hover:text-primary-navy/10 transition-colors duration-300">
              &ldquo;
            </span>
            <div className="flex items-center space-x-1 text-accent-amber mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-accent-amber text-accent-amber" />
              ))}
            </div>
            <p className="text-xs text-headings-ink font-medium leading-relaxed italic mb-6 flex-grow relative z-10">
              &ldquo;Great experience. Worth every penny and time. Best service.&rdquo;
            </p>
            <div className="border-t border-border-grey/55 pt-4 flex justify-between items-center">
              <div>
                <span className="block font-bold text-xs text-headings-ink">Google Reviewer</span>
                <span className="text-[9px] text-body-slate uppercase font-semibold">Verified Customer Review</span>
              </div>
              <div className="flex items-center space-x-1 text-[10px] text-accent-amber bg-white border border-border-grey/55 px-2 py-0.5 rounded shadow-sm">
                <Star className="w-3 h-3 fill-accent-amber text-accent-amber" />
                <span className="font-extrabold text-headings-ink">5.0</span>
              </div>
            </div>
          </motion.div>

          {/* Review 3 */}
          <motion.div 
            className="group bg-bg-soft border border-border-grey rounded-xl p-7 flex flex-col h-full relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-white hover:border-accent-amber/20 hover:-translate-y-0.5 border-l-4 hover:border-l-accent-amber"
            variants={cardVariants}
          >
            <span className="absolute -right-2 -top-6 text-9xl font-serif text-primary-navy/5 select-none pointer-events-none group-hover:text-primary-navy/10 transition-colors duration-300">
              &ldquo;
            </span>
            <div className="flex items-center space-x-1 text-accent-amber mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-accent-amber text-accent-amber" />
              ))}
            </div>
            <p className="text-xs text-headings-ink font-medium leading-relaxed italic mb-6 flex-grow relative z-10">
              &ldquo;Good and experienced professionals. Quality work and worth the money.&rdquo;
            </p>
            <div className="border-t border-border-grey/55 pt-4 flex justify-between items-center">
              <div>
                <span className="block font-bold text-xs text-headings-ink">Google Reviewer</span>
                <span className="text-[9px] text-body-slate uppercase font-semibold">Verified Customer Review</span>
              </div>
              <div className="flex items-center space-x-1 text-[10px] text-accent-amber bg-white border border-border-grey/55 px-2 py-0.5 rounded shadow-sm">
                <Star className="w-3 h-3 fill-accent-amber text-accent-amber" />
                <span className="font-extrabold text-headings-ink">5.0</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Button Link to Google Profile */}
        <div className="text-center">
          <a
            href="https://www.google.com/search?q=Pashupati+Techno+Dreams+Silchar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs font-bold text-primary-navy hover:text-accent-amber border-b-2 border-primary-navy hover:border-accent-amber pb-1 transition-all duration-300"
          >
            Write or read more reviews on Google Business Profile &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
