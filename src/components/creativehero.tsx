"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CreativeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dropRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const drop = dropRef.current;
    if (!section || !track || !drop) return;

    // Drop lands exactly at vertical center of the section
    const sectionHeight = section.offsetHeight;
    const dropHeight = drop.offsetHeight;
    const distance = (sectionHeight * .5) - dropHeight / 2;

    const ctx = gsap.context(() => {
      // DROP: falls as section scrolls from entering viewport to its center hitting viewport center
      gsap.fromTo(
        drop,
        { y: 0 },
        {
          y: distance,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top center",    // section top hits viewport center → animation begins
            end: "center center",   // section center hits viewport center → drop lands
            scrub: 1,
            // markers: true,       // uncomment to debug
          },
        }
      );

      // CIRCLE: bursts open exactly when drop has landed (section center at viewport center)
      gsap.fromTo(
        circleRef.current,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: section,
            start: "center center",         // fires exactly when drop finishes
            toggleActions: "play none none reverse",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <main className="text-white ">
      {/* ── Animated Section ── */}
      <section
        ref={sectionRef}
        className="relative min-h-[120vh] flex items-center overflow-hidden" // ← flex items-center = vertical centering
      >
         {/* ── Background Strips ── */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <svg width="100%" height="100%" viewBox="0 0 1440 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      {/* Strip 1 — top-left diagonal */}
      <path d="M -100,100 Q 400,0 900,150 L 900,250 Q 400,100 -100,200 Z" fill="#0099FF" opacity="0.20" />
      {/* Strip 2 — center sweeping */}
      <path d="M 200,350 Q 700,250 1500,400 L 1500,500 Q 700,350 200,450 Z" fill="#100556" opacity="0.2" />
      {/* Strip 3 — bottom-right diagonal */}
      <path d="M 400,600 Q 900,500 1600,650 L 1600,750 Q 900,600 400,700 Z" fill="#FF4B82" opacity="0.2" />
    </svg>
  </div>
  
        {/* Track — spans full section height so drop distance calc is correct */}
        <div
          ref={trackRef}
          className="absolute right-[32.5%] top-0 bottom-0 w-[35px] z-0"
          // ← removed style={{ height: "70%" }} which conflicted with top-0/bottom-0
        >
          {/* Falling Water Drop */}
          <div
            ref={dropRef}
            className="w-full"
            style={{
              height: "50px",
              filter:
                "drop-shadow(0 0 20px rgba(255,255,255,0.3)) drop-shadow(0 0 40px rgba(0,153,255,0.3))",
            }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 35 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="dropGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0099FF" />
                  <stop offset="50%" stopColor="#100556" />
                  <stop offset="100%" stopColor="#FF4B82" />
                </linearGradient>
              </defs>
              <path
                d="M 17.5,0 C 28,12 35,22 35,32.5 A 17.5,17.5 0 1,1 0,32.5 C 0,22 7,12 17.5,0"
                fill="url(#dropGradient)"
              />
            </svg>
          </div>
        </div>

        {/* Content — w-full so flex layout fills section width */}
        <div className="relative z-10 flex items-center w-full mx-auto px-6">
          <div className="max-w-2xl pt-32 pb-2">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#100556]">
              As emerging technologies reshape industries, we've developed an
              AI-native approach to digital transformation.
            </h1>

            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              By harnessing the power of AI and the most innovative technologies,
              we help our customers accelerate growth, navigate complex challenges
              and drive success in rapidly evolving markets.
            </p>

           <button className="relative mt-8 p-[2px] rounded-full overflow-hidden group">
  {/* Animated Rainbow Border */}
  <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,#100556,#7B2FF7,#FF4B82,#100556)]" />

  {/* Button Content */}
  <span className="relative flex items-center justify-center px-6 py-3 rounded-full bg-white text-black font-semibold transition-all duration-300 group-hover:bg-gray-100">
    Get to know us
  </span>
</button>
          </div>

          <div className="space-y-48">
            {[
              { title: "Discovery", desc: "Understanding your vision", side: "left" },
              { title: "Strategy",  desc: "Mapping the blueprint",     side: "right" },
              { title: "Design",    desc: "Crafting the experience",   side: "left" },
              { title: "Launch",    desc: "Shipping to production",    side: "right" },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-8 ${
                  item.side === "right" ? "flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Circle reveal — inline transform uses only translate so GSAP owns scale cleanly */}
        <div
          ref={circleRef}
          className="absolute right-[6%] top-1/2 z-20 overflow-hidden"
          style={{
            width: "400px",
            height: "480px",
            // ← single transform; no Tailwind translate class competing with GSAP scale
            transform: "translate(-50%, -50%) scale(0)",
          }}
        >
          <img
            src="/robo.png"
            alt="Reveal"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </main>
  );
}