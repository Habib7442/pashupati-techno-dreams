"use client";

import React from "react";
import { Award, Shield, Home, Sun } from "lucide-react";
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
} as const;

export default function Credentials() {
  return (
    <section className="bg-white py-12 border-b border-border-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Card 1 */}
          <motion.div 
            className="group flex items-start space-x-4 p-5 rounded-lg bg-bg-soft hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-border-grey/60 border-l-4 hover:border-l-accent-amber hover:-translate-y-0.5"
            variants={cardVariants}
          >
            <div className="text-accent-amber p-2.5 bg-white rounded-lg shadow-sm border border-border-grey/50 transition-colors duration-300 group-hover:bg-primary-navy group-hover:text-white">
              <Award className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-headings-ink transition-colors duration-300 group-hover:text-primary-navy">Chartered Engineers</h3>
              <p className="text-xs text-body-slate mt-1 leading-relaxed">Certified by the Institution of Engineers, India.</p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            className="group flex items-start space-x-4 p-5 rounded-lg bg-bg-soft hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-border-grey/60 border-l-4 hover:border-l-accent-amber hover:-translate-y-0.5"
            variants={cardVariants}
          >
            <div className="text-accent-amber p-2.5 bg-white rounded-lg shadow-sm border border-border-grey/50 transition-colors duration-300 group-hover:bg-primary-navy group-hover:text-white">
              <Shield className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-headings-ink transition-colors duration-300 group-hover:text-primary-navy">PWD Class I Contractor</h3>
              <p className="text-xs text-body-slate mt-1 leading-relaxed">Registered Class I Contractor with PWD Assam.</p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            className="group flex items-start space-x-4 p-5 rounded-lg bg-bg-soft hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-border-grey/60 border-l-4 hover:border-l-accent-amber hover:-translate-y-0.5"
            variants={cardVariants}
          >
            <div className="text-accent-amber p-2.5 bg-white rounded-lg shadow-sm border border-border-grey/50 transition-colors duration-300 group-hover:bg-primary-navy group-hover:text-white">
              <Home className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-headings-ink transition-colors duration-300 group-hover:text-primary-navy">Municipal Registered</h3>
              <p className="text-xs text-body-slate mt-1 leading-relaxed">RTP with Silchar Municipality & Development Authority.</p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            className="group flex items-start space-x-4 p-5 rounded-lg bg-bg-soft hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-border-grey/60 border-l-4 hover:border-l-accent-amber hover:-translate-y-0.5"
            variants={cardVariants}
          >
            <div className="text-accent-amber p-2.5 bg-white rounded-lg shadow-sm border border-border-grey/50 transition-colors duration-300 group-hover:bg-primary-navy group-hover:text-white">
              <Sun className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-headings-ink transition-colors duration-300 group-hover:text-primary-navy">Vastu-Compliant Design</h3>
              <p className="text-xs text-body-slate mt-1 leading-relaxed">Traditional spatial design elements woven with engineering.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
