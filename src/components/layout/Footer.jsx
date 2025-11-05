/* eslint-disable no-unused-vars */
"use client";
import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/photo/lockandopen_logo.png";

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-400 hover:text-[#3b82f6] transition duration-300 relative group overflow-hidden text-sm font-light md:font-normal"
  >
    {children}
    {/* Subtle underline hover effect with gradient */}
    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#3b82f6] to-[#8e2de2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
  </a>
);

export default function Footer() {
  // Define navigation links, now separated for two columns
  const mainNavLinks = [
    { name: "Products", href: "/products" },
    // { name: "Services", href: "/services" },
    // { name: "Solutions", href: "/solutions" },
    // { name: "Features", href: "/features" },
  ];

  const companyNavLinks = [
    // { name: "About Us", href: "/about" },
    // { name: "Careers", href: "/careers" },
    // { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#000014] text-gray-300 py-8 px-2 border-t border-white/10">
      {/*  ENHANCED BACKGROUND PATTERN LAYER: Grid and Swirling Glows */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070035] via-[#09004a] to-[#000014] opacity-90" />

      {/* --- Swirling Glow Effects for Background Pattern --- */}
      <div className="absolute top-[-150px] left-[-200px] w-[500px] h-[500px] bg-[#8e2de2]/20 blur-[200px] rounded-full opacity-60 animate-swirl-slow" />
      <div className="absolute bottom-[-150px] right-[-200px] w-[500px] h-[500px] bg-[#3b82f6]/20 blur-[200px] rounded-full opacity-60 animate-swirl-slow-reverse" />

      {/*  GRID PATTERN FIX: Adjusted opacity and size for visibility */}
      <div
        className="absolute inset-0 opacity-[0.09] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34l-6 6-6-6v-29h1v18.73l5-5 5 5V5h1v29zm-6 2l-6 6-6-6v-2h12v2zM5 13h50v1H5v-1zm0 2h50v1H5v-1zm0 2h50v1H5v-1zm0 2h50v1H5v-1zm0 2h50v1H5v-1zm0 2h50v1H5v-1zm0 2h50v1H5v-1zm0 2h50v1H5v-1zm0 2h50v1H5v-1zm0 2h50v1H5v-1zm0 2h50v1H5v-1zm0 2h50v1H5v-1zm0 2h50v1H5v-1zm0 2h50v1H5v-1zm0 2h50v1H5v-1zm0 2h50v1H5v-1zm0 2h50v1H5v-1zm0 2h50v1H5v-1zm0 2h50v1H5v-1zm0 2h50v1H5v-1zm0 2h50v1H5v-1zm0 2h50v1H5v-1zm0 2h50v1H5v-1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "10px 10px",
        }}
      />

      {/* Increased top light gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/[0.08] to-transparent pointer-events-none" />

      {/* --- Main Footer Content (Now 4-Column Layout on larger screens) --- */}
<div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-y-12 lg:gap-y-0 gap-x-8 sm:gap-x-12 lg:gap-x-16 text-center sm:text-left">
        {/* --- Column 1: Logo & Copyright --- */}
        <div className="flex flex-col items-center sm:items-start max-w-sm mx-auto sm:mx-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center sm:items-start justify-center gap-3"
          >
            {/* Brighter Glowing Logo */}
            <div className="relative w-16 h-16 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#8e2de2] blur-[40px] opacity-80 animate-pulse" />
              <img
                src={logo}
                alt="LockAndOpen Logo"
                className="relative z-10 w-full h-full object-contain brightness-155 drop-shadow-[0_0_20px_rgba(139,92,246,0.8)]"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Copyright Section */}
          <p className="text-sm text-gray-400 mt-3 max-w-xs sm:max-w-none whitespace-nowrap">
  © {new Date().getFullYear()}{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#8e2de2] font-extrabold">
    LockAndOpen
  </span>{" "}
  | All rights reserved.
</p>

        </div>

        {/* --- Column 2: Main Navigation Links (Quick Links) --- */}
        <div className="flex flex-col items-center sm:items-start">
          <h4 className="text-xl font-bold text-white mb-5 border-b border-[#3b82f6]/50 pb-1 w-fit">
            Quick Links
          </h4>
          <nav className="flex flex-col gap-3">
            {mainNavLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <NavLink href={link.href}>{link.name}</NavLink>
              </motion.div>
            ))}
          </nav>
        </div>

        {/* --- Column 3: Company Links & Legal Links (Combined into one column for now, can be split further) --- */}
        <div className="flex flex-col items-center sm:items-start">
          {/* Company Links */}
          <h4 className="text-xl font-bold text-white mb-5 border-b border-[#3b82f6]/50 pb-1 w-fit">
            Company
          </h4>
          <nav className="flex flex-col gap-3 mb-8">
            {" "}
            {/* Added mb-8 for spacing */}
            {companyNavLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <NavLink href={link.href}>{link.name}</NavLink>
              </motion.div>
            ))}
          </nav>
        </div>

        {/* --- Column 3: Company Links & Legal Links (Combined into one column for now, can be split further) --- */}
        {/* <div className="flex flex-col items-center sm:items-start"> */}
        {/* Company Links */}
        {/* Legal Links */}
        {/* <h4 className="text-xl font-bold text-white mb-5 border-b border-[#3b82f6]/50 pb-1 w-fit">Legal</h4>
          <nav className="flex flex-col gap-3">
            {legalLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <NavLink href={link.href}>{link.name}</NavLink>
              </motion.div>
            ))}
          </nav> */}
        {/* </div> */}

        {/* --- Column 4: Social Icons --- */}
        <div className="flex flex-col items-center sm:items-start lg:items-end text-center sm:text-left lg:text-right">
          <h4 className="text-xl font-bold text-white mb-5 border-b border-[#3b82f6]/50 pb-1 w-fit">
            Connect With Us
          </h4>

          {/* --- Social Icons Container --- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center items-center gap-20 mt-1 px-3"
          >
            {[
              {
                href: "https://linkedin.com/company/lockandopen",
                svg: (
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                ),
                gradient: "from-[#0a66c2] to-[#0073b1]",
              },
              {
                href: "https://www.instagram.com/lockandopen_official/",
                svg: (
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zm0 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm4.75-.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z" />
                ),
                gradient: "from-[#f09433] via-[#e6683c] to-[#bc1888]",
              },
            ].map(({ href, svg, gradient }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative transform hover:scale-110 transition-transform duration-300"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`}
                />
                <svg
                  className="w-7 h-7 text-gray-300 relative z-10 group-hover:text-white transition-all duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {svg}
                </svg>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
