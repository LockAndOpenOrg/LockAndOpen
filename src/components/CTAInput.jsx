
  import React, { useState } from "react";

  export default function CTAInput() {
    const [prompt, setPrompt] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("User asked:", prompt);
    };

    return (
      <div className="max-w-sm mx-auto relative z-20 animate-fade-in-delay-2">
        <form
          onSubmit={handleSubmit}
          className="p-[1px] bg-gradient-to-r from-[#0f084b] via-[#1e0b6a] to-[#2a0d7a] rounded-xl shadow-[0_0_20px_rgba(80,40,200,0.3)]"
        >
          <div className="bg-[#030139]/70 backdrop-blur-2xl rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_25px_rgba(90,60,255,0.4)]">
            <div className="flex items-center gap-2 p-3">
              {/* Icon Bubble */}
              <div className="w-7 h-7 bg-gradient-to-br from-[#2430a3] to-[#4628a5] rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(80,40,255,0.4)]">
                <svg
                  className="w-4 h-4 text-white opacity-80"
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

              {/* Input Field */}
              <input
                type="text"
                placeholder="Ask Lockandopen bot..."
                className="flex-1 bg-transparent text-gray-200 placeholder-gray-500 outline-none text-sm md:text-base"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="relative overflow-hidden bg-gradient-to-r from-[#2337ff] to-[#4729b3] text-white font-medium px-4 py-1.5 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(60,40,255,0.6)] text-sm"
              >
                <span className="relative z-10">Send</span>
                <span className="absolute inset-0 bg-white/10 blur-sm opacity-0 hover:opacity-15 transition-all"></span>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
