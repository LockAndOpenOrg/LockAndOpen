/* eslint-disable no-unused-vars */
"use client";

import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/photo/lockandopen_logo.png";

// Standardized data for social links
const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/lockandopen",
    glowFrom: "#0a66c2",
    glowTo: "#0073b1",
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    viewBox: "0 0 24 24"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/lockandopen_official/",
    glowFrom: "#f09433",
    glowTo: "#bc1888",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
    viewBox: "0 0 24 24"
  },
  {
    name: "GitHub",
    url: "https://github.com/lockandopen",
    glowFrom: "#6e40c9",
    glowTo: "#9333ea",
    path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    viewBox: "0 0 24 24"
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@LockAndOpen_official",
    glowFrom: "#ff0000",
    glowTo: "#c4302b",
    path: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z",
    viewBox: "0 0 24 24"
  }
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#000025] text-gray-300 py-5 px-4 border-t border-white/10">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050024] via-[#06002f] to-[#000024] opacity-90" />

      {/* Glow Blobs */}
      <div className="absolute top-[-150px] left-[-200px] w-[500px] h-[500px] bg-[#8e2de2]/1 blur-[100px] rounded-full animate-swirl-slow" />
      <div className="absolute bottom-[-150px] right-[-200px] w-[500px] h-[500px] bg-[#3b82f6]/5 blur-[100px] rounded-full animate-swirl-slow-reverse" />

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M5 13h50v1H5zM5 17h50v1H5zM5 21h50v1H5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "10px 10px",
        }}
      />

      {/* White Fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4">

        {/* LOGO */}
        <div className="flex flex-col items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start gap-3"
          >
            <div className="relative w-20 h-20 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-[#000e24] to-[#09001f] blur-[35px] opacity-80 animate-pulse" />
              <img
                src={logo}
                alt="LockAndOpen Logo"
                className="relative z-10 w-full h-full object-contain brightness-150 drop-shadow-[0_0_20px_rgba(139,92,246,0.9)]"
              />
            </div>
          </motion.div>

          <p className="text-sm mt-1 text-gray-400">
            © {new Date().getFullYear()}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#8e2de2] font-extrabold">
              LockAndOpen
            </span>{" "}
            | All rights reserved.
          </p>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex flex-col items-center lg:items-end">
          {/* Inner Wrapper: Shrinks to fit the widest child (the icon row), forcing the h4 to match. */}
          <div className="flex flex-col w-fit">
            <h4 className="text-xl font-bold text-gray-400 mb-5 border-b border-[#3b82f6]/10 pb-1 text-center lg:text-right w-full px-6">
              Connect With Us
            </h4>

            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex gap-4 sm:gap-6"
            >
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex items-center justify-center p-2 rounded-xl bg-white/5 border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]"
                >
                  {/* HOVER GLOW BACKGROUND */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl"
                    style={{
                      background: `linear-gradient(to right, ${social.glowFrom}, ${social.glowTo})`
                    }}
                  />

                  {/* ICON */}
                  <svg
                    className="relative z-10 w-5 h-5 text-gray-400 transition-colors duration-300 group-hover:text-white"
                    viewBox={social.viewBox}
                    fill="currentColor"
                  >
                    <path d={social.path} />
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}