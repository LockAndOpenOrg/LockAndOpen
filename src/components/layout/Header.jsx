import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Using a popular icon library for the menu icons

// Define navigation links as an array of objects for easier management
const navLinks = [
  
  { href: "#about", label: "About" },
  { href: "#product", label: "Product" },
  { href: "#contact", label: "Contact" }, // Corrected "Contacts" to "Contact" for consistency
];

export default function Header() {
  // State to track whether the page has been scrolled
  const [isScrolled, setIsScrolled] = useState(false);
  // State for the mobile menu (open/closed)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State to track the active navigation link
  const [activeLink, setActiveLink] = useState("#home");

  // Effect to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true if user has scrolled more than 10px, otherwise false
      setIsScrolled(window.scrollY > 10);
    };

    // Add the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <header className="w-full fixed top-0 left-0 z-50 flex justify-center py-4 px-4 transition-all duration-300">
      <nav
        className={`w-full max-w-4xl flex items-center justify-between px-6 py-3 rounded-3xl transition-all duration-300 ${
          isScrolled
            ? "bg-[#020021]/60 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(90,0,255,0.5)]"
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#home" onClick={() => setActiveLink('#home')}>
            <img
              src="/src/assets/whitelogobgremove.png"// Make sure this path is correct
              alt="LockAndOpen Logo"
              className="h-14 w-auto drop-shadow-[0_0_8px_rgba(120,0,255,0.4)]"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 font-medium text-base">
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

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-2xl"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 w-[90%] bg-[#020021]/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/10">
          <ul className="flex flex-col items-center gap-6 py-6 font-medium text-lg">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.href);
                    setIsMenuOpen(false); // Close menu on link click
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