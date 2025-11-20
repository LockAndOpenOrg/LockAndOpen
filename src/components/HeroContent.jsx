import React from 'react';
import CTAInput from './CTAInput';

export default function HeroContent() {
  return (
    <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
      <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold text-white mb-4 leading-snug animate-slide-up">
        Welcome to Lock and
        <br />
        <span className="bg-gradient-to-r from-white via-gray-100 to-[#e7d0ff] bg-clip-text text-transparent ">Open Community</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-400 mb-8 animate-fade-in-delay">
        Equip - Shared Ideology - Innovate
      </p>

      <CTAInput />

      {/* Add the 'global' attribute here */}
      <style >{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* These classes will now apply to CTAInput and any other component */
        .animate-fade-in {
          animation: fade-in 0.8s ease-out 0.3s both;
        }
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.5s both;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.7s both;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.4s both;
        }
      `}</style>
    </div>
  );
}