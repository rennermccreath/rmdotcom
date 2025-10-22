import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Example flexible slides (each slide can contain anything)
const slides = [
  {
    id: 1,
    content: (
      <div className="flex flex-col items-center justify-center h-full bg-gradient-to-b from-indigo-800 to-indigo-600 text-white text-center p-10">
        <h2 className="text-5xl font-bold mb-4">Welcome</h2>
        <p className="text-xl max-w-xl">
          Discover insights, strategies, and stories that drive success 33333333333.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div
        className="flex flex-col justify-center items-center h-full bg-cover bg-center text-white"
        style={{ backgroundImage: "url(/src/assets/slide1.jpg)" }}
      >
        <div className="bg-black/50 p-8 rounded-2xl text-center max-w-xl">
          <h2 className="text-4xl font-bold mb-4">Project Management</h2>
          <p className="text-lg">Leading cross-functional teams to success.</p>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div
        className="flex flex-col justify-center items-center h-full bg-cover bg-center text-white"
        style={{ backgroundImage: "url(/src/assets/slide2.jpg)" }}
      >
        <div className="bg-black/50 p-8 rounded-2xl text-center max-w-xl">
          <h2 className="text-4xl font-bold mb-4">Business Analysis</h2>
          <p className="text-lg">Transforming data into actionable insights.</p>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    content: (
      <div className="flex flex-col items-center justify-center h-full bg-gradient-to-r from-emerald-700 to-teal-500 text-white p-10 text-center">
        <h2 className="text-4xl font-bold mb-4">Customer Success</h2>
        <p className="text-lg max-w-lg">
          Building relationships that drive long-term growth and trust.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    content: (
      <div
        className="flex flex-col justify-center items-center h-full bg-cover bg-center text-white"
        style={{ backgroundImage: "url(/src/assets/slide3.jpg)" }}
      >
        <div className="bg-black/50 p-8 rounded-2xl text-center max-w-xl">
          <h2 className="text-4xl font-bold mb-4">Innovation & Strategy</h2>
          <p className="text-lg">Empowering organizations to achieve more.</p>
        </div>
      </div>
    ),
  },
];

export default function CarouselWork() {
  return (
    <div className="w-full h-full">
      <Swiper
        modules={[Navigation, A11y]}
        navigation
        loop
        className="w-full h-full"
        style={{ height: "100%" }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="w-full h-full">
            {slide.content}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

