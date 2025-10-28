import React from "react";
import Header from "../components/layout/Header";
import HeroAnimation from "../components/HeroAnimation";
import HeroContent from "../components/HeroContent";
import Members from "../components/Members";
import JoinUs from "../components/JoinUs";
import Product from "../components/Product";

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
        <div className="relative z-10 flex-1 flex justify-center md:justify-start items-center text-gray-100 drop-shadow-[0_0_12px_rgba(130,0,255,0.3)]">
          <HeroContent />
        </div>

        {/* --- Right Section (3D Animation) --- */}
        <div className="relative flex-1 flex justify-center items-center h-[500px] md:h-[700px]">
          <HeroAnimation />
        </div>
      </div>

      <Product />
      <Members />
      <JoinUs />
    </>
  );
}
