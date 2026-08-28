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
import DigitalApplication from "./pages/DigitalApplication";
import { legacyApplicationRoutes } from "./data/applications";

//Applications

//CoLab
import CoLabQ32026 from "./pages/CoLabQ32026";
import CoLabQ320261 from "./pages/CoLabQ320261";
import CoLabQ320262 from "./pages/CoLabQ320262";
import CoLabQ320263 from "./pages/CoLabQ320263";
import CoLabQ320264 from "./pages/CoLabQ320264";
import CoLabQ320265 from "./pages/CoLabQ320265";
import CoLabQ320266 from "./pages/CoLabQ320266";
import CoLabQ320267 from "./pages/CoLabQ320267";

// QuoQ32026x
import QuoQ320261 from "./pages/QuoQ320261";
import QuoQ320262 from "./pages/QuoQ320262";
import QuoQ320263 from "./pages/QuoQ320263";
import QuoQ320264 from "./pages/QuoQ320264";
import QuoQ320265 from "./pages/QuoQ320265";
import QuoQ320266 from "./pages/QuoQ320266";
import QuoQ320267 from "./pages/QuoQ320267";
import QuoQ320268 from "./pages/QuoQ320268";

// LearnwiseQ32026x
import LearnwiseQ320261 from "./pages/LearnwiseQ320261";
import LearnwiseQ320262 from "./pages/LearnwiseQ320262";
import LearnwiseQ320263 from "./pages/LearnwiseQ320263";
import LearnwiseQ320264 from "./pages/LearnwiseQ320264";
import LearnwiseQ320265 from "./pages/LearnwiseQ320265";
import LearnwiseQ320266 from "./pages/LearnwiseQ320266";
import LearnwiseQ320267 from "./pages/LearnwiseQ320267";
import LearnwiseQ320268 from "./pages/LearnwiseQ320268";

// AbsorbQ32026x
import AbsorbQ320261 from "./pages/AbsorbQ320261";
import AbsorbQ320262 from "./pages/AbsorbQ320262";
import AbsorbQ320263 from "./pages/AbsorbQ320263";
import AbsorbQ320264 from "./pages/AbsorbQ320264";
import AbsorbQ320265 from "./pages/AbsorbQ320265";
import AbsorbQ320266 from "./pages/AbsorbQ320266";
import AbsorbQ320267 from "./pages/AbsorbQ320267";
import AbsorbQ320268 from "./pages/AbsorbQ320268";

// SpareQ32026x
import SpareQ320261 from "./pages/SpareQ320261";
import SpareQ320262 from "./pages/SpareQ320262";
import SpareQ320263 from "./pages/SpareQ320263";
import SpareQ320264 from "./pages/SpareQ320264";
import SpareQ320265 from "./pages/SpareQ320265";
import SpareQ320266 from "./pages/SpareQ320266";
import SpareQ320267 from "./pages/SpareQ320267";
import SpareQ320268 from "./pages/SpareQ320268";

// ClioQ32026x
import ClioQ320261 from "./pages/ClioQ320261";
import ClioQ320262 from "./pages/ClioQ320262";
import ClioQ320263 from "./pages/ClioQ320263";
import ClioQ320264 from "./pages/ClioQ320264";
import ClioQ320265 from "./pages/ClioQ320265";
import ClioQ320266 from "./pages/ClioQ320266";
import ClioQ320267 from "./pages/ClioQ320267";
import ClioQ320268 from "./pages/ClioQ320268";

// HootsuiteQ32026x
import HootsuiteQ320261 from "./pages/HootsuiteQ320261";
import HootsuiteQ320262 from "./pages/HootsuiteQ320262";
import HootsuiteQ320263 from "./pages/HootsuiteQ320263";
import HootsuiteQ320264 from "./pages/HootsuiteQ320264";
import HootsuiteQ320265 from "./pages/HootsuiteQ320265";
import HootsuiteQ320266 from "./pages/HootsuiteQ320266";
import HootsuiteQ320267 from "./pages/HootsuiteQ320267";
import HootsuiteQ320268 from "./pages/HootsuiteQ320268";

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
  const isAbsorbPage = location.pathname.toLowerCase().startsWith('/absorbq320');
  
  // Check if current route is a spare page
  const isSparePage = location.pathname.toLowerCase().startsWith('/spareq320');
  
  // Check if current route is a clio page
  const isClioPage = location.pathname.toLowerCase().startsWith('/clioq320');
  
  // Check if current route is a colab page
  const isColabPage = location.pathname.toLowerCase().startsWith('/colabq320');
  
  // Check if current route is a hootsuite page
  const isHootsuitePage = location.pathname.toLowerCase().startsWith('/hootsuiteq320');
  
  // Check if current route is a quo page
  const isQuoPage = location.pathname.toLowerCase().startsWith('/quoq320');
  
  // Check if current route is a caribou page
  const isCaribouPage =
    location.pathname.toLowerCase().startsWith('/caribouq320') ||
    location.pathname.toLowerCase().startsWith('/applications/caribou-');

  // Check if current route is a learnwise page
  const isLearnwisePage = location.pathname.toLowerCase().startsWith('/learnwiseq320');
  
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
  } else if (isCaribouPage) {
    backgroundClasses = "bg-[url('./assets/caribou.png')] sm:bg-[url('/src/assets/caribou.png')] lg:bg-[url('/src/assets/caribou.png')]";
  } else if (isLearnwisePage) {
    backgroundClasses = "bg-[url('./assets/learnwise.png')] sm:bg-[url('/src/assets/learnwise.png')] lg:bg-[url('/src/assets/learnwise.png')]";
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
              <Route path="/colabQ32026" element={<PageWrapper><CoLabQ32026 /></PageWrapper>} />
              <Route path="/colabQ320261" element={<PageWrapper><CoLabQ320261 /></PageWrapper>} />
              <Route path="/colabQ320262" element={<PageWrapper><CoLabQ320262 /></PageWrapper>} />
              <Route path="/colabQ320263" element={<PageWrapper><CoLabQ320263 /></PageWrapper>} />
              <Route path="/colabQ320264" element={<PageWrapper><CoLabQ320264 /></PageWrapper>} />
              <Route path="/colabQ320265" element={<PageWrapper><CoLabQ320265 /></PageWrapper>} />
              <Route path="/colabQ320266" element={<PageWrapper><CoLabQ320266 /></PageWrapper>} />
              <Route path="/colabQ320267" element={<PageWrapper><CoLabQ320267 /></PageWrapper>} />

              {/* QuoQ32026x */}
              <Route path="/quoQ320261" element={<PageWrapper><QuoQ320261 /></PageWrapper>} />
              <Route path="/quoQ320262" element={<PageWrapper><QuoQ320262 /></PageWrapper>} />
              <Route path="/quoQ320263" element={<PageWrapper><QuoQ320263 /></PageWrapper>} />
              <Route path="/quoQ320264" element={<PageWrapper><QuoQ320264 /></PageWrapper>} />
              <Route path="/quoQ320265" element={<PageWrapper><QuoQ320265 /></PageWrapper>} />
              <Route path="/quoQ320266" element={<PageWrapper><QuoQ320266 /></PageWrapper>} />
              <Route path="/quoQ320267" element={<PageWrapper><QuoQ320267 /></PageWrapper>} />
              <Route path="/quoQ320268" element={<PageWrapper><QuoQ320268 /></PageWrapper>} />

              {/* Data-driven applications */}
              <Route path="/applications/:slug" element={<PageWrapper><DigitalApplication /></PageWrapper>} />
              <Route path="/applications/:slug/:section" element={<PageWrapper><DigitalApplication /></PageWrapper>} />
              {Object.entries(legacyApplicationRoutes).map(([path, target]) => (
                <Route
                  key={path}
                  path={path}
                  element={
                    <PageWrapper>
                      <DigitalApplication legacySlug={target.slug} legacySection={target.section} />
                    </PageWrapper>
                  }
                />
              ))}

              {/* LearnwiseQ32026x */}
              <Route path="/learnwiseQ320261" element={<PageWrapper><LearnwiseQ320261 /></PageWrapper>} />
              <Route path="/learnwiseQ320262" element={<PageWrapper><LearnwiseQ320262 /></PageWrapper>} />
              <Route path="/learnwiseQ320263" element={<PageWrapper><LearnwiseQ320263 /></PageWrapper>} />
              <Route path="/learnwiseQ320264" element={<PageWrapper><LearnwiseQ320264 /></PageWrapper>} />
              <Route path="/learnwiseQ320265" element={<PageWrapper><LearnwiseQ320265 /></PageWrapper>} />
              <Route path="/learnwiseQ320266" element={<PageWrapper><LearnwiseQ320266 /></PageWrapper>} />
              <Route path="/learnwiseQ320267" element={<PageWrapper><LearnwiseQ320267 /></PageWrapper>} />
              <Route path="/learnwiseQ320268" element={<PageWrapper><LearnwiseQ320268 /></PageWrapper>} />

              {/* ClioQ32026x */}
              <Route path="/clioQ320261" element={<PageWrapper><ClioQ320261 /></PageWrapper>} />
              <Route path="/clioQ320262" element={<PageWrapper><ClioQ320262 /></PageWrapper>} />
              <Route path="/clioQ320263" element={<PageWrapper><ClioQ320263 /></PageWrapper>} />
              <Route path="/clioQ320264" element={<PageWrapper><ClioQ320264 /></PageWrapper>} />
              <Route path="/clioQ320265" element={<PageWrapper><ClioQ320265 /></PageWrapper>} />
              <Route path="/clioQ320266" element={<PageWrapper><ClioQ320266 /></PageWrapper>} />
              <Route path="/clioQ320267" element={<PageWrapper><ClioQ320267 /></PageWrapper>} />
              <Route path="/clioQ320268" element={<PageWrapper><ClioQ320268 /></PageWrapper>} />

              {/* HootsuiteQ32026x */}
              <Route path="/hootsuiteQ320261" element={<PageWrapper><HootsuiteQ320261 /></PageWrapper>} />
              <Route path="/hootsuiteQ320262" element={<PageWrapper><HootsuiteQ320262 /></PageWrapper>} />
              <Route path="/hootsuiteQ320263" element={<PageWrapper><HootsuiteQ320263 /></PageWrapper>} />
              <Route path="/hootsuiteQ320264" element={<PageWrapper><HootsuiteQ320264 /></PageWrapper>} />
              <Route path="/hootsuiteQ320265" element={<PageWrapper><HootsuiteQ320265 /></PageWrapper>} />
              <Route path="/hootsuiteQ320266" element={<PageWrapper><HootsuiteQ320266 /></PageWrapper>} />
              <Route path="/hootsuiteQ320267" element={<PageWrapper><HootsuiteQ320267 /></PageWrapper>} />
              <Route path="/hootsuiteQ320268" element={<PageWrapper><HootsuiteQ320268 /></PageWrapper>} />

              {/* AbsorbQ32026x */}
              <Route path="/absorbQ320261" element={<PageWrapper><AbsorbQ320261 /></PageWrapper>} />
              <Route path="/absorbQ320262" element={<PageWrapper><AbsorbQ320262 /></PageWrapper>} />
              <Route path="/absorbQ320263" element={<PageWrapper><AbsorbQ320263 /></PageWrapper>} />
              <Route path="/absorbQ320264" element={<PageWrapper><AbsorbQ320264 /></PageWrapper>} />
              <Route path="/absorbQ320265" element={<PageWrapper><AbsorbQ320265 /></PageWrapper>} />
              <Route path="/absorbQ320266" element={<PageWrapper><AbsorbQ320266 /></PageWrapper>} />
              <Route path="/absorbQ320267" element={<PageWrapper><AbsorbQ320267 /></PageWrapper>} />
              <Route path="/absorbQ320268" element={<PageWrapper><AbsorbQ320268 /></PageWrapper>} />

              {/* SpareQ32026x */}
              <Route path="/spareQ320261" element={<PageWrapper><SpareQ320261 /></PageWrapper>} />
              <Route path="/spareQ320262" element={<PageWrapper><SpareQ320262 /></PageWrapper>} />
              <Route path="/spareQ320263" element={<PageWrapper><SpareQ320263 /></PageWrapper>} />
              <Route path="/spareQ320264" element={<PageWrapper><SpareQ320264 /></PageWrapper>} />
              <Route path="/spareQ320265" element={<PageWrapper><SpareQ320265 /></PageWrapper>} />
              <Route path="/spareQ320266" element={<PageWrapper><SpareQ320266 /></PageWrapper>} />
              <Route path="/spareQ320267" element={<PageWrapper><SpareQ320267 /></PageWrapper>} />
              <Route path="/spareQ320268" element={<PageWrapper><SpareQ320268 /></PageWrapper>} />

            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
