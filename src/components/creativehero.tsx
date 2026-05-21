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

    // Distance = track height minus drop height so it lands inside the track
   const sectionHeight = section.offsetHeight;
    const dropHeight = drop.offsetHeight;
      const distance = (sectionHeight / 2) - (dropHeight / 2);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        drop,
        { y: 0 },
        {
          y: distance,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "center center",
            scrub: 1,
            markers: true,
          },
        }
      );
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
      start: "center center",      // exact scroll position where drop ends
      toggleActions: "play none none reverse",
    },
  }
);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <main className="text-white border-4 border-black">
      {/* Animated Section */}
      <section
        ref={sectionRef}
        className="relative min-h-[100vh] overflow-hidden"
      >
        {/* Track — same position and height as your original line */}
        <div
          ref={trackRef}
          className="absolute right-[31.4%] top-0 w-[35px] -translate-x-1/2 z-0"
          style={{ height: "70%" }}
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
                <linearGradient
                  id="dropGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
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

        {/* Content Nodes along the line */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-32">
          <div className="text-center mb-32"></div>

          <div className="space-y-48">
            {[
              {
                title: "Discovery",
                desc: "Understanding your vision",
                side: "left",
              },
              {
                title: "Strategy",
                desc: "Mapping the blueprint",
                side: "right",
              },
              {
                title: "Design",
                desc: "Crafting the experience",
                side: "left",
              },
              {
                title: "Launch",
                desc: "Shipping to production",
                side: "right",
              },
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
        {/* Circle reveal — sits exactly where the drop stops */}
<div
  ref={circleRef}
  className="absolute right-[31.4%] top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden"
  style={{
    width: "160px",
    height: "160px",
    transform: "translate(-50%, -50%) scale(0)", // GSAP will animate scale
  }}
>
  <img
    src="/your-image.jpg"
    alt="Reveal"
    className="w-full h-full object-cover"
  />
</div>
      </section>
    </main>
  );
}