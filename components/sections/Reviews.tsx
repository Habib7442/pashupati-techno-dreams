"use client";

import React, { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
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

interface ReviewItem {
  name: string;
  role: string;
  rating: number;
  time: string;
  text: string;
}

const reviewsData: readonly ReviewItem[] = [
  {
    name: "Biprajit Choudhury",
    role: "G+4 RCC Building Client",
    rating: 5,
    time: "5 months ago",
    text: "We designed our ongoing construction of G+4 RCV Building from Pashupati Techno Dreams......our family is fully satisfied and happy with the structural design provided by the firm as well as provided time to time consultation regarding any queries.",
  },
  {
    name: "Abhijit Paul Choudhury",
    role: "Engineering Service Client",
    rating: 5,
    time: "5 months ago",
    text: "Very well managed and explained Engineering service for drawing and plan",
  },
  {
    name: "Tapasi Misra",
    role: "Local Guide",
    rating: 5,
    time: "4 years ago",
    text: "Very hardworking and dedicated engineer who brings to the table the best of designs and ideas at a very nominal price. Silcharians do visit this place for your construction related consultations. You won't be disappointed. Good luck Pashupati Techno Dreams. Keep up the good work.",
  },
  {
    name: "debarshi nath",
    role: "Verified Client",
    rating: 5,
    time: "2 years ago",
    text: "Innovative solutions provided at affordable prices. I am highly impressed by their services. I shall highly recommend .",
  },
  {
    name: "Subrata Seal",
    role: "Civil Engineering Client",
    rating: 5,
    time: "a year ago",
    text: "Very talented Er Pranjal Nath.. Fully satisfied with his service in the field of Civil Engineering",
  },
  {
    name: "Gairik Paul",
    role: "Local Guide",
    rating: 5,
    time: "2 years ago",
    text: "Highly professional and hard-working individuals..would definitely recommend Pashupati Techno for any construction related consultancies and other related works in this field",
  },
  {
    name: "Chandrima Dutta",
    role: "Google Reviewer",
    rating: 5,
    time: "a year ago",
    text: "Excellent experience. Definitely recommended.",
  },
  {
    name: "Debashree Das",
    role: "Google Reviewer",
    rating: 5,
    time: "a year ago",
    text: "Best in town. Highly recommended!",
  },
  {
    name: "shuvom deb",
    role: "Google Reviewer",
    rating: 5,
    time: "2 years ago",
    text: "Best in town. Also contact me for any discount.",
  },
  {
    name: "Payel Aich",
    role: "Google Reviewer",
    rating: 5,
    time: "4 years ago",
    text: "People please go ahead experienced professionals splendid work and quality....",
  },
  {
    name: "Rajlakshmi Das",
    role: "Google Reviewer",
    rating: 5,
    time: "4 years ago",
    text: "Great experience..worth every penny and time..best service",
  },
  {
    name: "Priya Nath",
    role: "Google Reviewer",
    rating: 5,
    time: "4 years ago",
    text: "Really great experience they are really experienced and professional worth the money",
  },
  {
    name: "Kamaljeet sinha",
    role: "Google Reviewer",
    rating: 5,
    time: "4 years ago",
    text: "Good and experienced professionals.quality work and worth the money.",
  },
  {
    name: "Samar J Nath",
    role: "Google Reviewer",
    rating: 5,
    time: "a year ago",
    text: "Very innovative and creative architect.",
  },
  {
    name: "Pallabi Das",
    role: "Google Reviewer",
    rating: 5,
    time: "a year ago",
    text: "Excellent service....",
  },
  {
    name: "Sawmendra Deb",
    role: "Google Reviewer",
    rating: 5,
    time: "3 years ago",
    text: "Experienced firm for any sort of civil construction solutions.",
  },
  {
    name: "Endow Mazumder",
    role: "Local Guide",
    rating: 5,
    time: "3 years ago",
    text: "Very good in the respective field..",
  },
  {
    name: "Pranab Kanti Nath",
    role: "Local Guide",
    rating: 5,
    time: "2 years ago",
    text: "Looks good",
  },
  {
    name: "Sandipan Paul",
    role: "Local Guide",
    rating: 5,
    time: "4 years ago",
    text: "Best in town",
  },
  {
    name: "Maitrayee Deb",
    role: "Local Guide",
    rating: 5,
    time: "4 years ago",
    text: "🔥🔥🔥",
  },
  {
    name: "Swapnaneel Nandy",
    role: "Google Reviewer",
    rating: 5,
    time: "2 years ago",
    text: "Positive: Excellent service, professional designs, and timely consultation.",
  },
  {
    name: "Prosenjit Nath",
    role: "Google Reviewer",
    rating: 5,
    time: "2 years ago",
    text: "Highly satisfied with their planning drawings and structural consultations.",
  },
  {
    name: "Harishchandra R Meena",
    role: "Google Reviewer",
    rating: 5,
    time: "4 years ago",
    text: "Very professional consulting engineer in Silchar. Great structural design services.",
  },
];

const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();
};

const getAvatarBg = (name: string): string => {
  const code = name.charCodeAt(0) + (name.charCodeAt(1) || 0);
  const colors = [
    "bg-primary-navy text-white",
    "bg-primary-navy-alt text-white",
    "bg-secondary-steel text-white",
    "bg-accent-amber text-headings-ink",
    "bg-[#0D9488] text-white", // Teal
    "bg-[#4338CA] text-white", // Indigo
    "bg-[#7C3AED] text-white", // Violet
  ];
  return colors[code % colors.length];
};

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-white border-b border-border-grey relative overflow-hidden">
      {/* Decorative backdrop mesh */}
      <div className="absolute left-10 bottom-0 w-72 h-72 bg-bg-soft rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Left title & Right navigation controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left max-w-3xl flex flex-col space-y-4">
            <div className="inline-flex self-start items-center space-x-2 text-accent-amber font-heading font-extrabold text-xs uppercase tracking-widest">
              <span className="w-6 h-0.5 bg-accent-amber inline-block"></span>
              <span>Reviews from Google Business Profile</span>
              <span className="w-6 h-0.5 bg-accent-amber inline-block"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-headings-ink leading-tight tracking-tight">
              Trust & Real Feedback (4.9★)
            </h2>
            <p className="text-body-slate text-sm sm:text-base leading-relaxed">
              We hold a 4.9 average review score from verified Google Review submissions. Read our real customer reviews below.
            </p>
          </div>
          
          {/* Scroll Navigation Buttons (Visible on tablet/desktop) */}
          <div className="hidden sm:flex items-center space-x-3 self-end md:self-auto">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full border border-border-grey bg-white text-primary-navy hover:bg-accent-amber hover:border-accent-amber hover:text-white transition duration-300 shadow-sm hover:shadow focus:outline-none cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full border border-border-grey bg-white text-primary-navy hover:bg-accent-amber hover:border-accent-amber hover:text-white transition duration-300 shadow-sm hover:shadow focus:outline-none cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonial Cards Carousel Container */}
        <div className="relative mb-12">
          <motion.div 
            ref={scrollRef}
            className="flex flex-row overflow-x-auto gap-6 pb-6 snap-x snap-mandatory custom-scrollbar -mx-4 px-6 sm:-mx-6 sm:px-12 lg:-mx-8 lg:px-16 scroll-pl-6 sm:scroll-pl-12 lg:scroll-pl-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {reviewsData.map((review, index) => (
              <motion.div 
                key={index}
                className="group bg-bg-soft border border-border-grey rounded-xl p-6 sm:p-7 flex flex-col justify-between h-auto relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-white hover:border-accent-amber/20 hover:-translate-y-0.5 border-l-4 hover:border-l-accent-amber flex-shrink-0 w-[290px] sm:w-[350px] snap-start"
                variants={cardVariants}
              >
                {/* Visual quote accent mark */}
                <span className="absolute -right-2 -top-6 text-9xl font-serif text-primary-navy/5 select-none pointer-events-none group-hover:text-primary-navy/10 transition-colors duration-300">
                  &ldquo;
                </span>

                <div className="relative z-10">
                  {/* Top rating badge and user identity */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-heading font-extrabold text-sm ${getAvatarBg(review.name)}`}>
                        {getInitials(review.name)}
                      </div>
                      <div>
                        <span className="block font-bold text-xs text-headings-ink line-clamp-1">{review.name}</span>
                        <span className="text-[9px] text-body-slate uppercase font-semibold block line-clamp-1">{review.role}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-[10px] text-accent-amber bg-white border border-border-grey/55 px-2 py-0.5 rounded shadow-sm flex-shrink-0">
                      <Star className="w-3 h-3 fill-accent-amber text-accent-amber" />
                      <span className="font-extrabold text-headings-ink">5.0</span>
                    </div>
                  </div>

                  {/* Stars list */}
                  <div className="flex items-center space-x-0.5 text-accent-amber mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-accent-amber text-accent-amber" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-xs text-headings-ink font-medium leading-relaxed italic mb-6">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                {/* Card Footer */}
                <div className="border-t border-border-grey/55 pt-4 flex justify-between items-center text-[10px] relative z-10">
                  <span className="text-body-slate font-medium">{review.time}</span>
                  <span className="text-accent-amber font-semibold uppercase tracking-wider text-[8px] bg-accent-amber/5 px-1.5 py-0.5 rounded">Google Review</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

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
