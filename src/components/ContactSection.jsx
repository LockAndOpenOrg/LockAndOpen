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

// Define expressive variants for entrance animation
const sectionVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      duration: 0.7, 
      ease: [0.25, 0.1, 0.25, 1] // Custom cubic bezier curve for smooth settle
    } 
  },
  hover: { 
    scale: 1.02, // Slight lift on hover
    transition: { duration: 0.2 } 
  },
};

// Define button-specific variants for click/tap feedback
const buttonVariants = {
    ...sectionVariants,
    tap: { 
        scale: 0.98, // Press down effect
        boxShadow: "0 4px 10px rgba(142, 45, 226, 0.2)" 
    }, 
};


export default function ContactSection() {
  // 🔗 **ACTION REQUIRED**: Replace with your actual Calendly link!
  const calendlyLink = "YOUR_CALENDLY_LINK_HERE"; 

  const handleSchedule = () => {
    if (calendlyLink === "YOUR_CALENDLY_LINK_HERE") {
        console.error("Calendly link not set. Cannot proceed.");
        alert("Please set your Calendly link in the component code to enable scheduling.");
        return;
    }
    // Open the link in a new tab
    window.open(calendlyLink, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-24 
                 bg-gradient-to-b from-[#05002a] via-[#08003f] to-[#000016] overflow-hidden"
    >
      {/* --- 3D Gradient Glows --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Violet Glow */}
        <div className="absolute top-[5%] left-[5%] w-[350px] h-[350px] rounded-full bg-[#8e2de2]/25 blur-[140px] opacity-70" />
        {/* Blue Glow */}
        <div className="absolute bottom-[20%] left-[20%] w-[250px] h-[250px] rounded-full bg-[#3b82f6]/15 blur-[120px] opacity-60" />
        {/* Pink Accent Glow */}
        <div className="absolute top-[30%] right-[5%] w-[300px] h-[300px] rounded-full bg-pink-500/10 blur-[150px] opacity-50" />
      </div>

      <div className="relative z-10 max-w-4xl">
        {/* --- Title --- */}
        <motion.h2
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tighter"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-[#c084fc]">
            Let's Build Something Amazing
          </span>
        </motion.h2>

        {/* --- Subtitle --- */}
        <motion.p
          variants={{
            ...sectionVariants,
            visible: {
              ...sectionVariants.visible,
              transition: { delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-xl md:text-2xl text-gray-300 mb-10 font-light max-w-3xl mx-auto leading-relaxed"
        >
          Ready to transform your vision into reality? Book a dedicated session with me to dive deep into your project's potential.
        </motion.p>

        {/* --- Schedule Button --- */}
        <motion.button
          whileHover="hover"
          whileTap="tap" // Added tap interaction for mobile/click feedback
          variants={buttonVariants}
          onClick={handleSchedule}
          className="flex items-center justify-center gap-3 mx-auto px-10 py-4 
                     bg-gradient-to-r from-[#3b82f6] to-[#8e2de2] text-white font-bold 
                     text-xl rounded-full shadow-xl transition-all duration-300 
                     hover:shadow-2xl hover:shadow-[#8e2de2]/50 
                     focus:outline-none focus:ring-4 focus:ring-[#3b82f6]/50" // Accessibility focus ring
        >
          <IconCalendar className="w-6 h-6 stroke-2" />
          Book Your Strategy Call Now
        </motion.button>
      </div>
    </section>
  );
}