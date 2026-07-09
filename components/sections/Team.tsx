"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  subTitle: string;
  image: string;
  bio: string;
  badges: string[];
  initials: string;
}

function TeamMemberCard({ member, index }: { member: TeamMember; index: number }) {
  const [imageError, setImageError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const maxChars = 160;
  const shouldTruncate = member.bio.length > maxChars;
  const displayedBio = (shouldTruncate && !isExpanded)
    ? member.bio.substring(0, maxChars) + "..."
    : member.bio;

  return (
    <motion.div 
      className="group bg-white rounded-xl p-6 sm:p-7 shadow-sm border border-border-grey hover:shadow-xl hover:border-accent-amber/20 transition-all duration-300 flex flex-col space-y-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 80, damping: 15, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      {/* Header row: Image and Title Info */}
      <div className="flex items-center space-x-4">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-accent-amber shadow-md flex-shrink-0 bg-gradient-to-br from-primary-navy to-[#1a3a5c] flex items-center justify-center text-white font-extrabold">
          {!imageError && member.image ? (
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
              sizes="80px"
              onError={() => setImageError(true)}
            />
          ) : (
            <span className="text-lg tracking-wider font-heading">{member.initials}</span>
          )}
        </div>
        <div>
          <span className="text-[9px] font-extrabold text-accent-amber uppercase tracking-wider block leading-none mb-1">
            {member.role}
          </span>
          <h3 className="text-base font-extrabold text-headings-ink transition-colors duration-300 group-hover:text-primary-navy">
            {member.name}
          </h3>
          <p className="text-[10px] text-secondary-steel font-bold mt-0.5 leading-snug">
            {member.subTitle}
          </p>
        </div>
      </div>
      
      <div className="flex flex-col flex-grow">
        <p className="text-xs text-body-slate leading-relaxed text-justify">
          {displayedBio}
        </p>
        {shouldTruncate && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-accent-amber hover:text-primary-navy text-[11px] font-extrabold transition mt-1.5 flex items-center cursor-pointer focus:outline-none self-start"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
      
      {/* Badges */}
      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border-grey/60">
        {member.badges.map((badge, bIdx) => (
          <span key={bIdx} className="text-[9px] bg-bg-soft text-body-slate font-extrabold px-2.5 py-1 rounded">
            {badge}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Team() {
  const teamMembers: TeamMember[] = [
    {
      name: "Er. Pinak Pani Nath",
      role: "Senior Engineering Consultant",
      subTitle: "Retd. Executive Engineer, PWD (B & NH), Govt of Assam",
      image: "/teams/Er. Pinak Pani Nath.avif",
      bio: "A veteran civil engineer with over 30+ years of distinguished service in the Public Works Department, Er. Nath has led the planning, execution, supervision, and successful completion of hundreds of infrastructure and building projects. His extensive expertise in project management, quality assurance, and public infrastructure development forms the cornerstone of our technical leadership.",
      badges: ["Retd. EE PWD", "IEI Member", "Chartered Eng", "30+ Yrs Exp"],
      initials: "PN",
    },
    {
      name: "Er. Subrata Paul",
      role: "Senior Road & Highway Consultant",
      subTitle: "Retd. Assistant Executive Engineer, PWRD, Govt of Assam",
      image: "/teams/Er. Subrata Paul.avif",
      bio: "With more than 30+ years of professional experience in highway engineering, road construction, and building infrastructure, Er. Paul possesses extensive knowledge in planning, execution, contract management, and quality control of public infrastructure projects. His practical field expertise ensures efficient and technically sound project delivery.",
      badges: ["Retd. AEE PWRD", "Highway Specialist", "Contract Mgr", "30+ Yrs Exp"],
      initials: "SP",
    },
    {
      name: "Er. Pranjal Nath",
      role: "Structural Design Lead",
      subTitle: "Registered Structural Engineer, Town & Country Planning Dept, Govt of Assam",
      image: "/teams/Er. Pranjal Nath.avif",
      bio: "A structural engineering specialist with advanced expertise in seismic-resistant design, structural analysis, and modern construction technologies, Er. Pranjal Nath holds a Master's degree in Structural Dynamics & Earthquake Engineering from the National Institute of Technology (NIT) Silchar. He leads the firm's technical and consultancy operations, bringing a strong blend of academic excellence and practical engineering expertise. As a Registered Structural Engineer under the Department of Town & Country Planning, Government of Assam, he has successfully delivered a diverse portfolio of residential, commercial, institutional, industrial, and infrastructure projects, combining engineering precision, regulatory compliance, and innovative, sustainable design solutions.",
      badges: ["M.Tech (NIT)", "Structural Eng", "RTP Registered", "Consultant"],
      initials: "PN",
    },
  ];

  return (
    <section id="team" className="py-16 lg:py-24 bg-bg-soft border-b border-border-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16 flex flex-col space-y-4 items-start">
          <div className="inline-flex self-start items-center space-x-2 text-accent-amber font-heading font-extrabold text-xs uppercase tracking-widest">
            <span className="w-6 h-0.5 bg-accent-amber inline-block"></span>
            <span>Our Technical Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-headings-ink leading-tight tracking-tight">
            Meet Our Core Team of Engineers
          </h2>
          <p className="text-body-slate text-sm sm:text-base leading-relaxed text-justify">
            Our firm is led by senior retired government engineers and structural design experts, bringing over 90 years of cumulative engineering experience to your projects.
          </p>
        </div>
        
        {/* Team Cards (3-up Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
