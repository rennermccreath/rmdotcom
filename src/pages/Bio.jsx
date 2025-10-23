import React from "react";
import { motion } from "framer-motion";
import ChevronNav from "../components/ChevronNav";

export default function Bio() {
  const gridItems = [
    { id: 1, number: "12+", content: (<div><h2 className="text-lg sm:text-3xl font-semibold mb-1">Total Years of Professional Experience</h2><ul className="text-xl text-white/70 list-[square] list-inside"><li>Viscount Pierce | 2024-Present</li><li>CI Global Asset Management | 2012-2024</li></ul></div>) },
    { id: 2, number: "11", content: (<div><h2 className="text-lg sm:text-3xl font-semibold mb-1">Customer Success and Business Analysis Experience</h2><ul className="text-md sm:text-lg text-white/70 list-[square] list-inside"><li>Developing strong relationship management and account expansion processes to establish long term partnerships</li><li>Applying strategic thinking and analytical expertise to identify opportunities and shape business direction</li><li>A solution-oriented leader, aligning client needs with impactful outcomes</li></ul></div>) },
    { id: 3, number: "8", content: (<div><h2 className="text-lg sm:text-3xl font-semibold mb-1">Project Management Experience</h2><ul className="text-lg text-white/70 list-[square] list-inside"><li>Fostering strong stakeholder engagement and transparent communication to support informed and timely decision-making</li><li>Applying Agile methodologies and milestone-driven planning to bring structure, clarity, and momentum to complex projects</li></ul></div>) },
    { id: 4, number: "2+", content: (<div><h2 className="text-lg sm:text-3xl font-semibold mb-1">Management Consulting Experience</h2><ul className="text-lg text-white/70 list-[square] list-inside"><li>Leading strategic, client-centric engagements that redefined business models and delivered sustainable value across diverse industries</li><li>Bringing an entrepreneurial drive mindset to initiate new service streams and drive growth-oriented consulting initiatives</li></ul></div>) },
    { id: 5, number: "3+", content: (<div><h2 className="text-lg sm:text-3xl font-semibold mb-1">Professional Accreditations</h2><ul className="text-lg text-white/70 list-[square] list-inside"><li>Project Management Professional (PMP)</li><li>Software Engineering (MERN Stack)</li><li>Digital Product Management</li></ul></div>) },
    { id: 6, number: "See More...", content: (<div><h2 className="text-lg sm:text-3xl font-semibold mb-1">Click or press the right arrow for more</h2></div>) },
  ];

  return (
    <section
      id="bio"
      className="relative min-h-screen flex flex-col items-center text-white px-2 py-8"
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
      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[4px]">
        {gridItems.map((item) => (
          <div
            key={item.id}
            className="relative bg-black/60 border border-white/10 p-6 h-64 sm:h-72 lg:h-80 flex flex-col justify-start group overflow-hidden"
          >
            {/* Glowing Gold Number — Bottom Right */}
            <span
              className="absolute bottom-2 right-2 
              text-8xl sm:text-8xl lg:text-9xl  /* ⬅ bigger on mobile too */
              font-bold select-none leading-none
              text-[#c89116]/40
              transition-all duration-500 ease-out
              group-hover:text-[#c89116]/90 group-hover:scale-110
              group-hover:drop-shadow-[0_0_20px_#c89116]"
            >
              {item.number}
            </span>

            {/* Flexible Content */}
            <div className="relative z-10">{item.content}</div>
          </div>
        ))}
      </div>

      {/* Chevron Navigation */}
      <ChevronNav prev="/about" next="/exp1" />
    </section>
  );
}
