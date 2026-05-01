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
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center py-12 md:py-24 bg-doom-black overflow-hidden border-y border-doom-green/20"
    >
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <img
          src="wall.webp"
          alt="Background"
          className="w-full h-full object-cover opacity-20 md:opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-doom-black/80 md:bg-doom-black/60 backdrop-blur-[1px]" />
      </div>

      {/* SCANLINE ANIMATION */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-doom-green/5 to-transparent h-[15%] w-full -translate-y-full animate-scan opacity-40" />
      </div>

      {/* Main Container */}
      <div className="w-full max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 relative z-20">

        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-7xl text-white uppercase tracking-tighter mb-4 leading-tight">
            {title.split(" ").map((word, i) => (
              <span key={i} className={i === 1 ? "text-doom-green drop-shadow-[0_0_10px_rgba(57,255,20,0.6)]" : ""}>
                {word}{" "}
              </span>
            ))}
          </h2>
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <div className="h-[1px] flex-1 max-w-[40px] bg-doom-green/30" />
            <span className="font-tech text-[8px] sm:text-xs text-doom-green uppercase tracking-[0.15em] md:tracking-[0.4em] animate-pulse whitespace-nowrap">
              {subTitle}
            </span>
            <div className="h-[1px] flex-1 max-w-[40px] bg-doom-green/30" />
          </div>
        </div>

        {/* Centered Content Card */}
        <div className="bg-doom-black/60 backdrop-blur-md p-6 sm:p-10 md:p-14 border border-doom-green/20 rounded-xl md:rounded-2xl shadow-neon-strong relative group transition-all duration-500">

          {/* Futuristic Corner Brackets: Adjusted offset for small screens */}
          <div className="absolute -top-[2px] -left-[2px] w-6 h-6 md:w-12 md:h-12 border-t-2 border-l-2 border-doom-green" />
          <div className="absolute -bottom-[2px] -right-[2px] w-6 h-6 md:w-12 md:h-12 border-b-2 border-r-2 border-doom-green" />

          <div className="space-y-6 md:space-y-10 text-center">
            {/* Encryption Level Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-doom-green/20 bg-doom-green/5 rounded-full">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-doom-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-doom-green"></span>
              </span>
              <span className="font-tech text-[7px] md:text-[10px] text-doom-green tracking-widest uppercase">Encryption: MAX</span>
            </div>

            {/* Paragraph text: Improved Mobile Leading */}
            <div className="font-body text-sm sm:text-lg md:text-xl text-doom-silver leading-relaxed md:leading-loose space-y-5 md:space-y-8 max-w-2xl mx-auto">
              <p className="opacity-90">
                Prepare to enter a <span className="text-white font-bold">high-fidelity simulation</span> where reality and code collide. This is a 48-hour pressure cooker for the mind.
              </p>
              <p className="opacity-90">
                Expect <span className="text-doom-green">rapid-fire problem solving</span> and the raw adrenaline of building at the absolute edge of possibility.
              </p>
            </div>

            {/* Footer Tech Text */}
            <div className="pt-6 border-t border-doom-green/10">
              <p className="italic text-[9px] md:text-sm text-doom-green/60 font-tech tracking-[0.2em]">
                // DATA_STREAM: OVERLOAD_EXPECTED
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.02] md:opacity-[0.05] pointer-events-none z-10"
        style={{ backgroundImage: 'linear-gradient(#39ff14 1px, transparent 1px), linear-gradient(90deg, #39ff14 1px, transparent 1px)', backgroundSize: '25px 25px' }}
      />

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(600%); }
        }
        .animate-scan {
          animation: scan 5s linear infinite;
        }
      `}</style>
    </section>
  );
}