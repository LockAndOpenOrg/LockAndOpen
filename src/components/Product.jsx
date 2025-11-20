/* eslint-disable no-unused-vars */
// ProductShowcase.jsx
import React, { useRef, useState, useEffect } from "react";
import { ArrowRight, Lock, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

// --- Import Images ---
import PicStreamImg from "../assets/image.png";
import ComingSoonImg from "../assets/Researchhub pic.png";

// --- Configuration ---
const PRODUCTS_DATA = [
  {
    id: "picstream",
    title: "PicStream",
    description:
      "PicStream is a free and powerful tool that simplifies bulk image downloading. Designed for designers, researchers, and content creators, it allows users to collect multiple images at once with a single click. Instead of downloading pictures individually, PicStream streamlines the entire process with an intuitive interface and strong performance. It saves time, reduces effort, and helps users gather high-quality visuals efficiently.",
    link: "https://picstream.lockandopen.in/",
    imagePlaceholder: PicStreamImg,
    isComingSoon: false,
    gradient: "radial-gradient(circle at 70% 30%, #08001f 0%, #00000f 80%)",
    accent: "#38bdf8",
    glowColor: "#140145",
  },
  {
    id: "coming-soon",
    title: "Our Next Innovation",
    description:
      "The AI-Powered Community Research Platform is designed to transform how teams collaborate and explore knowledge—without the hassle of switching between multiple tools. Users can securely upload and manage documents, extract insights from large collections of PDF. With AI-driven features like smart summaries, intelligent suggestions, and context-aware recommendations, research communities can move faster and make informed decisions.",
    link: "#",
    imagePlaceholder: ComingSoonImg,
    isComingSoon: true,
    gradient: "radial-gradient(circle at 70% 30%, #08001f 0%, #00000f 80%)",
    accent: "#a855f7",
    glowColor: "#2e1065",
  },
];

// --- Product Section ---
const ProductSection = ({ product, index }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]); // No fade out

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative w-full py-28 flex items-center justify-center overflow-hidden font-sans"
    >
      {/* Background */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{ background: product.gradient }}
      />

      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] z-[1]" />

      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          className="order-2 lg:order-1"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-4 w-fit">
            {product.isComingSoon ? (
              <Sparkles size={12} style={{ color: product.accent }} />
            ) : (
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ backgroundColor: product.accent }}
                />
                <span
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ backgroundColor: product.accent }}
                />
              </span>
            )}

            <span className="text-[10px] font-medium text-white/90 uppercase tracking-wide">
              {product.isComingSoon ? "In Development" : "Live Project"}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {product.title}
          </h2>

          <p className="text-base text-white/70 mb-6 max-w-lg leading-relaxed">
            {product.description}
          </p>

          {product.isComingSoon ? (
            <button className="flex items-center gap-3 px-7 py-3 rounded-lg bg-white/5 border border-white/10 text-white/40 text-sm">
              <Lock size={16} /> Revealing Soon
            </button>
          ) : (
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: product.accent }}
              className="group flex items-center gap-3 px-7 py-3 rounded-lg text-[#02011A] text-sm font-semibold hover:scale-105 transition-all w-fit"
            >
              Launch {product.title}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          )}
        </motion.div>

        {/* Right Image */}
        <motion.div
          style={{ y, opacity }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
        >
          {/* Glow */}
          <div
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
              rounded-full blur-3xl ${
                product.isComingSoon ? "opacity-10" : "opacity-60"
              }`}
            style={{
              width: "min(70vmin, 720px)",
              height: "min(40vmin, 420px)",
              backgroundColor: product.glowColor,
            }}
          />

          {/* Image Container */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.28 }}
            className={`relative w-full max-w-[760px] lg:max-w-[640px] aspect-[16/10]
              ${
                product.isComingSoon
                  ? "bg-transparent"
                  : "bg-[#02011A]/40 backdrop-blur-lg"
              }
              rounded-2xl border border-white/10 shadow-xl overflow-hidden 
              flex items-center justify-center p-3`}
          >
            <img
              src={product.imagePlaceholder}
              alt={product.title}
              className={`max-w-full max-h-full object-contain ${
                product.isComingSoon
                  ? "brightness-90 contrast-105 saturate-115"
                  : ""
              }`}
            />

            {!product.isComingSoon && (
              <>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-2xl pointer-events-none" />
                <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none" />
              </>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Main
const Product = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#010014] text-white">
      <div className="flex flex-col w-full">
        {PRODUCTS_DATA.map((product, index) => (
          <ProductSection key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Product;
