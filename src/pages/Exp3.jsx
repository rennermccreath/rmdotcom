import React from "react";
import { motion } from "framer-motion";
import may2026 from "../assets/may2026.jpg";

export default function Exp3() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <h2 className="text-4xl font-bold mb-4">Get the clipboard ready...</h2>
      <h2 className="text-4xl font-bold mb-4 text-center">Assistant Coach/Uncle Aman reports for duty starting May 2026!</h2>
      <motion.img
          src={may2026}
          alt="Logo"
          className="w-5/8 max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
    </div>
    
  );
}
