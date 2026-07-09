"use client";

import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import BookAppointmentButton from "@/components/ui/BookAppointmentButton";

// Section Components
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Credentials from "@/components/sections/Credentials";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Projects from "@/components/sections/Projects";
import Team from "@/components/sections/Team";
import Reviews from "@/components/sections/Reviews";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import EnquiryModal from "@/components/sections/EnquiryModal";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  // Modal Dialog States & Handlers
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openEnquiryModal = (serviceName: string) => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: serviceName,
      message: "",
    });
    setFormErrors({});
    setFormSubmitted(false);
    setSubmittedData(null);
    setIsModalOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsModalOpen(false);
    setFormSubmitted(false);
    setSubmittedData(null);
  };

  // Programmatic smooth scroll helper that avoids hashtag in URL
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setMobileMenuOpen(false);
    if (id === "top") {
      scrollToTop(e);
    } else {
      scrollToSection(e, id);
    }
  };

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

  // Lock body scroll when mobile drawer or modal is active
  useEffect(() => {
    if (mobileMenuOpen || isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, isModalOpen]);

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

  // Reset form helper
  const resetForm = () => {
    setFormSubmitted(false);
    setSubmittedData(null);
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
    setFormErrors({});
  };

  // Enquiry Form validation and backend submission
  const handleFormSubmit = async (e: React.FormEvent) => {
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
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit enquiry.");
      }

      setSubmittedData({ ...formData });
      setFormSubmitted(true);
      
      // Clear inputs for future form entries
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setFormErrors({ submit: "Failed to record enquiry. Please check your internet connection or try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        isScrolled={isScrolled}
        scrollToTop={scrollToTop}
        scrollToSection={scrollToSection}
        handleMobileNavClick={handleMobileNavClick}
      />

      {/* MAIN SECTIONS */}
      <main className="flex-grow overflow-x-hidden">
        {/* HERO */}
        <Hero scrollToSection={scrollToSection} />

        {/* CREDENTIALS */}
        <Credentials />

        {/* ABOUT */}
        <About />

        {/* SERVICES */}
        <Services openEnquiryModal={openEnquiryModal} />

        {/* ANIMATED STATS */}
        <Stats
          yearsCount={yearsCount}
          reviewsCount={reviewsCount}
          ratingCount={ratingCount}
        />

        {/* PROJECTS */}
        <Projects />

        {/* TEAM */}
        <Team />

        {/* REVIEWS */}
        <Reviews />

        {/* CALL-TO-ACTION BAND */}
        <section className="bg-primary-navy py-12 text-white">
          <div className="max-w-5xl mx-auto px-4 text-left md:text-center flex flex-col items-start md:items-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Planning to Build Your Home or Commercial Project?
            </h2>
            <p className="text-white/80 max-w-xl text-sm sm:text-base leading-relaxed">
              Get in touch with Silchar's experienced chartered engineers. Let us design a compliant, safe,
              and optimized structure.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto items-center sm:items-stretch">
              <a
                href="tel:+919706609966"
                className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-bold px-8 py-3.5 rounded transition text-sm flex items-center justify-center font-heading w-full sm:w-auto"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call +91 97066 09966
              </a>
              <BookAppointmentButton size="md" className="w-full sm:w-auto" />
            </div>
          </div>
        </section>

        {/* CONTACT & MAP */}
        <Contact
          formData={formData}
          formErrors={formErrors}
          formSubmitted={formSubmitted}
          isSubmitting={isSubmitting}
          submittedData={submittedData}
          resetForm={resetForm}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
        />
      </main>

      {/* FOOTER */}
      <Footer scrollToTop={scrollToTop} scrollToSection={scrollToSection} />

      {/* ENQUIRY DIALOG MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <EnquiryModal
            closeEnquiryModal={closeEnquiryModal}
            formData={formData}
            formErrors={formErrors}
            formSubmitted={formSubmitted}
            isSubmitting={isSubmitting}
            submittedData={submittedData}
            resetForm={resetForm}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
