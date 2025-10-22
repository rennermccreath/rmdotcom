import React, { useState } from "react";
import { motion } from "framer-motion";
import ChevronNav from "../components/ChevronNav";

export default function Exp1() {
  const [activeItem, setActiveItem] = useState(null);

  const timelineItems = [
    { id: 1, year: "Management Consultant - Viscount Pierce", content: <div><h3 className="text-2xl font-bold mb-2">Start of Career</h3><p className="text-white/80">This is where it all began.</p></div> },
    { id: 2, year: "CI Global Asset Management - Sr. Business Analyst and Project Manager", content: <div><h3 className="text-2xl font-bold mb-2">Key Milestone</h3><p className="text-white/80">A major turning point in my professional journey.</p></div> },
    { id: 3, year: "CI Global Asset Management - Business Analyst", content: <div><h3 className="text-2xl font-bold mb-2">Leadership</h3><p className="text-white/80">Stepping into leadership roles.</p></div> },
    { id: 4, year: "CI Global Asset Management - Client Services Representative", content: <div><h3 className="text-2xl font-bold mb-2">Major Project</h3><p className="text-white/80">Successfully delivering large initiatives.</p></div> },
  ];

  const activeContent = timelineItems.find((item) => item.id === activeItem)?.content;

  return (
    <section
      id="experience-timeline"
      className="relative min-h-screen w-full text-white px-4 py-10"
    >
      <ChevronNav prev="/timeline"/>
            <motion.p
        className="
          text-4xl md:text-7xl max-w-2xl text-center mx-auto font-semibold mb-1 opacity-90 p-5
          text-[#c89116]/70
          drop-shadow-[0_0_12px_#c89116]
          transition-all duration-500 ease-out
          hover:text-[#c89116]/90 hover:scale-110 hover:drop-shadow-[0_0_20px_#c89116]
        "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
      >
        Experience Summary
      </motion.p>
      {/* Desktop / Tablet layout */}
      <div className="hidden md:grid grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* LEFT COLUMN - Timeline Squares */}
        <div className="flex flex-col items-center gap-6">
          {timelineItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`
                relative bg-black/60 border border-white/10 
                h-32 w-96 flex flex-col justify-center items-center cursor-pointer
                text-[#c89116]/80 drop-shadow-[0_0_12px_#c89116]
                transition-all duration-500 ease-out
                hover:text-[#c89116]/90 hover:drop-shadow-[0_0_20px_#c89116] hover:scale-105
                animate-[gold-pulse_4s_ease-in-out_infinite]
                ${activeItem === item.id ? "scale-110 drop-shadow-[0_0_25px_#c89116]" : ""}
              `}
            >
              <span className="text-3xl font-bold text-center select-none pointer-events-none">
                {item.year}
              </span>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN - Timeline Content */}
        <div className="flex flex-col justify-center p-6 border-l border-[#c89116]/40 min-h-[400px] md:sticky md:top-24 self-start">
          {activeContent ? (
            <motion.div
              key={activeItem}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-black/60 border border-white/10 p-8 shadow-lg drop-shadow-[0_0_12px_#c89116]"
            >
              {activeContent}
            </motion.div>
          ) : (
            <div className="text-white/50 italic">
              Select a year from the timeline to see details.
            </div>
          )}
        </div>
      </div>

      {/* Mobile Layout — same as original timeline */}
      <div className="md:hidden flex flex-col items-center gap-6 pt-6">
        {timelineItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className="
              relative bg-black/60 border border-white/10 
              h-32 w-64 flex flex-col justify-center items-center cursor-pointer
              text-[#c89116]/80 drop-shadow-[0_0_12px_#c89116]
              transition-all duration-500 ease-out
              hover:text-[#c89116]/90 hover:drop-shadow-[0_0_20px_#c89116] hover:scale-105
              animate-[gold-pulse_4s_ease-in-out_infinite]
            "
          >
            <span className="text-3xl font-bold text-center select-none pointer-events-none">
              {item.year}
            </span>
          </div>
        ))}
      </div>

      {/* Mobile Popup Modal */}
      {activeItem && (
        <div
          onClick={() => setActiveItem(null)}
          className="md:hidden fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-black/80 border border-white/10 p-8 max-w-2xl w-full shadow-lg text-white"
          >
            {activeContent}
            <button
              onClick={() => setActiveItem(null)}
              className="mt-6 px-4 py-2 bg-[#c89116] text-black font-semibold hover:bg-[#e5a92e] transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

