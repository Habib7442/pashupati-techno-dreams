"use client";

import React from "react";
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
          <span className="text-[10px] text-accent-amber font-extrabold uppercase bg-accent-amber/5 px-2.5 py-1 rounded-full tracking-wider">
            Direct WhatsApp Connect
          </span>
        </h3>

        {formSubmitted ? (
          <div className="bg-primary-navy/5 border border-primary-navy/20 rounded-xl p-8 text-center space-y-4">
            <CheckCircle2 className="w-14 h-14 text-accent-amber mx-auto" />
            <h4 className="font-heading font-extrabold text-primary-navy text-lg">
              Enquiry Pre-filled!
            </h4>
            <p className="text-xs text-body-slate max-w-sm mx-auto leading-relaxed">
              Redirecting to WhatsApp to send message. If it did not open automatically, please click
              the button below.
            </p>
            <button
              onClick={() => {
                const formattedMessage = `Hello Pashupati Techno Dreams, I would like to request a quote/enquiry. *Name:* ${formData.name} *Phone:* ${formData.phone} *Service:* ${formData.service} *Message:* ${formData.message}`;
                window.open(
                  `https://wa.me/918136076717?text=${encodeURIComponent(formattedMessage)}`,
                  "_blank"
                );
              }}
              className="bg-primary-navy text-white text-xs font-bold px-8 py-3 rounded-lg hover:bg-primary-navy-alt transition shadow-md"
            >
              Open WhatsApp Chat
            </button>
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

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-primary-navy hover:bg-primary-navy-alt text-white font-extrabold py-3.5 px-6 rounded-lg transition shadow-md hover:shadow-lg flex items-center justify-center text-sm"
            >
              Submit & Send via WhatsApp
            </button>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}
