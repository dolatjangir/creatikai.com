"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function LeftSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);

useEffect(() => {
  const reveals = gsap.utils.toArray(".reveal-text");

  reveals.forEach((text: any) => {
    gsap.to(text, {
      width: "100%",
      ease: "power2.out",

      scrollTrigger: {
        trigger: text,
        start: "top 85%",
        end: "top 55%",
        scrub: 1.5,
      },
    });
  });
}, []);

  return (
    <div className="relative z-10 flex items-center w-full mx-auto px-6">
      <div className="max-w-2xl pt-32 pb-2">
        
        {/* Heading */}
     <div className="space-y-3 ">
  
  {[
    "As emerging   technologies",
    "reshape industries, we've",
    "developed an AI-native",
    "approach to digital",
    "transformation.",
  ].map((line, i) => (
    
    <div
      key={i}
      className="reveal-wrapper relative overflow-hidden"
    >
      {/* Faded Base Text */}
      <h1 className="text-4xl md:text-5xl font-bold text-slate-300 leading-tight tracking-[-0.03em]">
        {line}
      </h1>

      {/* Blue Fill Text */}
      <h1 className="reveal-text absolute left-0 top-0 w-0 overflow-hidden whitespace-nowrap text-4xl md:text-5xl font-bold text-[#100556] leading-tight tracking-[-0.03em]">
        {line}
      </h1>
    </div>
  ))}
</div>

        {/* Paragraph */}
        <p
          ref={paraRef}
          className="mt-6 text-lg leading-relaxed text-neutral-500"
        >
          By harnessing the power of AI and the most innovative technologies,
          we help our customers accelerate growth, navigate complex challenges
          and drive success in rapidly evolving markets.
        </p>

        {/* Button */}
        <button className="relative my-8 p-[2px] rounded-full overflow-hidden group">
          <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,#100556,#7B2FF7,#FF4B82,#100556)]" />

          <span className="relative flex items-center justify-center px-6 py-3 rounded-full bg-white text-black font-semibold transition-all duration-300 group-hover:bg-gray-100">
            Get to know us
          </span>
        </button>
      </div>
    </div>
  );
}