/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

import arunImg from "../assets/photo/arun.png";
import asifImg from "../assets/photo/asif.png";
import preethiImg from "../assets/photo/preethi.png";
import irfanImg from "../assets/photo/irfan.png";

// ---------------- ICONS ----------------
const IconArrowLeft = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const IconArrowRight = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const IconLinkedIn = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="18" height="18" viewBox="0 0 24 24">
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.48 8h4V24h-4V8zm7.98 0h3.84v2.19h.05c.54-1.03 1.87-2.12 3.86-2.12 4.12 0 4.88 2.71 4.88 6.24V24h-4v-7.94c0-1.9-.03-4.36-2.65-4.36-2.65 0-3.06 2.07-3.06 4.22V24h-4V8z" />
  </svg>
);

const IconGitHub = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="18" height="18" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.4 0 12.08c0 5.34 3.44 9.86 8.21 11.46.6.12.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.05-1.64-4.05-1.64-.55-1.42-1.33-1.8-1.33-1.8-1.09-.76.08-.75.08-.75 1.2.09 1.84 1.25 1.84 1.25 1.07 1.86 2.8 1.32 3.48 1.01.11-.79.42-1.32.76-1.63-2.67-.31-5.47-1.37-5.47-6.1 0-1.35.47-2.45 1.24-3.31-.12-.31-.54-1.57.12-3.28 0 0 1.01-.33 3.3 1.25a11.29 11.29 0 0 1 6 0c2.29-1.58 3.3-1.25 3.3-1.25.66 1.71.24 2.97.12 3.28.77.86 1.24 1.96 1.24 3.31 0 4.74-2.8 5.78-5.48 6.09.43.38.81 1.12.81 2.27 0 1.64-.02 2.96-.02 3.36 0 .32.21.71.82.58A12.04 12.04 0 0 0 24 12.08C24 5.4 18.63 0 12 0z" />
  </svg>
);

const IconInstagram = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="18" height="18" viewBox="0 0 24 24">
    <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm4.5 3.5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2A3 3 0 1 0 12 15a3 3 0 0 0 0-6zm4.75-2.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
  </svg>
);

// ---------------- MEMBER DATA ----------------
const membersData = [
  {
    name: "Mohamed Asif",
    role: "Founder",
    image: asifImg,
    quote: "A strong community isn’t built by code alone — it’s built by clarity, purpose, and people who believe in creating impact.",
    socials: {
      linkedin: "https://www.linkedin.com/in/mohamedasifscode/",
      github: "https://github.com/MohamedAsifS",
      instagram: "https://www.instagram.com/_._._asif_._/",
    },
  },
  {
    name: "ArunKumar T",
    role: "Founder",
    image: arunImg,
    quote: "Technology becomes powerful when people grow together — building, inspiring, and unlocking the future as one community.",
    socials: {
      linkedin: "https://www.linkedin.com/in/arunkumar-thangam/",
      github: "https://github.com/arunkumarthangam22",
      instagram: "https://www.instagram.com/arunkumar_thangam/",
    },
  },
  {
    name: "Preethi Senthilkumar",
    role: "Member",
    image: preethiImg,
    quote: "Innovation begins with curiosity. Community transforms that curiosity into something the world can feel.",
    socials: {
      linkedin: "https://www.linkedin.com/in/preethi-senthilkumar-6313ab278/",
      github: "https://github.com/preethisenthilkumar1801",
      instagram: "https://www.instagram.com/_.preethi._001/",
    },
  },
  {
    name: "Mohamed Irfan",
    role: "Member",
    image: irfanImg,
    quote: "Every idea has potential — but collaboration turns that potential into real, meaningful change.",
    socials: {
      linkedin: "https://www.linkedin.com/in/mohammed-irfan-2a5146218/",
      github: "https://github.com/irfanzmohammed",
      instagram: "https://www.instagram.com/___irfanz__muhammed/",
    },
  },
];

// ---------------- MAIN ----------------
const Members = () => {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]); // FIXED

  const handleNext = () => setActive((p) => (p + 1) % membersData.length);
  const handlePrev = () => setActive((p) => (p - 1 + membersData.length) % membersData.length);

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="members"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-10
      bg-gradient-to-r from-[#080034] via-[#000112] to-[#03003a] font-sans overflow-hidden"
    >
      <motion.div style={{ y, opacity }} className="w-full max-w-4xl z-10">

        <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-10 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-300 to-indigo-600">
            Meet Our Visionaries
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

          {/* MEMBER IMAGE */}
          <div className="relative h-[260px] w-full max-w-xs mx-auto">
            <AnimatePresence mode="wait">
              <motion.img
                key={membersData[active].image}
                src={membersData[active].image}
                alt={membersData[active].name}
                className="absolute inset-0 h-full w-full object-cover rounded-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>

          {/* MEMBER INFO */}
          <div className="flex flex-col items-center md:items-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={membersData[active].name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center md:text-left max-w-sm"
              >
                <h3 className="text-xl md:text-3xl font-extrabold mb-1 text-cyan-300">
                  {membersData[active].name}
                </h3>

                <p className="text-base text-indigo-300 font-semibold mb-3">
                  {membersData[active].role}
                </p>

                <p className="text-gray-300 italic leading-relaxed mb-5 text-sm">
                  "{membersData[active].quote}"
                </p>

                <div className="flex justify-center md:justify-start gap-3">
                  {membersData[active].socials.linkedin && (
                    <a href={membersData[active].socials.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-fuchsia-400">
                      <IconLinkedIn />
                    </a>
                  )}
                  {membersData[active].socials.github && (
                    <a href={membersData[active].socials.github} target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-fuchsia-400">
                      <IconGitHub />
                    </a>
                  )}
                  {membersData[active].socials.instagram && (
                    <a href={membersData[active].socials.instagram} target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-fuchsia-400">
                      <IconInstagram />
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-3 mt-7">
              <button
                onClick={handlePrev}
                className="h-9 w-9 flex items-center justify-center rounded-full 
                bg-indigo-500/10 border border-indigo-500/30 hover:bg-indigo-500/20 transition"
              >
                <IconArrowLeft className="text-indigo-300" />
              </button>

              <button
                onClick={handleNext}
                className="h-9 w-9 flex items-center justify-center rounded-full 
                bg-indigo-500/10 border border-indigo-500/30 hover:bg-indigo-500/20 transition"
              >
                <IconArrowRight className="text-indigo-300" />
              </button>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Members;
