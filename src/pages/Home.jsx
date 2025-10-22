// import React from "react";
// import logo from "../assets/RM.png";
// import FullPageCarousel from "../components/FullPageCarousel";

// export default function Home() {
//   return (
//     <section id="home" className="p-10 text-center">
//       {/* put everything here! */}
//     </section>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/RM.png";
import FullPageCarousel from "../components/FullPageCarousel";
import GridHome from "../components/GridHome";

export default function Home() {
  // Animation variants for cards
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="flex flex-col justify-center sm:justify-start items-center text-center text-white px-6 h-screen"
    >
      {/* Animated Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        {/* Centered Image */}
        <motion.img
          src={logo}
          alt="Logo"
          className="w-5/8 max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Text Underneath */}
        <div className="">
          {/* <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Renner McCreath
          </motion.h1> */}

          <motion.p
            className="text-2xl md:text-4xl max-w-2xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            Delivering leading insights in the fields of project management, business analysis, and customer success.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
