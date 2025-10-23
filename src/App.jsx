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

// Assets
import background from "./assets/background.jpg";
import background2 from "./assets/background2.png";

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

  return (
    <div
      className="
        relative
        w-full min-h-screen
        bg-fixed bg-cover bg-center
        bg-[url('./assets/background2.png')]
        sm:bg-[url('/src/assets/background2.png')]
        lg:bg-[url('/src/assets/background.jpg')]
      "
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

            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
