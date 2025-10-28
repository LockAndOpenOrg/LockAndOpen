/* eslint-disable no-unused-vars */
"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// --- Product Data ---
const products = [
  {
    title: "PicStream",
    description:
      "Effortlessly manage and download images in bulk — free, fast, and intuitive. Designed for designers, researchers, and creators who need large sets of high-quality visuals with one click.",
    link: "https://picstream.lockandopen.in/",
    logo: "https://picstream.lockandopen.in/favicon.ico",
  },
  {
    title: "PicStream",
    description:
      "Effortlessly manage and download images in bulk — free, fast, and intuitive. Designed for designers, researchers, and creators who need large sets of high-quality visuals with one click.",
    link: "https://picstream.lockandopen.in/",
    logo: "https://picstream.lockandopen.in/favicon.ico",
  },
  {
    title: "PicStream",
    description:
      "Effortlessly manage and download images in bulk — free, fast, and intuitive. Designed for designers, researchers, and creators who need large sets of high-quality visuals with one click.",
    link: "https://picstream.lockandopen.in/",
    logo: "https://picstream.lockandopen.in/favicon.ico",
  },
];

// --- Scroll Reveal Wrapper ---
function ScrollRevealWrapper({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 10%"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div ref={ref} style={{ y, opacity }} transition={{ duration: 0.8 }}>
      {children}
    </motion.div>
  );
}

// --- Product Card ---
function ProductCard({ product }) {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen snap-start">
      <motion.div
        className="relative bg-gradient-to-br from-[#0a0038]/90 via-[#12005e]/85 to-[#030014]/90 
        border border-white/20 p-7 rounded-xl backdrop-blur-xl 
        max-w-md transition-all duration-500 hover:border-white/40 hover:scale-[1.03]"
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 10 }}
      >
        {/* Product Logo */}
        <div className="flex justify-center mb-6">
          <motion.img
            src={product.logo}
            alt={product.title}
            className="w-20 h-20 rounded-full object-cover border border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            whileHover={{ rotate: 0 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-gray-200 text-base leading-relaxed mb-8">
          {product.description}
        </p>

        {/* Visit Site Button */}
        <motion.a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-white/15 border border-white/30 rounded-full 
          text-white font-semibold hover:bg-white/25 hover:text-white 
          transition-all duration-300"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Visit Site →
        </motion.a>
      </motion.div>
    </div>
  );
}


// --- Main Layout ---
export default function Product() {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row text-white 
      bg-gradient-to-tr from-[#010017] via-[#030139] to-[#000010]">
      {/* Left Column */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-12 sticky top-0 h-screen 
      bg-gradient-to-b from-[#010017]/90 via-[#030139]/90 to-[#000010]/90 backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-md text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
  Introducing{"   "}
  <span className="bg-gradient-to-r from-[#b46dff] via-[#a855f7] to-[#8e2de2] bg-clip-text text-transparent">
    Next-Gen Solutions
  </span>
</h1>
<p className="text-gray-300 text-lg leading-relaxed">
  Experience cutting-edge performance and seamless design — built for
  innovators shaping tomorrow’s digital world.
</p>

        </motion.div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-1/2 snap-y snap-mandatory scroll-smooth">
        {products.map((product, index) => (
          <ScrollRevealWrapper key={index}>
            <ProductCard product={product} />
          </ScrollRevealWrapper>
        ))}
      </div>
    </div>
  );
}
