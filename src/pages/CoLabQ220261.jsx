import React from "react";
import { motion } from "framer-motion";
import ChevronNav from "../components/ChevronNav";

export default function CoLabQ220261() {
    const gridItems = [
      { id: 1, number: "14+ years", content: (<div><h2 className="text-lg sm:text-3xl font-semibold mb-1">Total Years of Professional Experience</h2><ul className="text-xl text-white/70 list-[square] list-inside"><li>Boreal Education | 2025-Present</li><li>Fruit Suite | 2024-2025</li><li>CI Global Asset Management | 2012-2024</li></ul></div>) },
      { id: 2, number: "13", content: (<div><h2 className="text-lg sm:text-3xl font-semibold mb-1">Customer Onboarding & Implementation</h2><ul className="text-md sm:text-lg text-white/70 list-[square] list-inside"><li>Complete lead to enrolment onboarding process | Boreal Education, 2024-present</li><li>New account engagement and onboarding | Fruit Suite, 2024-2025</li><li>9-figure product launches, key account partnerships | CI Global Asset Management, 2017-2024</li><li>Internal onboarding and curriculum development for 150+ contact centre agents| CI Global Asset Management, 2013-2017 </li></ul></div>) },
      { id: 3, number: "9", content: (<div><h2 className="text-lg sm:text-3xl font-semibold mb-1">Multi-Stakeholder Onboarding</h2><ul className="text-lg text-white/70 list-[square] list-inside"><li>Management of enrolment and onboarding of 50+ concurrent prospective students | Boreal Education, 2025-present</li><li>Sales Enablement and Customer Success of 75 concurrent clients with unique needs | Fruit Suite, 2024-2025</li><li>Project Manager for onboarding client due diligence of 25+ products, 10+ dealerships | CI Global Asset Management, 2017-2024</li></ul></div>) },
      { id: 4, number: "5", content: (<div><h2 className="text-lg sm:text-3xl font-semibold mb-1">Bridging the Technical Enablement Gap</h2><ul className="text-lg text-white/70 list-[square] list-inside"><li>Presentation of technical software concepts to non-technical stakeholders | CI Global Asset Management, 2013-2017</li><li>Accredited Software Engineer | General Assembly Toronto, Class of Summer 2021</li><li>Built rennermccreath.com using React+Vite, Tailwind CSS, and Vercel | 2025-present</li></ul></div>) },
      { id: 5, number: "3+", content: (<div><h2 className="text-lg sm:text-3xl font-semibold mb-1">Professional Accreditations</h2><ul className="text-lg text-white/70 list-[square] list-inside"><li>Project Management Professional (PMP)</li><li>Software Engineering (MERN Stack)</li><li>Digital Product Management</li></ul></div>) },
      { id: 6, number: "5+", content: (<div><h2 className="text-lg sm:text-3xl font-semibold mb-1">Critical Skills</h2><ul className="text-lg text-white/70 list-[square] list-inside"><li>Pipeline Ownership ✅</li><li>Salesforce, CRM Software ✅</li><li>Listening and delivering on the unique needs of each client ✅</li><li>Internal Collaboration ✅</li><li>Learning from my colleagues, the data, and the company to improve and grow! ✅</li></ul></div>) },
    ];
  
    return (
      <section
        id="bio"
        className="relative min-h-screen flex flex-col items-center text-white px-2 py-8"
      >
        <motion.p
    className="
      text-4xl md:text-7xl max-w-7xl mx-auto font-semibold mb-1 opacity-90 pb-5
      text-[#c89116]/70
      drop-shadow-[0_0_12px_#c89116]
      transition-all duration-500 ease-out
      hover:text-[#c89116]/90 hover:scale-110 hover:drop-shadow-[0_0_20px_#c89116]
    "
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
  >
    The Foundation to Deliver Results
  </motion.p>
        <div className="max-w-8xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[4px]">
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
          <ChevronNav prev="/colabq22026" next="/colabq220262" />
        </section>
      );
}
