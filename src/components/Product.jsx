/* eslint-disable no-unused-vars */
"use client";
import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import imagePreview from "../assets/image.png";
import ComingSoon from "../assets/photo/logowhite-removebg-preview.png"
/* ---------------------------
   PRODUCT DATA
--------------------------- */
const products = [
  {
    title: "PicStream",
    description:
      "Effortlessly manage and download images in bulk — free, fast, and intuitive.",
    link: "https://picstream.lockandopen.in/",
    image: imagePreview,
    isComingSoon: false,
  },
  {
    title: "Coming Soon",
    description:
      "We are working on something exciting! Stay tuned for our next innovative solution.",
    link: "#",
    image: ComingSoon,
    isComingSoon: true,
  },
];

/* ---------------------------
   ANIMATIONS
--------------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

/* ---------------------------
   SCROLL REVEAL WRAPPER
--------------------------- */
function ScrollRevealWrapper({ children, containerRef }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    container: containerRef,
    offset: ["start 90%", "end 10%"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="h-[92vh] w-full snap-center flex flex-col items-center justify-center px-6"
    >
      {children}
    </motion.div>
  );
}

/* ---------------------------
   MAIN PRODUCT SECTION
--------------------------- */
export default function Product() {
  const scrollRef = useRef(null);
  const lastUserScrollRef = useRef(Date.now());

  /* ------------------------------------------
      ✅ AUTO SCROLL ENGINE (smooth + production ready)
   --------------------------------------------- */
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let SPEED = 0.35;
    let raf;

    const autoScroll = () => {
      const now = Date.now();
      const idleTime = now - lastUserScrollRef.current;

      // Only auto scroll when user inactive for > 1200ms
      if (idleTime > 1200) {
        container.scrollTop += SPEED;

        // Loop scroll
        if (
          container.scrollTop + container.clientHeight >=
          container.scrollHeight - 2
        ) {
          container.scrollTop = 0;
        }
      }

      raf = requestAnimationFrame(autoScroll);
    };

    raf = requestAnimationFrame(autoScroll);

    const userScrolled = () => {
      lastUserScrollRef.current = Date.now();
    };

    container.addEventListener("wheel", userScrolled);
    container.addEventListener("touchmove", userScrolled);
    container.addEventListener("scroll", userScrolled);

    return () => {
      cancelAnimationFrame(raf);
      container.removeEventListener("wheel", userScrolled);
      container.removeEventListener("touchmove", userScrolled);
      container.removeEventListener("scroll", userScrolled);
    };
  }, []);

  return (
    <div className="w-full h-screen flex flex-col lg:flex-row text-white bg-[#010008] overflow-hidden">
      {/* ------------------------------------------------------
          LEFT COLUMN  (sticky text)
      ------------------------------------------------------ */}
      <div
        className="relative w-full lg:w-1/2 h-full flex flex-col justify-center items-center 
        p-12 bg-gradient-to-b from-[#000015]/95 via-[#020015]/85 to-[#020015]/90 
        backdrop-blur-xl border-r border-[#3e0099]/25 overflow-hidden"
      >
        {/* Breathing Glow */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(142,45,226,0.05)_0%,transparent_75%)]"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative max-w-md text-center space-y-6 py-12 lg:py-0 z-10"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-snug">
            Discover{" "}
            <span
              className="bg-gradient-to-r from-[#6352d2] via-[#3e0099] to-[#8e2de2] 
              bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(142,45,226,0.5)]"
            >
              Next-Gen Solutions
            </span>
          </h1>

          <p className="text-gray-200 text-lg leading-relaxed drop-shadow-[0_0_6px_rgba(255,255,255,0.25)]">
            Experience cutting-edge performance and seamless design — crafted
            for innovators shaping tomorrow’s digital world.
          </p>
        </motion.div>
      </div>

      {/* ------------------------------------------------------
          RIGHT COLUMN (AUTO-SCROLL + SNAPPING)
      ------------------------------------------------------ */}
      <div
        ref={scrollRef}
        className="w-full lg:w-1/2 h-full overflow-y-auto snap-y snap-mandatory scroll-smooth 
        scrollbar-thin scrollbar-thumb-[#3e0099]/70 scrollbar-track-[#020015] 
        bg-gradient-to-b from-[#020015] via-[#020015] to-[#020015] relative"
      >
        {/* Glow animation on scroll */}
        <motion.div
          className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(142,45,226,0.06)_0%,transparent_95%)] pointer-events-none"
          animate={{ opacity: [0.25, 0.55, 0.25], scale: [1, 1.08, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* PRODUCT CARDS */}
        {products.map((product, index) => (
          <ScrollRevealWrapper key={index} containerRef={scrollRef}>
            <div className="relative flex flex-col items-center justify-center w-full z-10">
              {/* IMAGE CARD */}
              <motion.div
                className={`relative w-full max-w-3xl h-[45vh] rounded-3xl overflow-hidden 
                shadow-[0_0_40px_rgba(30,0,100,0.5)] border border-[#3e0099]/95 backdrop-blur-2xl 
                flex items-center justify-center transition-all duration-500 bg-[#020035]/90 
                ${product.isComingSoon ? "opacity-80" : ""}`}
                whileHover={!product.isComingSoon ? { scale: 1.02 } : {}}
              >
                {product.isComingSoon ? (
                  // Non-clickable div for Coming Soon
                  <div className="w-full h-full flex items-center justify-center relative">
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40">
                      <span className="text-xl font-bold tracking-widest uppercase text-white/80 border-2 border-white/30 px-6 py-2 rounded-lg backdrop-blur-md">
                        Coming Soon
                      </span>
                    </div>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain rounded-3xl p-6 brightness-50 grayscale-[50%]"
                    />
                  </div>
                ) : (
                  // Standard clickable link
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full flex items-center justify-center"
                  >
                    <motion.img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain rounded-3xl p-6 
                      brightness-90 hover:brightness-110 transition-all duration-500 cursor-pointer"
                      whileHover={{ scale: 1.04 }}
                    />
                  </a>
                )}
              </motion.div>

              {/* TEXT */}
              <div className="text-center mt-8 mb-12 px-6 sm:px-10 max-w-md mx-auto">
                <h2
                  className="text-4xl font-extrabold mb-4 bg-gradient-to-r 
                  from-[#8e2de2] via-[#3e0099] to-[#6352d2] bg-clip-text text-transparent 
                  drop-shadow-[0_0_18px_rgba(142,45,226,0.8)]"
                >
                  {product.title}
                </h2>

                <p className="text-gray-100 text-lg leading-relaxed mb-6 drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]">
                  {product.description}
                </p>
              </div>
            </div>
          </ScrollRevealWrapper>
        ))}
      </div>
    </div>
  );
}