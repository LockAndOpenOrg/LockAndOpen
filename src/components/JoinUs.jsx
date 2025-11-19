/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Checkmark Icon
const CheckmarkIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="white"
    className="w-8 h-8"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function JoinUs() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("No file chosen");
  const formRef = useRef(null);

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(formRef.current);

  const name = formData.get("name");
  const email = formData.get("email");
  const vision = formData.get("vision");
  const file = formData.get("file");

  // Convert file → Base64 (Brevo requires this)
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
    });

  const fileBase64 = await toBase64(file);

  const payload = {
    sender: { 
    name: "LockAndOpen",
    email: "lockandopenofficial@gmail.com"   // ✅ Verified sender
  },
    to: [{ email: "career@lockandopen.in", name: "LockAndOpen Careers" }],
    subject: "New JoinUs Application",
    htmlContent: `
      <h2>New JoinUs Application</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Vision:</strong> ${vision}</p>
      <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
    `,
    attachment: [
      {
        content: fileBase64,
        name: file.name
      }
    ]
  };

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
"api-key": import.meta.env.VITE_BREVO_KEY
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      e.target.reset();
      setFileName("No file chosen");
    } else {
      console.error(await response.json());
      alert("Submission failed. Please try again.");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong. Try again later.");
  }
};


  return (
    <section
      id="joinus"
      className="relative min-h-screen flex items-center justify-center px-8 py-24 bg-[#050016]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f012d]/40 to-[#000]/80 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#a35af0] to-[#6277ff]"
          >
            Join Our Inner Circle
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-300 text-sm max-w-lg mx-auto md:mx-0 font-light"
          >
            Become part of a growing network dedicated to innovation,
            collaboration, and creativity.
          </motion.p>
        </div>

        {/* RIGHT FORM */}
      <div className="flex justify-center md:justify-end">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="w-full max-w-xs sm:max-w-sm bg-[#0b0130]/70 border border-[#3b82f6]/30 rounded-2xl p-5 sm:p-5 text-left backdrop-blur-md shadow-lg shadow-blue-900/10"
  >
    <AnimatePresence mode="wait">
      {!submitted ? (
        <motion.form
          key="form"
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          encType="multipart/form-data"
        >
          {/* NAME */}
          <label className="block text-gray-300 text-sm font-medium mb-1">
            Full Name
          </label>
          <input
            name="name"
            type="text"
            required
            placeholder="Enter your name"
            className="w-full mb-3 px-3 py-2 rounded-md bg-[#020021]/60 border border-[#1e3a8a]/50 text-white focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-sm"
          />

          {/* EMAIL */}
          <label className="block text-gray-300 text-sm font-medium mb-1">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            className="w-full mb-3 px-3 py-2 rounded-md bg-[#020021]/60 border border-[#1e3a8a]/50 text-white focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-sm"
          />

          {/* VISION */}
          <label className="block text-gray-300 text-sm font-medium mb-1">
            Your Vision
          </label>
          <textarea
            name="vision"
            required
            placeholder="Reason to join..."
            className="w-full h-24 mb-4 px-3 py-2 rounded-md bg-[#020021]/60 border border-[#1e3a8a]/50 text-white focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-sm resize-none"
          ></textarea>

          {/* FILE UPLOAD */}
          <label className="block text-gray-300 text-sm font-medium mb-1">
            Upload Document
          </label>

          <div className="relative mb-5">
            <input
              type="file"
              name="file"
              accept=".pdf,.doc,.docx,.jpg,.png"
              required
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={(e) =>
                setFileName(e.target.files[0]?.name || "No file chosen")
              }
            />

            <div className="w-full bg-[#0d0138]/60 border border-[#1e3a8a]/50 rounded-md px-3 py-2 flex items-center justify-between cursor-pointer">
              <motion.span
                key={fileName}
                initial={{ opacity: 0.2, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
                className="text-gray-300 truncate max-w-[60%] text-sm"
              >
                {fileName}
              </motion.span>

              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-to-r from-[#1d4ed8] to-[#3b82f6] text-white px-3 py-1.5 rounded text-xs font-medium shadow"
              >
                Choose
              </motion.span>
            </div>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#1424d5] to-[#5f3cdd] text-white font-semibold px-4 py-2.5 rounded-lg shadow-md hover:opacity-90 text-sm"
          >
            Send
          </button>
        </motion.form>
      ) : (
        <motion.div
          key="success"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center justify-center text-center space-y-3 py-4"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1d4ed8] to-[#3b82f6] flex items-center justify-center shadow-md">
            <CheckmarkIcon />
          </div>

          <h3 className="text-xl font-semibold text-white">
            Application Received!
          </h3>

          <p className="text-gray-400 text-sm max-w-xs">
            Thank you — we’ll review your submission soon.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
</div>

      </div>
    </section>
  );
}
