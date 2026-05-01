"use client";

import React, { useEffect, useState, useRef, useCallback } from 'react';

// Reusable Scramble Hook
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
      iteration += 1 / 3;
    }, 30);
  }, [text]);

  return { displayedText, startScramble };
};

const MissionCard = ({ mission, index }) => {
  const { displayedText: title, startScramble } = useScramble(mission.title);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) startScramble();
      },
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [startScramble]);

  // Determine if content is on the left or right
  const isLeft = index % 2 === 0;

  return (
    <div ref={cardRef} className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 mb-24 last:mb-0">

      {/* Timeline Dot (Desktop only centered) */}
      <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-doom-green bg-doom-black shadow-neon z-20 absolute left-1/2 -translate-x-1/2">
        <div className="w-2 h-2 bg-doom-green rounded-full animate-ping" />
      </div>

      {/* TEXT SIDE */}
      <div className={`w-full md:w-[42%] order-2 ${isLeft ? 'md:order-1' : 'md:order-3'}`}>
        <div className="relative p-6 md:p-8 bg-card-gradient border border-doom-green/20 rounded-xl group hover:border-doom-green/50 transition-all duration-500 shadow-xl h-full flex flex-col justify-center">
          {/* HUD Brackets */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-doom-green/40 group-hover:border-doom-green transition-colors" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-doom-green/40 group-hover:border-doom-green transition-colors" />

          <div className="font-tech text-doom-green text-[10px] mb-3 uppercase tracking-[0.3em] flex justify-between items-center">
            <span>Mission {mission.id} // {mission.time}</span>
            <span className="h-[1px] flex-grow mx-4 bg-doom-green/20" />
          </div>

          <h3 className="text-2xl md:text-3xl font-heading text-white mb-4 uppercase tracking-tighter">
            {title}
          </h3>

          <div className="font-tech inline-flex w-fit px-3 py-1 bg-doom-green/5 text-doom-green text-[10px] border border-doom-green/20 mb-6 uppercase">
            Scheduled: {mission.date}
          </div>

          <p className="font-body text-doom-silver text-base leading-relaxed">
            {mission.description}
          </p>
        </div>
      </div>

      {/* VISUAL SIDE (GIF) */}
      <div className={`w-full md:w-[42%] order-1 ${isLeft ? 'md:order-3' : 'md:order-1'} self-stretch`}>
        <div className="relative h-full min-h-[250px] rounded-xl overflow-hidden border border-doom-green/10 transition-all">
          {/* Scanned Line Overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-transparent via-doom-green/10 to-transparent h-[10%] w-full animate-scan opacity-40" />

          <img
            src={mission.gif}
            alt="Mission Visual"
            className="w-full h-full object-cover transition-all duration-700 opacity-60 group-hover:opacity-100"
          />

          {/* Terminal Overlay */}
          <div className="absolute bottom-4 left-4 z-20">
            <div className="font-tech text-[8px] text-doom-green bg-doom-black/80 px-2 py-1 border border-doom-green/20">
              VISUAL_FEED_{mission.id} : ACTIVE
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default function Events() {
  const missions = [
    {
      id: "01",
      title: "COMMIT HAPPENS",
      date: "9th May 2026",
      time: "17:00 HRS",
      gif: "/dr-launch.gif", // Replace with your local or hosted gif
      description: "A high-intensity hack sprint. Given real-world problem statements, you must ideate, design, and build functional prototypes under pressure. Sharpen your tools, the compiler waits for no one."
    },
    {
      id: "02",
      title: "DECO DISASTER",
      date: "10th May 2026",
      time: "14:00 HRS",
      gif: "/drdoom-walkforward.gif",
      description: "A fast-paced, intellectually stimulating puzzle-solving environment. Encourages lateral thinking and collaboration to solve creative challenges. The interface is broken; only you can fix it."
    },
    {
      id: "03",
      title: "MODEL WARS",
      date: "10th May 2026",
      time: "17:00 HRS",
      gif: "/drdoom-airattack.gif",
      description: "Dive into AI and Machine Learning. Build and optimize models on real datasets while bridging the gap between theory and practical application. May the best weights win."
    }
  ];

  return (
    <section id="events" className="py-24 bg-doom-black relative overflow-hidden border-t border-doom-green/10">

      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(57,255,20,0.03)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-32">
          <h2 className="font-heading text-4xl md:text-6xl text-white uppercase tracking-widest">
            Primary <span className="text-doom-green drop-shadow-[0_0_15px_#39ff14]">Missions</span>
          </h2>
          <p className="font-tech text-doom-silver/40 text-[10px] mt-4 tracking-[0.5em]">SYSTEM_INITIALIZED // SELECT_OBJECTIVE</p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line (Desktop Only) */}
          <div className="absolute hidden md:block left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-doom-green/5 via-doom-green/40 to-doom-green/5" />

          {/* Map through missions */}
          <div className="relative space-y-32 md:space-y-0">
            {missions.map((m, idx) => (
              <MissionCard key={idx} mission={m} index={idx} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(1000%); }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }
      `}</style>
    </section>
  );
}