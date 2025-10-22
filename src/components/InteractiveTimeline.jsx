// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function InteractiveTimeline() {
//   const [isDesktop, setIsDesktop] = useState(false);
//   const [activeEvent, setActiveEvent] = useState(null);
//   const popupRef = useRef(null);

//   const timelineEvents = [
//     { title: "Project Launch", date: "2023", description: "The journey begins with a bold idea. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra, nunc eget mattis eleifend, augue lectus blandit orci, sed fermentum nunc velit sed mauris. Nulla facilisi. Aenean ac nisi ut sem tincidunt tincidunt." },
//     { title: "Growth Phase", date: "2024", description: "Rapid development and new partnerships." },
//     { title: "Milestone Reached", date: "2025", description: "Crossed 1M users worldwide." },
//     { title: "Innovation Drive", date: "2026", description: "Expanding with new technology." },
//     { title: "Global Expansion", date: "2027", description: "Entering new markets with strong momentum." },
//   ];

//   // ✅ Detect layout
//   useEffect(() => {
//     const updateView = () => setIsDesktop(window.innerWidth >= 768);
//     updateView();
//     window.addEventListener("resize", updateView);
//     return () => window.removeEventListener("resize", updateView);
//   }, []);

//   // ✅ Close popup when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (popupRef.current && !popupRef.current.contains(e.target)) {
//         setActiveEvent(null);
//       }
//     };

//     if (activeEvent) {
//       document.addEventListener("mousedown", handleClickOutside);
//       document.addEventListener("touchstart", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.removeEventListener("touchstart", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.removeEventListener("touchstart", handleClickOutside);
//     };
//   }, [activeEvent]);

//   // ✅ Popup animations
//   const popupVariantsDesktop = {
//     hidden: { opacity: 0, y: 20, scale: 0.95 },
//     visible: { opacity: 1, y: 0, scale: 1 },
//     exit: { opacity: 0, y: 20, scale: 0.95 },
//   };

//   const popupVariantsMobile = {
//     hidden: { opacity: 0, y: 100 },
//     visible: { opacity: 1, y: 0 },
//     exit: { opacity: 0, y: 100 },
//   };

//   return (
//     <div
//       className={`relative flex flex-col items-center justify-center 
//       ${isDesktop ? "w-[90vw] max-w-7xl h-auto" : "w-full min-h-screen"}
//       mx-auto`}
//     >
//       {/* Timeline */}
//       <div
//         className={`relative flex ${
//           isDesktop ? "flex-row justify-between" : "flex-col items-center"
//         } px-8 py-10 gap-10 w-full`}
//       >
//         {/* Timeline Line */}
//         <div
//           className={`absolute bg-gray-300 ${
//             isDesktop
//               ? "h-1 w-full top-1/2 left-0"
//               : "w-1 h-full left-1/2 top-0 -translate-x-1/2"
//           }`}
//         ></div>

//         {/* Timeline Events */}
//         {timelineEvents.map((event, index) => (
//           <div
//             key={index}
//             onClick={() => setActiveEvent(event)}
//             className="relative flex flex-col items-center justify-center text-center
//               md:w-48 md:h-32 w-[80%] h-32 bg-white rounded-2xl shadow-lg snap-center
//               cursor-pointer hover:scale-105 transition-transform duration-300 mx-auto"
//           >
//             <div
//               className={`absolute bg-blue-600 rounded-full ${
//                 isDesktop
//                   ? "w-4 h-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//                   : "w-3 h-3 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
//               }`}
//             ></div>
//             <h3 className="font-semibold text-lg mt-2">{event.title}</h3>
//             <p className="text-sm text-gray-500">{event.date}</p>
//           </div>
//         ))}
//       </div>

//       {/* Overlay + Popup */}
//       <AnimatePresence>
//         {activeEvent && (
//           <>
//             {/* Overlay */}
//             <motion.div
//               className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
//               onClick={() => setActiveEvent(null)}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             />

//             {/* Popup */}
//             <motion.div
//               ref={popupRef}
//               variants={isDesktop ? popupVariantsDesktop : popupVariantsMobile}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               transition={{ duration: 0.35, ease: "easeOut" }}
//               className={`fixed bg-white rounded-2xl shadow-2xl p-6 z-50 flex flex-col items-center text-center
//                 ${isDesktop
//                   ? "w-[80vw] max-w-3xl left-1/2 -translate-x-1/2 mt-4"
//                   : "w-full max-w-[90vw] h-[60vh] left-1/2 -translate-x-1/2 bottom-0 rounded-b-none"
//                 }`}
//               style={
//                 isDesktop
//                   ? { top: "100%" } // 👈 below timeline
//                   : { maxHeight: "calc(100vh - 100px)" } // 👈 respects navbar + safe area
//               }
//             >
//               <div className="w-full max-h-[50vh] overflow-y-auto px-2">
//                 <h2 className="text-2xl font-bold mb-2">{activeEvent.title}</h2>
//                 <p className="text-gray-500 mb-4">{activeEvent.date}</p>
//                 <p className="text-gray-700 mb-6 whitespace-pre-line">
//                   {activeEvent.description}
//                 </p>
//               </div>

//               <button
//                 onClick={() => setActiveEvent(null)}
//                 className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//               >
//                 Close
//               </button>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function InteractiveTimeline() {
//   const [isDesktop, setIsDesktop] = useState(false);
//   const [activeEvent, setActiveEvent] = useState(null);
//   const popupRef = useRef(null);

//   const timelineEvents = [
//     { title: "Project Launch", date: "2023", description: "The journey begins with a bold idea..." },
//     { title: "Growth Phase", date: "2024", description: "Rapid development and new partnerships." },
//     { title: "Milestone Reached", date: "2025", description: "Crossed 1M users worldwide." },
//     { title: "Innovation Drive", date: "2026", description: "Expanding with new technology." },
//     { title: "Global Expansion", date: "2027", description: "Entering new markets with strong momentum." },
//   ];

//   useEffect(() => {
//     const updateView = () => setIsDesktop(window.innerWidth >= 768);
//     updateView();
//     window.addEventListener("resize", updateView);
//     return () => window.removeEventListener("resize", updateView);
//   }, []);

//   // ✅ Click outside popup closes it
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (popupRef.current && !popupRef.current.contains(e.target)) {
//         setActiveEvent(null);
//       }
//     };
//     if (activeEvent) {
//       document.addEventListener("mousedown", handleClickOutside);
//       document.addEventListener("touchstart", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.removeEventListener("touchstart", handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.removeEventListener("touchstart", handleClickOutside);
//     };
//   }, [activeEvent]);

//   // Animations
//   const popupVariantsDesktop = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: { opacity: 1, scale: 1 },
//     exit: { opacity: 0, scale: 0.95 },
//   };

//   const popupVariantsMobile = {
//     hidden: { opacity: 0, y: 100 },
//     visible: { opacity: 1, y: 0 },
//     exit: { opacity: 0, y: 100 },
//   };

//   return (
//     <div className={`relative flex flex-col items-center justify-center ${isDesktop ? "w-[90vw] max-w-7xl" : "w-full min-h-screen"} mx-auto`}>
//       {/* Timeline Line */}
//       <div
//         className={`absolute bg-gray-300 ${
//           isDesktop ? "h-1 w-full top-1/2 left-0" : "w-1 h-full left-1/2 top-0 -translate-x-1/2"
//         }`}
//       ></div>

//       {/* Timeline Events */}
//       <div className={`relative flex ${isDesktop ? "flex-row justify-between" : "flex-col items-center"} px-8 py-10 gap-10 w-full`}>
//         {timelineEvents.map((event, index) => (
//           <div
//             key={index}
//             onClick={() => setActiveEvent(event)}
//             className="relative flex flex-col items-center justify-center text-center md:w-48 md:h-32 w-[80%] h-32 bg-white rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 mx-auto"
//           >
//             <div
//               className={`absolute bg-blue-600 rounded-full ${
//                 isDesktop
//                   ? "w-4 h-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//                   : "w-3 h-3 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
//               }`}
//             ></div>
//             <h3 className="font-semibold text-lg mt-2">{event.title}</h3>
//             <p className="text-sm text-gray-500">{event.date}</p>
//           </div>
//         ))}
//       </div>

//       {/* Overlay + Popup */}
//       <AnimatePresence>
//         {activeEvent && (
//           <>
//             {/* Fullscreen Overlay */}
//             <motion.div
//               className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
//               onClick={() => setActiveEvent(null)}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             />

//             {/* Popup */}
//             <motion.div
//               ref={popupRef}
//               variants={isDesktop ? popupVariantsDesktop : popupVariantsMobile}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               transition={{ duration: 0.35, ease: "easeOut" }}
//               className={`fixed bg-white rounded-2xl shadow-2xl p-6 z-50 flex flex-col items-center text-center
//                 ${isDesktop
//                   ? "w-[80vw] max-w-3xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
//                   : "w-full max-w-[90vw] h-[60vh] left-1/2 -translate-x-1/2 bottom-0 rounded-b-none"
//                 }`}
//             >
//               <div className="w-full max-h-[50vh] overflow-y-auto px-2">
//                 <h2 className="text-2xl font-bold mb-2">{activeEvent.title}</h2>
//                 <p className="text-gray-500 mb-4">{activeEvent.date}</p>
//                 <p className="text-gray-700 mb-6 whitespace-pre-line">{activeEvent.description}</p>
//               </div>

//               <button
//                 onClick={() => setActiveEvent(null)}
//                 className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//               >
//                 Close
//               </button>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function InteractiveTimeline() {
//   const [isDesktop, setIsDesktop] = useState(false);
//   const [activeEvent, setActiveEvent] = useState(null);
//   const popupRef = useRef(null);

//   const timelineEvents = [
//     { title: "Project Launch", date: "2023", description: "The journey begins with a bold idea..." },
//     { title: "Growth Phase", date: "2024", description: "Rapid development and new partnerships." },
//     { title: "Milestone Reached", date: "2025", description: "Crossed 1M users worldwide." },
//     { title: "Innovation Drive", date: "2026", description: "Expanding with new technology." },
//     { title: "Global Expansion", date: "2027", description: "Entering new markets with strong momentum." },
//   ];

//   // ✅ Detect layout changes
//   useEffect(() => {
//     const updateView = () => setIsDesktop(window.innerWidth >= 768);
//     updateView();
//     window.addEventListener("resize", updateView);
//     return () => window.removeEventListener("resize", updateView);
//   }, []);

//   // ✅ Close popup when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (popupRef.current && !popupRef.current.contains(e.target)) {
//         setActiveEvent(null);
//       }
//     };

//     if (activeEvent) {
//       document.addEventListener("mousedown", handleClickOutside);
//       document.addEventListener("touchstart", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.removeEventListener("touchstart", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.removeEventListener("touchstart", handleClickOutside);
//     };
//   }, [activeEvent]);

//   // ✅ Lock body scroll while modal is open (mobile + desktop)
//   useEffect(() => {
//     if (activeEvent) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//   }, [activeEvent]);

//   // Popup animations
//   const popupVariantsDesktop = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: { opacity: 1, scale: 1 },
//     exit: { opacity: 0, scale: 0.95 },
//   };

//   const popupVariantsMobile = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0 },
//     exit: { opacity: 0, y: 50 },
//   };

//   return (
//     <div
//       className={`relative flex flex-col items-center justify-center ${
//         isDesktop ? "w-[90vw] max-w-7xl" : "w-full min-h-screen"
//       } mx-auto`}
//     >
//       {/* Timeline Line */}
//       <div
//         className={`absolute bg-gray-300 ${
//           isDesktop
//             ? "h-1 w-full top-1/2 left-0"
//             : "w-1 h-full left-1/2 top-0 -translate-x-1/2"
//         }`}
//       ></div>

//       {/* Timeline Events */}
//       <div
//         className={`relative flex ${
//           isDesktop
//             ? "flex-row justify-between"
//             : "flex-col items-center"
//         } px-8 py-10 gap-10 w-full`}
//       >
//         {timelineEvents.map((event, index) => (
//           <div
//             key={index}
//             onClick={() => setActiveEvent(event)}
//             className="relative flex flex-col items-center justify-center text-center
//               md:w-48 md:h-32 w-[80%] h-32 bg-white rounded-2xl shadow-lg
//               cursor-pointer hover:scale-105 transition-transform duration-300 mx-auto"
//           >
//             <div
//               className={`absolute bg-blue-600 rounded-full ${
//                 isDesktop
//                   ? "w-4 h-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//                   : "w-3 h-3 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
//               }`}
//             ></div>
//             <h3 className="font-semibold text-lg mt-2">{event.title}</h3>
//             <p className="text-sm text-gray-500">{event.date}</p>
//           </div>
//         ))}
//       </div>

//       {/* Overlay + Popup */}
//       <AnimatePresence>
//         {activeEvent && (
//           <>
//             {/* Fullscreen Overlay */}
//             <motion.div
//               className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
//               onClick={() => setActiveEvent(null)}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             />

//             {/* Popup */}
//             <motion.div
//               ref={popupRef}
//               variants={isDesktop ? popupVariantsDesktop : popupVariantsMobile}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               transition={{ duration: 0.35, ease: "easeOut" }}
//               className={`fixed bg-white rounded-2xl shadow-2xl p-6 z-50 flex flex-col items-center text-center
//                 ${isDesktop
//                   ? "w-[80vw] max-w-3xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
//                   : "w-full max-w-[90vw] h-[60vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
//                 }`}
//             >
//               <div className="w-full max-h-[50vh] overflow-y-auto px-2">
//                 <h2 className="text-2xl font-bold mb-2">{activeEvent.title}</h2>
//                 <p className="text-gray-500 mb-4">{activeEvent.date}</p>
//                 <p className="text-gray-700 mb-6 whitespace-pre-line">
//                   {activeEvent.description}
//                 </p>
//               </div>

//               <button
//                 onClick={() => setActiveEvent(null)}
//                 className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//               >
//                 Close
//               </button>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function InteractiveTimeline() {
//   const [isDesktop, setIsDesktop] = useState(false);
//   const [activeEvent, setActiveEvent] = useState(null);
//   const popupRef = useRef(null);

//   const timelineEvents = [
//     { title: "Carleton University", date: "2011", description: "The journey begins with a bold idea..." },
//     { title: "Growth Phase", date: "2024", description: "Rapid development and new partnerships." },
//     { title: "Milestone Reached", date: "2025", description: "Crossed 1M users worldwide." },
//     { title: "Innovation Drive", date: "2026", description: "Expanding with new technology." },
//     { title: "Global Expansion", date: "2027", description: "Entering new markets with strong momentum." },
//   ];

//   useEffect(() => {
//     const updateView = () => setIsDesktop(window.innerWidth >= 768);
//     updateView();
//     window.addEventListener("resize", updateView);
//     return () => window.removeEventListener("resize", updateView);
//   }, []);

//   // close popup if clicking outside of it
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (popupRef.current && !popupRef.current.contains(e.target)) {
//         setActiveEvent(null);
//       }
//     };
//     if (activeEvent) {
//       document.addEventListener("mousedown", handleClickOutside);
//       document.addEventListener("touchstart", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.removeEventListener("touchstart", handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.removeEventListener("touchstart", handleClickOutside);
//     };
//   }, [activeEvent]);

//   useEffect(() => {
//     if (activeEvent) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//   }, [activeEvent]);

//   const popupVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0 },
//     exit: { opacity: 0, y: 50 },
//   };

//   return (
//     <div
//       className={`relative flex flex-col items-center justify-center ${
//         isDesktop ? "w-[90vw] max-w-7xl" : "w-full min-h-screen"
//       } mx-auto`}
//     >
//       {/* Timeline line */}
//       <div
//         className={`absolute bg-gray-300 ${
//           isDesktop
//             ? "h-0.5 w-full top-1/2 left-0"
//             : "w-1 h-full left-1/2 top-0 -translate-x-1/2"
//         }`}
//       ></div>

//       {/* Timeline events */}
//       <div
//         className={`relative flex ${
//           isDesktop ? "flex-row justify-between" : "flex-col items-center"
//         } px-4 md:px-8 py-10 gap-10 w-full`}
//       >
//         {timelineEvents.map((event, index) => (
//           <div
//             key={index}
//             onClick={() => setActiveEvent(event)}
//             className="relative flex flex-col items-center justify-center text-center
//               md:w-48 md:h-32 w-[80%] h-32 bg-amber-500/60 rounded-2xl shadow-lg
//               cursor-pointer hover:scale-105 transition-transform duration-300 mx-auto"
//           >
//             <div
//               className={`absolute bg-zinc-600 rounded-full ${
//                 isDesktop
//                   ? "w-4 h-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//                   : "w-3 h-3 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
//               }`}
//             ></div>
//             <h3 className="font-semibold text-lg mt-2">{event.title}</h3>
//             <p className="text-sm text-gray-500">{event.date}</p>
//           </div>
//         ))}
//       </div>

//       {/* Popup + Overlay (mobile only) */}
//       <AnimatePresence>
//         {activeEvent && (
//           <>
//             {!isDesktop && (
//               <motion.div
//                 className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
//                 onClick={() => setActiveEvent(null)}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               />
//             )}

//             <motion.div
//               ref={popupRef}
//               variants={popupVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               transition={{ duration: 0.35, ease: "easeOut" }}
//               className={`fixed bg-white rounded-2xl shadow-2xl p-6 z-50 flex flex-col items-center text-center
//                 ${isDesktop
//                   ? "w-[80vw] max-w-3xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
//                   : "w-full max-w-[90vw] h-[60vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
//                 }`}
//             >
//               <div className="w-full max-h-[50vh] overflow-y-auto px-2">
//                 <h2 className="text-2xl font-bold mb-2">{activeEvent.title}</h2>
//                 <p className="text-gray-500 mb-4">{activeEvent.date}</p>
//                 <p className="text-gray-700 mb-6 whitespace-pre-line">
//                   {activeEvent.description}
//                 </p>
//               </div>

//               <button
//                 onClick={() => setActiveEvent(null)}
//                 className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//               >
//                 Close
//               </button>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

import React, { useState } from "react";

export default function InteractiveTimeline() {
  const [activeItem, setActiveItem] = useState(null);

  const timelineItems = [
    {
      id: 1,
      year: "2011",
      content: (
        <div>
          <h3 className="text-xl font-bold mb-2">The Beginning</h3>
          <p className="text-white/80">
            This is where your journey started. You can add text, images, or components here.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      year: "2012",
      content: (
        <div>
          <h3 className="text-xl font-bold mb-2">Major Milestone</h3>
          <p className="text-white/80">
            A flexible content area that can grow as needed.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      year: "2013",
      content: (
        <div>
          <h3 className="text-xl font-bold mb-2">New Chapter</h3>
          <ul className="list-disc list-inside text-white/80">
            <li>Added rich content</li>
            <li>Custom styling</li>
            <li>Matches the grid glow</li>
          </ul>
        </div>
      ),
    },
    {
      id: 4,
      year: "2017",
      content: (
        <div>
          <h3 className="text-xl font-bold mb-2">New Chapter</h3>
          <ul className="list-disc list-inside text-white/80">
            <li>Added rich content</li>
            <li>Custom styling</li>
            <li>Matches the grid glow</li>
          </ul>
        </div>
      ),
    },
    {
      id: 5,
      year: "2019",
      content: (
        <div>
          <h3 className="text-xl font-bold mb-2">New Chapter</h3>
          <ul className="list-disc list-inside text-white/80">
            <li>Added rich content</li>
            <li>Custom styling</li>
            <li>Matches the grid glow</li>
          </ul>
        </div>
      ),
    },
     {
      id: 5,
      year: "2024",
      content: (
        <div>
          <h3 className="text-xl font-bold mb-2">New Chapter</h3>
          <ul className="list-disc list-inside text-white/80">
            <li>Added rich content</li>
            <li>Custom styling</li>
            <li>Matches the grid glow</li>
          </ul>
        </div>
      ),
    },
    {
      id: 5,
      year: "2025 and Beyond...",
      content: (
        <div>
          <h3 className="text-xl font-bold mb-2">New Chapter</h3>
          <ul className="list-disc list-inside text-white/80">
            <li>Added rich content</li>
            <li>Custom styling</li>
            <li>Matches the grid glow</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-row gap-[4px] flex-wrap justify-center">
        {timelineItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(activeItem === item.id ? null : item.id)}
            className="
              relative bg-black/60 border border-white/10 
              h-48 w-48 flex flex-col justify-center items-center text-center 
              cursor-pointer overflow-hidden
              transition-all duration-500 ease-out
              text-[#c89116]/80 drop-shadow-[0_0_12px_#c89116]
              hover:text-[#c89116]/90 hover:drop-shadow-[0_0_20px_#c89116] hover:scale-105
              animate-[gold-pulse_4s_ease-in-out_infinite]
            "
          >
            <span className="text-5xl font-bold select-none pointer-events-none">
              {item.year}
            </span>
          </div>
        ))}
      </div>

      {/* Pop-up container */}
      {activeItem && (
        <div
          onClick={() => setActiveItem(null)}
          className="
            fixed inset-0 flex items-center justify-center
            bg-black/60 backdrop-blur-sm z-50 p-4
          "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              bg-black/80 border border-white/10 p-8 max-w-2xl w-full 
              rounded-none shadow-lg text-white
              transition-all duration-300 ease-out
            "
          >
            {timelineItems.find((i) => i.id === activeItem)?.content}
            <button
              onClick={() => setActiveItem(null)}
              className="mt-6 px-4 py-2 bg-[#c89116] text-black font-semibold hover:bg-[#e5a92e] transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

