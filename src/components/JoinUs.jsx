import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

//  Inline Checkmark Icon
const CheckmarkIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="white"
    className="w-8 h-8"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function JoinUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="joinus"
      className="relative min-h-screen flex items-center justify-center px-8 py-24 bg-gradient-to-tr from-[#020021] via-[#0a0030] to-[#000010] overflow-hidden"
    >
      {/* Subtle Ambient Blue Glows */}
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-[#3b82f6]/10 blur-[120px] z-0" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#2563eb]/10 blur-[120px] z-0" />
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* --- GRID CONTAINER --- */}
      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* === LEFT COLUMN === */}
        <div className="text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a35af0] to-[#6277ff]">
              Join Our Inner Circle
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg max-w-lg mx-auto md:mx-0 font-light"
          >
            Become part of a growing network dedicated to innovation,
            collaboration, and creativity. We're looking for passionate minds
            ready to build the future with us.
          </motion.p>
        </div>

        {/* === RIGHT COLUMN: FORM === */}
        <div className="flex justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full max-w-md bg-[#0a0030]/80 border border-[#3b82f6]/30 rounded-2xl shadow-[0_0_40px_rgba(37,99,235,0.2)] p-8 sm:p-10 text-left backdrop-blur-xl"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full mb-5 px-4 py-3 rounded-lg bg-[#020021]/60 border border-[#1e3a8a]/50 text-white focus:outline-none focus:ring-2 focus:ring-[#3b82f6] transition duration-200"
                  />

                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full mb-5 px-4 py-3 rounded-lg bg-[#020021]/60 border border-[#1e3a8a]/50 text-white focus:outline-none focus:ring-2 focus:ring-[#3b82f6] transition duration-200"
                  />

                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Your Vision
                  </label>
                  <textarea
                    required
                    placeholder="Tell us why you’d like to join..."
                    className="w-full h-32 mb-8 px-4 py-3 rounded-lg bg-[#020021]/60 border border-[#1e3a8a]/50 text-white focus:outline-none focus:ring-2 focus:ring-[#3b82f6] transition duration-200 resize-none"
                  ></textarea>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#1d4ed8] to-[#3b82f6] text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-blue-500/30 transition-all"
                  >
                    Send Application
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col items-center justify-center text-center space-y-5 py-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-[#1d4ed8] to-[#3b82f6] flex items-center justify-center shadow-[0_0_25px_rgba(37,99,235,0.5)]"
                  >
                    <CheckmarkIcon />
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-semibold text-white mt-4"
                  >
                    Application Received!
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-400 text-md max-w-sm"
                  >
                    Thank you for reaching out. We’ll review your submission and
                    connect with you via email soon.
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
