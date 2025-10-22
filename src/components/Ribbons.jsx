import React from "react";
import ribbon1 from "../ribbons/ribbon_1.png";
import ribbon2 from "../ribbons/ribbon_2.png";
import ribbon3 from "../ribbons/ribbon_3.png";
import ribbon4 from "../ribbons/ribbon_4.png";
import ribbon5 from "../ribbons/ribbon_5.png";
import ribbon6 from "../ribbons/ribbon_6.png";
import ribbon7 from "../ribbons/ribbon_7.png";
import ribbon8 from "../ribbons/ribbon_8.png";
import ribbon9 from "../ribbons/ribbon_9.png";
import ribbon10 from "../ribbons/ribbon_10.png";

export default function Ribbons() {
  const ribbons = [ribbon1, ribbon2, ribbon3, ribbon4, ribbon5, ribbon6, ribbon7, ribbon8, ribbon9, ribbon10];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {ribbons.map((ribbon, index) => {
        const delay = index * 200; // stagger animations
        return (
          <img
            key={index}
            src={ribbon}
            alt={`Ribbon ${index + 1}`}
            className={`absolute top-1/2 left-1/2 w-32 h-96 object-cover transform -translate-x-1/2 -translate-y-1/2 animate-pulse-ribbon`}
            style={{
              animationDelay: `${delay}ms`,
            }}
          />
        );
      })}
    </div>
  );
}
