import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

//  Navigation links
const navLinks = [
  { href: "#products", label: "Product" },
  { href: "#members", label: "Members" },
  { href: "#joinus", label: "Join Us" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50 flex justify-center py-2 px-3 transition-all duration-20">
      <nav
        className={`w-full max-w-6xl flex items-center justify-between px-8 py-2.5 rounded-3xl transition-all duration-20 ${
          isScrolled
            ? "bg-[#020021]/70 backdrop-blur-3xl border border-white/10 shadow-[0_0_40px_rgba(80,0,255,0.5)]"
            : "bg-[#020021]/70 backdrop-blur-3xl border border-white/10 shadow-[0_0_40px_rgba(80,0,255,0.5)]"
        }`}
      >
        {/* 🔹 Logo */}
        <div className="flex-shrink-0">
  <a href="#home" onClick={() => window.location.reload()}>
    <img
      src="https://pub-abc94215359a43da824a781ae43c96c4.r2.dev/assets/photo/lockandopen_logo.png"
      alt="LockAndOpen Logo"
      className="h-12 w-auto brightness-150 drop-shadow-[0_0_10px_rgba(160,80,255,0.7)]"
    />
  </a>
</div>


        {/* 🔹 Desktop Navigation */}
        <ul className="hidden md:flex gap-8 font-medium text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`transition-colors duration-200 ${
                  activeLink === link.href
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* 🔹 Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-2xl"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* 🔹 Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 w-[90%] bg-[#020021]/80 backdrop-blur-2xl rounded-2xl shadow-lg border border-white/10">
          <ul className="flex flex-col items-center gap-5 py-5 font-medium text-base">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.href);
                    setIsMenuOpen(false);
                  }}
                  className={`transition-colors duration-200 ${
                    activeLink === link.href
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
