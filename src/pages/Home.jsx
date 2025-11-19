import React from "react";

// Layout & Components
import Header from "../components/layout/Header";
import HeroAnimation from "../components/HeroAnimation";
import HeroContent from "../components/HeroContent";
import Members from "../components/Members";
import JoinUs from "../components/JoinUs";
import Product from "../components/Product";
import ContactSection from "../components/ContactSection";
import Footer from "../components/layout/Footer";


import FloatingChatbot from "../components/FloatingChatbot";


export default function HomePage() {
  return (
    <>
      <Header />
<FloatingChatbot />
      <main>
        {/* --- HERO SECTION --- */}
        <section className="relative w-full overflow-hidden bg-gradient-to-tr from-[#010017] via-[#030139] to-[#000010] animate-gradient">
      
          {/* 1. Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#4c1d95]/20 blur-[160px] rounded-full animate-float"></div>
            <div 
              className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#5b21b6]/20 blur-[140px] rounded-full animate-float"
              style={{ animationDelay: "3s" }}
            ></div>
            <div className="absolute top-1/3 left-1/2 w-[280px] h-[280px] bg-[#7e22ce]/15 blur-[120px] rounded-full -translate-x-1/2"></div>
          </div>

          {/* 2. Glass Overlay */}
          <div className="absolute inset-0 backdrop-blur-[50px] bg-gradient-to-b from-black/40 via-black/60 to-black/80 z-0 pointer-events-none"></div>

          {/* 3. Main Grid Content */}
          <div className="relative z-10 container mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-2 place-items-center px-6 md:px-12 py-7 gap-6 md:gap-7">
        
            {/* Left Side: Text Content */}
            <div className="w-full max-w-[450px] md:max-w-[580px] flex flex-col justify-center order-2 lg:order-1">
              <HeroContent />
            </div>

            {/* Right Side: Animation/Image 
               CHANGES MADE:
               1. Changed min-h to specific height (h-[...]) for better forcing of size.
               2. Increased desktop height to 800px.
               3. Removed max-w limit on large screens (lg:max-w-none) so it uses all available grid space.
            */}
            <div className="w-full max-w-[500px] lg:max-w-none h-[350px] md:h-[500px] lg:h-[600px] flex items-center justify-center order-1 lg:order-2">
              <HeroAnimation />
            </div>

          </div>
        </section>

        {/* --- OTHER SECTIONS --- */}
        <Product />
        <Members />
        <JoinUs />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}