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
import CoLabQ22026 from "./pages/CoLabQ22026";
import CoLabQ220261 from "./pages/CoLabQ220261";
import CoLabQ220262 from "./pages/CoLabQ220262";
import CoLabQ220263 from "./pages/CoLabQ220263";
import CoLabQ220264 from "./pages/CoLabQ220264";
import CoLabQ220265 from "./pages/CoLabQ220265";
import CoLabQ220266 from "./pages/CoLabQ220266";
import CoLabQ220267 from "./pages/CoLabQ220267";

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

// ClioQ22026x
import ClioQ220261 from "./pages/ClioQ220261";
import ClioQ220262 from "./pages/ClioQ220262";
import ClioQ220263 from "./pages/ClioQ220263";
import ClioQ220264 from "./pages/ClioQ220264";
import ClioQ220265 from "./pages/ClioQ220265";
import ClioQ220266 from "./pages/ClioQ220266";
import ClioQ220267 from "./pages/ClioQ220267";
import ClioQ220268 from "./pages/ClioQ220268";

// HootsuiteQ22026x
import HootsuiteQ220261 from "./pages/HootsuiteQ220261";
import HootsuiteQ220262 from "./pages/HootsuiteQ220262";
import HootsuiteQ220263 from "./pages/HootsuiteQ220263";
import HootsuiteQ220264 from "./pages/HootsuiteQ220264";
import HootsuiteQ220265 from "./pages/HootsuiteQ220265";
import HootsuiteQ220266 from "./pages/HootsuiteQ220266";
import HootsuiteQ220267 from "./pages/HootsuiteQ220267";
import HootsuiteQ220268 from "./pages/HootsuiteQ220268";

// Assets
import background from "./assets/background.jpg";
import background2 from "./assets/background2.png";
import backgroundquo from "./assets/backgroundquo.png";
import backgroundabsorb from "./assets/absorb.png";
import backgroundspare from "./assets/spare.png";
import backgroundclio from "./assets/clio.png";
import backgroundcolab from "./assets/colab.png";
import backgroundhootsuite from "./assets/hootsuite.png";

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
  
  // Check if current route is an absorb page
  const isAbsorbPage = location.pathname.toLowerCase().startsWith('/absorbq220');
  
  // Check if current route is a spare page
  const isSparePage = location.pathname.toLowerCase().startsWith('/spareq220');
  
  // Check if current route is a clio page
  const isClioPage = location.pathname.toLowerCase().startsWith('/clioq220');
  
  // Check if current route is a colab page
  const isColabPage = location.pathname.toLowerCase().startsWith('/colabq220');
  
  // Check if current route is a hootsuite page
  const isHootsuitePage = location.pathname.toLowerCase().startsWith('/hootsuiteq220');
  
  // Check if current route is a quo page
  const isQuoPage = location.pathname.toLowerCase().startsWith('/quoq220');
  
  // Conditional background classes
  let backgroundClasses;
  if (isAbsorbPage) {
    backgroundClasses = "bg-[url('./assets/absorb.png')] sm:bg-[url('/src/assets/absorb.png')] lg:bg-[url('./assets/absorb.png')]";
  } else if (isSparePage) {
    backgroundClasses = "bg-[url('./assets/spare.png')] sm:bg-[url('/src/assets/spare.png')] lg:bg-[url('./assets/spare.png')]";
  } else if (isClioPage) {
    backgroundClasses = "bg-[url('./assets/clio.png')] sm:bg-[url('/src/assets/clio.png')] lg:bg-[url('./assets/clio.png')]";
  } else if (isColabPage) {
    backgroundClasses = "bg-[url('./assets/colab.png')] sm:bg-[url('/src/assets/colab.png')] lg:bg-[url('./assets/colab.png')]";
  } else if (isHootsuitePage) {
    backgroundClasses = "bg-[url('./assets/hootsuite.png')] sm:bg-[url('/src/assets/hootsuite.png')] lg:bg-[url('./assets/hootsuite.png')]";
  } else if (isQuoPage) {
    backgroundClasses = "bg-[url('./assets/backgroundquo.png')] sm:bg-[url('/src/assets/backgroundquo.png')] lg:bg-[url('/src/assets/backgroundquo.png')]";
  } else {
    backgroundClasses = "bg-[url('./assets/background2.png')] sm:bg-[url('/src/assets/background2.png')] lg:bg-[url('./assets/background.jpg')]";
  }

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
              <Route path="/colabq22026" element={<PageWrapper><CoLabQ22026 /></PageWrapper>} />
              <Route path="/colabq220261" element={<PageWrapper><CoLabQ220261 /></PageWrapper>} />
              <Route path="/colabq220262" element={<PageWrapper><CoLabQ220262 /></PageWrapper>} />
              <Route path="/colabq220263" element={<PageWrapper><CoLabQ220263 /></PageWrapper>} />
              <Route path="/colabq220264" element={<PageWrapper><CoLabQ220264 /></PageWrapper>} />
              <Route path="/colabq220265" element={<PageWrapper><CoLabQ220265 /></PageWrapper>} />
              <Route path="/colabq220266" element={<PageWrapper><CoLabQ220266 /></PageWrapper>} />
              <Route path="/colabq220267" element={<PageWrapper><CoLabQ220267 /></PageWrapper>} />

              {/* QuoQ22026x */}
              <Route path="/quoq220261" element={<PageWrapper><QuoQ220261 /></PageWrapper>} />
              <Route path="/quoq220262" element={<PageWrapper><QuoQ220262 /></PageWrapper>} />
              <Route path="/quoq220263" element={<PageWrapper><QuoQ220263 /></PageWrapper>} />
              <Route path="/quoq220264" element={<PageWrapper><QuoQ220264 /></PageWrapper>} />
              <Route path="/quoq220265" element={<PageWrapper><QuoQ220265 /></PageWrapper>} />
              <Route path="/quoq220266" element={<PageWrapper><QuoQ220266 /></PageWrapper>} />
              <Route path="/quoq220267" element={<PageWrapper><QuoQ220267 /></PageWrapper>} />
              <Route path="/quoq220268" element={<PageWrapper><QuoQ220268 /></PageWrapper>} />

              {/* ClioQ22026x */}
              <Route path="/clioq220261" element={<PageWrapper><ClioQ220261 /></PageWrapper>} />
              <Route path="/clioq220262" element={<PageWrapper><ClioQ220262 /></PageWrapper>} />
              <Route path="/clioq220263" element={<PageWrapper><ClioQ220263 /></PageWrapper>} />
              <Route path="/clioq220264" element={<PageWrapper><ClioQ220264 /></PageWrapper>} />
              <Route path="/clioq220265" element={<PageWrapper><ClioQ220265 /></PageWrapper>} />
              <Route path="/clioq220266" element={<PageWrapper><ClioQ220266 /></PageWrapper>} />
              <Route path="/clioq220267" element={<PageWrapper><ClioQ220267 /></PageWrapper>} />
              <Route path="/clioq220268" element={<PageWrapper><ClioQ220268 /></PageWrapper>} />

              {/* HootsuiteQ22026x */}
              <Route path="/hootsuiteq220261" element={<PageWrapper><HootsuiteQ220261 /></PageWrapper>} />
              <Route path="/hootsuiteq220262" element={<PageWrapper><HootsuiteQ220262 /></PageWrapper>} />
              <Route path="/hootsuiteq220263" element={<PageWrapper><HootsuiteQ220263 /></PageWrapper>} />
              <Route path="/hootsuiteq220264" element={<PageWrapper><HootsuiteQ220264 /></PageWrapper>} />
              <Route path="/hootsuiteq220265" element={<PageWrapper><HootsuiteQ220265 /></PageWrapper>} />
              <Route path="/hootsuiteq220266" element={<PageWrapper><HootsuiteQ220266 /></PageWrapper>} />
              <Route path="/hootsuiteq220267" element={<PageWrapper><HootsuiteQ220267 /></PageWrapper>} />
              <Route path="/hootsuiteq220268" element={<PageWrapper><HootsuiteQ220268 /></PageWrapper>} />

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
