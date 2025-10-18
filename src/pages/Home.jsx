import React, { useState, useEffect } from 'react';
import Header from '../components/layout/Header';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    
    <>
    <Header/>
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Transition */}
      <div
        className={`absolute inset-0 transition-all duration-5000 ease-in-out`}
        style={{
          background: isLoaded
            ? `linear-gradient(
                135deg,
                #000000 0%,      
                #1B0A3D 40%,    
                #3B0075 60%,     
                #2A1A4D 80%,      
                #5A00A0 100%      
              )`
            : '#000000',
        }}
      ></div>

      

      {/* Hero Section */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-snug animate-slide-up">
          Welcome to Lock and
          <br />
          <span className="text-white">Open Community</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8 animate-fade-in-delay">
          Equip - Shared Ideology - Innovate
        </p>

        {/* CTA Input */}
        <div className="max-w-2xl mx-auto animate-fade-in-delay-2">
          <div className="bg-gradient-to-r from-[#2A0055] to-[#4B0082] p-1 rounded-xl">
            <div className="bg-[#1B0040] rounded-xl overflow-hidden shadow-lg">
              <div className="flex items-center gap-3 p-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center ">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Ask Lockandopen bot..."
                  className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-base md:text-lg"
                />
                <button className="bg-white hover:bg-gray-400  font-semibold px-6 py-2 rounded-lg transition-all duration-200 hover:scale-105 text-sm md:text-base">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in { animation: fade-in 0.8s ease-out 0.3s both; }
        .animate-fade-in-delay { animation: fade-in 0.8s ease-out 0.5s both; }
        .animate-fade-in-delay-2 { animation: fade-in 0.8s ease-out 0.7s both; }
        .animate-slide-up { animation: slide-up 0.8s ease-out 0.4s both; }
      `}</style>
    </div>
    </>
    
  );
}
