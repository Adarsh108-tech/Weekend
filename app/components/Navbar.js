"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer if user scrolls down significantly
  useEffect(() => {
    if (isOpen && !visible) setIsOpen(false);
  }, [visible, isOpen]);

  const navLinks = [
    { name: "Protocol", href: "#about" },
    { name: "Missions", href: "#events" },
    { name: "Rewards", href: "#prizes" },
    { name: "Archive", href: "#timeline" },
  ];

  return (
    <>
      {/* 1. MAIN NAVIGATION BAR */}
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ease-in-out ${scrolled
          ? 'bg-doom-black/95 backdrop-blur-xl border-b border-doom-green/40'
          : 'bg-transparent border-b border-transparent'
          } ${visible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-doom-green to-transparent animate-pulse opacity-50" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-20 md:h-24' : 'h-28 md:h-32'
            }`}>

            {/* LEFT: Logo Assembly */}
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="flex -space-x-4 md:-space-x-5">
                <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-doom-green/50 bg-doom-black p-2 rotate-45 group-hover:rotate-0 transition-all duration-500 overflow-hidden shadow-neon-small">
                  <img src="/logos/acm_dark_logo.png" alt="ACM" className="-rotate-45 group-hover:rotate-0 transition-transform duration-500 w-full h-full object-contain" />
                </div>
                <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-doom-green/50 bg-doom-black p-2 rotate-45 group-hover:rotate-0 transition-all duration-500 overflow-hidden shadow-neon-small">
                  <img src="/logos/Spartans-Logo-White-Variant.png" alt="Event" className="-rotate-45 group-hover:rotate-0 transition-transform duration-500 w-full h-full object-contain" />
                </div>
                <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-doom-green/50 bg-doom-black p-2 rotate-45 group-hover:rotate-0 transition-all duration-500 overflow-hidden shadow-neon-small">
                  <img src="/logos/ipulogo.png" alt="Org" className="-rotate-45 group-hover:rotate-0 transition-transform duration-500 w-full h-full object-contain" />
                </div>
              </div>
              <div className="hidden lg:block ml-2 border-l border-doom-green/20 pl-6">
                <span className="block text-[10px] font-tech text-doom-green leading-none tracking-[0.4em] uppercase mb-1">Authenticated_Terminal</span>
                <span className="text-white font-heading text-2xl italic tracking-tighter uppercase">ACM_WEEKEND</span>
              </div>
            </div>

            {/* RIGHT: Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-baseline space-x-1">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} className="relative px-4 py-2 font-tech text-[11px] text-doom-silver hover:text-doom-green uppercase tracking-widest transition-all group">
                    <span className="relative z-10">{link.name}</span>
                    <div className="absolute inset-0 bg-doom-green/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-300" />
                  </a>
                ))}
              </div>
              <a href="#register" className="relative group overflow-hidden bg-doom-green px-8 py-3 shadow-neon hover:scale-105 transition-all active:scale-95">
                <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative font-tech text-sm font-black text-black uppercase tracking-tighter">Enlist_Now</span>
              </a>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(true)} className="p-3 text-doom-green border border-doom-green/20 bg-doom-green/5">
                <Menu size={32} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. MOBILE DRAWER (Moved Outside <nav> to prevent transparency inheritance) */}
      <div
        className={`fixed inset-0 z-[200] transition-all duration-300 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'
          }`}
      >
        {/* Backdrop overlay */}
        <div
          className="absolute inset-0 bg-black/95 transition-opacity"
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar Panel - Now strictly opaque */}
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm flex flex-col p-8 transition-transform duration-500 ease-in-out border-l border-doom-green/30 ${isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          style={{ backgroundColor: '#0a0a0c', boxShadow: '-20px 0 60px rgba(0,0,0,1)' }}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-2">
              <Terminal className="text-doom-green animate-pulse" size={20} />
              <span className="font-tech text-[10px] text-doom-green uppercase tracking-widest">Access_Granted</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-doom-green transition-colors p-1"
            >
              <X size={40} />
            </button>
          </div>

          {/* Links */}
          <div className="space-y-10">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block font-heading text-4xl text-white italic uppercase hover:text-doom-green transition-all transform hover:translate-x-2"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-10 border-t border-doom-green/20">
              <a
                href="#register"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-doom-green text-black font-tech font-bold py-5 text-xs uppercase shadow-neon"
              >
                Register
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-auto pb-6">
            <div className="flex items-center gap-3 py-4 border-t border-white/5">
              <div className="w-2 h-2 rounded-full bg-doom-green animate-ping" />
              <span className="font-tech text-[10px] text-doom-silver/80 uppercase tracking-widest">
                Terminal_Status: Secure
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}