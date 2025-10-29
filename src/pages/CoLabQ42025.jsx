import React from "react";
import { motion } from "framer-motion";
import ChevronNav from "../components/ChevronNav";

export default function CoLabQ42025() {
  return (
    <section
          id="project-management"
          className="relative min-h-screen flex flex-col justify-center items-center text-white px-4 py-10"
        >
            <motion.p
              className="
                text-4xl md:text-7xl max-w-2xl mx-auto font-semibold mb-1 opacity-90 pb-5
                text-[#c89116]/70
                drop-shadow-[0_0_12px_#c89116]
                transition-all duration-500 ease-out
                hover:text-[#c89116]/90 hover:scale-110 hover:drop-shadow-[0_0_20px_#c89116]
              "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              The Numbers
            </motion.p>
          <div className="max-w-4xl w-full text-center mb-8">
             
            {/* 📹 Loom Video Embed with fade-in animation */}
            <motion.div
              className="relative w-full pt-[56.25%]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <iframe
                src="https://www.loom.com/embed/4f809b7e16a14ce9af7680d0ff244f18?"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </motion.div>
          </div>
    
          {/* Chevron Navigation */}
          <ChevronNav prev="/exp2" next="/timeline" vertical />
        </section>
      );
}