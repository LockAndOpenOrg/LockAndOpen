/* eslint-disable no-unused-vars */
"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#04001f] via-[#05002a] to-[#000016] text-gray-400 py-6 px-5 border-t border-white/5">
      {/* --- Glow Effects --- */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#8e2de2]/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#3b82f6]/20 blur-[120px]" />

      {/* --- Main Footer Content --- */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* --- Brand --- */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-white tracking-wide text-center md:text-left"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#8e2de2]">
            LockAndOpen
          </span>
        </motion.h3>

        {/* --- Social Links --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-6"
        >
          {/* Twitter/X */}
          <a
            href="https://twitter.com/LockAndOpenHQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.25 2.25h3.467l4.357 5.634zM15.914 20.655h2.321l-4.763-6.214z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/company/lockandopen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/lockandopen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zm0 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm4.75-.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* --- Divider --- */}
      <div className="relative z-5 max-w-3xl mx-auto mt-2 pt-2 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">LockAndOpen</span>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
