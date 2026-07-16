import React, { useState } from "react";
import { motion } from "framer-motion";
import ChevronNav from "../components/ChevronNav";

export default function AbsorbQ320263() {
  const [activeItem, setActiveItem] = useState(null);

  const timelineItems = [
    {
      id: 1,
      year: "Student Success Advisor - Boreal Education",
      content: (
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-center text-white/80">
            Student Success Advisor
          </h3>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-center text-[#edfc47]/90">
            Boreal Education | 2025–Present
          </h3>
          <p className="text-base sm:text-lg md:text-2xl text-white/80 py-5 leading-relaxed">
            I provide enrolment advice across undergraduate and post-graduate programs to achieve both academic and personal goals associated with the overall learning journey. Through the provision of guidance, resources, and support, I am the primary point of contact throughout the entire process - empowering students to overcome obstacles and thrive academically.
          </p>
          <ul className="text-base sm:text-lg md:text-xl text-[#edfc47]/90 list-[square] list-inside space-y-2">
            <li>Complete pipeline ownership from lead to enrolment</li>
            <li>Leveraging and developing program engagement plans tailored to individual student needs</li>
            <li>Hosting of monthly webinars for student engagement and program education</li>
          </ul>
        </div>
      ),
    },
    {
      id: 2,
      year: "Fruit Suite - Distribuiton Logistics and Customer Success",
      content: (
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-center text-white/80">
            Distribution Logistics, Customer Success
          </h3>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-center text-[#edfc47]/90">
            Fruit Suite | 2024–2025
          </h3>
          <p className="text-base sm:text-lg md:text-2xl text-white/80 py-5 leading-relaxed">
            Working with a small team passionate about their craft, I implemented customer success practices that contributed to an increase in trial conversion and overall sales. 
          </p>
          <ul className="text-base sm:text-lg md:text-xl text-[#edfc47]/90 list-[square] list-inside space-y-2">
            <li>Collaborated with sales, customer success, and distribution teams to achieve the best financial year in company history (FY 2025)</li>
            <li>Company leader in trial conversion and new client onboarding</li>
            <li>Implemented customer success procedures leading to a significant increase in positive client feedback.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 3,
      year: "CI Global Asset Management - Sr. Business Analyst and Project Manager",
      content: (
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-center text-white/80">
            Sr. Business Analyst and Project Manager
          </h3>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-center text-[#edfc47]/90">
            CI Global Asset Management | 2017–2024
          </h3>
          <p className="text-base sm:text-lg md:text-2xl text-white/80 py-5 leading-relaxed">
            Working with Canada's largest mutual fund dealerships, my team was responsible for
            the sales enablement of over $100M annually through new product approvals and promotion
            of existing investment solutions.
          </p>
          <ul className="text-base sm:text-lg md:text-xl text-[#edfc47]/90 list-[square] list-inside space-y-2">
            <li>Oversaw 100% on-time project delivery for key retail and institutional clients</li>
            <li>Managed concurrent sales enablement programs for 25+ funds across 10+ dealerships annually</li>
            <li>Lead Project Manager for an average team size of 5-10 members</li>
          </ul>
        </div>
      ),
    },
     {
      id: 4,
      year: "CI Global Asset Management - Business Analyst",
      content: (
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-center text-white/80">
            Business Analyst, Client Services
          </h3>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-center text-[#edfc47]/90">
            CI Global Asset Management | 2013–2017
          </h3>
          <p className="text-base sm:text-lg md:text-2xl text-white/80 py-5 leading-relaxed">
            Prior to moving to CI's front office, I created strategies and championed initiatives for
            the Client Services department. Working closely with contact centre agents, I prioritized
            operational clarity, process design, and feedback loops from colleagues handling an average
            of 10,000 inquiries daily.
          </p>
          <ul className="text-base sm:text-lg md:text-xl text-[#edfc47]/90 list-[square] list-inside space-y-2">
            <li>Complete training curriculum redesign of contact centre software (remained in place from 2014-2024)</li>
            <li>Onboarding and training for over 200 contact centre agents via in-person, virtual, and asynchronous methods</li>
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
      <ChevronNav prev="/absorbQ320262" next="/absorbQ320264" />

      {/* Section Heading */}
      <motion.p
        className="
          text-4xl sm:text-5xl md:text-7xl max-w-2xl text-center mx-auto font-semibold mb-1 opacity-90 p-5
          text-[#edfc47]/70
          drop-shadow-[0_0_12px_#edfc47]
          transition-all duration-500 ease-out
          hover:text-[#edfc47]/90 hover:scale-110 hover:drop-shadow-[0_0_20px_#edfc47]
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
                text-[#edfc47]/80 drop-shadow-[0_0_12px_#edfc47]
                transition-all duration-500 ease-out
                hover:text-[#edfc47]/90 hover:drop-shadow-[0_0_20px_#edfc47] hover:scale-105
                animate-[gold-pulse_4s_ease-in-out_infinite]
                ${activeItem === item.id ? "scale-110 drop-shadow-[0_0_25px_#edfc47]" : ""}
              `}
            >
              <span className="text-2xl lg:text-3xl font-bold text-center select-none pointer-events-none">
                {item.year}
              </span>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN - Timeline Content */}
        <div className="flex flex-col justify-center p-6 border-l border-[#edfc47]/40 min-h-[400px] md:sticky md:top-24 self-start">
          {activeContent ? (
            <motion.div
              key={activeItem}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-black/60 border border-white/10 p-8 shadow-lg drop-shadow-[0_0_12px_#edfc47]"
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
              text-[#edfc47]/80 drop-shadow-[0_0_12px_#edfc47]
              transition-all duration-500 ease-out
              hover:text-[#edfc47]/90 hover:drop-shadow-[0_0_20px_#edfc47] hover:scale-105
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
              className="mt-6 px-4 py-2 bg-[#edfc47] text-black font-semibold hover:bg-[#f5ff72] transition w-full rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
