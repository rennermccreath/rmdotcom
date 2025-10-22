import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from "lucide-react";

export default function ChevronNav({ prev, next, vertical = false }) {
  const navigate = useNavigate();
  const iconSize = window.innerWidth < 768 ? 36 : 28;

  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const handleNav = (target) => {
    if (!target) return;

    if (target.startsWith("http://") || target.startsWith("https://")) {
      window.open(target, "_blank");
      return;
    }

    if (target.startsWith("#")) {
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      return;
    }

    navigate(target);
  };

  return (
    <div
      className="fixed inset-0 flex justify-between items-center px-4 pointer-events-none z-[9999]"
    >
      {/* --- Mobile Bottom Right --- */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="absolute bottom-4 right-4 flex flex-row gap-4 md:hidden pointer-events-auto"
      >
        {prev && (
          <button
            onClick={() => handleNav(prev)}
            className="bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition
                       hover:scale-110 focus:scale-110 active:scale-105 outline-none"
          >
            {vertical ? <ChevronUp size={iconSize} /> : <ChevronLeft size={iconSize} />}
          </button>
        )}
        {next && (
          <button
            onClick={() => handleNav(next)}
            className="bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition
                       hover:scale-110 focus:scale-110 active:scale-105 outline-none"
          >
            {vertical ? <ChevronDown size={iconSize} /> : <ChevronRight size={iconSize} />}
          </button>
        )}
      </motion.div>

      {/* --- Desktop Left Chevron --- */}
      {prev && (
        <motion.button
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          onClick={() => handleNav(prev)}
          className="pointer-events-auto bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition
                     hidden md:block absolute left-4 top-1/2 -translate-y-1/2
                     hover:scale-110 focus:scale-110 active:scale-105 outline-none"
        >
          {vertical ? <ChevronUp size={iconSize} /> : <ChevronLeft size={iconSize} />}
        </motion.button>
      )}

      {/* --- Desktop Right Chevron --- */}
      {next && (
        <motion.button
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          onClick={() => handleNav(next)}
          className="pointer-events-auto bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition
                     hidden md:block absolute right-4 top-1/2 -translate-y-1/2
                     hover:scale-110 focus:scale-110 active:scale-105 outline-none"
        >
          {vertical ? <ChevronDown size={iconSize} /> : <ChevronRight size={iconSize} />}
        </motion.button>
      )}
    </div>
  );
}
