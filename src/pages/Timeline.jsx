// src/pages/Timeline.jsx
import React from "react";
import { motion } from "framer-motion";
import ChevronNav from "../components/ChevronNav";
import InteractiveTimeline from "../components/InteractiveTimeline";

export default function Timeline() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center text-white p-2 md:p-10"
      style={{ backgroundImage: "url(/src/assets/slide1.jpg)" }}
    >
      <ChevronNav prev="/bio" next="/exp1" />

      <motion.p
  className="
    text-4xl md:text-7xl max-w-2xl mx-auto font-semibold mb-1 opacity-90 p-5
    text-[#c89116]/70
    drop-shadow-[0_0_12px_#c89116]
    transition-all duration-500 ease-out
    hover:text-[#c89116]/90 hover:scale-110 hover:drop-shadow-[0_0_20px_#c89116]
  "
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
>
  Career Timeline
</motion.p>
      <div className="w-[90vw] max-w-6xl">
        <InteractiveTimeline />
      </div>
    </div>
  );
}
