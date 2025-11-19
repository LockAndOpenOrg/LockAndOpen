/* eslint-disable no-unused-vars */
"use client";
import React from "react";
import { motion } from "framer-motion";

// --- Calendar Icon ---
const IconCalendar = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }
  },
  hover: { scale: 1.015, transition: { duration: 0.2 } },
};

const buttonVariants = {
  ...sectionVariants,
  tap: { scale: 0.97, boxShadow: "0 4px 10px rgba(142, 45, 226, 0.2)" },
};

export default function ContactSection() {
  const zohoBookingLink = "YOUR_ZOHO_BOOKINGS_LINK_HERE";

  const handleSchedule = () => {
    if (zohoBookingLink === "YOUR_ZOHO_BOOKINGS_LINK_HERE") {
      alert("Please update your Zoho Bookings link in the code.");
      return;
    }
    window.open(zohoBookingLink, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center 
                 text-center px-4 py-20
                 bg-gradient-to-b from-[#030017] via-[#06002d] to-[#000016] overflow-hidden"
    >
      {/* Glows (reduced sizes) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[5%] left-[5%] w-[250px] h-[250px] rounded-full bg-[#8e2de2]/25 blur-[100px] opacity-60" />
        <div className="absolute bottom-[20%] left-[20%] w-[180px] h-[180px] rounded-full bg-[#3b82f6]/15 blur-[90px] opacity-50" />
        <div className="absolute top-[30%] right-[5%] w-[220px] h-[220px] rounded-full bg-pink-500/10 blur-[100px] opacity-40" />
      </div>

      <div className="relative z-10 max-w-3xl">

        {/* Title (reduced) */}
        <motion.h2
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl md:text-6xl font-extrabold mb-3 tracking-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-[#c084fc]">
            Schedule Your Consultation
          </span>
        </motion.h2>

        {/* Subtitle (reduced) */}
        <motion.p
          variants={{
            ...sectionVariants,
            visible: {
              ...sectionVariants.visible,
              transition: { delay: 0.2, duration: 0.8 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-lg md:text-xl text-gray-300 mb-8 font-light max-w-2xl mx-auto leading-relaxed"
        >
          Let’s align your goals, refine your strategy, and build a clear roadmap for your next big move. 
          Book a dedicated consultation to discuss solutions tailored to your business needs.
        </motion.p>

        {/* Button (reduced size) */}
        <motion.button
          whileHover="hover"
          whileTap="tap"
          variants={buttonVariants}
          onClick={handleSchedule}
          className="flex items-center justify-center gap-2 mx-auto px-8 py-3 
                     bg-gradient-to-r from-[#1424d5] to-[#5f3cdd] text-white font-semibold 
                     text-lg rounded-full shadow-lg transition-all duration-300
                     hover:shadow-[#8e2de2]/40"
        >
          <IconCalendar className="w-5 h-5" />
          Book Now
        </motion.button>
      </div>
    </section>
  );
}
