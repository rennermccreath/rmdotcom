// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import ChevronNav from "../components/ChevronNav";

// export default function Exp1() {
//   const [activeItem, setActiveItem] = useState(null);

//   const timelineItems = [
//     { id: 1, year: "Management Consultant - Viscount Pierce", content: <div><h3 className="text-3xl white/80 font-bold mb-2 text-center">Management Consultant | Viscount Pierce</h3><h3 className="text-2xl font-bold mb-2 text-center text-[#c89116]/90">2024-Present</h3><p className="text-2xl white/80 py-5">I work with enterprise clients across the tech and finance sectors to help navigate complex challenges, create maintainable operational strategies, and scale with confidence. Blending strategy, data, and execution, my focus is empowering clients to establish, emerge, and endure - the three pillars of Viscount Pierce.</p><ul className="text-xl text-[#c89116]/90 list-[square] list-inside"><li>Developing strong relationship management and account expansion processes to establish long term partnerships</li><li>Applying strategic thinking and analytical expertise to identify opportunities and shape business direction</li><li>A solution-oriented leader, aligning client needs with impactful outcomes</li></ul></div> },
//     { id: 2, year: "CI Global Asset Management - Sr. Business Analyst and Project Manager", content: <div><h3 className="text-3xl white/80 font-bold mb-2 text-center">Sr. Business Analyst and Project Manager | CI Global Asset Management</h3><h3 className="text-2xl font-bold mb-2 text-center text-[#c89116]/90">2017-2024</h3><p className="text-2xl white/80 py-5">Working with Canada's largest mutual fund dealerships, my team was responsible for the sales enablement of over $100M annually through new product approvals and promotion of existing investment solutions.</p><ul className="text-xl text-[#c89116]/90 list-[square] list-inside"><li>Oversaw 100% on-time project delivery rate for requirements gathering, onboarding, and optimization of new and existing products to key retail and institutional clients</li><li>Facilitated a 50% reduction in manual data retrieval times for over 150 sales team members via complex transformational projects, including digital content management system overhauls and marketing analytics automation</li></ul></div> },
//     { id: 3, year: "CI Global Asset Management - Business Analyst", content: <div><h3 className="text-3xl white/80 font-bold mb-2 text-center">Business Analyst, Client Services | CI Global Asset Management</h3><h3 className="text-2xl font-bold mb-2 text-center text-[#c89116]/90">2013-2014</h3><p className="text-2xl white/80 py-5">Prior to moving to CI's front office, I created strategies and championed initiatives for the Client Services department. Working closely with contact centre agents, I prioritized operational clarity, process design, and feedback from the colleagues responsible for handling an average of 10,000 inquiries daily.</p><ul className="text-xl text-[#c89116]/90 list-[square] list-inside"><li>Championed a 20% improvement in contact centre response times through the development of adaptable workforce models</li><li>Assisted with the transition of over 50 contact centre agents to revenue-generating roles via the integration of workforce metrics with strategic planning, improving KPIs visibility for executives</li></ul></div> },
//     // { id: 4, year: "CI Global Asset Management - Client Services Representative", content: <div><h3 className="text-3xl white/80 font-bold mb-2 text-center">Management Consultant | Viscount Pierce</h3><h3 className="text-2xl font-bold mb-2 text-center text-[#c89116]/90">2024-Present</h3><p className="text-2xl white/80 py-5">I work with enterprise clients across the tech and finance sectors to help navigate complex challenges, create maintainable operational strategies, and scale with confidence. Blending strategy, data, and execution, my focus is empowering clients to establish, emerge, and endure - the three pillars of Viscount Pierce.</p><ul className="text-xl text-[#c89116]/90 list-[square] list-inside"><li>Developing strong relationship management and account expansion processes to establish long term partnerships</li><li>Applying strategic thinking and analytical expertise to identify opportunities and shape business direction</li><li>A solution-oriented leader, aligning client needs with impactful outcomes</li></ul></div> },
//   ];

//   const activeContent = timelineItems.find((item) => item.id === activeItem)?.content;

//   return (
//     <section
//       id="experience-timeline"
//       className="relative min-h-screen w-full text-white px-4 py-10"
//     >
//       <ChevronNav prev="/bio"/>
//             <motion.p
//         className="
//           text-6xl md:text-7xl max-w-2xl text-center mx-auto font-semibold mb-1 opacity-90 p-5
//           text-[#c89116]/70
//           drop-shadow-[0_0_12px_#c89116]
//           transition-all duration-500 ease-out
//           hover:text-[#c89116]/90 hover:scale-110 hover:drop-shadow-[0_0_20px_#c89116]
//         "
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
//       >
//         Experience Highlights
//       </motion.p>
//       {/* Desktop / Tablet layout */}
//       <div className="hidden md:grid grid-cols-2 gap-8 max-w-7xl mx-auto">
//         {/* LEFT COLUMN - Timeline Squares */}
//         <div className="flex flex-col items-center gap-6">
//           {timelineItems.map((item) => (
//             <div
//               key={item.id}
//               onClick={() => setActiveItem(item.id)}
//               className={`
//                 relative bg-black/60 border border-white/10 
//                 h-32 w-96 flex flex-col justify-center items-center cursor-pointer
//                 text-[#c89116]/80 drop-shadow-[0_0_12px_#c89116]
//                 transition-all duration-500 ease-out
//                 hover:text-[#c89116]/90 hover:drop-shadow-[0_0_20px_#c89116] hover:scale-105
//                 animate-[gold-pulse_4s_ease-in-out_infinite]
//                 ${activeItem === item.id ? "scale-110 drop-shadow-[0_0_25px_#c89116]" : ""}
//               `}
//             >
//               <span className="text-3xl font-bold text-center select-none pointer-events-none">
//                 {item.year}
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* RIGHT COLUMN - Timeline Content */}
//         <div className="flex flex-col justify-center p-6 border-l border-[#c89116]/40 min-h-[400px] md:sticky md:top-24 self-start">
//           {activeContent ? (
//             <motion.div
//               key={activeItem}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, ease: "easeOut" }}
//               className="bg-black/60 border border-white/10 p-8 shadow-lg drop-shadow-[0_0_12px_#c89116]"
//             >
//               {activeContent}
//             </motion.div>
//           ) : (
//             <div className="text-white/50 italic">
//               Select a link on the left to see details.
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Mobile Layout — same as original timeline */}
//       <div className="md:hidden flex flex-col items-center gap-6 pt-6">
//         {timelineItems.map((item) => (
//           <div
//             key={item.id}
//             onClick={() => setActiveItem(item.id)}
//             className="
//               relative bg-black/60 border border-white/10 
//               h-48 w-84 flex flex-col justify-center items-center cursor-pointer
//               text-[#c89116]/80 drop-shadow-[0_0_12px_#c89116]
//               transition-all duration-500 ease-out
//               hover:text-[#c89116]/90 hover:drop-shadow-[0_0_20px_#c89116] hover:scale-105
//               animate-[gold-pulse_4s_ease-in-out_infinite]
//             "
//           >
//             <span className="text-3xl font-bold text-center select-none pointer-events-none">
//               {item.year}
//             </span>
//           </div>
//         ))}
//       </div>

//       {/* Mobile Popup Modal */}
//       {activeItem && (
//         <div
//           onClick={() => setActiveItem(null)}
//           className="md:hidden fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 p-4"
//         >
//           <div
//             onClick={(e) => e.stopPropagation()}
//             className="bg-black/80 border border-white/10 p-8 max-w-2xl w-full shadow-lg text-white"
//           >
//             {activeContent}
//             <button
//               onClick={() => setActiveItem(null)}
//               className="mt-6 px-4 py-2 bg-[#c89116] text-black font-semibold hover:bg-[#e5a92e] transition"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

import React, { useState } from "react";
import { motion } from "framer-motion";
import ChevronNav from "../components/ChevronNav";

export default function Exp1() {
  const [activeItem, setActiveItem] = useState(null);

  const timelineItems = [
    {
      id: 1,
      year: "Management Consultant - Viscount Pierce",
      content: (
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-center text-white/80">
            Management Consultant | Viscount Pierce
          </h3>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-center text-[#c89116]/90">
            2024–Present
          </h3>
          <p className="text-base sm:text-lg md:text-2xl text-white/80 py-5 leading-relaxed">
            I work with enterprise clients across the tech and finance sectors to help navigate
            complex challenges, create maintainable operational strategies, and scale with confidence.
            Blending strategy, data, and execution, my focus is empowering clients to establish,
            emerge, and endure — the three pillars of Viscount Pierce.
          </p>
          <ul className="text-base sm:text-lg md:text-xl text-[#c89116]/90 list-[square] list-inside space-y-2">
            <li>Developing strong relationship management and account expansion processes</li>
            <li>Applying strategic thinking and analytical expertise to shape business direction</li>
            <li>A solution-oriented leader aligning client needs with impactful outcomes</li>
          </ul>
        </div>
      ),
    },
    {
      id: 2,
      year: "CI Global Asset Management - Sr. Business Analyst and Project Manager",
      content: (
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-center text-white/80">
            Sr. Business Analyst and Project Manager | CI Global Asset Management
          </h3>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-center text-[#c89116]/90">
            2017–2024
          </h3>
          <p className="text-base sm:text-lg md:text-2xl text-white/80 py-5 leading-relaxed">
            Working with Canada's largest mutual fund dealerships, my team was responsible for
            the sales enablement of over $100M annually through new product approvals and promotion
            of existing investment solutions.
          </p>
          <ul className="text-base sm:text-lg md:text-xl text-[#c89116]/90 list-[square] list-inside space-y-2">
            <li>Oversaw 100% on-time project delivery for key retail and institutional clients</li>
            <li>Facilitated a 50% reduction in manual data retrieval times for 150+ sales members</li>
          </ul>
        </div>
      ),
    },
    {
      id: 3,
      year: "CI Global Asset Management - Business Analyst",
      content: (
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-center text-white/80">
            Business Analyst, Client Services | CI Global Asset Management
          </h3>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-center text-[#c89116]/90">
            2013–2014
          </h3>
          <p className="text-base sm:text-lg md:text-2xl text-white/80 py-5 leading-relaxed">
            Prior to moving to CI's front office, I created strategies and championed initiatives for
            the Client Services department. Working closely with contact centre agents, I prioritized
            operational clarity, process design, and feedback loops from colleagues handling an average
            of 10,000 inquiries daily.
          </p>
          <ul className="text-base sm:text-lg md:text-xl text-[#c89116]/90 list-[square] list-inside space-y-2">
            <li>Championed a 20% improvement in contact centre response times</li>
            <li>Integrated workforce metrics with strategic planning to support role transitions</li>
          </ul>
        </div>
      ),
    },
  ];

  const activeContent = timelineItems.find((item) => item.id === activeItem)?.content;

  return (
    <section
      id="experience-timeline"
      className="relative min-h-screen w-full text-white px-4 py-10"
    >
      <ChevronNav prev="/bio" />

      {/* Section Heading */}
      <motion.p
        className="
          text-4xl sm:text-5xl md:text-7xl max-w-2xl text-center mx-auto font-semibold mb-1 opacity-90 p-5
          text-[#c89116]/70
          drop-shadow-[0_0_12px_#c89116]
          transition-all duration-500 ease-out
          hover:text-[#c89116]/90 hover:scale-110 hover:drop-shadow-[0_0_20px_#c89116]
        "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
      >
        Experience Highlights
      </motion.p>

      {/* Desktop / Tablet Layout */}
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
              <span className="text-2xl lg:text-3xl font-bold text-center select-none pointer-events-none">
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
              Select a link on the left to see details.
            </div>
          )}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col items-center gap-6 pt-6">
        {timelineItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className="
              relative bg-black/60 border border-white/10 
              h-40 w-[90vw] max-w-sm flex flex-col justify-center items-center cursor-pointer
              text-[#c89116]/80 drop-shadow-[0_0_12px_#c89116]
              transition-all duration-500 ease-out
              hover:text-[#c89116]/90 hover:drop-shadow-[0_0_20px_#c89116] hover:scale-105
              animate-[gold-pulse_4s_ease-in-out_infinite]
            "
          >
            <span className="text-lg sm:text-xl font-bold text-center select-none pointer-events-none">
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
            className="
              bg-black/80 border border-white/10
              p-4 sm:p-6 md:p-8
              w-[90vw] max-w-md
              rounded-lg shadow-lg text-white
              overflow-y-auto max-h-[85vh]
            "
          >
            {activeContent}
            <button
              onClick={() => setActiveItem(null)}
              className="mt-6 px-4 py-2 bg-[#c89116] text-black font-semibold hover:bg-[#e5a92e] transition w-full rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
