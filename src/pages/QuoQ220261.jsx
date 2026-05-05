import React from "react";
import { motion } from "framer-motion";
import ChevronNav from "../components/ChevronNav";

export default function QuoQ220261() {
  return (
    <section
          id="project-management"
          className="relative min-h-screen flex flex-col justify-center items-center text-white px-4 py-10"
        >
            <motion.p
              className="
                text-4xl md:text-7xl max-w-3xl mx-auto font-semibold mb-1 opacity-90 pb-5
                text-[#edfc47]/70
                drop-shadow-[0_0_12px_#edfc47]
                transition-all duration-500 ease-out
                hover:text-[#edfc47]/90 hover:scale-110 hover:drop-shadow-[0_0_20px_#edfc47]
              "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              Renner McCreath 🤝 Quo
            </motion.p>
          <div className="max-w-4xl w-full text-center mb-8">

            {/* 📹 Loom Video Embed with fade-in animation */}
            <motion.div
              className="relative w-1/2 mx-auto pt-[25.25%]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <iframe
                src="https://www.loom.com/embed/4f809b7e16a14ce9af7680d0ff244f18?hideEmbedTopBar=true&hide_share=true&hide_title=true&hide_owner=true"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </motion.div>
          </div>

          <motion.p
              className="
                text-4xl md:text-5xl max-w-8xl mx-auto font-semibold mb-1 opacity-90 pb-5 text-center
                text-[#edfc47]/70
                drop-shadow-[0_0_12px_#edfc47]
                transition-all duration-500 ease-out
                hover:text-[#edfc47]/90 hover:scale-110 hover:drop-shadow-[0_0_20px_#edfc47]
              "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              Candidate Presentation - Customer Onboarding Manager
            </motion.p>

          {/* Chevron Navigation */}
          <ChevronNav next="/quoq220262" />
        </section>
      );
}
