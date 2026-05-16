// import React from "react";
// import Ribbons from "./components/Ribbons.jsx"
// import { Routes, Route } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import background from "./assets/background.jpg"

// export default function App() {
//   return (

//     <div
//       className="w-full h-screen bg-cover bg-center"
//       style={{ backgroundImage: `url(${background})` }}
//     >
//     <div className="flex flex-col min-h-screen">
      
//       <Navbar />
//       <main className="flex-grow">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </main>
//       <h1 className="text-5xl font-bold text-red-600 text-center mt-10">
//       If this is BIG and RED → Tailwind is working 🎉
//     </h1>
//     </div>
//     </div>
//   );
// }

// import React from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import background from "./assets/background.jpg";
// import background2 from "./assets/background2.png"

// // Reusable transition wrapper
// const PageWrapper = ({ children }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.4, ease: "easeInOut" }}
//       className="h-full"
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default function App() {
//   const location = useLocation();

//   return (
//     <div
//       className="
//     w-full h-screen bg-cover bg-center bg-fixed
//     bg-[url('./assets/background2.png')]
//     sm:bg-[url('/src/assets/background2.png')]
//     lg:bg-[url('/src/assets/background.jpg')]
//   "
//     >
//       <div className="absolute inset-0 bg-black/40" />
//       <div className="flex flex-col min-h-screen relative z-10">
//         <Navbar />
//         <main className="flex-1 flex-grow">
//           <AnimatePresence mode="wait">
//             <Routes location={location} key={location.pathname}>
//               <Route
//                 path="/"
//                 element={
//                   <PageWrapper>
//                     <Home />
//                   </PageWrapper>
//                 }
//               />
//               <Route
//                 path="/about"
//                 element={
//                   <PageWrapper>
//                     <About />
//                   </PageWrapper>
//                 }
//               />
//               <Route
//                 path="/contact"
//                 element={
//                   <PageWrapper>
//                     <Contact />
//                   </PageWrapper>
//                 }
//               />
//             </Routes>
//           </AnimatePresence>
//         </main>
//         {/* <h1 className="text-5xl font-bold text-red-600 text-center mt-10">
//           If this is BIG and RED → Tailwind is working 🎉
//         </h1> */}
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Bio from "./pages/Bio";
// import Exp1 from "./pages/Exp1";
// import Exp2 from "./pages/Exp2";
// import Exp3 from "./pages/Exp3";
// import Exp4 from "./pages/Exp4";
// import Exp5 from "./pages/Exp5";
// import ProjectManagement from "./pages/ProjectManagement";
// import Timeline from "./pages/Timeline";
// import Work from "./pages/Work";
// import background from "./assets/background.jpg";
// import background2 from "./assets/background2.png";

// // Reusable transition wrapper
// const PageWrapper = ({ children }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.4, ease: "easeInOut" }}
//       className="h-full"
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default function App() {
//   const location = useLocation();

//   return (
//     <div
//       className="
//         relative
//         w-full min-h-screen
//         bg-fixed bg-cover bg-center
//         bg-[url('./assets/background2.png')]
//         sm:bg-[url('/src/assets/background2.png')]
//         lg:bg-[url('/src/assets/background.jpg')]
//       "
//     >
//       {/* Semi-transparent overlay */}
//       <div className="absolute inset-0 bg-black/40 pointer-events-none" />

//       {/* Foreground content */}
//       <div className="relative z-10 flex flex-col min-h-screen">
//         <Navbar />
//         <main className="flex-1">
//           <AnimatePresence mode="wait">
//             <Routes location={location} key={location.pathname}>
//               <Route
//                 path="/"
//                 element={
//                   <PageWrapper>
//                     <Home />
//                   </PageWrapper>
//                 }
//               />
//               <Route
//                 path="/about"
//                 element={
//                   <PageWrapper>
//                     <About />
//                   </PageWrapper>
//                 }
//               />
//               <Route
//                 path="/work"
//                 element={
//                   <PageWrapper>
//                     <Work />
//                   </PageWrapper>
//                 }
//               />
//               <Route
//                 path="/contact"
//                 element={
//                   <PageWrapper>
//                     <Contact />
//                   </PageWrapper>
//                 }
//               />
//               <Route
//                 path="/bio"
//                 element={
//                   <PageWrapper>
//                     <Bio />
//                   </PageWrapper>
//                 }
//               />
//               <Route
//                 path="/exp1"
//                 element={
//                   <PageWrapper>
//                     <Exp1 />
//                   </PageWrapper>
//                 }
//               />
//               <Route
//                 path="/exp2"
//                 element={
//                   <PageWrapper>
//                     <Exp2 />
//                   </PageWrapper>
//                 }
//               />
//               <Route
//                 path="/exp3"
//                 element={
//                   <PageWrapper>
//                     <Exp3 />
//                   </PageWrapper>
//                 }
//               />
//               <Route
//                 path="/exp4"
//                 element={
//                   <PageWrapper>
//                     <Exp4 />
//                   </PageWrapper>
//                 }
//               />
//               <Route
//                 path="/exp5"
//                 element={
//                   <PageWrapper>
//                     <Exp5 />
//                   </PageWrapper>
//                 }
//               />
//               <Route
//                 path="/pm"
//                 element={
//                   <PageWrapper>
//                     <ProjectManagement />
//                   </PageWrapper>
//                 }
//               />
//               <Route
//                 path="/timeline"
//                 element={
//                   <PageWrapper>
//                     <Timeline />
//                   </PageWrapper>
//                 }
//               />
//             </Routes>
//           </AnimatePresence>
//         </main>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";

import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Bio from "./pages/Bio";
import Exp1 from "./pages/Exp1";
import Exp2 from "./pages/Exp2";
import Exp3 from "./pages/Exp3";
import Exp4 from "./pages/Exp4";
import Exp5 from "./pages/Exp5";
import ProjectManagement from "./pages/ProjectManagement";
import Timeline from "./pages/Timeline";
import Work from "./pages/Work";
import TestArticle10172025 from "./pages/TestArticle10172025";

//Applications

//CoLab
import CoLabQ42025 from "./pages/CoLabQ42025";
import CoLabQ420251 from "./pages/CoLabQ420251";
import CoLabQ420252 from "./pages/CoLabQ420252";
import CoLabQ420253 from "./pages/CoLabQ420253";
import CoLabQ420254 from "./pages/CoLabQ420254";
import CoLabQ420255 from "./pages/CoLabQ420255";
import CoLabQ420256 from "./pages/CoLabQ420256";
import CoLabQ420257 from "./pages/CoLabQ420257";

// QuoQ22026x
import QuoQ220261 from "./pages/QuoQ220261";
import QuoQ220262 from "./pages/QuoQ220262";
import QuoQ220263 from "./pages/QuoQ220263";
import QuoQ220264 from "./pages/QuoQ220264";
import QuoQ220265 from "./pages/QuoQ220265";
import QuoQ220266 from "./pages/QuoQ220266";
import QuoQ220267 from "./pages/QuoQ220267";
import QuoQ220268 from "./pages/QuoQ220268";

// AbsorbQ22026x
import AbsorbQ220261 from "./pages/AbsorbQ220261";
import AbsorbQ220262 from "./pages/AbsorbQ220262";
import AbsorbQ220263 from "./pages/AbsorbQ220263";
import AbsorbQ220264 from "./pages/AbsorbQ220264";
import AbsorbQ220265 from "./pages/AbsorbQ220265";
import AbsorbQ220266 from "./pages/AbsorbQ220266";
import AbsorbQ220267 from "./pages/AbsorbQ220267";
import AbsorbQ220268 from "./pages/AbsorbQ220268";

// SpareQ22026x
import SpareQ220261 from "./pages/SpareQ220261";
import SpareQ220262 from "./pages/SpareQ220262";
import SpareQ220263 from "./pages/SpareQ220263";
import SpareQ220264 from "./pages/SpareQ220264";
import SpareQ220265 from "./pages/SpareQ220265";
import SpareQ220266 from "./pages/SpareQ220266";
import SpareQ220267 from "./pages/SpareQ220267";
import SpareQ220268 from "./pages/SpareQ220268";

// Assets
import background from "./assets/background.jpg";
import background2 from "./assets/background2.png";
import backgroundquo from "./assets/backgroundquo.png";

// ✅ Reusable transition wrapper
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    className="h-full w-full"
  >
    {children}
  </motion.div>
);

export default function App() {
  const location = useLocation();
  
  // Check if current route is a quo, absorb, or spare page
  const isQuoPage = location.pathname.toLowerCase().startsWith('/quoq220') || location.pathname.toLowerCase().startsWith('/absorbq220') || location.pathname.toLowerCase().startsWith('/spareq220');
  
  // Conditional background classes
  const backgroundClasses = isQuoPage 
    ? "bg-[url('./assets/backgroundquo.png')] sm:bg-[url('/src/assets/backgroundquo.png')] lg:bg-[url('/src/assets/backgroundquo.png')]"
    : "bg-[url('./assets/background2.png')] sm:bg-[url('/src/assets/background2.png')] lg:bg-[url('/src/assets/background.jpg')]";

  return (
    <div
      className={`
        relative
        w-full min-h-screen
        bg-fixed bg-cover bg-center
        ${backgroundClasses}
      `}
    >
      {/* ✅ Scroll to top on route change */}
      <ScrollToTop />
      
      {/* ✅ Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* ✅ Foreground content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              {/* Core routes */}
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/work" element={<PageWrapper><Work /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
              <Route path="/bio" element={<PageWrapper><Bio /></PageWrapper>} />

              {/* Experience routes */}
              <Route path="/exp1" element={<PageWrapper><Exp1 /></PageWrapper>} />
              <Route path="/exp2" element={<PageWrapper><Exp2 /></PageWrapper>} />
              <Route path="/exp3" element={<PageWrapper><Exp3 /></PageWrapper>} />
              <Route path="/exp4" element={<PageWrapper><Exp4 /></PageWrapper>} />
              <Route path="/exp5" element={<PageWrapper><Exp5 /></PageWrapper>} />

              {/* Project-specific pages */}
              <Route path="/pm" element={<PageWrapper><ProjectManagement /></PageWrapper>} />
              <Route path="/timeline" element={<PageWrapper><Timeline /></PageWrapper>} />

              {/* Articles */}
              <Route path="/testarticle10172025" element={<PageWrapper><TestArticle10172025 /></PageWrapper>} />

              {/* Applications */}

              {/* CoLab */}
              <Route path="/colabq42025" element={<PageWrapper><CoLabQ42025 /></PageWrapper>} />
              <Route path="/colabq420251" element={<PageWrapper><CoLabQ420251 /></PageWrapper>} />
              <Route path="/colabq420252" element={<PageWrapper><CoLabQ420252 /></PageWrapper>} />
              <Route path="/colabq420253" element={<PageWrapper><CoLabQ420253 /></PageWrapper>} />
              <Route path="/colabq420254" element={<PageWrapper><CoLabQ420254 /></PageWrapper>} />
              <Route path="/colabq420255" element={<PageWrapper><CoLabQ420255 /></PageWrapper>} />
              <Route path="/colabq420256" element={<PageWrapper><CoLabQ420256 /></PageWrapper>} />
              <Route path="/colabq420257" element={<PageWrapper><CoLabQ420257 /></PageWrapper>} />

              {/* QuoQ22026x */}
              <Route path="/quoq220261" element={<PageWrapper><QuoQ220261 /></PageWrapper>} />
              <Route path="/quoq220262" element={<PageWrapper><QuoQ220262 /></PageWrapper>} />
              <Route path="/quoq220263" element={<PageWrapper><QuoQ220263 /></PageWrapper>} />
              <Route path="/quoq220264" element={<PageWrapper><QuoQ220264 /></PageWrapper>} />
              <Route path="/quoq220265" element={<PageWrapper><QuoQ220265 /></PageWrapper>} />
              <Route path="/quoq220266" element={<PageWrapper><QuoQ220266 /></PageWrapper>} />
              <Route path="/quoq220267" element={<PageWrapper><QuoQ220267 /></PageWrapper>} />
              <Route path="/quoq220268" element={<PageWrapper><QuoQ220268 /></PageWrapper>} />

              {/* AbsorbQ22026x */}
              <Route path="/absorbq220261" element={<PageWrapper><AbsorbQ220261 /></PageWrapper>} />
              <Route path="/absorbq220262" element={<PageWrapper><AbsorbQ220262 /></PageWrapper>} />
              <Route path="/absorbq220263" element={<PageWrapper><AbsorbQ220263 /></PageWrapper>} />
              <Route path="/absorbq220264" element={<PageWrapper><AbsorbQ220264 /></PageWrapper>} />
              <Route path="/absorbq220265" element={<PageWrapper><AbsorbQ220265 /></PageWrapper>} />
              <Route path="/absorbq220266" element={<PageWrapper><AbsorbQ220266 /></PageWrapper>} />
              <Route path="/absorbq220267" element={<PageWrapper><AbsorbQ220267 /></PageWrapper>} />
              <Route path="/absorbq220268" element={<PageWrapper><AbsorbQ220268 /></PageWrapper>} />

              {/* SpareQ22026x */}
              <Route path="/spareq220261" element={<PageWrapper><SpareQ220261 /></PageWrapper>} />
              <Route path="/spareq220262" element={<PageWrapper><SpareQ220262 /></PageWrapper>} />
              <Route path="/spareq220263" element={<PageWrapper><SpareQ220263 /></PageWrapper>} />
              <Route path="/spareq220264" element={<PageWrapper><SpareQ220264 /></PageWrapper>} />
              <Route path="/spareq220265" element={<PageWrapper><SpareQ220265 /></PageWrapper>} />
              <Route path="/spareq220266" element={<PageWrapper><SpareQ220266 /></PageWrapper>} />
              <Route path="/spareq220267" element={<PageWrapper><SpareQ220267 /></PageWrapper>} />
              <Route path="/spareq220268" element={<PageWrapper><SpareQ220268 /></PageWrapper>} />

            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
