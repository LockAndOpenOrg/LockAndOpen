/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

// --- INLINE SVG ICONS ---
const IconArrowLeft = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const IconArrowRight = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const IconLinkedIn = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width="20"
    height="20"
  >
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.48 8h4V24h-4V8zm7.98 0h3.84v2.19h.05c.54-1.03 1.87-2.12 3.86-2.12 4.12 0 4.88 2.71 4.88 6.24V24h-4v-7.94c0-1.9-.03-4.36-2.65-4.36-2.65 0-3.06 2.07-3.06 4.22V24h-4V8z" />
  </svg>
);

const IconGitHub = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width="20"
    height="20"
  >
    <path d="M12 0C5.37 0 0 5.4 0 12.08c0 5.34 3.44 9.86 8.21 11.46.6.12.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.05-1.64-4.05-1.64-.55-1.42-1.33-1.8-1.33-1.8-1.09-.76.08-.75.08-.75 1.2.09 1.84 1.25 1.84 1.25 1.07 1.86 2.8 1.32 3.48 1.01.11-.79.42-1.32.76-1.63-2.67-.31-5.47-1.37-5.47-6.1 0-1.35.47-2.45 1.24-3.31-.12-.31-.54-1.57.12-3.28 0 0 1.01-.33 3.3 1.25a11.29 11.29 0 0 1 6 0c2.29-1.58 3.3-1.25 3.3-1.25.66 1.71.24 2.97.12 3.28.77.86 1.24 1.96 1.24 3.31 0 4.74-2.8 5.78-5.48 6.09.43.38.81 1.12.81 2.27 0 1.64-.02 2.96-.02 3.36 0 .32.21.71.82.58A12.04 12.04 0 0 0 24 12.08C24 5.4 18.63 0 12 0z" />
  </svg>
);

const IconInstagram = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width="20"
    height="20"
  >
    <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm4.5 3.5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2A3 3 0 1 0 12 15a3 3 0 0 0 0-6zm4.75-2.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
  </svg>
);

// --- PLACEHOLDER DATA ---
import arunImg from "../assets/photo/arun.jpeg";
import asifImg from "../assets/photo/asif.png";
import preethiImg from "../assets/photo/preethi.png";
import irfanImg from "../assets/photo/irfan.jpg";

const membersData = [
   {
    name: "Mohamed Asif",
    role: "Founder",
    image: asifImg,
    quote:
      "A strong community isn’t built by code alone — it’s built by clarity, purpose, and people who believe in creating impact.",
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
    quote:
      "Technology becomes powerful when people grow together — building, inspiring, and unlocking the future as one community.",
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
    quote:
      "Innovation begins with curiosity. Community transforms that curiosity into something the world can feel.",
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
    quote:
      "Every idea has potential — but collaboration turns that potential into real, meaningful change.",
    socials: {
      linkedin: "https://www.linkedin.com/in/mohammed-irfan-2a5146218/",
      github: "https://github.com/irfanzmohammed",
      instagram: "https://www.instagram.com/___irfanz__muhammed/",
    },
  },

];


const randomRotateY = () => Math.floor(Math.random() * 15) - 7;

// --- MAIN COMPONENT ---
const Members = () => {
  const members = membersData;
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  const handleNext = () => setActive((prev) => (prev + 1) % members.length);
  const handlePrev = () =>
    setActive((prev) => (prev - 1 + members.length) % members.length);
  const isActive = (index) => index === active;

  useEffect(() => {
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, [active]);

  const MemberInfo = ({ member }) => (
    <motion.div
      key={member.name}
      initial={{ y: 30, opacity: 0, scale: 0.98 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ y: -30, opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5, ease: [0.17, 0.67, 0.83, 0.99] }}
      className="flex flex-col justify-center text-center md:text-left p-4 max-w-md"
    >
      <h3 className="text-2xl md:text-4xl font-extrabold mb-1 leading-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
          {member.name}
        </span>
      </h3>
      <p className="text-lg text-indigo-300 font-semibold mb-6 tracking-wider">
        {member.role}
      </p>

      <motion.p className="text-base md:text-lg text-gray-300 leading-relaxed font-light italic">
        <span className="text-fuchsia-400 font-serif text-2xl mr-1 leading-[0] inline-block align-top">
          "
        </span>
        {member.quote.split(" ").map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 5, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.25,
              delay: index * 0.02,
              ease: "easeOut",
            }}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        ))}
        <span className="text-fuchsia-400 font-serif text-2xl ml-1 leading-[0] inline-block align-bottom">
          "
        </span>
      </motion.p>

      <div className="flex justify-center md:justify-start gap-4 mt-6">
        {member.socials?.linkedin && (
          <a
            href={member.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-fuchsia-400 transition-transform hover:scale-110"
          >
            <IconLinkedIn />
          </a>
        )}
        {member.socials?.github && (
          <a
            href={member.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-fuchsia-400 transition-transform hover:scale-110"
          >
            <IconGitHub />
          </a>
        )}
        {member.socials?.instagram && (
          <a
            href={member.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-fuchsia-400 transition-transform hover:scale-110"
          >
            <IconInstagram />
          </a>
        )}
      </div>
    </motion.div>
  );

  return (
    <section
      ref={sectionRef}
      id="members"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-16 
               bg-gray-950 overflow-hidden font-sans"
    >
      <div
        className="absolute inset-0 bg-radial-gradient-to-center pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(17, 24, 39, 0.5) 0%, rgba(6, 6, 12, 1) 70%)",
        }}
      />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/10 blur-[100px]" />
      <div className="absolute bottom-[-80px] right-[-80px] w-56 h-56 rounded-full bg-fuchsia-500/10 blur-[100px]" />

      <motion.div style={{ y, opacity }} className="w-full max-w-5xl z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-12 text-center tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-indigo-400">
            Meet Our Visionaries
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative h-[350px] w-full max-w-sm mx-auto perspective-[1200px] [transform-style:preserve-3d]">
            <AnimatePresence mode="wait">
              {members.map(
                (m, i) =>
                  isActive(i) && (
                    <motion.div
                      key={m.image}
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                        rotateY: randomRotateY(),
                        z: -80,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        rotateY: 0,
                        z: 0,
                        y: [5, -3, 0],
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.8,
                        rotateY: i > active ? -90 : 90,
                        z: -80,
                      }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="absolute inset-0 origin-center [transform-style:preserve-3d]"
                    >
                      <motion.div
                        className="h-full w-full rounded-[1.5rem] relative overflow-hidden 
                                 border border-indigo-400/30 shadow-xl 
                                 bg-gray-800/20 backdrop-blur-sm"
                        style={{
                          boxShadow:
                            "0 0 60px rgba(99, 102, 241, 0.3), 0 15px 40px rgba(0,0,0,0.5)",
                        }}
                        whileHover={{
                          scale: 1.03,
                          rotateY: 2,
                          rotateX: 1,
                          z: 30,
                          boxShadow:
                            "0 0 80px rgba(99, 102, 241, 0.5), 0 25px 50px rgba(0,0,0,0.6)",
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <img
                          src={m.image}
                          alt={m.name}
                          className="h-full w-full object-cover object-top filter contrast-[1.05]"
                        />
                        <div
                          className="absolute inset-0 bg-black/30 rounded-[1.5rem] pointer-events-none"
                          style={{
                            boxShadow: "inset 0 0 80px rgba(0, 0, 0, 0.7)",
                          }}
                        />
                      </motion.div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <AnimatePresence mode="wait">
              <MemberInfo member={members[active]} />
            </AnimatePresence>

            <div className="flex gap-4 mt-10">
              <button
                onClick={handlePrev}
                aria-label="Previous member"
                className="group flex h-11 w-11 items-center justify-center rounded-full 
                         bg-indigo-500/10 border border-indigo-500/30 backdrop-blur-md 
                         hover:bg-indigo-500/20 transition-all duration-300 
                         shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30"
              >
                <IconArrowLeft className="text-indigo-300 transition-transform duration-300 group-hover:-translate-x-0.5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next member"
                className="group flex h-11 w-11 items-center justify-center rounded-full 
                         bg-indigo-500/10 border border-indigo-500/30 backdrop-blur-md 
                         hover:bg-indigo-500/20 transition-all duration-300
                         shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30"
              >
                <IconArrowRight className="text-indigo-300 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Members;