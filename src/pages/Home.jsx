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
import { Link } from "react-router-dom";
import logo from "../assets/Isolated black stag RM logo (1).png";

export default function Home() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100svh-5rem)] items-center justify-center px-6 py-12 sm:px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex w-full max-w-4xl flex-col items-center text-center"
      >
        <motion.img
          src={logo}
          alt="RM stag logo"
          className="brand-logo mb-7 h-56 w-56 object-contain sm:h-72 sm:w-72 md:h-80 md:w-80"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <motion.h1
          className="mb-5 text-4xl font-medium leading-tight text-[var(--brand-ivory)] sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          Renner McCreath
        </motion.h1>
        <motion.p
          className="max-w-3xl text-lg leading-relaxed sm:text-xl md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: "easeOut" }}
        >
          Helping teams improve customer experiences, simplify operations, and deliver projects.
        </motion.p>
        <motion.div
          className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <Link to="/work" className="site-cta site-cta-primary">
            View my work
          </Link>
          <a href="mailto:renner@rennermccreath.com" className="site-cta site-cta-secondary">
            Get in touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
