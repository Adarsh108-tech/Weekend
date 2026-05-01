"use client";

import React from 'react';

const EnlistmentCard = ({ title, tag, link, description }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block perspective-1000"
    >
      {/* Background Layer with Skew */}
      <div className="relative bg-doom-black/60 backdrop-blur-xl border border-doom-green/20 p-8 rounded-none skew-x-[-10deg] group-hover:skew-x-0 group-hover:border-doom-green transition-all duration-500 shadow-[10px_10px_0px_0px_rgba(57,255,20,0.1)] group-hover:shadow-neon">

        {/* Animated Corner Tag */}
        <div className="absolute top-0 right-0 px-3 py-1 bg-doom-green/10 text-doom-green font-tech text-[10px] uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
          Open_Link
        </div>

        {/* Content with Counter-Skew */}
        <div className="skew-x-[10deg] group-hover:skew-x-0 transition-all duration-500">
          <span className="font-tech text-doom-green text-[10px] tracking-[0.3em] uppercase block mb-2">
            Protocol: {tag}
          </span>

          <h3 className="font-heading text-white text-3xl uppercase italic mb-4 group-hover:text-doom-green transition-colors">
            {title}
          </h3>

          <p className="font-body text-doom-silver text-sm mb-6 opacity-70">
            {description}
          </p>

          {/* Action Bar */}
          <div className="flex items-center gap-2">
            <div className="h-[1px] flex-grow bg-doom-green/20 group-hover:bg-doom-green/50 transition-colors" />
            <span className="font-tech text-xs text-doom-green animate-pulse">
              [ ACCESS_MANIFESTO ]
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default function Register() {
  const deploymentZones = [
    {
      title: "Commit Happens",
      tag: "Dev_Gauntlet",
      description: "Initialize your compiler. Submit your repository for high-intensity code evaluation.",
      link: "https://your-dev-link.com"
    },
    {
      title: "Deco Disaster",
      tag: "UX_Matrix",
      description: "Enter the design interface. Reconstruct the visual experience of the digital void.",
      link: "https://your-design-link.com"
    },
    {
      title: "Model Wars",
      tag: "Neural_Arena",
      description: "Train your weights. Deploy your algorithms in the high-stakes AI combat zone.",
      link: "https://your-ai-link.com"
    }
  ];

  return (
    <section id="register" className="py-24 bg-doom-black relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-5">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#39ff14_1px,_transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-heading text-3xl md:text-5xl text-white uppercase italic">
            Select Your <span className="text-doom-green">Deployment_Zone</span>
          </h2>
          <div className="flex justify-center items-center gap-4 mt-4">
            <div className="w-12 h-[1px] bg-doom-green/50" />
            <span className="font-tech text-xs text-doom-silver tracking-[0.5em]">ENLIST_NOW</span>
            <div className="w-12 h-[1px] bg-doom-green/50" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {deploymentZones.map((zone, index) => (
            <EnlistmentCard
              key={index}
              title={zone.title}
              tag={zone.tag}
              description={zone.description}
              link={zone.link}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}