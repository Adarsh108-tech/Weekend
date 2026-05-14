"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Terminal, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
          ? 'bg-white/95 dark:bg-doom-black/95 backdrop-blur-xl border-b border-gray-200 dark:border-doom-green/40 shadow-sm dark:shadow-none'
          : 'bg-transparent border-b border-transparent'
          } ${visible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-doom-green to-transparent animate-pulse opacity-50" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-20 md:h-24' : 'h-28 md:h-32'
            }`}>

            {/* LEFT: Logo Assembly */}
            <div className="flex items-center gap-3 md:gap-5 group cursor-pointer">
              <div className="flex -space-x-3 md:-space-x-4 group-hover:space-x-1 md:group-hover:space-x-2 transition-all duration-500 py-2">
                {[
                  { src: "/logos/acm_dark_logo.png", alt: "ACM" },
                  { src: "/logos/Spartans-Logo-White-Variant.png", alt: "Spartans" },
                  { src: "/logos/ipulogo.png", alt: "IPU" },
                  { src: "/logos/dtcACM.png", alt: "DTC" },
                  { src: "/logos/TEC.jpeg", alt: "TEC" },
                  { src: "/logos/snioe.png", alt: "SNIOE" },
                  { src: "/logos/snioeW.png", alt: "SNIOE White" },
                ].map((logo, idx) => (
                  <div key={idx} className="w-9 h-9 md:w-12 md:h-12 border border-gray-300 dark:border-doom-green/40 group-hover:border-doom-green bg-white dark:bg-doom-black p-1 rotate-45 group-hover:rotate-0 transition-all duration-500 overflow-hidden shadow-[0_0_8px_rgba(57,255,20,0.1)] dark:shadow-[0_0_8px_rgba(57,255,20,0.2)] group-hover:shadow-neon shrink-0 relative rounded-sm">
                    <img src={logo.src} alt={logo.alt} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500 w-full h-full object-contain" />
                  </div>
                ))}
              </div>
              <div className="hidden xl:block ml-2 border-l border-gray-300 dark:border-doom-green/20 pl-6">
                <span className="block text-[10px] font-tech text-doom-green leading-none tracking-[0.4em] uppercase mb-1">Authenticated_Terminal</span>
                <span className="text-gray-900 dark:text-white font-heading text-xl md:text-2xl italic tracking-tighter uppercase transition-colors">ACM_WEEKEND</span>
              </div>
            </div>

            {/* RIGHT: Desktop Nav */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <div className="flex items-baseline space-x-1">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} className="relative px-3 lg:px-4 py-2 font-tech text-[11px] text-gray-600 dark:text-doom-silver hover:text-doom-green dark:hover:text-doom-green uppercase tracking-widest transition-all group">
                    <span className="relative z-10">{link.name}</span>
                    <div className="absolute inset-0 bg-doom-green/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-300" />
                  </a>
                ))}
              </div>

              {/* Theme Switcher Button */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2.5 rounded-full border border-gray-300 dark:border-doom-green/30 bg-white dark:bg-doom-black hover:border-doom-green dark:hover:border-doom-green text-doom-greenDark dark:text-doom-green transition-all shadow-[0_0_8px_rgba(57,255,20,0.1)] hover:shadow-neon"
                  title="Toggle Theme"
                >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              )}

              <a href="#register" className="relative group overflow-hidden bg-doom-green px-6 lg:px-8 py-3 shadow-neon hover:scale-105 transition-all active:scale-95 shrink-0">
                <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative font-tech text-xs lg:text-sm font-black text-black uppercase tracking-tighter">Enlist_Now</span>
              </a>
            </div>

            {/* Mobile Toggle & Theme Switcher */}
            <div className="md:hidden flex items-center gap-3">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2.5 rounded-full border border-gray-300 dark:border-doom-green/30 bg-white dark:bg-doom-black text-doom-greenDark dark:text-doom-green shadow-[0_0_8px_rgba(57,255,20,0.1)]"
                >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              )}
              <button onClick={() => setIsOpen(true)} className="p-2.5 text-doom-green border border-gray-300 dark:border-doom-green/20 bg-doom-green/5">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-[200] transition-all duration-300 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'
          }`}
      >
        {/* Backdrop overlay */}
        <div
          className="absolute inset-0 bg-black/80 dark:bg-black/95 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm flex flex-col p-8 transition-transform duration-500 ease-in-out border-l border-gray-200 dark:border-doom-green/30 bg-white dark:bg-doom-black shadow-2xl ${isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-2">
              <Terminal className="text-doom-green animate-pulse" size={20} />
              <span className="font-tech text-[10px] text-doom-green uppercase tracking-widest">Access_Granted</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-600 dark:text-white hover:text-doom-green transition-colors p-1"
            >
              <X size={32} />
            </button>
          </div>

          {/* Links */}
          <div className="space-y-10">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block font-heading text-3xl text-gray-900 dark:text-white italic uppercase hover:text-doom-green transition-all transform hover:translate-x-2"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-10 border-t border-gray-200 dark:border-doom-green/20">
              <a
                href="#register"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-doom-green text-black font-tech font-bold py-4 text-xs uppercase shadow-neon"
              >
                Register
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-auto pb-6">
            <div className="flex items-center gap-3 py-4 border-t border-gray-200 dark:border-white/5">
              <div className="w-2 h-2 rounded-full bg-doom-green animate-ping" />
              <span className="font-tech text-[10px] text-gray-500 dark:text-doom-silver/80 uppercase tracking-widest">
                Terminal_Status: Secure
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}