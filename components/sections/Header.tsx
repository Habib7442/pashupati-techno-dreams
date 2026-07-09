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
              <a href="tel:+919706609966" className="text-white hover:text-accent-amber font-semibold transition">
                +91 97066 09966
              </a>
            </span>
            <span className="flex items-center">
              <Mail className="w-3.5 h-3.5 mr-2 text-accent-amber" />
              <a href="mailto:pashupatitechnodreams@gmail.com" className="hover:text-accent-amber transition">
                pashupatitechnodreams@gmail.com
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
              className="flex items-center bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-full text-[11px] font-semibold text-white border border-white/10 transition"
            >
              <svg className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
              </svg>
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
            <a 
              href="/" 
              onClick={(e) => { 
                if (typeof window !== "undefined" && window.location.pathname === "/") { 
                  e.preventDefault(); 
                  scrollToTop(e); 
                } 
              }} 
              className="text-primary-navy hover:text-accent-amber transition"
            >
              Home
            </a>
            <a 
              href="/#about" 
              onClick={(e) => { 
                if (typeof window !== "undefined" && window.location.pathname === "/") { 
                  scrollToSection(e, "about"); 
                } 
              }} 
              className="text-body-slate hover:text-accent-amber transition"
            >
              About
            </a>
            <a 
              href="/#services" 
              onClick={(e) => { 
                if (typeof window !== "undefined" && window.location.pathname === "/") { 
                  scrollToSection(e, "services"); 
                } 
              }} 
              className="text-body-slate hover:text-accent-amber transition"
            >
              Services
            </a>
            <a 
              href="/#projects" 
              onClick={(e) => { 
                if (typeof window !== "undefined" && window.location.pathname === "/") { 
                  scrollToSection(e, "projects"); 
                } 
              }} 
              className="text-body-slate hover:text-accent-amber transition"
            >
              Projects
            </a>
            <a 
              href="/#team" 
              onClick={(e) => { 
                if (typeof window !== "undefined" && window.location.pathname === "/") { 
                  scrollToSection(e, "team"); 
                } 
              }} 
              className="text-body-slate hover:text-accent-amber transition"
            >
              Team
            </a>
            <a 
              href="/#contact" 
              onClick={(e) => { 
                if (typeof window !== "undefined" && window.location.pathname === "/") { 
                  scrollToSection(e, "contact"); 
                } 
              }} 
              className="text-body-slate hover:text-accent-amber transition"
            >
              Contact
            </a>
            <div className="flex items-center space-x-2.5">
              <a
                href="/#contact"
                onClick={(e) => { 
                  if (typeof window !== "undefined" && window.location.pathname === "/") { 
                    scrollToSection(e, "contact"); 
                  } 
                }}
                className="bg-primary-navy text-white text-xs px-5 py-2.5 rounded-md hover:bg-primary-navy-alt transition shadow-sm"
              >
                Get a Quote
              </a>
              <a
                href="https://wa.me/918136076717?text=Hello%20Pashupati%20Techno%20Dreams%2C%20I%20would%20like%20to%20book%20an%20appointment%20to%20discuss%20my%20upcoming%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-border-grey text-primary-navy text-xs px-4 py-2.5 rounded-md hover:bg-bg-soft transition shadow-sm inline-flex items-center space-x-1.5"
              >
                <Image
                  src="/social-icons/whatsapp.png"
                  alt="WhatsApp"
                  width={14}
                  height={14}
                  className="object-contain"
                />
                <span>Book Appointment</span>
              </a>
            </div>
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
                href="/"
                onClick={(e) => {
                  if (typeof window !== "undefined" && window.location.pathname === "/") {
                    handleMobileNavClick(e, "top");
                  } else {
                    setMobileMenuOpen(false);
                  }
                }}
                className="text-primary-navy hover:text-accent-amber py-2 border-b border-border-grey/55"
              >
                Home
              </a>
              <a
                href="/#about"
                onClick={(e) => {
                  if (typeof window !== "undefined" && window.location.pathname === "/") {
                    handleMobileNavClick(e, "about");
                  } else {
                    setMobileMenuOpen(false);
                  }
                }}
                className="text-body-slate hover:text-accent-amber py-2 border-b border-border-grey/55"
              >
                About Us
              </a>
              <a
                href="/#services"
                onClick={(e) => {
                  if (typeof window !== "undefined" && window.location.pathname === "/") {
                    handleMobileNavClick(e, "services");
                  } else {
                    setMobileMenuOpen(false);
                  }
                }}
                className="text-body-slate hover:text-accent-amber py-2 border-b border-border-grey/55"
              >
                Services
              </a>
              <a
                href="/#projects"
                onClick={(e) => {
                  if (typeof window !== "undefined" && window.location.pathname === "/") {
                    handleMobileNavClick(e, "projects");
                  } else {
                    setMobileMenuOpen(false);
                  }
                }}
                className="text-body-slate hover:text-accent-amber py-2 border-b border-border-grey/55"
              >
                Our Work
              </a>
              <a
                href="/#team"
                onClick={(e) => {
                  if (typeof window !== "undefined" && window.location.pathname === "/") {
                    handleMobileNavClick(e, "team");
                  } else {
                    setMobileMenuOpen(false);
                  }
                }}
                className="text-body-slate hover:text-accent-amber py-2 border-b border-border-grey/55"
              >
                Our Engineers
              </a>

              <a
                href="/#contact"
                onClick={(e) => {
                  if (typeof window !== "undefined" && window.location.pathname === "/") {
                    handleMobileNavClick(e, "contact");
                  } else {
                    setMobileMenuOpen(false);
                  }
                }}
                className="text-body-slate hover:text-accent-amber py-2"
              >
                Contact
              </a>
            </nav>
            <div className="pt-6 border-t border-border-grey mt-auto flex flex-col space-y-3">
              <a
                href="tel:+919706609966"
                className="flex items-center justify-center bg-secondary-steel/10 text-secondary-steel font-bold py-2.5 rounded-md text-sm"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
              <a
                href="https://wa.me/918136076717?text=Hello%20Pashupati%20Techno%20Dreams%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20a%20building%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-primary-navy text-white font-bold py-2.5 rounded-md text-sm"
              >
                Get a Quote
              </a>
              <a
                href="https://wa.me/918136076717?text=Hello%20Pashupati%20Techno%20Dreams%2C%20I%20would%20like%20to%20book%20an%20appointment%20to%20discuss%20my%20upcoming%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-white border border-border-grey text-primary-navy font-bold py-2.5 rounded-md text-sm space-x-2"
              >
                <Image
                  src="/social-icons/whatsapp.png"
                  alt="WhatsApp"
                  width={16}
                  height={16}
                  className="object-contain"
                />
                <span>Book Appointment</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
