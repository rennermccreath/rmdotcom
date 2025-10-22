import React from "react";
import { motion } from "framer-motion";
import ChevronNav from "../components/ChevronNav";

export default function ProjectManagement() {
  return (
    <section
      id="project-management"
      className="relative min-h-screen flex flex-col justify-center items-center text-white px-4 py-10"
    >
      <div className="max-w-4xl w-full text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Project Management</h1>
        <p className="text-lg text-white/80 mb-8">
          A quick walkthrough of our project management approach.
        </p>

        {/* 📹 Loom Video Embed with fade-in animation */}
        <motion.div
          className="relative w-full pt-[56.25%]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <iframe
            src="https://www.loom.com/embed/4f809b7e16a14ce9af7680d0ff244f18?autoplay=1&muted=1"
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
