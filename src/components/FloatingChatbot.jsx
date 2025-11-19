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
          fixed bottom-6 right-6 z-50 
          w-14 h-14 rounded-full 
          bg-purple-600 hover:bg-purple-700 
          shadow-xl flex items-center justify-center 
          text-white text-3xl 
          transition-all duration-300
        "
      >
        💬
      </button>

      {/* Chat Window */}
      <div
        className={`
          fixed bottom-24 right-6 z-50 
          w-[360px] h-[520px] 
          bg-white shadow-2xl rounded-xl overflow-hidden
          transition-all duration-300
          ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"}
        `}
      >
        <Webchat
          configUrl="https://files.bpcontent.cloud/2025/11/11/16/20251111163252-8MMQQPZD.json"
          clientId="1baa868f-1781-4423-8d29-478771f52643"
        />
      </div>
    </>
  );
}
