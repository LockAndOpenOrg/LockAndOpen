// /* eslint-disable no-unused-vars */
// "use client";
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// // --- Product Data ---
// const products = [
//   {
//     title: "PicStream",
//     description:
//       "Effortlessly manage and download images in bulk — free, fast, and intuitive. Designed for designers, researchers, and creators who need large sets of high-quality visuals with one click.",
//     link: "https://picstream.lockandopen.in/",
//     logo: "https://picstream.lockandopen.in/favicon.ico",
//   },
//   {
//     title: "PicStream",
//     description:
//       "Effortlessly manage and download images in bulk — free, fast, and intuitive. Designed for designers, researchers, and creators who need large sets of high-quality visuals with one click.",
//     link: "https://picstream.lockandopen.in/",
//     logo: "https://picstream.lockandopen.in/favicon.ico",
//   },
//   {
//     title: "PicStream",
//     description:
//       "Effortlessly manage and download images in bulk — free, fast, and intuitive. Designed for designers, researchers, and creators who need large sets of high-quality visuals with one click.",
//     link: "https://picstream.lockandopen.in/",
//     logo: "https://picstream.lockandopen.in/favicon.ico",
//   },
// ];

// // --- Scroll Reveal Wrapper ---
// function ScrollRevealWrapper({ children }) {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start 90%", "end 10%"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
//   const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   return (
//     <motion.div ref={ref} style={{ y, opacity }} transition={{ duration: 0.8 }}>
//       {children}
//     </motion.div>
//   );
// }

// // --- Product Card ---
// function ProductCard({ product }) {
//   return (
//     <div className="flex flex-col items-center justify-center text-center min-h-screen snap-start">
//       <motion.div
//         className="relative bg-gradient-to-br from-[#0a0038]/90 via-[#12005e]/85 to-[#030014]/90 
//         border border-white/20 p-7 rounded-xl backdrop-blur-xl 
//         max-w-md transition-all duration-500 hover:border-white/40 hover:scale-[1.03]"
//         whileHover={{ y: -10 }}
//         transition={{ type: "spring", stiffness: 10 }}
//       >
//         {/* Product Logo */}
//         <div className="flex justify-center mb-6">
//           <motion.img
//             src={product.logo}
//             alt={product.title}
//             className="w-20 h-20 rounded-full object-cover border border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
//             whileHover={{ rotate: 0 }}
//             transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//           />
//         </div>

//         {/* Title */}
//         <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
//           {product.title}
//         </h2>

//         {/* Description */}
//         <p className="text-gray-200 text-base leading-relaxed mb-8">
//           {product.description}
//         </p>

//         {/* Visit Site Button */}
//         <motion.a
//           href={product.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-block px-6 py-3 bg-white/15 border border-white/30 rounded-full 
//           text-white font-semibold hover:bg-white/25 hover:text-white 
//           transition-all duration-300"
//           whileHover={{ scale: 1.08 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Visit Site →
//         </motion.a>
//       </motion.div>
//     </div>
//   );
// }


// // --- Main Layout ---
// export default function Product() {
//   return (
//     <div className="w-full h-full flex flex-col lg:flex-row text-white 
//       bg-gradient-to-tr from-[#010017] via-[#030139] to-[#000010]">
//       {/* Left Column */}
//       <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-12 sticky top-0 h-screen 
//       bg-gradient-to-b from-[#010017]/90 via-[#030139]/90 to-[#000010]/90 backdrop-blur-2xl">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="max-w-md text-center"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
//   Introducing{"   "}
//   <span className="bg-gradient-to-r from-[#b46dff] via-[#a855f7] to-[#8e2de2] bg-clip-text text-transparent">
//     Next-Gen Solutions
//   </span>
// </h1>
// <p className="text-gray-300 text-lg leading-relaxed">
//   Experience cutting-edge performance and seamless design — built for
//   innovators shaping tomorrow’s digital world.
// </p>

//         </motion.div>
//       </div>

//       {/* Right Column */}
//       <div className="w-full lg:w-1/2 snap-y snap-mandatory scroll-smooth">
//         {products.map((product, index) => (
//           <ScrollRevealWrapper key={index}>
//             <ProductCard product={product} />
//           </ScrollRevealWrapper>
//         ))}
//       </div>
//     </div>
//   );
// }











// /* eslint-disable no-unused-vars */
// "use client";
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// // --- Product Data ---
// const products = [
//   {
//     title: "PicStream",
//     description:
//       "Effortlessly manage and download images in bulk — free, fast, and intuitive. Designed for designers, researchers, and creators who need large sets of high-quality visuals with one click.",
//     link: "https://picstream.lockandopen.in/",
//     logo: "https://picstream.lockandopen.in/favicon.ico",
//   },
//   {
//     title: "PicStream",
//     description:
//       "Effortlessly manage and download images in bulk — free, fast, and intuitive. Designed for designers, researchers, and creators who need large sets of high-quality visuals with one click.",
//     link: "https://picstream.lockandopen.in/",
//     logo: "https://picstream.lockandopen.in/favicon.ico",
//   },
//   {
//     title: "PicStream",
//     description:
//       "Effortlessly manage and download images in bulk — free, fast, and intuitive. Designed for designers, researchers, and creators who need large sets of high-quality visuals with one click.",
//     link: "https://picstream.lockandopen.in/",
//     logo: "https://picstream.lockandopen.in/favicon.ico",
//   },
// ];

// // --- Scroll Reveal Wrapper ---
// function ScrollRevealWrapper({ children }) {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start 90%", "end 10%"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
//   const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   return (
//     <motion.div ref={ref} style={{ y, opacity }} transition={{ duration: 0.8 }}>
//       {children}
//     </motion.div>
//   );
// }

// // --- Main Layout ---
// export default function Product() {
//   return (
//     <div
//       className="w-full h-full flex flex-col lg:flex-row text-white 
//       bg-gradient-to-tr from-[#010017] via-[#030139] to-[#000010]"
//     >
//       {/* Left Column */}
//       <div
//         className="w-full lg:w-1/2 flex flex-col justify-center items-center p-12 
//         sticky top-0 h-screen 
//         bg-gradient-to-b from-[#010017]/90 via-[#030139]/90 to-[#000010]/90 
//         backdrop-blur-2xl"
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="max-w-md text-center"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
//             Introducing{" "}
//             <span className="bg-gradient-to-r from-[#b46dff] via-[#a855f7] to-[#8e2de2] bg-clip-text text-transparent">
//               Next-Gen Solutions
//             </span>
//           </h1>
//           <p className="text-gray-300 text-lg leading-relaxed">
//             Experience cutting-edge performance and seamless design — built for
//             innovators shaping tomorrow’s digital world.
//           </p>
//         </motion.div>
//       </div>

//       {/* Right Column — Website Previews */}
//       <div
//         className="w-full lg:w-1/2 snap-y snap-mandatory overflow-y-scroll h-screen 
//         scrollbar-thin scrollbar-thumb-[#6b21a8]/70 scrollbar-track-transparent scroll-smooth"
//       >
//         {products.map((product, index) => (
//           <ScrollRevealWrapper key={index}>
//             <div className="min-h-screen flex flex-col items-center justify-center snap-start relative">
//               <motion.div
//                 className="relative w-[90%] h-[70vh] rounded-2xl overflow-hidden 
//                   shadow-2xl border border-white/20"
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ duration: 0.5, type: 'spring' }}
//               >
//                 {/* Live Website Preview */}
//                 <iframe
//                   src={product.link}
//                   title={product.title}
//                   className="w-full h-full rounded-2xl"
//                   loading="lazy"
//                   sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
//                 ></iframe>

//                 {/* Overlay Gradient for Depth */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#000010]/40 via-transparent to-transparent pointer-events-none"></div>
//               </motion.div>

//               {/* Product Info Below the Preview */}
//               <div className="text-center mt-8 px-6">
//                 <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-[#b46dff] via-[#a855f7] to-[#8e2de2] bg-clip-text text-transparent">
//                   {product.title}
//                 </h2>
//                 <p className="text-gray-300 text-base max-w-md mx-auto mb-4">
//                   {product.description}
//                 </p>
//                 <motion.a
//                   href={product.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block px-6 py-3 bg-white/15 border border-white/30 rounded-full 
//                     text-white font-semibold hover:bg-white/25 transition-all duration-300"
//                   whileHover={{ scale: 1.08 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Open Live →
//                 </motion.a>
//               </div>
//             </div>
//           </ScrollRevealWrapper>
//         ))}
//       </div>
//     </div>
//   );
// }







// /* eslint-disable no-unused-vars */
// "use client";
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// // --- Product Data ---
// const products = [
//   {
//     title: "PicStream",
//     description:
//       "Effortlessly manage and download images in bulk — free, fast, and intuitive. Designed for designers, researchers, and creators who need large sets of high-quality visuals with one click.",
//     link: "https://picstream.lockandopen.in/",
//     logo: "https://picstream.lockandopen.in/favicon.ico",
//   },
//   {
//     title: "LinkVault",
//     description:
//       "Your personal, secure, and searchable link library. Save, organize, and quickly retrieve all your important links across devices. Never lose a valuable resource again.",
//     link: "https://example.com/linkvault", // Placeholder Link
//     logo: "https://example.com/linkvault/favicon.ico",
//   },
//   {
//     title: "ColorPalette AI",
//     description:
//       "Generate harmonious color palettes instantly using AI. Input an image or a single color, and get a professional, ready-to-use scheme for your next design project.",
//     link: "https://example.com/colorpalette", // Placeholder Link
//     logo: "https://example.com/colorpalette/favicon.ico",
//   },
// ];

// // --- Scroll Reveal Wrapper ---
// function ScrollRevealWrapper({ children }) {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start 90%", "end 10%"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
//   const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   return (
//     <motion.div ref={ref} style={{ y, opacity }} transition={{ duration: 0.8 }}>
//       {children}
//     </motion.div>
//   );
// }

// // --- Main Layout (CORRECTED) ---
// export default function Product() {
//   return (
//     // 1. MAIN CONTAINER: Removed height classes (h-full/h-screen). Height is dictated by content.
//     <div
//       className="w-full flex flex-col lg:flex-row text-white 
//       bg-gradient-to-tr from-[#010017] via-[#030139] to-[#000010]"
//     >
      
//       {/* Left Column (Sticky) */}
//       <div
//         // 2. LEFT COLUMN: Sticky/h-screen conditional on 'lg' breakpoint.
//         className="w-full lg:w-1/2 flex flex-col justify-center items-center p-12 
//         lg:sticky lg:top-0 lg:h-screen 
//         bg-gradient-to-b from-[#010017]/90 via-[#030139]/90 to-[#000010]/90 
//         backdrop-blur-2xl z-10" // Added z-10 to ensure it stays above the right content
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="max-w-md text-center py-16 lg:py-0"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
//             Introducing{" "}
//             <span className="bg-gradient-to-r from-[#b46dff] via-[#a855f7] to-[#8e2de2] bg-clip-text text-transparent">
//               Next-Gen Solutions
//             </span>
//           </h1>
//           <p className="text-gray-300 text-lg leading-relaxed">
//             Experience cutting-edge performance and seamless design — built for
//             innovators shaping tomorrow’s digital world.
//           </p>
//         </motion.div>
//       </div>

//       {/* Right Column (Scrollable Content) */}
//       <div
//         // 3. RIGHT COLUMN WRAPPER: Removed overflow/h-screen. It just holds the content.
//         className="w-full lg:w-1/2"
//       >
//         {/* 4. INNER SCROLL WRAPPER: Contains the snapping and scrolling logic. */}
//         <div className="snap-y snap-mandatory scrollbar-thin scrollbar-thumb-[#6b21a8]/70 scrollbar-track-transparent scroll-smooth">
//           {products.map((product, index) => (
//             <ScrollRevealWrapper key={index}>
//               {/* 5. PRODUCT CARD: min-h-screen ensures enough scroll space for snapping. */}
//               <div className="min-h-screen flex flex-col items-center justify-center snap-start relative">
//                 <motion.div
//                   className="relative w-[90%] h-[70vh] rounded-2xl overflow-hidden 
//                     shadow-2xl border border-white/20"
//                   whileHover={{ scale: 1.02 }}
//                   transition={{ duration: 0.5, type: 'spring' }}
//                 >
//                   {/* Live Website Preview */}
//                   {/* Using key={product.link} forces iframe remount/update if data changes */}
//                   <iframe
//                     key={product.link}
//                     src={product.link}
//                     title={product.title}
//                     className="w-full h-full rounded-2xl"
//                     loading="lazy"
//                     sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
//                   ></iframe>

//                   {/* Overlay Gradient for Depth */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#000010]/40 via-transparent to-transparent pointer-events-none"></div>
//                 </motion.div>

//                 {/* Product Info Below the Preview */}
//                 <div className="text-center mt-8 px-6 pb-20">
//                   <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-[#b46dff] via-[#a855f7] to-[#8e2de2] bg-clip-text text-transparent">
//                     {product.title}
//                   </h2>
//                   <p className="text-gray-300 text-base max-w-md mx-auto mb-4">
//                     {product.description}
//                   </p>
//                   <motion.a
//                     href={product.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-block px-6 py-3 bg-white/15 border border-white/30 rounded-full 
//                       text-white font-semibold hover:bg-white/25 transition-all duration-300"
//                     whileHover={{ scale: 1.08 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Open Live →
//                   </motion.a>
//                 </div>
//               </div>
//             </ScrollRevealWrapper>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }









// /* eslint-disable no-unused-vars */
// "use client";
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// // --- Product Data ---
// const products = [
//   {
//     title: "PicStream",
//     description:
//       "Effortlessly manage and download images in bulk — free, fast, and intuitive. Designed for designers, researchers, and creators who need large sets of high-quality visuals with one click.",
//     link: "https://picstream.lockandopen.in/",
//     logo: "https://picstream.lockandopen.in/favicon.ico",
//   },
//   {
//     title: "LinkVault",
//     description:
//       "Your personal, secure, and searchable link library. Save, organize, and quickly retrieve all your important links across devices. Never lose a valuable resource again.",
//     link: "https://example.com/linkvault",
//     logo: "https://example.com/linkvault/favicon.ico",
//   },
//   {
//     title: "ColorPalette AI",
//     description:
//       "Generate harmonious color palettes instantly using AI. Input an image or a single color, and get a professional, ready-to-use scheme for your next design project.",
//     link: "https://example.com/colorpalette",
//     logo: "https://example.com/colorpalette/favicon.ico",
//   },
// ];

// // --- Scroll Reveal Animation Wrapper ---
// function ScrollRevealWrapper({ children }) {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start 85%", "end 15%"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
//   const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   return (
//     <motion.div
//       ref={ref}
//       style={{ y, opacity }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//     >
//       {children}
//     </motion.div>
//   );
// }

// // --- Main Component ---
// export default function Product() {
//   return (
//     <div className="w-full flex flex-col lg:flex-row text-white bg-gradient-to-tr from-[#010017] via-[#030139] to-[#000010]">
//       {/* --- LEFT COLUMN --- */}
//       <div
//         className="w-full lg:w-1/2 flex flex-col justify-center items-center 
//         p-12 lg:sticky lg:top-0 lg:h-screen 
//         bg-gradient-to-b from-[#010017]/95 via-[#030139]/90 to-[#000010]/90 
//         backdrop-blur-xl z-10 border-r border-white/5"
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="max-w-md text-center space-y-6 py-12 lg:py-0"
//         >
//           <h1 className="text-4xl md:text-5xl font-extrabold leading-snug">
//             Discover{" "}
//             <span className="bg-gradient-to-r from-[#b46dff] via-[#a855f7] to-[#8e2de2] bg-clip-text text-transparent">
//               Next-Gen Solutions
//             </span>
//           </h1>
//           <p className="text-gray-300 text-lg leading-relaxed">
//             Experience cutting-edge performance and seamless design — crafted
//             for innovators shaping tomorrow’s digital world.
//           </p>
//         </motion.div>
//       </div>

//       {/* --- RIGHT COLUMN (Scrollable Website Previews) --- */}
//       <div
//         id="products"
//         className="w-full lg:w-1/2 overflow-y-auto snap-y snap-mandatory 
//         scrollbar-thin scrollbar-thumb-[#6b21a8]/70 scrollbar-track-transparent scroll-smooth"
//       >
//         {products.map((product, index) => (
//           <ScrollRevealWrapper key={index}>
//             <div className="min-h-screen flex flex-col items-center justify-center snap-start relative px-6">
//               {/* Product Card */}
//               <motion.div
//                 className="relative w-full max-w-3xl h-[80vh] rounded-2xl overflow-hidden 
//                 shadow-2xl border border-white/15 bg-black/10 backdrop-blur-md"
//                 whileHover={{ scale: 1.01 }}
//                 transition={{ duration: 0.6, type: "spring" }}
//               >
//                 {/* Live Preview */}
//                 <iframe
//                   key={product.link}
//                   src={product.link}
//                   title={product.title}
//                   className="w-full h-full rounded-2xl scale-[1] origin-top"
//                   loading="lazy"
//                   sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
//                   style={{
//                     transform: "scale(1)",
//                     transformOrigin: "top center",
//                     border: "none",
//                   }}
//                 ></iframe>

//                 {/* Overlay gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#000010]/60 via-transparent to-transparent pointer-events-none"></div>

//                 {/* Floating Logo */}
//                 {product.logo && (
//                   <motion.img
//                     src={product.logo}
//                     alt={`${product.title} logo`}
//                     className="absolute top-4 left-4 w-10 h-10 rounded-md bg-white/10 backdrop-blur-md p-1"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: 0.3, duration: 0.5 }}
//                   />
//                 )}
//               </motion.div>

//               {/* Product Info */}
//               <div className="text-center mt-8 px-4 pb-20 max-w-md mx-auto">
//                 <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-[#b46dff] via-[#a855f7] to-[#8e2de2] bg-clip-text text-transparent">
//                   {product.title}
//                 </h2>
//                 <p className="text-gray-300 text-base mb-5">
//                   {product.description}
//                 </p>
//                 <motion.a
//                   href={product.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block px-6 py-3 bg-white/10 border border-white/25 
//                     rounded-full text-white font-semibold hover:bg-white/20 
//                     transition-all duration-300 shadow-md backdrop-blur-md"
//                   whileHover={{ scale: 1.08 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Open Live →
//                 </motion.a>
//               </div>
//             </div>
//           </ScrollRevealWrapper>
//         ))}
//       </div>
//     </div>
//   );
// }






// /* eslint-disable no-unused-vars */
// "use client";
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import imagePreview from "../assets/image.png";

// // --- Product Data ---
// const products = [
//  {
//     title: "PicStream",
//     description:
//       "Effortlessly manage and download images in bulk — free, fast, and intuitive.",
//     link: "https://picstream.lockandopen.in/",
//     logo: "https://picstream.lockandopen.in/favicon.ico",
//     image: imagePreview, 
//   },
//   {
//     title: "LinkVault",
//     description:
//       "Your personal, secure, and searchable link library. Save, organize, and quickly retrieve all your important links across devices. Never lose a valuable resource again.",
//     link: "https://example.com/linkvault",
//     logo: "https://example.com/linkvault/favicon.ico",
//     image: imagePreview,
//   },
 
// ];

// // --- Scroll Reveal Animation Wrapper ---
// function ScrollRevealWrapper({ children }) {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start 85%", "end 15%"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
//   const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   return (
//     <motion.div
//       ref={ref}
//       style={{ y, opacity }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//     >
//       {children}
//     </motion.div>
//   );
// }

// // --- Main Component ---
// export default function Product() {
//   return (
//     <div className="w-full flex flex-col lg:flex-row text-white bg-gradient-to-tr from-[#010017] via-[#030139] to-[#000010]">
//       {/* --- LEFT COLUMN --- */}
//       <div
//         className="w-full lg:w-1/2 flex flex-col justify-center items-center 
//         p-12 lg:sticky lg:top-0 lg:h-screen 
//         bg-gradient-to-b from-[#010017]/95 via-[#030139]/90 to-[#000010]/90 
//         backdrop-blur-xl z-10 border-r border-white/5"
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="max-w-md text-center space-y-6 py-12 lg:py-0"
//         >
//           <h1 className="text-4xl md:text-5xl font-extrabold leading-snug">
//             Discover{" "}
//             <span className="bg-gradient-to-r from-[#b46dff] via-[#a855f7] to-[#8e2de2] bg-clip-text text-transparent">
//               Next-Gen Solutions
//             </span>
//           </h1>
//           <p className="text-gray-300 text-lg leading-relaxed">
//             Experience cutting-edge performance and seamless design — crafted
//             for innovators shaping tomorrow’s digital world.
//           </p>
//         </motion.div>
//       </div>

//       {/* --- RIGHT COLUMN (Clickable Image Cards) --- */}
//       <div
//         id="products"
//         className="w-full lg:w-1/2 overflow-y-auto snap-y snap-mandatory 
//         scrollbar-thin scrollbar-thumb-[#6b21a8]/70 scrollbar-track-transparent scroll-smooth"
//       >
//         {products.map((product, index) => (
//           <ScrollRevealWrapper key={index}>
//             <div className="min-h-screen flex flex-col items-center justify-center snap-start relative px-6">
//               {/* Product Card */}
//               <motion.div
//                 className="relative w-full max-w-3xl h-[80vh] rounded-2xl overflow-hidden 
//                 shadow-2xl border border-white/15 bg-black/10 backdrop-blur-md flex items-center justify-center"
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ duration: 0.4, type: "spring" }}
//               >
//                 {/* Clickable Image */}
//                 <a
//                   href={product.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-full h-full flex items-center justify-center"
//                 >
//                   <motion.img
//                     src={product.image}
//                     alt={`${product.title} preview`}
//                     className="w-full h-full object-cover rounded-2xl cursor-pointer"
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.4 }}
//                   />
//                 </a>

//                 {/* Overlay gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#000010]/60 via-transparent to-transparent pointer-events-none"></div>

//                 {/* Floating Logo */}
//                 {product.logo && (
//                   <motion.img
//                     src={product.logo}
//                     alt={`${product.title} logo`}
//                     className="absolute top-4 left-4 w-10 h-10 rounded-md bg-white/10 backdrop-blur-md p-1"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: 0.3, duration: 0.5 }}
//                   />
//                 )}
//               </motion.div>

//               {/* Product Info */}
//               <div className="text-center mt-8 px-4 pb-20 max-w-md mx-auto">
//                 <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-[#b46dff] via-[#a855f7] to-[#8e2de2] bg-clip-text text-transparent">
//                   {product.title}
//                 </h2>
//                 <p className="text-gray-300 text-base mb-5">
//                   {product.description}
//                 </p>
//                 <motion.a
//                   href={product.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block px-6 py-3 bg-white/10 border border-white/25 
//                     rounded-full text-white font-semibold hover:bg-white/20 
//                     transition-all duration-300 shadow-md backdrop-blur-md"
//                   whileHover={{ scale: 1.08 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Visit Site →
//                 </motion.a>
//               </div>
//             </div>
//           </ScrollRevealWrapper>
//         ))}
//       </div>
//     </div>
//   );
// }





/* eslint-disable no-unused-vars */
"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import imagePreview from "../assets/image.png";

const products = [
  {
    title: "PicStream",
    description:
      "Effortlessly manage and download images in bulk — free, fast, and intuitive.",
    link: "https://picstream.lockandopen.in/",
    image: imagePreview,
  },
  {
    title: "LinkVault",
    description:
      "Your personal, secure, and searchable link library. Save, organize, and quickly retrieve all your important links across devices.",
    link: "https://example.com/linkvault",
    image: imagePreview,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function ScrollRevealWrapper({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 10%"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="h-screen w-full snap-start flex flex-col items-center justify-center px-6"
    >
      {children}
    </motion.div>
  );
}

export default function Product() {
  return (
    <div className="w-full flex flex-col lg:flex-row text-white bg-gradient-to-tr from-[#010008] via-[#040028] to-[#0d0073]">
      {/* LEFT COLUMN */}
      <div
        className="relative w-full lg:w-1/2 flex flex-col justify-center items-center 
        p-12 lg:sticky lg:top-0 lg:h-screen 
        bg-gradient-to-b from-[#000015]/95 via-[#020015]/85 to-[#020015]/90 
        backdrop-blur-xl z-10 border-r border-[#3e0099]/25 overflow-hidden"
      >
        {/* Subtle Glow */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(142,45,226,0.05)_0%,transparent_75%)]"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative max-w-md text-center space-y-6 py-12 lg:py-0 z-10"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-snug">
            Discover{" "}
            <span className="bg-gradient-to-r from-[#6352d2] via-[#3e0099] to-[#8e2de2] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(142,45,226,0.5)]">
              Next-Gen Solutions
            </span>
          </h1>
          <p className="text-gray-200 text-lg leading-relaxed drop-shadow-[0_0_6px_rgba(255,255,255,0.25)]">
            Experience cutting-edge performance and seamless design — crafted
            for innovators shaping tomorrow’s digital world.
          </p>
        </motion.div>
      </div>

      {/* RIGHT COLUMN */}
      <div
        id="products"
        className="w-full lg:w-1/2 snap-y snap-mandatory scroll-smooth 
        scrollbar-thin scrollbar-thumb-[#3e0099]/70 scrollbar-track-transparent 
        bg-gradient-to-b from-[#020015] via-[#020015] to-[#020015] relative"
      >
        {/* Glow Animation */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(142,45,226,0.06)_0%,transparent_95%)]"
          animate={{ opacity: [0.25, 0.55, 0.25], scale: [1, 1.08, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />

        {products.map((product, index) => (
          <ScrollRevealWrapper key={index}>
            <div className="relative flex flex-col items-center justify-center w-full z-10">
              {/* Product Card */}
              <motion.div
                className="relative w-full max-w-3xl h-[45vh] rounded-3xl overflow-hidden 
                shadow-[0_0_40px_rgba(30,0,100,0.5)] border border-[#3e0099]/95 backdrop-blur-2xl 
                flex items-center justify-center transition-all duration-500 bg-[#020035]/90"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, type: 'spring' }}
              >
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center"
                >
                  <motion.img
                    src={product.image}
                    alt={`${product.title} preview`}
                    className="w-full h-full object-contain rounded-3xl cursor-pointer p-6 
                    brightness-90 hover:brightness-110 transition-all duration-500"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.4 }}
                  />
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-[#010008]/70 via-transparent to-transparent pointer-events-none"></div>
              </motion.div>

              {/* Product Info */}
              <div className="text-center mt-8 mb-12 px-6 sm:px-10 max-w-md mx-auto">
                <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-[#07004a] via-[#3e0099] to-[#8e2de2] bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(142,45,226,0.8)]">
                  {product.title}
                </h2>

                <p className="text-gray-100 text-lg leading-relaxed mb-6 drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]">
                  {product.description}
                </p>
              </div>
            </div>
          </ScrollRevealWrapper>
        ))}
      </div>
    </div>
  );
}
