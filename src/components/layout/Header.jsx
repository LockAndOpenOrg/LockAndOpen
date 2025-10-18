import React from "react";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-transparent">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center relative">
        {/* Logo */}
      <div className="flex-shrink-0 mr-6">
          <img src="/src/assets/1-removebg-preview.png" alt="LockAndOpen Logo" className="h-10 w-auto" />
        </div>

        <ul className="absolute left-1/2 transform -translate-x-1/2 flex gap-8 text-gray-400 font-medium">
          <li>
            <a href="#home" className="hover:text-white transition-colors duration-200">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-white transition-colors duration-200">
              About
            </a>
          </li>
          <li>
            <a href="#product" className="hover:text-white transition-colors duration-200">
              Product
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition-colors duration-200">
              Contacts
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}