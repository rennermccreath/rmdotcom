// import React from "react";
// import { Link } from "react-router-dom";
// import RM from "../assets/RM.png"

// export default function Navbar() {
//   return (

    
//        <nav className="w-full shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-50">
//       <div className="flex items-center">
//         <img src={RM} alt="Logo" className="h-12 w-auto mr-3" />
//         <span className="text-xl font-bold">MyApp</span>
//       </div>
//       <div className="space-x-4">
//         <Link to="/" className="hover:text-gray-300">Home</Link>
//         <Link to="/about" className="hover:text-gray-300">About</Link>
//         <Link to="/contact" className="hover:text-gray-300">Contact</Link>
//       </div>
//     </nav>
//   );
// }

// import React, { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import logo from "../assets/RM.png";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleLinkClick = () => {
//     setIsOpen(false); // close the menu when a link is clicked
//   };

//   return (
//     <nav className="w-full backdrop-blur-md shadow-md px-6 py-1 flex items-center justify-between sticky top-0 z-50">
//       {/* Left: Logo */}
//       <div className="flex items-center">
//         <img src={logo} alt="Logo" className="h-20 w-auto mr-3" />
//       </div>

//       {/* Desktop nav links */}
//       <div className="hidden md:flex space-x-6">
//         <Link to="/" className="hover:text-gray-300">Home</Link>
//         <Link to="/about" className="hover:text-gray-300">About</Link>
//         <Link to="/work" className="hover:text-gray-300">Work</Link>
//         <Link to="/contact" className="hover:text-gray-300">Contact</Link>
//       </div>

//       {/* Mobile hamburger button */}
//       <div className="md:hidden flex items-center">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="hover:text-gray-900 focus:outline-none"
//         >
//           {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
//         </button>
//       </div>

//       {/* Mobile menu */}
//       <div
//         className={`absolute top-full left-0 w-full bg-white/50 shadow-md md:hidden transform transition-all duration-300 ease-in-out origin-top ${
//           isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
//         }`}
//       >
//         <div className="flex flex-col items-center py-4">
//             <Link to="/" onClick={handleLinkClick} className="hover:text-gray-300">Home</Link>
//             <Link to="/about" onClick={handleLinkClick} className="hover:text-gray-300">About</Link>
//             <Link to="/work" onClick={handleLinkClick} className="hover:text-gray-300">Work</Link>
//             <Link to="/contact" onClick={handleLinkClick} className="hover:text-gray-300">Contact</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaLinkedin, FaEnvelope, FaRss } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/RM.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full backdrop-blur-md shadow-md px-6 py-1 flex items-center justify-between sticky top-0 z-50">
      {/* Left: Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-20 w-auto mr-3" />
      </div>

      {/* Desktop nav links */}
      <div className="hidden md:flex space-x-4 items-center">
        <Link to="/" className="hover:text-[#c89116] transition-colors">Home</Link>
        <Link to="/about" className="hover:text-[#c89116] transition-colors">About</Link>
        <Link to="/work" className="hover:text-[#c89116] transition-colors">Work</Link>

        {/* Social Icons */}
        <div className="flex space-x-4 ml-4">
          <a
            href="https://www.linkedin.com/in/rennermccreath/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c89116] hover:text-[#e5a92e] transition-colors"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="mailto:renner@rennermccreath.com"
            className="text-[#c89116] hover:text-[#e5a92e] transition-colors"
          >
            <FaEnvelope size={22} />
          </a>
          <a
            href="https://substack.com/@rennermccreath"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c89116] hover:text-[#e5a92e] transition-colors"
          >
            <FaRss size={22} />
          </a>
        </div>
      </div>

      {/* Mobile hamburger button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hover:text-[#c89116] focus:outline-none"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white/50 shadow-md md:hidden transform transition-all duration-300 ease-in-out origin-top ${
          isOpen
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          <Link to="/" onClick={handleLinkClick} className="hover:text-[#c89116]">
            Home
          </Link>
          <Link to="/about" onClick={handleLinkClick} className="hover:text-[#c89116]">
            About
          </Link>
          <Link to="/work" onClick={handleLinkClick} className="hover:text-[#c89116]">
            Work
          </Link>

          {/* Social Icons on mobile */}
          <div className="flex space-x-6 pt-2">
            <a
              href="https://www.linkedin.com/in/rennermccreath/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c89116] hover:text-[#e5a92e] transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:renner@rennermccreath.com"
              className="text-[#c89116] hover:text-[#e5a92e] transition-colors"
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href="https://substack.com/@rennermccreath"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c89116] hover:text-[#e5a92e] transition-colors"
            >
              <FaRss size={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
