"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  Clock,
  Star,
  MapPin,
  Menu,
  X,
  FileText,
  Shield,
  Home,
  Compass,
  Sun,
  Layers,
  Calculator,
  Award,
  Users,
  CheckCircle2,
  Check,
} from "lucide-react";

export default function HomePage() {
  // Navigation & Mobile Menu State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Gallery Filter State
  const [activeFilter, setActiveFilter] = useState("all");

  // Stat Counters State
  const [yearsCount, setYearsCount] = useState(0);
  const [reviewsCount, setReviewsCount] = useState(0);
  const [ratingCount, setRatingCount] = useState(0.0);

  // Enquiry Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Scroll detection for sticky header compression
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simple statistics count animation on mount
  useEffect(() => {
    const duration = 2000; // ms
    const steps = 50;
    const intervalTime = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setYearsCount(Math.min(33, Math.round((33 / steps) * currentStep)));
      setReviewsCount(Math.min(36, Math.round((36 / steps) * currentStep)));
      setRatingCount(
        parseFloat(Math.min(4.9, (4.9 / steps) * currentStep).toFixed(1))
      );

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  // Filter gallery items
  const galleryItems = [
    {
      id: 1,
      category: "buildings",
      title: "Multi-Story RCC Structure",
      subtitle: "Structural Design & Drawings",
      image: "/rcc_building.png",
    },
    {
      id: 2,
      category: "bridges",
      title: "Assam Highway Bridge",
      subtitle: "Government Highway Engineering",
      image: "/bridge_construction.png",
    },
    {
      id: 3,
      category: "surveying",
      title: "Topographical Contour Survey",
      subtitle: "Total Station Land Surveying",
      image: "/land_survey.png",
    },
    {
      id: 4,
      category: "interior",
      title: "Modern Executive Lounge",
      subtitle: "3D Rendering & Space Planning",
      image: "/interior_render.png",
    },
  ];

  const filteredGallery =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  // Form input change handler
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  // Enquiry Form validation and redirection
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.trim())) {
      errors.phone = "Enter a valid phone number";
    }
    if (!formData.service) errors.service = "Please select a service";
    if (!formData.message.trim()) errors.message = "Message is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setFormSubmitted(true);

    // Format WhatsApp pre-filled text message
    const formattedMessage = `Hello Pashupati Techno Dreams,
I would like to request a quote/enquiry.

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || "N/A"}
*Service:* ${formData.service}
*Message:* ${formData.message}`;

    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/919706609966?text=${encodedMessage}`;

    // Redirect user to WhatsApp API
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen">
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
          <a href="#" className="flex items-center space-x-3">
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
            <a href="#" className="text-primary-navy hover:text-accent-amber transition">
              Home
            </a>
            <a href="#about" className="text-body-slate hover:text-accent-amber transition">
              About
            </a>
            <a href="#services" className="text-body-slate hover:text-accent-amber transition">
              Services
            </a>
            <a href="#projects" className="text-body-slate hover:text-accent-amber transition">
              Projects
            </a>
            <a href="#team" className="text-body-slate hover:text-accent-amber transition">
              Team
            </a>
            <a href="#reviews" className="text-body-slate hover:text-accent-amber transition">
              Reviews
            </a>
            <a href="#contact" className="text-body-slate hover:text-accent-amber transition">
              Contact
            </a>
            <a
              href="#contact"
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
                onClick={() => setMobileMenuOpen(false)}
                className="text-primary-navy hover:text-accent-amber py-2 border-b border-border-grey/50"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-body-slate hover:text-accent-amber py-2 border-b border-border-grey/50"
              >
                About Us
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-body-slate hover:text-accent-amber py-2 border-b border-border-grey/50"
              >
                Services
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="text-body-slate hover:text-accent-amber py-2 border-b border-border-grey/50"
              >
                Our Work
              </a>
              <a
                href="#team"
                onClick={() => setMobileMenuOpen(false)}
                className="text-body-slate hover:text-accent-amber py-2 border-b border-border-grey/50"
              >
                Our Engineers
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="text-body-slate hover:text-accent-amber py-2 border-b border-border-grey/50"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
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
                href="https://wa.me/919706609966"
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

      <section className="relative overflow-hidden bg-bg-soft border-b border-border-grey lg:min-h-[660px] flex items-center">
        {/* Abstract blueprint grid background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#103E6B_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        {/* Desktop full-bleed image container with diagonal clip-path */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[50%] hidden lg:block z-0 overflow-hidden [clip-path:polygon(15%_0,_100%_0,_100%_100%,_0_100%)] bg-border-grey">
          <Image
            src="/indian_rcc_house.png"
            alt="Modern Indian RCC House designed by Pashupati Techno Dreams"
            fill
            className="object-cover"
            priority
            loading="eager"
            sizes="50vw"
          />
          {/* Glowing gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/20 to-transparent"></div>
          
          {/* Floating badge inside desktop image */}
          <div className="absolute bottom-10 right-10 bg-white shadow-xl rounded-lg p-5 border border-border-grey max-w-[210px] text-center z-10">
            <span className="block text-[10px] font-extrabold text-accent-amber uppercase tracking-wider mb-1">
              One-Stop Solution
            </span>
            <span className="block text-3xl font-extrabold text-primary-navy leading-none mb-1">
              24/7
            </span>
            <span className="block text-[10px] text-body-slate uppercase font-bold tracking-tight">
              Planning to Supervision
            </span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column (Text & Content) */}
            <div className="lg:col-span-7 py-12 lg:py-24 flex flex-col space-y-7 text-left pr-0 lg:pr-12">
              <div className="inline-flex self-start items-center space-x-2 text-accent-amber font-heading font-extrabold text-xs uppercase tracking-widest">
                <span className="w-6 h-0.5 bg-accent-amber inline-block"></span>
                <span>A House of Skilled Engineers</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold font-heading text-headings-ink leading-tight tracking-tight">
                Stronger Structures.<br />
                <span className="text-accent-amber">Safer Homes.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-body-slate max-w-xl leading-relaxed">
                Professional architectural planning, structural safety engineering, land surveying, and highway/bridge infrastructure solutions built for both residential and institutional projects.
              </p>

              {/* Bullet Points with Checkmarks */}
              <div className="flex flex-col space-y-3 pt-2">
                <div className="flex items-center space-x-3">
                  <div className="bg-accent-amber/10 text-accent-amber p-1 rounded-full">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-headings-ink">
                    Registered Technical Personnel & Silchar Municipal Approved
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-accent-amber/10 text-accent-amber p-1 rounded-full">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-headings-ink">
                    Chartered Engineers (IEI) & Govt. PWD Class I Contractors
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
                <a
                  href="#contact"
                  className="bg-primary-navy text-white text-sm font-bold px-8 py-4 rounded shadow-lg hover:bg-primary-navy-alt transition text-center inline-flex items-center justify-center group"
                >
                  <span>Get Your Free Quote</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
                <a
                  href="https://wa.me/919706609966"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-border-grey text-primary-navy hover:text-primary-navy-alt text-sm font-bold px-8 py-4 rounded shadow hover:bg-bg-soft transition text-center inline-flex items-center justify-center space-x-2"
                >
                  <Image
                    src="/social-icons/whatsapp.png"
                    alt="WhatsApp"
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Social Proof Row */}
              <div className="flex items-center space-x-3 pt-4 border-t border-border-grey max-w-xl">
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
              </div>
            </div>

            {/* Mobile/Tablet Fallback Image (Hidden on Desktop) */}
            <div className="lg:hidden col-span-1 block w-full relative aspect-16/10 rounded-lg overflow-hidden shadow-lg bg-border-grey">
              <Image
                src="/indian_rcc_house.png"
                alt="Modern RCC House"
                fill
                className="object-cover"
                priority
                loading="eager"
                sizes="100vw"
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
            </div>
          </div>
        </div>
      </section>

      {/* 4. CREDENTIALS STRIP */}
      <section className="bg-white py-12 border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group flex items-start space-x-4 p-5 rounded-lg bg-bg-soft hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-border-grey/60 border-l-4 hover:border-l-accent-amber hover:-translate-y-0.5">
              <div className="text-accent-amber p-2.5 bg-white rounded-lg shadow-sm border border-border-grey/50 transition-colors duration-300 group-hover:bg-primary-navy group-hover:text-white">
                <Award className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-headings-ink transition-colors duration-300 group-hover:text-primary-navy">Chartered Engineers</h3>
                <p className="text-xs text-body-slate mt-1 leading-relaxed">Certified by the Institution of Engineers, India.</p>
              </div>
            </div>

            <div className="group flex items-start space-x-4 p-5 rounded-lg bg-bg-soft hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-border-grey/60 border-l-4 hover:border-l-accent-amber hover:-translate-y-0.5">
              <div className="text-accent-amber p-2.5 bg-white rounded-lg shadow-sm border border-border-grey/50 transition-colors duration-300 group-hover:bg-primary-navy group-hover:text-white">
                <Shield className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-headings-ink transition-colors duration-300 group-hover:text-primary-navy">PWD Class I Contractor</h3>
                <p className="text-xs text-body-slate mt-1 leading-relaxed">Registered Class I Contractor with PWD Assam.</p>
              </div>
            </div>

            <div className="group flex items-start space-x-4 p-5 rounded-lg bg-bg-soft hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-border-grey/60 border-l-4 hover:border-l-accent-amber hover:-translate-y-0.5">
              <div className="text-accent-amber p-2.5 bg-white rounded-lg shadow-sm border border-border-grey/50 transition-colors duration-300 group-hover:bg-primary-navy group-hover:text-white">
                <Home className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-headings-ink transition-colors duration-300 group-hover:text-primary-navy">Municipal Registered</h3>
                <p className="text-xs text-body-slate mt-1 leading-relaxed">RTP with Silchar Municipality & Development Authority.</p>
              </div>
            </div>

            <div className="group flex items-start space-x-4 p-5 rounded-lg bg-bg-soft hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-border-grey/60 border-l-4 hover:border-l-accent-amber hover:-translate-y-0.5">
              <div className="text-accent-amber p-2.5 bg-white rounded-lg shadow-sm border border-border-grey/50 transition-colors duration-300 group-hover:bg-primary-navy group-hover:text-white">
                <Sun className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-headings-ink transition-colors duration-300 group-hover:text-primary-navy">Vastu-Compliant Design</h3>
                <p className="text-xs text-body-slate mt-1 leading-relaxed">Traditional spatial design elements woven with engineering.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ABOUT US SECTION */}
      <section id="about" className="py-16 lg:py-24 bg-white border-b border-border-grey relative overflow-hidden">
        {/* Subtle grid background element */}
        <div className="absolute right-0 top-0 w-80 h-80 bg-[radial-gradient(#E4E9F0_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-40 pointer-events-none -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Column */}
            <div className="lg:col-span-5">
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
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur shadow-md rounded border-l-4 border-primary-navy p-3 flex items-center space-x-2.5 z-10">
                    <div className="bg-primary-navy/5 text-primary-navy p-1.5 rounded-full">
                      <Award className="w-5 h-5 text-accent-amber" />
                    </div>
                    <div>
                      <span className="block text-[9px] text-body-slate font-bold uppercase tracking-wider">Silchar Office</span>
                      <span className="block text-[11px] font-extrabold text-primary-navy">Barak Valley's Trusted Partner</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Copy Column */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
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
            </div>
          </div>
        </div>
      </section>

      {/* 6. SERVICES SECTION */}
      <section id="services" className="py-16 lg:py-24 bg-bg-soft border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col space-y-4">
            <div className="inline-flex self-center items-center space-x-2 text-accent-amber font-heading font-extrabold text-xs uppercase tracking-widest">
              <span className="w-6 h-0.5 bg-accent-amber inline-block"></span>
              <span>Our Capabilities</span>
              <span className="w-6 h-0.5 bg-accent-amber inline-block"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-headings-ink">
              Our Professional Engineering Services
            </h2>
            <p className="text-body-slate text-sm sm:text-base leading-relaxed">
              We offer comprehensive services ranging from conceptual sketches and plans to heavy-duty structural calculations,
              precision soil/land measurements, bridge layout designs, and interior configurations.
            </p>
          </div>

          {/* Services Grid (8 Services) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1 */}
            <div className="group bg-white rounded-xl p-6 shadow-sm border border-border-grey hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary-navy to-accent-amber transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="text-primary-navy p-3 bg-bg-soft rounded-lg inline-self-start mb-4 transition-colors duration-300 group-hover:bg-primary-navy group-hover:text-white border border-border-grey/30 shadow-sm w-12 h-12 flex items-center justify-center">
                <FileText className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-base font-extrabold text-headings-ink mb-2 transition-colors duration-300 group-hover:text-primary-navy">2D & 3D AutoCAD Drawings</h3>
              <p className="text-xs text-body-slate leading-relaxed mb-4">
                Detailed 2D layout planning, structural blueprints, elevations, cross-sections, and detailed architectural CAD files.
              </p>
              <a href="#contact" className="text-xs text-secondary-steel font-bold hover:text-accent-amber mt-auto inline-flex items-center group/link">
                <span>Inquire service</span>
                <span className="ml-1.5 group-hover/link:translate-x-1 transition-transform duration-300">&rarr;</span>
              </a>
            </div>

            {/* Service 2 - Featured */}
            <div className="group bg-white rounded-xl p-6 shadow-md border border-accent-amber/35 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-accent-amber"></div>
              <div className="absolute top-4 right-4 bg-accent-amber/10 text-accent-amber text-[8px] font-extrabold uppercase px-2 py-0.5 rounded-full tracking-wider">
                Core Expertise
              </div>
              <div className="text-primary-navy p-3 bg-bg-soft rounded-lg inline-self-start mb-4 transition-colors duration-300 group-hover:bg-primary-navy group-hover:text-white border border-border-grey/30 shadow-sm w-12 h-12 flex items-center justify-center">
                <Shield className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-base font-extrabold text-headings-ink mb-2 transition-colors duration-300 group-hover:text-primary-navy">Structural Design</h3>
              <p className="text-xs text-body-slate leading-relaxed mb-4">
                High-integrity concrete/steel design, column alignments, foundation designs, and load estimations following BIS codes.
              </p>
              <a href="#contact" className="text-xs text-secondary-steel font-bold hover:text-accent-amber mt-auto inline-flex items-center group/link">
                <span>Inquire service</span>
                <span className="ml-1.5 group-hover/link:translate-x-1 transition-transform duration-300">&rarr;</span>
              </a>
            </div>

            {/* Service 3 - Featured */}
            <div className="group bg-white rounded-xl p-6 shadow-md border border-accent-amber/35 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-accent-amber"></div>
              <div className="absolute top-4 right-4 bg-accent-amber/10 text-accent-amber text-[8px] font-extrabold uppercase px-2 py-0.5 rounded-full tracking-wider">
                Core Expertise
              </div>
              <div className="text-primary-navy p-3 bg-bg-soft rounded-lg inline-self-start mb-4 transition-colors duration-300 group-hover:bg-primary-navy group-hover:text-white border border-border-grey/30 shadow-sm w-12 h-12 flex items-center justify-center">
                <Home className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-base font-extrabold text-headings-ink mb-2 transition-colors duration-300 group-hover:text-primary-navy">Building Planning & Construction</h3>
              <p className="text-xs text-body-slate leading-relaxed mb-4">
                Complete site planning, municipal drawing approvals, construction estimation, and supervised execution.
              </p>
              <a href="#contact" className="text-xs text-secondary-steel font-bold hover:text-accent-amber mt-auto inline-flex items-center group/link">
                <span>Inquire service</span>
                <span className="ml-1.5 group-hover/link:translate-x-1 transition-transform duration-300">&rarr;</span>
              </a>
            </div>

            {/* Service 4 */}
            <div className="group bg-white rounded-xl p-6 shadow-sm border border-border-grey hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary-navy to-accent-amber transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="text-primary-navy p-3 bg-bg-soft rounded-lg inline-self-start mb-4 transition-colors duration-300 group-hover:bg-primary-navy group-hover:text-white border border-border-grey/30 shadow-sm w-12 h-12 flex items-center justify-center">
                <Layers className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-base font-extrabold text-headings-ink mb-2 transition-colors duration-300 group-hover:text-primary-navy">Bridge & Highway Engineering</h3>
              <p className="text-xs text-body-slate leading-relaxed mb-4">
                Design planning for roadway corridors, concrete bridge structures, drainage structures, and road layouts.
              </p>
              <a href="#contact" className="text-xs text-secondary-steel font-bold hover:text-accent-amber mt-auto inline-flex items-center group/link">
                <span>Inquire service</span>
                <span className="ml-1.5 group-hover/link:translate-x-1 transition-transform duration-300">&rarr;</span>
              </a>
            </div>

            {/* Service 5 */}
            <div className="group bg-white rounded-xl p-6 shadow-sm border border-border-grey hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary-navy to-accent-amber transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="text-primary-navy p-3 bg-bg-soft rounded-lg inline-self-start mb-4 transition-colors duration-300 group-hover:bg-primary-navy group-hover:text-white border border-border-grey/30 shadow-sm w-12 h-12 flex items-center justify-center">
                <Compass className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-base font-extrabold text-headings-ink mb-2 transition-colors duration-300 group-hover:text-primary-navy">Land Surveying (Total Station)</h3>
              <p className="text-xs text-body-slate leading-relaxed mb-4">
                High-precision boundary surveying, topographic contours, area mapping, and elevation markings using digital instruments.
              </p>
              <a href="#contact" className="text-xs text-secondary-steel font-bold hover:text-accent-amber mt-auto inline-flex items-center group/link">
                <span>Inquire service</span>
                <span className="ml-1.5 group-hover/link:translate-x-1 transition-transform duration-300">&rarr;</span>
              </a>
            </div>

            {/* Service 6 */}
            <div className="group bg-white rounded-xl p-6 shadow-sm border border-border-grey hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary-navy to-accent-amber transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="text-primary-navy p-3 bg-bg-soft rounded-lg inline-self-start mb-4 transition-colors duration-300 group-hover:bg-primary-navy group-hover:text-white border border-border-grey/30 shadow-sm w-12 h-12 flex items-center justify-center">
                <Sun className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-base font-extrabold text-headings-ink mb-2 transition-colors duration-300 group-hover:text-primary-navy">Vastu-Compliant Planning</h3>
              <p className="text-xs text-body-slate leading-relaxed mb-4">
                Spatial configurations, room positioning, and entryway orientations aligned with principles of traditional Vastu Shastra.
              </p>
              <a href="#contact" className="text-xs text-secondary-steel font-bold hover:text-accent-amber mt-auto inline-flex items-center group/link">
                <span>Inquire service</span>
                <span className="ml-1.5 group-hover/link:translate-x-1 transition-transform duration-300">&rarr;</span>
              </a>
            </div>

            {/* Service 7 */}
            <div className="group bg-white rounded-xl p-6 shadow-sm border border-border-grey hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary-navy to-accent-amber transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="text-primary-navy p-3 bg-bg-soft rounded-lg inline-self-start mb-4 transition-colors duration-300 group-hover:bg-primary-navy group-hover:text-white border border-border-grey/30 shadow-sm w-12 h-12 flex items-center justify-center">
                <Layers className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-base font-extrabold text-headings-ink mb-2 transition-colors duration-300 group-hover:text-primary-navy">Interior 3D Design</h3>
              <p className="text-xs text-body-slate leading-relaxed mb-4">
                Space planning, customized lighting layouts, modern kitchen visualisations, and photorealistic 3D interior renders.
              </p>
              <a href="#contact" className="text-xs text-secondary-steel font-bold hover:text-accent-amber mt-auto inline-flex items-center group/link">
                <span>Inquire service</span>
                <span className="ml-1.5 group-hover/link:translate-x-1 transition-transform duration-300">&rarr;</span>
              </a>
            </div>

            {/* Service 8 */}
            <div className="group bg-white rounded-xl p-6 shadow-sm border border-border-grey hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary-navy to-accent-amber transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="text-primary-navy p-3 bg-bg-soft rounded-lg inline-self-start mb-4 transition-colors duration-300 group-hover:bg-primary-navy group-hover:text-white border border-border-grey/30 shadow-sm w-12 h-12 flex items-center justify-center">
                <Calculator className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-base font-extrabold text-headings-ink mb-2 transition-colors duration-300 group-hover:text-primary-navy">Estimation & Valuation</h3>
              <p className="text-xs text-body-slate leading-relaxed mb-4">
                Detailed bills of quantity (BOQ), material estimation, building valuation reports, and civil project costing.
              </p>
              <a href="#contact" className="text-xs text-secondary-steel font-bold hover:text-accent-amber mt-auto inline-flex items-center group/link">
                <span>Inquire service</span>
                <span className="ml-1.5 group-hover/link:translate-x-1 transition-transform duration-300">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US & ANIMATED STATS */}
      <section className="py-20 bg-gradient-to-br from-primary-navy via-[#0c2f52] to-[#06182a] text-white relative overflow-hidden">
        {/* Background grids and decorative glow */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-amber/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 flex flex-col space-y-6 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-accent-amber font-heading font-extrabold text-xs uppercase tracking-widest">
                <span className="w-6 h-0.5 bg-accent-amber inline-block"></span>
                <span>Why Choose Pashupati Techno Dreams</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white leading-tight tracking-tight">
                Delivering Structural Safety & Design Innovation Since 2020
              </h2>
              <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                We combine technical expertise, rigorous calculations, and regional experience to deliver
                projects that are safe, Vastu-friendly, and cost-effective. Holding PWD registrations, Chartered Status,
                and RTP licenses, we ensure your building complies with local laws and standard regulations.
              </p>
            </div>

            {/* Right Stats Grid */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-6 max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-accent-amber/5 rounded-2xl blur-xl pointer-events-none -z-10"></div>
                
                <div className="group/stat bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-7 text-center backdrop-blur-md shadow-lg hover:border-accent-amber/30 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1">
                  <span className="block text-4xl sm:text-5xl font-extrabold text-accent-amber mb-2 transition-transform duration-500 group-hover/stat:scale-105 tracking-tight font-heading drop-shadow-[0_2px_8px_rgba(229,168,23,0.15)]">
                    {yearsCount}+
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 transition-colors duration-300 group-hover/stat:text-white">
                    Years Lead Experience
                  </span>
                </div>

                <div className="group/stat bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-7 text-center backdrop-blur-md shadow-lg hover:border-accent-amber/30 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1">
                  <span className="block text-4xl sm:text-5xl font-extrabold text-accent-amber mb-2 transition-transform duration-500 group-hover/stat:scale-105 tracking-tight font-heading drop-shadow-[0_2px_8px_rgba(229,168,23,0.15)]">
                    {reviewsCount}+
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 transition-colors duration-300 group-hover/stat:text-white">
                    Google Reviewers
                  </span>
                </div>

                <div className="group/stat bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-7 text-center backdrop-blur-md shadow-lg hover:border-accent-amber/30 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1">
                  <span className="block text-4xl sm:text-5xl font-extrabold text-accent-amber mb-2 transition-transform duration-500 group-hover/stat:scale-105 tracking-tight font-heading drop-shadow-[0_2px_8px_rgba(229,168,23,0.15)]">
                    {ratingCount.toFixed(1)} ★
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 transition-colors duration-300 group-hover/stat:text-white">
                    Google Average Rating
                  </span>
                </div>

                <div className="group/stat bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-7 text-center backdrop-blur-md shadow-lg hover:border-accent-amber/30 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1">
                  <span className="block text-4xl sm:text-5xl font-extrabold text-accent-amber mb-2 transition-transform duration-500 group-hover/stat:scale-105 tracking-tight font-heading drop-shadow-[0_2px_8px_rgba(229,168,23,0.15)]">
                    Est. 2020
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 transition-colors duration-300 group-hover/stat:text-white">
                    Consultancy Estd.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PROJECTS / CAPABILITIES GALLERY */}
      <section id="projects" className="py-16 lg:py-24 bg-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col space-y-4">
            <div className="inline-flex self-center items-center space-x-2 text-accent-amber font-heading font-extrabold text-xs uppercase tracking-widest">
              <span className="w-6 h-0.5 bg-accent-amber inline-block"></span>
              <span>Our Work & Capabilities</span>
              <span className="w-6 h-0.5 bg-accent-amber inline-block"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-headings-ink leading-tight tracking-tight">
              Civil Projects & Architectural Models
            </h2>
            <p className="text-body-slate text-sm sm:text-base leading-relaxed">
              Take a look at the types of projects we design, calculate, and survey across the Barak Valley region.
            </p>
          </div>

          {/* Filtering buttons */}
          <div className="flex flex-wrap justify-center gap-1.5 mb-12 bg-bg-soft p-1.5 rounded-full max-w-3xl mx-auto border border-border-grey/60">
            {[
              { id: "all", label: "Show All" },
              { id: "buildings", label: "Buildings" },
              { id: "bridges", label: "Bridges" },
              { id: "surveying", label: "Surveying" },
              { id: "interior", label: "3D Interior Design" },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2.5 rounded-full font-heading font-extrabold text-[10px] sm:text-xs uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-primary-navy text-white shadow-md scale-102"
                    : "text-body-slate hover:text-primary-navy hover:bg-white/70"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-xl overflow-hidden border border-border-grey hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="overflow-hidden aspect-4/3 relative bg-border-grey">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-500"
                    sizes="(max-w-720px) 100vw, 300px"
                  />
                  <div className="absolute inset-0 bg-primary-navy/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <span className="bg-white text-primary-navy text-xs font-extrabold px-5 py-2.5 rounded shadow-lg uppercase tracking-wider scale-95 group-hover:scale-100 transition-all duration-300">
                      Inquire Details
                    </span>
                  </div>
                </div>
                <div className="p-5 border-t border-border-grey flex flex-col justify-between flex-grow">
                  <div>
                    <span className="inline-block text-[8px] font-extrabold text-accent-amber uppercase tracking-widest bg-accent-amber/5 px-2 py-0.5 rounded mb-2">
                      {item.category === "buildings" ? "Residential & Commercial" : item.category === "bridges" ? "Infrastructure" : item.category}
                    </span>
                    <h3 className="text-sm font-extrabold text-headings-ink leading-snug group-hover:text-primary-navy transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-body-slate mt-2 leading-relaxed">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. OUR ENGINEERS (TEAM) */}
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
            <div className="group bg-white rounded-xl p-6 sm:p-7 shadow-sm border border-border-grey hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex flex-col space-y-4">
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
            </div>

            {/* Team Member 2 */}
            <div className="group bg-white rounded-xl p-6 sm:p-7 shadow-sm border border-border-grey hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex flex-col space-y-4">
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
            </div>
          </div>
        </div>
      </section>      {/* 10. TESTIMONIALS (GOOGLE REVIEWS) */}
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Review 1 */}
            <div className="group bg-bg-soft border border-border-grey rounded-xl p-7 flex flex-col h-full relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-white hover:-translate-y-0.5 border-l-4 hover:border-l-accent-amber">
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
            </div>

            {/* Review 2 */}
            <div className="group bg-bg-soft border border-border-grey rounded-xl p-7 flex flex-col h-full relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-white hover:-translate-y-0.5 border-l-4 hover:border-l-accent-amber">
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
            </div>

            {/* Review 3 */}
            <div className="group bg-bg-soft border border-border-grey rounded-xl p-7 flex flex-col h-full relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-white hover:-translate-y-0.5 border-l-4 hover:border-l-accent-amber">
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
            </div>
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

      {/* 11. CALL-TO-ACTION BAND */}
      <section className="bg-primary-navy py-12 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center flex flex-col items-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
            Planning to Build Your Home or Commercial Project?
          </h2>
          <p className="text-white/80 max-w-xl text-sm sm:text-base leading-relaxed">
            Get in touch with Silchar's experienced chartered engineers. Let us design a compliant, safe,
            and optimized structure.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href="tel:+919706609966"
              className="bg-accent-amber text-primary-navy font-bold px-8 py-3.5 rounded hover:bg-white transition text-sm flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call +91 97066 09966
            </a>
            <a
              href="https://wa.me/918136076717"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3.5 rounded transition text-sm flex items-center justify-center border border-white/20"
            >
              WhatsApp Assistant
            </a>
          </div>
        </div>
      </section>

      {/* 12. CONTACT SECTION */}
      <section id="contact" className="py-16 lg:py-24 bg-bg-soft border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Contact Details & Map Column */}
            <div className="lg:col-span-5 flex flex-col space-y-8">
              <div>
                <span className="text-[10px] font-extrabold text-accent-amber uppercase tracking-wider">
                  Contact Details
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-headings-ink mt-1 leading-tight tracking-tight">
                  Get in Touch
                </h2>
                <p className="text-xs text-body-slate mt-2 leading-relaxed">
                  Visit our office, give us a call, or fill out the enquiry form. We will respond promptly.
                </p>
              </div>

              {/* Detail Items */}
              <div className="flex flex-col space-y-4">
                <div className="group flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-border-grey hover:border-accent-amber/30 hover:shadow-md transition-all duration-300">
                  <div className="bg-primary-navy/5 text-primary-navy p-3 rounded-lg flex-shrink-0 group-hover:bg-primary-navy group-hover:text-white transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-accent-amber" />
                  </div>
                  <div>
                    <strong className="block text-sm text-headings-ink">Office Address</strong>
                    <span className="text-xs text-body-slate mt-1 leading-relaxed">
                      Room No. 26 (First Floor), Town Club Complex,<br />
                      PWD Road, Silchar-1, Assam 788001, India
                    </span>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-border-grey hover:border-accent-amber/30 hover:shadow-md transition-all duration-300">
                  <div className="bg-primary-navy/5 text-primary-navy p-3 rounded-lg flex-shrink-0 group-hover:bg-primary-navy group-hover:text-white transition-colors duration-300">
                    <Phone className="w-5 h-5 text-accent-amber" />
                  </div>
                  <div>
                    <strong className="block text-sm text-headings-ink">Mobile Contacts</strong>
                    <span className="text-xs text-body-slate mt-1 block">
                      Primary:{" "}
                      <a href="tel:+919706609966" className="font-semibold hover:text-accent-amber transition">
                        +91 97066 09966
                      </a>
                    </span>
                    <span className="text-xs text-body-slate block">
                      WhatsApp/Alt:{" "}
                      <a href="tel:+918136076717" className="font-semibold hover:text-accent-amber transition">
                        +91 81360 76717
                      </a>
                    </span>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-border-grey hover:border-accent-amber/30 hover:shadow-md transition-all duration-300">
                  <div className="bg-primary-navy/5 text-primary-navy p-3 rounded-lg flex-shrink-0 group-hover:bg-primary-navy group-hover:text-white transition-colors duration-300">
                    <Mail className="w-5 h-5 text-accent-amber" />
                  </div>
                  <div>
                    <strong className="block text-sm text-headings-ink">Email Address</strong>
                    <span className="text-xs text-body-slate mt-1">
                      <a href="mailto:pranjal.erpn@gmail.com" className="hover:text-accent-amber font-semibold transition">
                        pranjal.erpn@gmail.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="overflow-hidden rounded-xl shadow-md border border-border-grey aspect-16/10 bg-white relative">
                <iframe
                  title="Pashupati Techno Dreams Office Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d1810.0526019559495!2d92.7963473!3d24.825833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e4a7d79b9ef9b%3A0xe968478d1f2b60ab!2sPashupati%20Techno%20Dreams!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
            </div>

            {/* Right Contact Form Column */}
            <div className="lg:col-span-7 bg-white rounded-xl p-6 sm:p-8 shadow-md border border-border-grey relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary-navy to-accent-amber"></div>
              
              <h3 className="text-lg font-extrabold text-headings-ink mb-6 pb-3 border-b border-border-grey flex items-center justify-between">
                <span>Send Project Enquiry</span>
                <span className="text-[10px] text-accent-amber font-extrabold uppercase bg-accent-amber/5 px-2.5 py-1 rounded-full tracking-wider">Fast Response</span>
              </h3>

              {formSubmitted ? (
                <div className="bg-primary-navy/5 border border-primary-navy/20 rounded-xl p-8 text-center space-y-4">
                  <CheckCircle2 className="w-14 h-14 text-accent-amber mx-auto" />
                  <h4 className="font-heading font-extrabold text-primary-navy text-lg">Enquiry Pre-filled!</h4>
                  <p className="text-xs text-body-slate max-w-sm mx-auto leading-relaxed">
                    Redirecting to WhatsApp to send message. If it did not open automatically, please click the button below.
                  </p>
                  <button
                    onClick={() => {
                      const formattedMessage = `Hello Pashupati Techno Dreams, I would like to request a quote/enquiry. *Name:* ${formData.name} *Phone:* ${formData.phone} *Service:* ${formData.service} *Message:* ${formData.message}`;
                      window.open(`https://wa.me/919706609966?text=${encodeURIComponent(formattedMessage)}`, "_blank");
                    }}
                    className="bg-primary-navy text-white text-xs font-bold px-8 py-3 rounded-lg hover:bg-primary-navy-alt transition shadow-md"
                  >
                    Open WhatsApp Chat
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="form-name" className="block text-headings-ink font-bold mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="form-name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full p-3.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-amber/10 focus:border-accent-amber bg-white transition-all duration-200 ${
                          formErrors.name ? "border-red-500 focus:ring-red-550/10" : "border-border-grey"
                        }`}
                        placeholder="John Doe"
                      />
                      {formErrors.name && (
                        <span className="text-[10px] text-red-500 block mt-1">{formErrors.name}</span>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="form-phone" className="block text-headings-ink font-bold mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="text"
                        id="form-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full p-3.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-amber/10 focus:border-accent-amber bg-white transition-all duration-200 ${
                          formErrors.phone ? "border-red-500 focus:ring-red-550/10" : "border-border-grey"
                        }`}
                        placeholder="+91 98765 43210"
                      />
                      {formErrors.phone && (
                        <span className="text-[10px] text-red-500 block mt-1">{formErrors.phone}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label htmlFor="form-email" className="block text-headings-ink font-bold mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        id="form-email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-3.5 border border-border-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-amber/10 focus:border-accent-amber bg-white transition-all duration-200"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Service selection */}
                    <div>
                      <label htmlFor="form-service" className="block text-headings-ink font-bold mb-1.5">
                        Select Service Required *
                      </label>
                      <select
                        id="form-service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className={`w-full p-3.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-amber/10 focus:border-accent-amber bg-white transition-all duration-200 ${
                          formErrors.service ? "border-red-500 focus:ring-red-550/10" : "border-border-grey"
                        }`}
                      >
                        <option value="">-- Choose Option --</option>
                        <option value="AutoCAD Drawings">2D/3D AutoCAD Drawings</option>
                        <option value="Structural Design">Structural Engineering Design</option>
                        <option value="Building Planning & Construction">Planning & Construction</option>
                        <option value="Bridge & Highway Engineering">Road/Bridge Engineering</option>
                        <option value="Land Surveying">Total Station Land Surveying</option>
                        <option value="Vastu-Compliant Planning">Vastu Shastra Planning</option>
                        <option value="Interior Design">Interior 3D Design</option>
                        <option value="Estimation & Valuation">Estimation & BOQ Valuation</option>
                      </select>
                      {formErrors.service && (
                        <span className="text-[10px] text-red-500 block mt-1">{formErrors.service}</span>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="form-message" className="block text-headings-ink font-bold mb-1.5">
                      Message details *
                    </label>
                    <textarea
                      id="form-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full p-3.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-amber/10 focus:border-accent-amber bg-white transition-all duration-200 ${
                        formErrors.message ? "border-red-500 focus:ring-red-550/10" : "border-border-grey"
                      }`}
                      placeholder="Briefly describe your land dimensions, room requirements, or structural needs..."
                    ></textarea>
                    {formErrors.message && (
                      <span className="text-[10px] text-red-550 block mt-1">{formErrors.message}</span>
                    )}
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full bg-primary-navy hover:bg-primary-navy-alt text-white font-extrabold py-4 px-6 rounded-lg transition shadow-md hover:shadow-lg flex items-center justify-center text-sm"
                  >
                    Submit & Send via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 13. FOOTER */}
      <footer className="bg-primary-navy text-white/70 text-xs pt-16 pb-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Column 1: About */}
            <div className="flex flex-col space-y-4">
              <a href="#" className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded bg-white flex items-center justify-center p-1 relative">
                  <Image
                    src="/logo.png"
                    alt="Pashupati Techno Dreams logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="block font-heading font-extrabold text-white leading-none tracking-tight">
                    PASHUPATI
                  </span>
                  <span className="block font-heading text-[10px] font-bold text-accent-amber uppercase tracking-wider">
                    Techno Dreams
                  </span>
                </div>
              </a>
              <p className="leading-relaxed">
                Established in 2020. A House of Skilled Engineers delivering top-tier drawings,
                safe structural design, land surveying, and construction solutions across Assam.
              </p>
              <p className="text-white font-semibold italic font-heading">
                &ldquo;We build your dreams.&rdquo;
              </p>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="flex flex-col space-y-3">
              <h4 className="text-white font-bold uppercase tracking-wider text-sm border-b border-white/10 pb-2 mb-1">
                Quick Directory
              </h4>
              <a href="#" className="hover:text-accent-amber transition">Home Page</a>
              <a href="#about" className="hover:text-accent-amber transition">About Firm</a>
              <a href="#services" className="hover:text-accent-amber transition">Our Services</a>
              <a href="#projects" className="hover:text-accent-amber transition">Capabilities Gallery</a>
              <a href="#team" className="hover:text-accent-amber transition">Lead Engineers</a>
              <a href="#reviews" className="hover:text-accent-amber transition">Google Reviews</a>
            </div>

            {/* Column 3: Services Links */}
            <div className="flex flex-col space-y-3">
              <h4 className="text-white font-bold uppercase tracking-wider text-sm border-b border-white/10 pb-2 mb-1">
                Engineering Services
              </h4>
              <a href="#services" className="hover:text-accent-amber transition">AutoCAD Blueprints</a>
              <a href="#services" className="hover:text-accent-amber transition">RCC Structural Design</a>
              <a href="#services" className="hover:text-accent-amber transition">Total Station Surveying</a>
              <a href="#services" className="hover:text-accent-amber transition">Vastu spatial layouts</a>
              <a href="#services" className="hover:text-accent-amber transition">Bridge & Road planning</a>
              <a href="#services" className="hover:text-accent-amber transition">Interior 3D Rendering</a>
            </div>

            {/* Column 4: Contact/Socials */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-white font-bold uppercase tracking-wider text-sm border-b border-white/10 pb-2 mb-1">
                Silchar Office
              </h4>
              <p className="leading-relaxed">
                Room No. 26 (First Floor), Town Club Complex,<br />
                PWD Road, Silchar-1, Assam 788001, India
              </p>
              <div className="flex items-center space-x-2">
                <a
                  href="https://www.instagram.com/dreams_p_techno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 p-2 rounded border border-white/10 transition flex items-center justify-center"
                  aria-label="Instagram Profile"
                >
                  <Image
                    src="/social-icons/instagram.png"
                    alt="Instagram"
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                </a>
                <a
                  href="https://wa.me/919706609966"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 p-2 rounded border border-white/10 transition flex items-center justify-center"
                  aria-label="WhatsApp Chat"
                >
                  <Image
                    src="/social-icons/whatsapp.png"
                    alt="WhatsApp"
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 p-2 rounded border border-white/10 transition flex items-center justify-center"
                  aria-label="Facebook Page"
                >
                  <Image
                    src="/social-icons/facebook.png"
                    alt="Facebook"
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 p-2 rounded border border-white/10 transition flex items-center justify-center"
                  aria-label="LinkedIn Profile"
                >
                  <Image
                    src="/social-icons/linkedin.png"
                    alt="LinkedIn"
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 p-2 rounded border border-white/10 transition flex items-center justify-center"
                  aria-label="X Profile"
                >
                  <Image
                    src="/social-icons/X.png"
                    alt="X"
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p>
              &copy; {new Date().getFullYear()} Pashupati Techno Dreams. All rights reserved.
            </p>
            <p className="text-[10px] text-white/55">
              NAP Aligned with Google Business Profile &bull; Silchar, Cachar, Assam
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
