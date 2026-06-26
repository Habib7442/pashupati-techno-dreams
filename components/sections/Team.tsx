"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Team() {
  return (
    <section id="team" className="py-16 lg:py-24 bg-bg-soft border-b border-border-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col space-y-4">
          <div className="inline-flex self-center items-center space-x-2 text-accent-amber font-heading font-extrabold text-xs uppercase tracking-widest">
            <span className="w-6 h-0.5 bg-accent-amber inline-block"></span>
            <span>Our Team Leaders</span>
            <span className="w-6 h-0.5 bg-accent-amber inline-block"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-headings-ink leading-tight tracking-tight">
            Meet Our Senior Engineers
          </h2>
          <p className="text-body-slate text-sm sm:text-base leading-relaxed">
            Our firm is led by senior registered engineers who are personally involved in reviewing structural drawings,
            site valuations, and design approvals.
          </p>
        </div>
        {/* Team Cards (2-up) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Team Member 1 */}
          <motion.div 
            className="group bg-white rounded-xl p-6 sm:p-7 shadow-sm border border-border-grey hover:shadow-xl hover:border-accent-amber/20 transition-all duration-300 flex flex-col space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            whileHover={{ y: -4 }}
          >
            {/* Header row: Image and Title Info */}
            <div className="flex items-center space-x-4">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-accent-amber shadow-md flex-shrink-0 bg-border-grey">
                <Image
                  src="/teams/Er.%20Pinak%20Pani%20Nath.avif"
                  alt="Er. Pinak Pani Nath"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div>
                <span className="text-[10px] font-extrabold text-accent-amber uppercase tracking-wider block">
                  Lead Engineering Consultant
                </span>
                <h3 className="text-lg font-extrabold text-headings-ink mt-0.5 transition-colors duration-300 group-hover:text-primary-navy">
                  Er. Pinak Pani Nath
                </h3>
                <p className="text-xs text-secondary-steel font-bold mt-0.5">
                  Retd. Executive Engineer, PWD Assam
                </p>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-xs text-body-slate leading-relaxed">
              33+ years of expertise in road planning, highway networks, concrete bridge engineering,
              and government tender supervision. Chartered Engineer status under the Institution of Engineers, India.
            </p>
            
            {/* Badges */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              <span className="text-[10px] bg-bg-soft text-body-slate font-extrabold px-2.5 py-1 rounded">
                CE (India)
              </span>
              <span className="text-[10px] bg-bg-soft text-body-slate font-extrabold px-2.5 py-1 rounded">
                IEI Member
              </span>
              <span className="text-[10px] bg-bg-soft text-body-slate font-extrabold px-2.5 py-1 rounded">
                Bridge Specialist
              </span>
            </div>
          </motion.div>

          {/* Team Member 2 */}
          <motion.div 
            className="group bg-white rounded-xl p-6 sm:p-7 shadow-sm border border-border-grey hover:shadow-xl hover:border-accent-amber/20 transition-all duration-300 flex flex-col space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            whileHover={{ y: -4 }}
          >
            {/* Header row: Image and Title Info */}
            <div className="flex items-center space-x-4">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-accent-amber shadow-md flex-shrink-0 bg-border-grey">
                <Image
                  src="/teams/Er.%20Pranjal%20Nath.avif"
                  alt="Er. Pranjal Nath"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div>
                <span className="text-[10px] font-extrabold text-accent-amber uppercase tracking-wider block">
                  Chartered & Managing Engineer
                </span>
                <h3 className="text-lg font-extrabold text-headings-ink mt-0.5 transition-colors duration-300 group-hover:text-primary-navy">
                  Er. Pranjal Nath
                </h3>
                <p className="text-xs text-secondary-steel font-bold mt-0.5">
                  RTP Silchar Municipality & Development Authority
                </p>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-xs text-body-slate leading-relaxed">
              Registered Technical Personnel for structural drawing approvals. Registered Class I(C) Building
              and Water Resource Dept Contractor for structural design calculations and planning.
            </p>
            
            {/* Badges */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              <span className="text-[10px] bg-bg-soft text-body-slate font-extrabold px-2.5 py-1 rounded">
                AMIEI
              </span>
              <span className="text-[10px] bg-bg-soft text-body-slate font-extrabold px-2.5 py-1 rounded">
                Regd. RTP
              </span>
              <span className="text-[10px] bg-bg-soft text-body-slate font-extrabold px-2.5 py-1 rounded">
                Class I Contractor
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
