"use client";

import React, { useEffect, useState, useRef } from 'react';
import ScrollReveal from './ScrollReveal';

const useVaultCounter = (end, trigger) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger || end === 0) return;
    let startTime;
    const duration = 2000;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      setValue(Math.floor(easeOutQuad * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [end, trigger]);

  return value;
};

const BountyCard = ({ prize, index }) => {
  return (
    <ScrollReveal animation="slide-up" delay={index * 120} duration={600} className="w-full">
      <div className="group relative perspective-1000">
        <div className="relative bg-white/90 dark:bg-doom-black/60 backdrop-blur-xl border border-gray-200 dark:border-doom-green/20 p-5 md:p-8 rounded-none skew-x-[-10deg] md:group-hover:skew-x-0 hover:border-doom-green dark:hover:border-doom-green transition-all duration-500 shadow-md dark:shadow-[10px_10px_0px_0px_rgba(57,255,20,0.1)] group-hover:shadow-neon">

          <div className="absolute top-0 right-0 w-2 h-2 bg-doom-green shadow-neon opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="skew-x-[10deg] md:group-hover:skew-x-0 transition-all duration-500">
            <div className="flex justify-between items-start mb-4 md:mb-6">
              <span className="font-tech text-[8px] md:text-[10px] text-doom-greenDark dark:text-doom-green transition-colors tracking-[0.3em] uppercase">
                Priority_High
              </span>
              <span className="text-gray-400 dark:text-white/20 transition-colors font-heading text-lg md:text-xl italic">
                0{prize.rank}
              </span>
            </div>

            <h4 className="font-heading text-gray-700 dark:text-doom-silver transition-colors text-xs md:text-sm uppercase mb-1 tracking-widest">
              {prize.label}
            </h4>

            <div className="flex items-baseline gap-2">
              <span className="text-doom-greenDark dark:text-doom-green transition-colors font-heading text-2xl md:text-4xl">₹</span>
              <span className="text-gray-900 dark:text-white transition-colors font-heading text-3xl md:text-5xl tracking-tighter">
                {prize.amount.toLocaleString()}
              </span>
            </div>

            <div className="mt-4 md:mt-6 flex gap-1">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="h-1 flex-grow bg-doom-green/10 group-hover:bg-doom-green/40 transition-colors"
                  style={{ transitionDelay: `${i * 30}ms` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default function Prizes() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const totalDisplay = useVaultCounter(18000, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const eventData = [
    {
      name: "Commit Happens",
      tag: "Dev Gauntlet",
      prizes: [
        { rank: 1, amount: 3000, label: "Apex Predator" },
        { rank: 2, amount: 2000, label: "Elite Operative" },
        { rank: 3, amount: 1000, label: "Field Agent" }
      ]
    },
    {
      name: "Deco Disaster",
      tag: "Design Matrix",
      prizes: [
        { rank: 1, amount: 3000, label: "Visual Overlord" },
        { rank: 2, amount: 2000, label: "Style Architect" },
        { rank: 3, amount: 1000, label: "Draftsman" }
      ]
    },
    {
      name: "Model Wars",
      tag: "Neural Arena",
      prizes: [
        { rank: 1, amount: 3000, label: "AI Sovereign" },
        { rank: 2, amount: 2000, label: "Core Optimizer" },
        { rank: 3, amount: 1000, label: "Logic Builder" }
      ]
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="prizes"
      className="py-16 md:py-32 bg-white dark:bg-doom-black transition-colors duration-500 relative overflow-hidden px-4 sm:px-6"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: `radial-gradient(#39ff14 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Total Prize HUD */}
        <ScrollReveal animation="scale" duration={800} className="flex flex-col items-center mb-20 md:mb-36 w-full">
          <div className="flex items-center gap-4 md:gap-12 w-full justify-center">

            <div className="hidden md:block w-24 h-24 lg:w-32 lg:h-32 scale-x-[-1] pointer-events-none shrink-0">
              <img src="/coin.gif" alt="decorative" className="w-full h-full object-contain opacity-50" />
            </div>

            <div className="relative inline-block text-center p-6 sm:p-8 md:p-12 border border-gray-200 dark:border-doom-green/10 bg-white/90 dark:bg-doom-green/5 backdrop-blur-sm w-full max-w-lg shadow-lg dark:shadow-[0_0_25px_rgba(57,255,20,0.05)] transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-doom-green to-transparent animate-pulse" />
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-doom-green to-transparent animate-pulse" />

              <h2 className="font-tech text-doom-greenDark dark:text-doom-green transition-colors text-[9px] sm:text-xs uppercase tracking-[0.3em] md:tracking-[0.8em] mb-3 md:mb-4">
                Consolidated_Bounty_Pool
              </h2>

              <div className="flex items-center justify-center">
                <span className="text-gray-900 dark:text-white transition-colors font-heading text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tighter tabular-nums">
                  ₹{totalDisplay.toLocaleString()}
                </span>
              </div>

              <div className="mt-4 flex justify-center items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-doom-greenDark dark:bg-doom-green animate-ping" />
                <span className="font-tech text-[8px] md:text-[10px] text-gray-600 dark:text-doom-silver transition-colors uppercase tracking-widest">
                  Connection_Secure
                </span>
              </div>
            </div>

            <div className="hidden md:block w-24 h-24 lg:w-32 lg:h-32 pointer-events-none shrink-0">
              <img src="/coin.gif" alt="decorative" className="w-full h-full object-contain opacity-50" />
            </div>
          </div>
        </ScrollReveal>

        {/* Sections */}
        <div className="space-y-20 md:space-y-36">
          {eventData.map((event, eIdx) => (
            <div key={eIdx} className="relative">
              <ScrollReveal animation="slide-left" duration={600} className="flex flex-col md:flex-row md:items-end gap-2 md:gap-4 mb-8 md:mb-12 border-b border-gray-200 dark:border-doom-green/10 pb-4">
                <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white transition-colors uppercase italic tracking-tight">
                  {event.name}
                </h3>
                <span className="font-tech text-doom-greenDark/70 dark:text-doom-green/60 transition-colors text-[10px] md:text-xs uppercase tracking-widest mb-1">
                  [{event.tag}]
                </span>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                {event.prizes.map((prize, pIdx) => (
                  <BountyCard key={pIdx} prize={prize} index={pIdx} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
      `}</style>
    </section>
  );
}