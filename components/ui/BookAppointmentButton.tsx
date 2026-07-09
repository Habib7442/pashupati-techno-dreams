"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BookAppointmentButtonProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  text?: string;
  variant?: "solid" | "outline";
}

export default function BookAppointmentButton({
  className,
  size = "md",
  text = "Book an Appointment",
  variant = "solid",
}: BookAppointmentButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-bold font-heading rounded-md shadow-sm transition duration-300 focus:outline-none select-none text-center cursor-pointer";

  const sizeClasses = {
    sm: "text-xs px-4 py-2.5 space-x-1.5",
    md: "text-sm px-6 py-3.5 space-x-2",
    lg: "text-sm sm:text-base px-8 py-4 space-x-2.5",
  };

  const variantClasses = {
    solid: "bg-accent-amber text-headings-ink hover:bg-[#d9970f] active:bg-[#c78809] shadow-md",
    outline: "bg-white border border-border-grey text-primary-navy hover:bg-bg-soft",
  };

  const whatsappIconSize = size === "sm" ? 14 : size === "md" ? 16 : 18;

  return (
    <a
      href="https://wa.me/918136076717?text=Hello%20Pashupati%20Techno%20Dreams%2C%20I%20would%20like%20to%20book%20an%20appointment%20to%20discuss%20my%20upcoming%20project."
      target="_blank"
      rel="noopener noreferrer"
      className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
    >
      <Image
        src="/social-icons/whatsapp.png"
        alt="WhatsApp"
        width={whatsappIconSize}
        height={whatsappIconSize}
        className="object-contain flex-shrink-0"
      />
      <span>{text}</span>
    </a>
  );
}
