import React from "react";
import { motion } from "framer-motion";
import may2026 from "../assets/may2026.jpg";

export default function Exp5() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
      <h1 className="text-4xl font-bold mb-4 text-center">Nicolas' cousin arriving May 2026!</h1>
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
