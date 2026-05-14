"use client";

import React, { useEffect, useState, useRef, useCallback } from 'react';

const useScramble = (text) => {
  const [displayedText, setDisplayedText] = useState("");
  const chars = "!<>-_\\/[]{}—=+*^?#________";
  const intervalRef = useRef(null);

  const startScramble = useCallback(() => {
    let iteration = 0;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDisplayedText(
        text.split("").map((char, index) => {
          if (index < iteration) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );
      if (iteration >= text.length) clearInterval(intervalRef.current);
      iteration += 1 / 4;
    }, 40);
  }, [text]);

  return { displayedText, startScramble };
};

export default function About() {
  const sectionRef = useRef(null);
  const { displayedText: title, startScramble: scrambleTitle } = useScramble("THE BRIEFING");
  const { displayedText: subTitle, startScramble: scrambleSubTitle } = useScramble("OPERATIONAL STATUS: ACTIVE");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          scrambleTitle();
          scrambleSubTitle();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [scrambleTitle, scrambleSubTitle]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen flex items-center justify-center py-20 bg-white dark:bg-doom-black transition-colors duration-500 overflow-hidden border-y border-gray-200 dark:border-doom-green/20"
    >
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/95 dark:bg-doom-black/90 z-10" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
          style={{ backgroundImage: 'radial-gradient(#39ff14 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        />
      </div>

      {/* SCANLINE ANIMATION */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-doom-green/5 to-transparent h-[20%] w-full -translate-y-full animate-scan opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT: CONTENT COLUMN */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-[2px] w-8 bg-doom-green" />
                <span className="font-tech text-xs text-doom-greenDark dark:text-doom-green tracking-[0.3em] uppercase">
                  {subTitle}
                </span>
              </div>

              <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl text-gray-900 dark:text-white transition-colors uppercase tracking-tighter leading-none">
                {title.split(" ").map((word, i) => (
                  <span key={i} className={i === 1 ? "text-doom-greenDark dark:text-doom-green block lg:inline" : "block lg:inline"}>
                    {word}{" "}
                  </span>
                ))}
              </h2>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-doom-green via-doom-green/20 to-transparent hidden md:block" />
              <div className="font-body text-lg md:text-xl text-gray-700 dark:text-doom-silver transition-colors leading-relaxed space-y-6 max-w-xl">
                <p className="opacity-90">
                  Prepare to enter a <span className="text-gray-900 dark:text-white font-bold border-b border-doom-green/30">high-fidelity simulation</span> where reality and code collide. This is a 48-hour pressure cooker for the mind.
                </p>
                <p className="opacity-90">
                  Expect <span className="text-doom-greenDark dark:text-doom-green">rapid-fire problem solving</span> and the raw adrenaline of building at the absolute edge of possibility.
                </p>
              </div>
            </div>

            <div className="pt-8 flex items-center gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-doom-green/20 bg-doom-green/5 rounded-none skew-x-[-12deg]">
                <span className="font-tech text-xs text-doom-greenDark dark:text-doom-green tracking-widest uppercase">Encryption: MAX</span>
              </div>
              <p className="italic text-[10px] text-gray-400 dark:text-doom-silver/40 font-tech tracking-widest">
                // DATA_STREAM: ACTIVE
              </p>
            </div>
          </div>

          {/* RIGHT: IMAGE COLUMN */}
          <div className="relative order-1 lg:order-2 group">
            {/* Decorative Brackets around image */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-doom-green z-30 transition-all duration-500 group-hover:-top-2 group-hover:-left-2" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-doom-green z-30 transition-all duration-500 group-hover:-bottom-2 group-hover:-right-2" />

            {/* Main Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden skew-x-[-2deg] border border-gray-200 dark:border-doom-green/30 bg-gray-100 dark:bg-doom-black shadow-2xl transition-transform duration-700 group-hover:skew-x-0">
              <img
                src="/blaze.gif" // Replace with your image
                alt="Tactical Briefing"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 "
              />

              {/* Overlay HUD elements on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-doom-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 font-tech text-[10px] text-doom-green tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                TARGET_ACQUIRED: 100%
              </div>
            </div>

            {/* Floating Tech Deco */}
            <div className="absolute -right-8 top-1/4 hidden xl:block">
              <div className="font-tech text-[10px] text-doom-green/20 rotate-90 origin-left tracking-[1em] uppercase">
                Neural_Interface_Connected
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(500%); }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }
      `}</style>
    </section>
  );
}