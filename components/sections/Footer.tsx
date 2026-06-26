import React from "react";
import Image from "next/image";

export interface FooterProps {
  scrollToTop: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

export default function Footer({ scrollToTop, scrollToSection }: FooterProps) {
  return (
    <footer className="bg-primary-navy text-white/70 text-xs pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div className="flex flex-col space-y-4">
            <a href="#" onClick={scrollToTop} className="flex items-center space-x-2">
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
            <a href="#" onClick={scrollToTop} className="hover:text-accent-amber transition">Home Page</a>
            <a href="#about" onClick={(e) => scrollToSection(e, "about")} className="hover:text-accent-amber transition">About Firm</a>
            <a href="#services" onClick={(e) => scrollToSection(e, "services")} className="hover:text-accent-amber transition">Our Services</a>
            <a href="#projects" onClick={(e) => scrollToSection(e, "projects")} className="hover:text-accent-amber transition">Capabilities Gallery</a>
            <a href="#team" onClick={(e) => scrollToSection(e, "team")} className="hover:text-accent-amber transition">Lead Engineers</a>
            <a href="#reviews" onClick={(e) => scrollToSection(e, "reviews")} className="hover:text-accent-amber transition">Google Reviews</a>
          </div>

          {/* Column 3: Services Links */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm border-b border-white/10 pb-2 mb-1">
              Engineering Services
            </h4>
            <a href="#services" onClick={(e) => scrollToSection(e, "services")} className="hover:text-accent-amber transition">AutoCAD Blueprints</a>
            <a href="#services" onClick={(e) => scrollToSection(e, "services")} className="hover:text-accent-amber transition">RCC Structural Design</a>
            <a href="#services" onClick={(e) => scrollToSection(e, "services")} className="hover:text-accent-amber transition">Total Station Surveying</a>
            <a href="#services" onClick={(e) => scrollToSection(e, "services")} className="hover:text-accent-amber transition">Vastu spatial layouts</a>
            <a href="#services" onClick={(e) => scrollToSection(e, "services")} className="hover:text-accent-amber transition">Bridge & Road planning</a>
            <a href="#services" onClick={(e) => scrollToSection(e, "services")} className="hover:text-accent-amber transition">Interior 3D Rendering</a>
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
                href="https://wa.me/918136076717?text=Hello%20Pashupati%20Techno%20Dreams%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20chat%20about%20your%20services."
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
                href="https://www.facebook.com/PashupatiTechnoDreams"
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
  );
}
