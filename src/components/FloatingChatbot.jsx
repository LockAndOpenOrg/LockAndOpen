import { useState } from "react";
import { Webchat } from "@botpress/webchat";

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Bubble Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          fixed bottom-6 right-6 z-[9999]
          w-16 h-16 rounded-full 
          bg-gradient-to-br from-purple-600 to-purple-800
          shadow-[0_0_25px_rgba(168,85,247,0.7)]
          hover:shadow-[0_0_35px_rgba(168,85,247,0.9)]
          backdrop-blur-xl border border-white/20
          flex items-center justify-center 
          text-white text-3xl 
          transition-all duration-300
          animate-pulse
        "
      >
        💬
      </button>

      {/* Chat Window */}
      <div
        className={`
          fixed bottom-28 right-6 z-[9999]
          w-[380px] h-[540px] 
          rounded-2xl overflow-hidden
          backdrop-blur-2xl
          bg-white/10 border border-white/20
          shadow-[0_8px_35px_rgba(0,0,0,0.3)]
          transition-all duration-300 origin-bottom-right
          ${isOpen 
            ? "opacity-100 scale-100 translate-y-0" 
            : "opacity-0 scale-0 translate-y-5 pointer-events-none"
          }
        `}
      >
        <Webchat
          configurl="https://files.bpcontent.cloud/2025/11/11/16/20251111163252-8MMQQPZD.json"
          clientId="1baa868f-1781-4423-8d29-478771f52643"
        />
      </div>
    </>
  );
}
