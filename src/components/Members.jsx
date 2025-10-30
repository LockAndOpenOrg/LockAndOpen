/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- INLINE SVG ICONS (Replaced Tabler Imports to fix resolution error) ---

const IconArrowLeft = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
);
const IconArrowRight = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
);

// --- PLACEHOLDER DATA (Replaced local imports with themed placeholders) ---
import arunImg from "../assets/photo/arun.jpeg";
import asifImg from "../assets/photo/asif.png";
import irfanImg from "../assets/photo/irfan.jpg";

const membersData = [
  {
    name: "ArunKumar T",
    role: "Founder",
    image: arunImg,
    quote:
      "Innovation thrives in collaboration — together, we unlock limitless possibilities and build technology that inspires change.",
  },
  {
    name: "Mohamed Asif",
    role: "Founder",
    image: asifImg,
    quote:
      "Building connections that empower people is at the heart of our community — where ideas become impact.",
  },
   {
    name: "Mohamed irfan",
    role: "Member",
    image: irfanImg,
    quote:
      "Building connections that empower people is at the heart of our community — where ideas become impact.",
  },
];


const randomRotateY = () => Math.floor(Math.random() * 15) - 7;

// --- MAIN COMPONENT ---
const Members = () => {
  const members = membersData;
  const [active, setActive] = useState(0);

  const handleNext = () => setActive((prev) => (prev + 1) % members.length);
  const handlePrev = () => setActive((prev) => (prev - 1 + members.length) % members.length);
  const handleDotClick = (index) => setActive(index);
  const isActive = (index) => index === active;

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, [active]);

  const MemberInfo = ({ member }) => (
    <motion.div
      key={member.name}
      initial={{ y: 50, opacity: 0, scale: 0.95 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ y: -50, opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: [0.17, 0.67, 0.83, 0.99] }} // Smoother custom ease
      className="flex flex-col justify-center text-center md:text-left p-4"
    >
      <h3 className="text-3xl md:text-5xl font-extrabold mb-2 leading-tight">
        {/* Modern Text Gradient for Name */}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
          {member.name}
        </span>
      </h3>
      <p className="text-xl text-indigo-300 font-semibold mb-8 tracking-wider">
        {member.role}
      </p>

      {/* Animated Quote */}
      <motion.p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0 font-light italic">
        <span className="text-fuchsia-400 font-serif text-3xl mr-1 leading-[0] inline-block align-top">"</span>
        {member.quote.split(" ").map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.3,
              delay: index * 0.035, // Slightly faster word animation
              ease: "easeOut",
            }}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        ))}
        <span className="text-fuchsia-400 font-serif text-3xl ml-1 leading-[0] inline-block align-bottom">"</span>
      </motion.p>
    </motion.div>
  );


  return (
    <section
      id="members"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-24 
             bg-gray-950 overflow-hidden font-sans"
    >
      {/* --- Deep Space Gradient and Blur Accents --- */}
      {/* Radial overlay for central depth */}
      <div className="absolute inset-0 bg-radial-gradient-to-center pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(17, 24, 39, 0.5) 0%, rgba(6, 6, 12, 1) 70%)',
        }}
      />
      
      {/* Ambient glow (stronger) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="absolute bottom-[-100px] right-[-100px] w-80 h-80 rounded-full bg-fuchsia-500/10 blur-[150px]" />


      <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-20 z-10 text-center tracking-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-indigo-400">
          Meet Our Visionaries
        </span>
      </h2>

      <div className="relative w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10">
        
        {/* --- Left Side: Animated Profile Image (Stronger 3D Effect) --- */}
        <div className="relative h-[450px] w-full max-w-md mx-auto perspective-[1500px] [transform-style:preserve-3d]">
          <AnimatePresence mode="wait">
            {members.map((m, i) => (
              // Only render the active item for cleaner DOM and clearer transitions
              isActive(i) && (
                <motion.div
                  key={m.image}
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                    rotateY: randomRotateY(),
                    z: -100,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotateY: 0,
                    z: 0,
                    y: [10, -5, 0], // Subtle bounce on entry
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.7,
                    // If moving forward, rotate left, if moving backward, rotate right
                    rotateY: i > active ? -90 : 90, 
                    z: -100,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-center [transform-style:preserve-3d]"
                >
                  {/* Image Card Container with Glow and Lift Effect */}
                  <motion.div
                    className="h-full w-full rounded-[2rem] relative overflow-hidden 
                                border border-indigo-400/30 shadow-2xl 
                                bg-gray-800/20 backdrop-blur-sm"
                    style={{ 
                        boxShadow: '0 0 80px rgba(99, 102, 241, 0.4), 0 20px 50px rgba(0,0,0,0.5)', 
                    }}
                    whileHover={{
                      scale: 1.05,
                      rotateY: 2,
                      rotateX: 1,
                      z: 40, // Move forward more aggressively
                      boxShadow: '0 0 100px rgba(99, 102, 241, 0.6), 0 30px 60px rgba(0,0,0,0.7)',
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <img
                      src={m.image}
                      alt={m.name}
                      className="h-full w-full object-cover object-top filter contrast-[1.05]"
                    />
                    
                    {/* Darker Vignette/Overlay for dramatic effect */}
                    <div className="absolute inset-0 bg-black/30 rounded-[2rem] pointer-events-none" 
                        style={{ boxShadow: 'inset 0 0 120px rgba(0, 0, 0, 0.8)' }}
                    />

                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-950/90 to-transparent">
                        <p className="text-sm font-medium text-gray-400">{m.role}</p>
                    </div>

                  </motion.div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

        {/* --- Right Side: Info & Controls --- */}
        <div className="flex flex-col">
            <AnimatePresence mode="wait">
                <MemberInfo member={members[active]} />
            </AnimatePresence>

            {/* --- Controls: Arrows and Dots --- */}
            <div className="flex flex-col sm:flex-row gap-6 mt-16 justify-center md:justify-start items-center">
                
                {/* Arrow Buttons */}
                <div className="flex gap-4">
                    {/* Previous Button */}
                    <button
                        onClick={handlePrev}
                        aria-label="Previous member"
                        className="group flex h-14 w-14 items-center justify-center rounded-full 
                                bg-indigo-500/10 border border-indigo-500/30 backdrop-blur-md 
                                hover:bg-indigo-500/20 transition-all duration-300 
                                shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
                    >
                        <IconArrowLeft className="h-7 w-7 text-indigo-300 transition-transform duration-300 group-hover:-translate-x-1" />
                    </button>
                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        aria-label="Next member"
                        className="group flex h-14 w-14 items-center justify-center rounded-full 
                                bg-indigo-500/10 border border-indigo-500/30 backdrop-blur-md 
                                hover:bg-indigo-500/20 transition-all duration-300
                                shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
                    >
                        <IconArrowRight className="h-7 w-7 text-indigo-300 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default Members;
