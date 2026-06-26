import React from "react";
import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";

export interface ContactProps {
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

export default function Contact({
  formData,
  formErrors,
  formSubmitted,
  handleInputChange,
  handleFormSubmit,
}: ContactProps) {
  return (
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
          </div>

          {/* Right Contact Form Column */}
          <div className="lg:col-span-7 bg-white rounded-xl p-6 sm:p-8 shadow-md border border-border-grey relative overflow-hidden self-start">
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
                    window.open(`https://wa.me/918136076717?text=${encodeURIComponent(formattedMessage)}`, "_blank");
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
                      <span className="text-[10px] text-red-550 block mt-1">{formErrors.name}</span>
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
                      <span className="text-[10px] text-red-550 block mt-1">{formErrors.phone}</span>
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
                      <span className="text-[10px] text-red-550 block mt-1">{formErrors.service}</span>
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

        {/* Embedded Google Map (Full Width) */}
        <div className="mt-12 overflow-hidden rounded-xl shadow-md border border-border-grey bg-white relative w-full h-[250px] sm:h-[350px] lg:h-[400px]">
          <iframe
            title="Pashupati Techno Dreams Office Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14483.780545957758!2d92.77659688077296!3d24.831549771162145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e4a604d25fa55%3A0xcedb965aeac6de25!2sPASHUPATI%20TECHNO%20DREAMS!5e0!3m2!1sen!2sin!4v1782472240745!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full h-full transition-all duration-500"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
