// // import React from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Navigation, A11y } from "swiper/modules";
// // import GridAbout from "../components/GridAbout";
// // import GridAboutBio from "../components/GridAboutBio";
// // import InteractiveTimeline from "./InteractiveTimeline";
// // import "swiper/css";
// // import "swiper/css/navigation";

// // // Example flexible slides (each slide can contain anything)
// // const slides = [
// //   {
// //     id: 1,
// //     content: (
// //       <div className="flex flex-col items-center justify-center h-full bg-gradient-to-b text-white text-center p-10">
// //         <h2 className="text-5xl font-bold mb-4">Renner McCreath</h2>
// //         <GridAboutBio />
// //       </div>
// //     ),
// //   },
// //   {
// //     id: 2,
// //     content: (
// //       <div
// //         className="flex flex-col justify-center items-center h-full bg-cover bg-center text-white p-10"
// //         style={{ backgroundImage: "url(/src/assets/slide1.jpg)" }}
// //       >
// //         <div className="bg-black/50 p-8 rounded-2xl text-center max-w-6xl">
// //           {/* <h2 className="text-4xl font-bold mb-4">Project Management</h2>
// //           <p className="text-lg">Leading cross-functional teams to success.</p> */}
// //           <GridAbout />
// //         </div>
// //       </div>
// //     ),
// //   },

// //   {
// //     id: 3,
// //     content: (
// //       <div
// //         className="flex flex-col justify-center items-center h-full 2-bg-cover bg-center text-white p-10"
// //         style={{ backgroundImage: "url(/src/assets/slide1.jpg)" }}
// //       >
// //         <h2 className="text-4xl font-bold mb-4 pt-20">Career Timeline</h2>
// //           <p className="text-lg">Leading cross-functional teams to success.</p>
// //         <div className="relative flex items-center justify-center w-full h-full">
// //   <div className="w-[90vw] max-w-7xl mx-auto">
// //     <InteractiveTimeline />
// //   </div>
// // </div>

// //       </div>
// //     ),
// //   },

// //   {
// //     id: 4,
// //     content: (
// //       <div
// //         className="flex flex-col justify-center items-center h-full bg-cover bg-center text-white p-10"
// //         style={{ backgroundImage: "url(/src/assets/slide2.jpg)" }}
// //       >
// //         <div className="bg-black/50 p-8 rounded-2xl text-center max-w-xl">
// //           <h2 className="text-4xl font-bold mb-4">Business Analysis</h2>
// //           <p className="text-lg">Transforming data into actionable insights.</p>
// //         </div>
// //       </div>
// //     ),
// //   },
// //   {
// //     id: 5,
// //     content: (
// //       <div className="flex flex-col items-center justify-center h-full bg-gradient-to-r from-emerald-700 to-teal-500 text-white p-10 text-center">
// //         <h2 className="text-4xl font-bold mb-4">Customer Success</h2>
// //         <p className="text-lg max-w-lg">
// //           Building relationships that drive long-term growth and trust.
// //         </p>
// //       </div>
// //     ),
// //   },
// //   {
// //     id: 6,
// //     content: (
// //       <div
// //         className="flex flex-col justify-center items-center h-full bg-cover bg-center text-white p-10"
// //         style={{ backgroundImage: "url(/src/assets/background22.jpg)" }}
// //       >
// //         <div className="p-20 rounded-2xl text-center max-w-full">
        
// //           <InteractiveTimeline />
// //         </div>
// //       </div>
// //     ),
// //   },
// // ];

// // export default function CarouselAbout() {
// //   return (
// //     <div className="w-full h-full">
// //       <Swiper
// //         modules={[Navigation, A11y]}
// //         navigation
// //         loop
// //         className="w-full h-full"
// //         style={{ height: "100%" }}
// //       >
// //         {slides.map((slide) => (
// //           <SwiperSlide key={slide.id} className="w-full h-full">
// //             {slide.content}
// //           </SwiperSlide>
// //         ))}
// //       </Swiper>
// //     </div>
// //   );
// // }

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, A11y } from "swiper/modules";
// import GridAbout from "../components/GridAbout";
// import GridAboutBio from "../components/GridAboutBio";
// import InteractiveTimeline from "./InteractiveTimeline";
// import "swiper/css";
// import "swiper/css/navigation";

// const slides = [
//   {
//     id: 1,
//     content: (
//       <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b text-white text-center p-10 overflow-y-auto">
//         <h2 className="text-5xl font-bold mb-4">Renner McCreath</h2>
//         <GridAboutBio />
//       </div>
//     ),
//   },
//   {
//     id: 2,
//     content: (
//       <div
//         className="flex flex-col justify-center items-center w-full bg-cover bg-center text-white p-10"
//         style={{ backgroundImage: "url(/src/assets/slide1.jpg)" }}
//       >
//         <div className="bg-black/50 p-8 rounded-2xl text-center max-w-6xl">
//           <GridAbout />
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: 3,
//     content: (
//       <div
//         className="flex flex-col justify-center items-center w-full bg-cover bg-center text-white p-10"
//         style={{ backgroundImage: "url(/src/assets/slide1.jpg)" }}
//       >
//         <h2 className="text-4xl font-bold mb-4 pt-20">Career Timeline</h2>
//         <p className="text-lg mb-6">Leading cross-functional teams to success.</p>
//         <div className="relative flex items-center justify-center w-full">
//           <div className="w-[90vw] max-w-7xl mx-auto">
//             <InteractiveTimeline />
//           </div>
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: 4,
//     content: (
//       <div
//         className="flex flex-col justify-center items-center w-full bg-cover bg-center text-white p-10"
//         style={{ backgroundImage: "url(/src/assets/slide2.jpg)" }}
//       >
//         <div className="bg-black/50 p-8 rounded-2xl text-center max-w-xl">
//           <h2 className="text-4xl font-bold mb-4">Business Analysis</h2>
//           <p className="text-lg">Transforming data into actionable insights.</p>
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: 5,
//     content: (
//       <div className="flex flex-col items-center justify-center w-full bg-gradient-to-r from-emerald-700 to-teal-500 text-white p-10 text-center">
//         <h2 className="text-4xl font-bold mb-4">Customer Success</h2>
//         <p className="text-lg max-w-lg">
//           Building relationships that drive long-term growth and trust.
//         </p>
//       </div>
//     ),
//   },
//   {
//     id: 6,
//     content: (
//       <div
//         className="flex flex-col justify-center items-center w-full bg-cover bg-center text-white p-10"
//         style={{ backgroundImage: "url(/src/assets/background22.jpg)" }}
//       >
//         <div className="p-8 rounded-2xl text-center max-w-full">
//           <InteractiveTimeline />
//         </div>
//       </div>
//     ),
//   },
// ];

// export default function CarouselAbout() {
//   return (
//     <div className="w-full">
//       <Swiper
//         modules={[Navigation, A11y]}
//         navigation
//         loop
//         autoHeight={true}       // ✅ Dynamic height per slide
//         className="w-full"
//       >
//         {slides.map((slide) => (
//           <SwiperSlide
//             key={slide.id}
//             className="w-full"
//           >
//             {slide.content}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, A11y } from "swiper/modules";
// import GridAbout from "../components/GridAbout";
// import GridAboutBio from "../components/GridAboutBio";
// import InteractiveTimeline from "./InteractiveTimeline";
// import "swiper/css";
// import "swiper/css/navigation";

// const slides = [
//   {
//     id: 1,
//     content: (
//       <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b text-white text-center p-10 overflow-y-auto">
//         <h2 className="text-5xl font-bold mb-4">Renner McCreath</h2>
//         <GridAboutBio />
//       </div>
//     ),
//   },
//   {
//     id: 2,
//     content: (
//       <div
//         className="flex flex-col justify-center items-center w-full bg-cover bg-center text-white p-10"
//         style={{ backgroundImage: "url(/src/assets/slide1.jpg)" }}
//       >
//         <div className="bg-black/50 p-8 rounded-2xl text-center max-w-6xl">
//           <GridAbout />
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: 3,
//     content: (
//       <div
//         className="flex flex-col justify-center items-center w-full bg-cover bg-center text-white p-10"
//         style={{ backgroundImage: "url(/src/assets/slide1.jpg)" }}
//       >
//         <h2 className="text-4xl font-bold mb-4 pt-20">Career Timeline</h2>
//         <p className="text-lg mb-6">Leading cross-functional teams to success.</p>
//         <div className="relative flex items-center justify-center w-full">
//           <div className="w-[90vw] max-w-7xl mx-auto">
//             <InteractiveTimeline />
//           </div>
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: 4,
//     content: (
//       <div
//         className="flex flex-col justify-center items-center w-full bg-cover bg-center text-white p-10"
//         style={{ backgroundImage: "url(/src/assets/slide2.jpg)" }}
//       >
//         <div className="bg-black/50 p-8 rounded-2xl text-center max-w-xl">
//           <h2 className="text-4xl font-bold mb-4">Business Analysis</h2>
//           <p className="text-lg">Transforming data into actionable insights.</p>
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: 5,
//     content: (
//       <div className="flex flex-col items-center justify-center w-full bg-gradient-to-r from-emerald-700 to-teal-500 text-white p-10 text-center">
//         <h2 className="text-4xl font-bold mb-4">Customer Success</h2>
//         <p className="text-lg max-w-lg">
//           Building relationships that drive long-term growth and trust.
//         </p>
//       </div>
//     ),
//   },
//   {
//     id: 6,
//     content: (
//       <div
//         className="flex flex-col justify-center items-center w-full bg-cover bg-center text-white p-10"
//         style={{ backgroundImage: "url(/src/assets/background22.jpg)" }}
//       >
//         <div className="p-8 rounded-2xl text-center max-w-full">
//           <InteractiveTimeline />
//         </div>
//       </div>
//     ),
//   },
// ];

// export default function CarouselAbout() {
//   const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

//   useEffect(() => {
//     const handleResize = () => setIsDesktop(window.innerWidth >= 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="w-full">
//       <Swiper
//         modules={[Navigation, A11y]}
//         navigation={{
//           enabled: true,
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         }}
//         loop
//         autoHeight={true}
//         direction={isDesktop ? "horizontal" : "vertical"}   // ✅ Horizontal on desktop, vertical on mobile
//         className="w-full relative"
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id} className="w-full">
//             {slide.content}
//           </SwiperSlide>
//         ))}

//         {/* ✅ Right-aligned chevrons for mobile */}
//         <div
//           className="swiper-button-next !text-white !right-4 !top-1/2 md:!hidden
//           bg-black/40 rounded-full w-10 h-10 flex items-center justify-center"
//         ></div>
//         <div
//           className="swiper-button-prev !text-white !right-4 !top-[calc(50%+3rem)] md:!hidden
//           bg-black/40 rounded-full w-10 h-10 flex items-center justify-center"
//         ></div>

//         {/* ✅ Keep default chevrons visible on desktop */}
//         <div className="swiper-button-prev md:!block hidden"></div>
//         <div className="swiper-button-next md:!block hidden"></div>
//       </Swiper>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, A11y } from "swiper/modules";
// import GridAbout from "../components/GridAbout";
// import GridAboutBio from "../components/GridAboutBio";
// import InteractiveTimeline from "./InteractiveTimeline";
// import "swiper/css";
// import "swiper/css/navigation";

// const slides = [
//   {
//     id: 1,
//     content: (
//       <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b text-white text-center p-10 overflow-y-auto">
//         <h2 className="text-5xl font-bold mb-4">Renner McCreath</h2>
//         <GridAboutBio />
//       </div>
//     ),
//   },
//   {
//     id: 2,
//     content: (
//       <div
//         className="flex flex-col justify-center items-center w-full bg-cover bg-center text-white p-10"
//         style={{ backgroundImage: "url(/src/assets/slide1.jpg)" }}
//       >
//         <div className="bg-black/50 p-8 rounded-2xl text-center max-w-6xl">
//           <GridAbout />
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: 3,
//     content: (
//       <div
//         className="flex flex-col justify-center items-center w-full bg-cover bg-center text-white p-10"
//         style={{ backgroundImage: "url(/src/assets/slide1.jpg)" }}
//       >
//         <h2 className="text-4xl font-bold mb-4 pt-20">Career Timeline</h2>
//         <p className="text-lg mb-6">Leading cross-functional teams to success.</p>
//         <div className="relative flex items-center justify-center w-full">
//           <div className="w-[90vw] max-w-7xl mx-auto">
//             <InteractiveTimeline />
//           </div>
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: 4,
//     content: (
//       <div
//         className="flex flex-col justify-center items-center w-full bg-cover bg-center text-white p-10"
//         style={{ backgroundImage: "url(/src/assets/slide2.jpg)" }}
//       >
//         <div className="bg-black/50 p-8 rounded-2xl text-center max-w-xl">
//           <h2 className="text-4xl font-bold mb-4">Business Analysis</h2>
//           <p className="text-lg">Transforming data into actionable insights.</p>
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: 5,
//     content: (
//       <div className="flex flex-col items-center justify-center w-full bg-gradient-to-r from-emerald-700 to-teal-500 text-white p-10 text-center">
//         <h2 className="text-4xl font-bold mb-4">Customer Success</h2>
//         <p className="text-lg max-w-lg">
//           Building relationships that drive long-term growth and trust.
//         </p>
//       </div>
//     ),
//   },
//   {
//     id: 6,
//     content: (
//       <div
//         className="flex flex-col justify-center items-center w-full bg-cover bg-center text-white p-10"
//         style={{ backgroundImage: "url(/src/assets/background22.jpg)" }}
//       >
//         <div className="p-8 rounded-2xl text-center max-w-full">
//           <InteractiveTimeline />
//         </div>
//       </div>
//     ),
//   },
// ];

// export default function CarouselAbout() {
//   const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

//   useEffect(() => {
//     const handleResize = () => setIsDesktop(window.innerWidth >= 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="w-full relative">
//       <Swiper
//         modules={[Navigation, A11y]}
//         navigation={{
//           enabled: true,
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         }}
//         loop
//         autoHeight={true}
//         direction={isDesktop ? "horizontal" : "vertical"}
//         className="w-full"
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id} className="w-full">
//             {slide.content}
//           </SwiperSlide>
//         ))}

//         {/* ✅ Fixed chevrons for mobile */}
//         <div
//           className="swiper-button-next fixed bottom-4 right-4 z-50 !text-white
//           bg-black/50 rounded-full w-12 h-12 flex items-center justify-center md:hidden"
//         ></div>
//         <div
//           className="swiper-button-prev fixed bottom-20 right-4 z-50 !text-white
//           bg-black/50 rounded-full w-12 h-12 flex items-center justify-center md:hidden"
//         ></div>

//         {/* ✅ Default chevrons for desktop */}
//         <div className="swiper-button-prev hidden md:block"></div>
//         <div className="swiper-button-next hidden md:block"></div>
//       </Swiper>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, A11y } from "swiper/modules";
// import GridAbout from "../components/GridAbout";
// import GridAboutBio from "../components/GridAboutBio";
// import InteractiveTimeline from "./InteractiveTimeline";
// import "swiper/css";
// import "swiper/css/navigation";

// const slides = [
//   {
//     id: 1,
//     content: (
//       <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b text-white text-center p-10 overflow-y-auto">
//         <h2 className="text-5xl font-bold mb-4">Renner McCreath</h2>
//         <GridAboutBio />
//       </div>
//     ),
//   },
//   {
//     id: 2,
//     content: (
//       <div
//         className="flex flex-col justify-center items-center w-full bg-cover bg-center text-white p-10"
//         style={{ backgroundImage: "url(/src/assets/slide1.jpg)" }}
//       >
//         <div className="bg-black/50 p-8 rounded-2xl text-center max-w-6xl">
//           <GridAbout />
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: 3,
//     content: (
//       <div
//         className="flex flex-col justify-center items-center w-full bg-cover bg-center text-white p-10"
//         style={{ backgroundImage: "url(/src/assets/slide1.jpg)" }}
//       >
//         <h2 className="text-4xl font-bold mb-4 pt-20">Career Timeline</h2>
//         <p className="text-lg mb-6">Leading cross-functional teams to success.</p>
//         <div className="relative flex items-center justify-center w-full">
//           <div className="w-[90vw] max-w-7xl mx-auto">
//             <InteractiveTimeline />
//           </div>
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: 4,
//     content: (
//       <div
//         className="flex flex-col justify-center items-center w-full bg-cover bg-center text-white p-10"
//         style={{ backgroundImage: "url(/src/assets/slide2.jpg)" }}
//       >
//         <div className="bg-black/50 p-8 rounded-2xl text-center max-w-xl">
//           <h2 className="text-4xl font-bold mb-4">Business Analysis</h2>
//           <p className="text-lg">Transforming data into actionable insights.</p>
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: 5,
//     content: (
//       <div className="flex flex-col items-center justify-center w-full bg-gradient-to-r from-emerald-700 to-teal-500 text-white p-10 text-center">
//         <h2 className="text-4xl font-bold mb-4">Customer Success</h2>
//         <p className="text-lg max-w-lg">
//           Building relationships that drive long-term growth and trust.
//         </p>
//       </div>
//     ),
//   },
//   {
//     id: 6,
//     content: (
//       <div
//         className="flex flex-col justify-center items-center w-full bg-cover bg-center text-white p-10"
//         style={{ backgroundImage: "url(/src/assets/background22.jpg)" }}
//       >
//         <div className="p-8 rounded-2xl text-center max-w-full">
//           <InteractiveTimeline />
//         </div>
//       </div>
//     ),
//   },
// ];

// export default function CarouselAbout() {
//   const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

//   useEffect(() => {
//     const handleResize = () => setIsDesktop(window.innerWidth >= 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="w-full">
//       <Swiper
//         modules={[Navigation, A11y]}
//         navigation={true}        // ✅ use Swiper’s default buttons again
//         loop
//         autoHeight={true}
//         direction={isDesktop ? "horizontal" : "vertical"}  // keep vertical on mobile if you want
//         className="w-full"
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id} className="w-full min-h-screen md:min-h-0">
//             {slide.content}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import GridAbout from "../components/GridAbout";
import GridAboutBio from "../components/GridAboutBio";
import InteractiveTimeline from "./InteractiveTimeline";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    content: (
      <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b text-white text-center p-2 md:p-10 overflow-y-auto">
        {/* <h2 className="text-3xl md:text-5xl font-bold mb-4">Renner McCreath</h2> */}
        <GridAboutBio />
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div
        className="flex flex-col justify-center items-center w-full bg-cover bg-center text-white p-2 md:p-10"
        style={{ backgroundImage: "url(/src/assets/slide1.jpg)" }}
      >
        <div className="bg-black/50 p-4 md:p-8 rounded-2xl text-center max-w-6xl w-full">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Project Management</h2>
          <GridAbout />
        </div>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div
        className="flex flex-col justify-center items-center w-full bg-cover bg-center text-white p-2 md:p-10"
        style={{ backgroundImage: "url(/src/assets/slide1.jpg)" }}
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-4 pt-6 md:pt-20">Career Timeline</h2>
        <p className="text-base md:text-lg mb-6">Leading cross-functional teams to success.</p>
        <div className="relative flex items-center justify-center w-full">
          <div className="w-[90vw] max-w-7xl mx-auto">
            <InteractiveTimeline />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    content: (
      <div
        className="flex flex-col justify-center items-center w-full bg-cover bg-center text-white p-2 md:p-10"
        style={{ backgroundImage: "url(/src/assets/slide2.jpg)" }}
      >
        <div className="bg-black/50 p-4 md:p-8 rounded-2xl text-center max-w-xl w-full">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Business Analysis</h2>
          <p className="text-base md:text-lg">Transforming data into actionable insights.</p>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    content: (
      <div className="flex flex-col items-center justify-center w-full bg-gradient-to-r from-emerald-700 to-teal-500 text-white p-2 md:p-10 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Customer Success</h2>
        <p className="text-base md:text-lg max-w-lg">
          Building relationships that drive long-term growth and trust.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    content: (
      <div
        className="flex flex-col justify-center items-center w-full bg-cover bg-center text-white p-2 md:p-10"
        style={{ backgroundImage: "url(/src/assets/background22.jpg)" }}
      >
        <div className="p-4 md:p-8 rounded-2xl text-center max-w-full w-full">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Timeline</h2>
          <InteractiveTimeline />
        </div>
      </div>
    ),
  },
];

export default function CarouselAbout() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, A11y]}
        navigation
        loop
        autoHeight={true}
        direction={isDesktop ? "horizontal" : "vertical"}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="w-full min-h-screen md:min-h-0"
          >
            {slide.content}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
