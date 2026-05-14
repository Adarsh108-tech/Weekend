"use client";

import React from 'react';
import ScrollReveal from './ScrollReveal';

const EnlistmentCard = ({ title, tag, link, description, index }) => {
  return (
    <ScrollReveal animation="slide-up" delay={index * 150} duration={600} className="w-full">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block perspective-1000 w-full mt-10"
      >
        {/* Fixed Bouncing Badge */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
          <div
            className="bg-doom-green text-black font-tech text-lg px-3 py-1 uppercase tracking-tighter shadow-[0_0_15px_rgba(57,255,20,0.4)] whitespace-nowrap"
            style={{ animation: 'bounce-slow 1s infinite' }}
          >
            Register Now
            {/* Small Pointer Notch */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-doom-green"></div>
          </div>
        </div>

        {/* Background Layer with Skew */}
        <div className="relative bg-white/90 dark:bg-doom-black/60 backdrop-blur-xl border border-gray-200 dark:border-doom-green/20 p-6 sm:p-8 rounded-none skew-x-[-10deg] group-hover:skew-x-0 hover:border-doom-green dark:hover:border-doom-green transition-all duration-500 shadow-md dark:shadow-[10px_10px_0px_0px_rgba(57,255,20,0.1)] group-hover:shadow-neon">

          {/* Animated Corner Tag */}
          <div className="absolute top-0 right-0 px-2 sm:px-3 py-1 bg-doom-green/10 text-doom-greenDark dark:text-doom-green transition-colors font-tech text-[8px] sm:text-[10px] uppercase tracking-widest opacity-60 group-hover:opacity-100">
            Open_Link
          </div>

          {/* Content with Counter-Skew */}
          <div className="skew-x-[10deg] group-hover:skew-x-0 transition-all duration-500">
            <span className="font-tech text-doom-greenDark dark:text-doom-green transition-colors text-[9px] sm:text-[10px] tracking-[0.3em] uppercase block mb-2">
              Protocol: {tag}
            </span>

            <h3 className="font-heading text-gray-900 dark:text-white text-2xl sm:text-3xl uppercase italic mb-3 sm:mb-4 group-hover:text-doom-greenDark dark:group-hover:text-doom-green transition-colors">
              {title}
            </h3>

            <p className="font-body text-gray-600 dark:text-doom-silver transition-colors text-xs sm:text-sm mb-6 dark:opacity-70 leading-relaxed">
              {description}
            </p>

            {/* Action Bar */}
            <div className="flex items-center gap-2">
              <div className="h-[1px] flex-grow bg-doom-green/20 group-hover:bg-doom-green/50 transition-colors" />
              <span className="font-tech text-[10px] sm:text-xs text-doom-greenDark dark:text-doom-green transition-colors animate-pulse tracking-tight">
                [ ACCESS_MANIFESTO ]
              </span>
            </div>
          </div>
        </div>
      </a>
    </ScrollReveal>
  );
};

export default function Register() {
  const deploymentZones = [
    {
      title: "Commit Happens",
      tag: "Dev_Gauntlet",
      description: "Initialize your compiler. Submit your repository for high-intensity code evaluation.",
      link: "https://commit-happens.vercel.app/"
    },
    {
      title: "Deco Disaster",
      tag: "UX_Matrix",
      description: "A fast-paced, intellectually stimulating puzzle-solving environment. Encourages lateral thinking and collaboration to solve creative challenges.",
      link: "https://register.decodisaster.live/"
    },
    {
      title: "Model Wars",
      tag: "Neural_Arena",
      description: "Train your weights. Deploy your algorithms in the high-stakes AI combat zone.",
      link: "https://forms.gle/ZJuie7MW9JmNBpzCA"
    }
  ];

  return (
    <section id="register" className="py-16 md:py-32 bg-gray-50 dark:bg-doom-black transition-colors duration-500 relative overflow-hidden px-4 sm:px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-5">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#39ff14_1px,_transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal animation="slide-down" duration={600} className="text-center mb-16 md:mb-24">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-gray-900 dark:text-white transition-colors uppercase italic tracking-tight">
            Select Your <span className="text-doom-greenDark dark:text-doom-green transition-colors">Deployment_Zone</span>
          </h2>
          <div className="flex justify-center items-center gap-3 sm:gap-4 mt-3 sm:mt-4">
            <div className="w-8 sm:w-12 h-[1px] bg-doom-green/50" />
            <span className="font-tech text-[10px] sm:text-xs text-gray-600 dark:text-doom-silver transition-colors tracking-[0.3em] sm:tracking-[0.5em]">ENLIST_NOW</span>
            <div className="w-8 sm:w-12 h-[1px] bg-doom-green/50" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-10">
          {deploymentZones.map((zone, index) => (
            <EnlistmentCard
              key={index}
              title={zone.title}
              tag={zone.tag}
              description={zone.description}
              link={zone.link}
              index={index}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}