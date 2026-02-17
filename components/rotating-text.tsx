"use client";

import { useState, useEffect } from "react";

const lines = [
  "Hi I'm Erick",
  "75% UX Designer",
  "25% UI Designer",
  "100% Product Designer",
  "Fusing user needs with business outcomes",
];

export function RotatingText() {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % lines.length);
        setIsVisible(true);
      }, 400);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[1.2em] overflow-hidden relative">
      <p
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#09332C] tracking-tight transition-all duration-[400ms] ease-in-out"
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(-100%)",
          opacity: isVisible ? 1 : 0,
        }}
      >
        {lines[current]}
      </p>
    </div>
  );
}
