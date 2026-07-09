"use client";

import React from "react";
import Image from "next/image";
import { X, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export interface EnquiryModalProps {
  closeEnquiryModal: () => void;
  formData: {
    name: string;
    phone: string;
    email: string;
    service: string;
    message: string;
  };
  formErrors: Record<string, string>;
  formSubmitted: boolean;
  isSubmitting: boolean;
  submittedData: {
    name: string;
    phone: string;
    email: string;
    service: string;
    message: string;
  } | null;
  resetForm: () => void;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  handleFormSubmit: (e: React.FormEvent) => void;
}

export default function EnquiryModal({
  closeEnquiryModal,
  formData,
  formErrors,
  formSubmitted,
  isSubmitting,
  submittedData,
  resetForm,
  handleInputChange,
  handleFormSubmit,
}: EnquiryModalProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary-navy/60 backdrop-blur-sm"
      onClick={closeEnquiryModal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-border-grey overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Top gold bar accent */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary-navy via-accent-amber to-primary-navy"></div>

        {/* Close Button */}
        <button
          onClick={closeEnquiryModal}
          className="absolute top-4 right-4 text-body-slate hover:text-primary-navy p-1 focus:outline-none cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-lg font-heading font-extrabold text-headings-ink mb-6 pb-3 border-b border-border-grey flex items-center justify-between">
          <span>Service Enquiry</span>
        </h3>

        {formSubmitted ? (
          <div className="bg-primary-navy/[0.02] border border-primary-navy/10 rounded-xl p-6 text-center space-y-4">
            <div className="w-12 h-12 bg-accent-amber/10 rounded-full flex items-center justify-center mx-auto border border-accent-amber/20">
              <CheckCircle2 className="w-8 h-8 text-accent-amber" />
            </div>
            <div className="space-y-1">
              <h4 className="font-heading font-extrabold text-primary-navy text-base">
                Thank You, {submittedData?.name || "there"}!
              </h4>
              <p className="text-[10px] text-accent-amber font-extrabold uppercase tracking-wider">
                Enquiry Recorded Successfully
              </p>
            </div>
            <p className="text-[11px] text-body-slate max-w-sm mx-auto leading-relaxed">
              Your details have been saved. For an instant response or to discuss details, click the button below to connect with us on WhatsApp.
            </p>
            
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  if (!submittedData) return;
                  const formattedMessage = `Hello Pashupati Techno Dreams,
I would like to discuss my enquiry further.

*Name:* ${submittedData.name}
*Phone:* ${submittedData.phone}
*Email:* ${submittedData.email || "N/A"}
*Service:* ${submittedData.service}
*Message:* ${submittedData.message}`;
                  window.open(
                    `https://wa.me/918136076717?text=${encodeURIComponent(formattedMessage)}`,
                    "_blank"
                  );
                }}
                className="w-full bg-accent-amber hover:bg-[#d9970f] text-primary-navy text-xs font-bold py-3.5 rounded-lg transition shadow-md hover:shadow-lg flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Image
                  src="/social-icons/whatsapp.png"
                  alt="WhatsApp"
                  width={14}
                  height={14}
                  className="object-contain"
                />
                <span>Book an Appointment</span>
              </button>
              
              <button
                onClick={resetForm}
                className="w-full bg-white hover:bg-bg-soft text-body-slate text-xs font-bold py-3.5 rounded-lg transition border border-border-grey flex items-center justify-center cursor-pointer"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-5 text-xs text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label htmlFor="modal-name" className="block text-headings-ink font-bold mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="modal-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-amber/10 focus:border-accent-amber bg-white transition-all duration-200 ${
                    formErrors.name ? "border-red-500 focus:ring-red-555/10" : "border-border-grey"
                  }`}
                  placeholder="John Doe"
                />
                {formErrors.name && (
                  <span className="text-[10px] text-red-500 block mt-1">{formErrors.name}</span>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="modal-phone" className="block text-headings-ink font-bold mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="text"
                  id="modal-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-amber/10 focus:border-accent-amber bg-white transition-all duration-200 ${
                    formErrors.phone ? "border-red-500 focus:ring-red-555/10" : "border-border-grey"
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
                <label htmlFor="modal-email" className="block text-headings-ink font-bold mb-1.5">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-border-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-amber/10 focus:border-accent-amber bg-white transition-all duration-200"
                  placeholder="john@example.com"
                />
              </div>

              {/* Service selection */}
              <div>
                <label htmlFor="modal-service" className="block text-headings-ink font-bold mb-1.5">
                  Select Service Required *
                </label>
                <select
                  id="modal-service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-amber/10 focus:border-accent-amber bg-white transition-all duration-200 ${
                    formErrors.service ? "border-red-500 focus:ring-red-555/10" : "border-border-grey"
                  }`}
                >
                  <option value="">-- Choose Option --</option>
                  <option value="Architectural Planning & Design">Architectural Planning & Design</option>
                  <option value="Structural Engineering & Design">Structural Engineering & Design</option>
                  <option value="Construction Planning & Project Management">Construction Planning & Project Management</option>
                  <option value="Vastu-Compliant Architectural Planning">Vastu-Compliant Architectural Planning</option>
                  <option value="3D Architectural Visualization">3D Architectural Visualization</option>
                  <option value="Instant Residential Building Approval">Instant Residential Building Approval (MMSGNA)</option>
                  <option value="Building Permit & Statutory Approval Drawings">Building Permit & Statutory Approval Drawings</option>
                  <option value="Estimate & Property Valuation">Estimate & Property Valuation</option>
                  <option value="Land Surveying, GIS Mapping & DPR Preparation">Land Surveying, GIS Mapping & DPR</option>
                </select>
                {formErrors.service && (
                  <span className="text-[10px] text-red-500 block mt-1">{formErrors.service}</span>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="modal-message" className="block text-headings-ink font-bold mb-1.5">
                Message details *
              </label>
              <textarea
                id="modal-message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-amber/10 focus:border-accent-amber bg-white transition-all duration-200 ${
                  formErrors.message ? "border-red-500 focus:ring-red-555/10" : "border-border-grey"
                }`}
                placeholder="Briefly describe your requirements..."
              ></textarea>
              {formErrors.message && (
                <span className="text-[10px] text-red-550 block mt-1">{formErrors.message}</span>
              )}
            </div>

            {formErrors.submit && (
              <div className="p-3 bg-red-55/10 border border-red-500/20 text-red-550 rounded-lg text-center font-bold mb-2">
                {formErrors.submit}
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full text-white font-extrabold py-3.5 px-6 rounded-lg transition shadow-md hover:shadow-lg flex items-center justify-center text-sm cursor-pointer ${
                isSubmitting ? "bg-primary-navy/70 cursor-not-allowed" : "bg-primary-navy hover:bg-primary-navy-alt"
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <svg className="animate-spin h-4.5 w-4.5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Recording...</span>
                </div>
              ) : (
                "Submit Enquiry"
              )}
            </button>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}
