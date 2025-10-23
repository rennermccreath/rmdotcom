// import React from "react";
// import CarouselAbout from "../components/CarouselAbout";
// import InteractiveTimeline from "../components/InteractiveTimeline";

// export default function About() {
//   return (
// <div className="w-full h-screen[80vh] flex-col items-center justify-center">
//       <CarouselAbout />
//     </div>
//   );
// }

// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import ChevronNav from "../components/ChevronNav";


export default function About() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white text-center p-4 md:p-10 relative"
    >
      {/* ✅ Chevron Navigation — loops back to the last page and forward to PM */}
      <ChevronNav next="/bio" />
    <motion.p
  className="
    text-4xl md:text-7xl max-w-2xl text-start mx-auto font-semibold mb-1 opacity-90 p-5
    text-[#c89116]/70
    drop-shadow-[0_0_12px_#c89116]
    transition-all duration-500 ease-out
    hover:text-[#c89116]/90 hover:scale-110 hover:drop-shadow-[0_0_20px_#c89116]
  "
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
>
  Accredited. Experienced. Adaptable.
</motion.p>
      {/* ✅ Main content (from CarouselAbout slide 1) */}
      <div className="md:row-span-2 rounded-2xl p-0 sm:p-8 flex flex-col justify-center items-center text-start shadow-lg">
        {/* <h3 className="text-4xl font-semibold mb-3">Accredited. Experienced. Adaptable.</h3> */}
        <p className="text-xl opacity-90 mb-6 max-w-lg">
          Nice to meet you! My name is Renner McCreath - a project manager and business analyst with over ten years of experience across the finance and technology sectors.
        </p>
        <p className="text-xl opacity-90 mb-6 max-w-lg">
          I am currently a Management Consultant with my firm, Viscount Pierce. In my role, I help enterprise clients in tech and finance define strategic priorities, modernize operations, and execute transformation initiatives. My approach combines structured frameworks, collaborative problem-solving, and a focus on building scalable solutions for long-term growth.
        </p>
        <p className="text-xl opacity-90 mb-6 max-w-lg">
          As Senior Business Analyst and Project Manager of CI Global Asset Management's National Accounts team, I led sales and marketing projects to approve award-winning investment solutions at Canada's largest Mutual Fund dealers. Managing multiple teams of 2-10 on projects spanning up to six months - and relying on my strengths of communication, stakeholder management, and project scaling - I assisted in generating over $100 million in annual gross sales since 2019.
        </p>
        <p className="text-xl opacity-90 mb-6 max-w-lg">
          For a more in-depth look at my career, please navigate using the arrows on either side of the page, or swiping on mobile.
        </p>
      </div>
      
    </div>
  );
}
