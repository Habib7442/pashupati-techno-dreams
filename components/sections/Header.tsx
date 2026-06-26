import React from "react";
import Image from "next/image";
import { Phone, Mail, Clock, Star, Menu, X } from "lucide-react";

export interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  isScrolled: boolean;
  scrollToTop: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
  handleMobileNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

export default function Header({
  mobileMenuOpen,
  setMobileMenuOpen,
  isScrolled,
  scrollToTop,
  scrollToSection,
  handleMobileNavClick,
}: HeaderProps) {
  return (
    <>
      {/* 1. TOP UTILITY BAR */}
      <div className="hidden lg:block bg-primary-navy text-white/85 text-[11px] py-2.5 border-b border-white/10 font-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <span className="flex items-center">
              <Phone className="w-3.5 h-3.5 mr-2 text-accent-amber" />
              <a href="tel:+918136076717" className="text-white hover:text-accent-amber font-semibold transition">
                +91 81360 76717
              </a>
            </span>
            <span className="flex items-center">
              <Mail className="w-3.5 h-3.5 mr-2 text-accent-amber" />
              <a href="mailto:pranjal.erpn@gmail.com" className="hover:text-accent-amber transition">
                pranjal.erpn@gmail.com
              </a>
            </span>
            <span className="flex items-center text-white/70">
              <Clock className="w-3.5 h-3.5 mr-2 text-accent-amber" />
              <span>Mon - Sat: 10:00 AM - 7:00 PM</span>
            </span>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://www.google.com/search?q=Pashupati+Techno+Dreams+Silchar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-white/10 hover:bg-white/15 px-3 py-1 rounded-full text-[11px] font-semibold text-white border border-white/10 transition"
            >
              <Star className="w-3.5 h-3.5 text-accent-amber fill-accent-amber mr-1.5" />
              <span>4.9/5 (36 Google Reviews)</span>
            </a>
            
            <a
              href="https://www.instagram.com/dreams_p_techno"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-85 transition flex items-center space-x-1.5"
              aria-label="Instagram Profile"
            >
              <Image
                src="/social-icons/instagram.png"
                alt="Instagram"
                width={15}
                height={15}
                className="object-contain"
              />
              <span className="hidden xl:inline text-white">dreams_p_techno</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. HEADER & NAVIGATION */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2"
            : "bg-white py-4 border-b border-border-grey"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo brand */}
          <a href="#" onClick={scrollToTop} className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Pashupati Techno Dreams Logo"
              width={240}
              height={55}
              className="h-11 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8 font-heading text-sm font-semibold">
            <a href="#" onClick={scrollToTop} className="text-primary-navy hover:text-accent-amber transition">
              Home
            </a>
            <a href="#about" onClick={(e) => scrollToSection(e, "about")} className="text-body-slate hover:text-accent-amber transition">
              About
            </a>
            <a href="#services" onClick={(e) => scrollToSection(e, "services")} className="text-body-slate hover:text-accent-amber transition">
              Services
            </a>
            <a href="#projects" onClick={(e) => scrollToSection(e, "projects")} className="text-body-slate hover:text-accent-amber transition">
              Projects
            </a>
            <a href="#team" onClick={(e) => scrollToSection(e, "team")} className="text-body-slate hover:text-accent-amber transition">
              Team
            </a>
            <a href="#reviews" onClick={(e) => scrollToSection(e, "reviews")} className="text-body-slate hover:text-accent-amber transition">
              Reviews
            </a>
            <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="text-body-slate hover:text-accent-amber transition">
              Contact
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="bg-primary-navy text-white text-xs px-5 py-2.5 rounded-md hover:bg-primary-navy-alt transition shadow-sm"
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile menu button toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-primary-navy p-1 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-primary-navy/40 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white shadow-xl p-6 flex flex-col space-y-6 z-50 animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b border-border-grey pb-4">
              <span className="font-heading font-extrabold text-primary-navy tracking-tight">
                NAVIGATION
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-primary-navy p-1 focus:outline-none"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col space-y-4 font-heading font-semibold text-base">
              <a
                href="#"
                onClick={(e) => handleMobileNavClick(e, "top")}
                className="text-primary-navy hover:text-accent-amber py-2 border-b border-border-grey/50"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => handleMobileNavClick(e, "about")}
                className="text-body-slate hover:text-accent-amber py-2 border-b border-border-grey/50"
              >
                About Us
              </a>
              <a
                href="#services"
                onClick={(e) => handleMobileNavClick(e, "services")}
                className="text-body-slate hover:text-accent-amber py-2 border-b border-border-grey/50"
              >
                Services
              </a>
              <a
                href="#projects"
                onClick={(e) => handleMobileNavClick(e, "projects")}
                className="text-body-slate hover:text-accent-amber py-2 border-b border-border-grey/50"
              >
                Our Work
              </a>
              <a
                href="#team"
                onClick={(e) => handleMobileNavClick(e, "team")}
                className="text-body-slate hover:text-accent-amber py-2 border-b border-border-grey/50"
              >
                Our Engineers
              </a>
              <a
                href="#reviews"
                onClick={(e) => handleMobileNavClick(e, "reviews")}
                className="text-body-slate hover:text-accent-amber py-2 border-b border-border-grey/50"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                onClick={(e) => handleMobileNavClick(e, "contact")}
                className="text-body-slate hover:text-accent-amber py-2"
              >
                Contact
              </a>
            </nav>
            <div className="pt-6 border-t border-border-grey mt-auto flex flex-col space-y-3">
              <a
                href="tel:+918136076717"
                className="flex items-center justify-center bg-secondary-steel/10 text-secondary-steel font-bold py-2.5 rounded-md text-sm"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
              <a
                href="https://wa.me/918136076717"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-primary-navy text-white font-bold py-2.5 rounded-md text-sm"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
