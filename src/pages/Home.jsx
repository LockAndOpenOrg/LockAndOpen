import React from "react";
import Header from "../components/layout/Header";
import HeroAnimation from "../components/HeroAnimation";
import HeroContent from "../components/HeroContent";
import Members from "../components/Members";
import JoinUs from "../components/JoinUs";
import Product from "../components/Product";
import ContactSection from "../components/ContactSection";
import Footer from "../components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Header />

      <div className="relative min-h-screen flex flex-col md:flex-row items-center justify-between overflow-hidden bg-gradient-to-tr from-[#010017] via-[#030139] to-[#000010] animate-gradient px-6 md:px-20">
        {/* --- Gradient glow blobs (darker, subtle glow) --- */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#4c1d95]/20 blur-[160px] rounded-full animate-float"></div>
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#5b21b6]/20 blur-[140px] rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        <div className="absolute top-1/3 left-1/2 w-[280px] h-[280px] bg-[#7e22ce]/15 blur-[120px] rounded-full -translate-x-1/2"></div>

        {/* --- Deeper glass overlay --- */}
        <div className="absolute inset-0 backdrop-blur-[50px] bg-gradient-to-b from-black/40 via-black/60 to-black/80 z-0"></div>

        {/* --- Left Section (Hero Content) --- */}
<div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2 items-center relative">
  <HeroContent />
  <HeroAnimation />
</div>

      </div>

      <Product />
      <Members />
      <JoinUs />
      <ContactSection/>
      <Footer/>
    </>
  );
}
