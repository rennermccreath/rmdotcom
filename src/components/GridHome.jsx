import React from "react";
import { motion } from "framer-motion";
import FullPageCarousel from "./FullPageCarousel";

export default function GridHome() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
      {/* === Row 1 === */}
      <motion.div
        className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg text-white"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">Welcome</h2>
        <p className="text-lg">
          This section can introduce your brand, your story, or a featured
          project. The translucent background lets your parallax image show
          through beautifully.
        </p>
      </motion.div>

      <motion.div
        className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg text-white"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">Highlights</h2>
        <p className="text-lg">
          Use this area for recent news, product releases, or calls to action.
        </p>
      </motion.div>

      {/* === Row 2 (Carousel) === */}
      <motion.div
        className="col-span-1 md:col-span-2 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <FullPageCarousel />
      </motion.div>

      {/* === Row 3 === */}
      <motion.div
        className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg text-white"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <p className="text-lg">
          Showcase key projects, clients, or results. You can even add images or
          small carousels here.
        </p>
      </motion.div>

      <motion.div
        className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg text-white"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">Connect</h2>
        <p className="text-lg">
          Provide links to your contact page, social media, or newsletter
          signup.
        </p>
      </motion.div>
    </div>
  );
}
