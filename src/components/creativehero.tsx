 "use client";

import { useEffect, useRef, forwardRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LeftSection from "./creativehero-left-content";

gsap.registerPlugin(ScrollTrigger);

const CreativeHero = forwardRef<HTMLElement>((props, forwardedRef) => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dropRef = useRef<HTMLDivElement>(null);

  // Merge internal ref with forwarded ref so HomePage can measure the section
const setSectionRef = useCallback((el: HTMLElement | null) => {
  sectionRef.current = el;
  
  if (!forwardedRef) return;
  
  if (typeof forwardedRef === "function") {
    forwardedRef(el);
  } else {
    forwardedRef.current = el;
  }
}, [forwardedRef]);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const drop = dropRef.current;
    if (!section || !track || !drop) return;

    // Drop lands exactly at vertical center of the section
    const sectionHeight = section.offsetHeight;
    const dropHeight = drop.offsetHeight;
    const distance = (sectionHeight * 0.5) - dropHeight / 2;

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
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <main className="text-white">
      {/* ── Animated Section ── */}
      <section
        ref={setSectionRef}
        className="relative min-h-[120vh] flex items-center overflow-hidden"
      >

{/* ── Background Strips ── */}
<div className="absolute inset-0 z-0 pointer-events-none">
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 1440 900"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Strip 1 — Blue */}
    <path
      d="M 980,0 
         C 1150,200 1150,700 980,900 
         L 1026,900 
         C 1196,700 1196,200 1026,0 
         Z"
      fill="#0099FF"
      opacity="0.9"
    />

    {/* Strip 2 — Indigo */}
    <path
      d="M 1050,0 
         C 1220,250 1220,650 1050,900 
         L 1096,900 
         C 1266,650 1266,250 1096,0 
         Z"
      fill="#100556"
      opacity="0.9"
    />

    {/* Strip 3 — Pink */}
    <path
      d="M 1120,0 
         C 1290,300 1290,600 1120,900 
         L 1166,900 
         C 1336,600 1336,300 1166,0 
         Z"
      fill="#FF4B82"
      opacity="0.9"
    />
  </svg>
</div>
        
        {/* Track — spans full section height so drop distance calc is correct */}
        <div
          ref={trackRef}
          className="absolute right-[32.5%] top-0 bottom-0 w-[35px] z-0"
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

        {/* Content */}
        <LeftSection/>

        {/* 
          NOTE: The local robot circle has been removed.
          The global robot overlay in HomePage now appears at the exact same
          scroll position (Section 2 center → viewport center) and continues
          the journey across Sections 3 and 4.
        */}
      </section>
    </main>
  );
});

CreativeHero.displayName = "CreativeHero";
export default CreativeHero;