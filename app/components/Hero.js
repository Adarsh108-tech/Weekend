export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-doom-black">
      {/* 1. Tactical Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-doomsday-gradient opacity-40"></div>
        {/* Scanning Grid Effect */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(#39ff14 1px, transparent 1px), linear-gradient(90deg, #39ff14 1px, transparent 1px)`,
            backgroundSize: 'clamp(30px, 5vw, 50px) clamp(30px, 5vw, 50px)'
          }}
        ></div>
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0c_90%)]"></div>
      </div>

      {/* 2. Character Deployment Zones - Responsive Adjustments */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left Character - Hidden on very small screens or scaled down */}
        <div className="absolute left-[-20px] bottom-[10%] md:left-10 md:top-1/2 md:-translate-y-1/2 opacity-40 md:opacity-100 transition-all duration-700">
          <div className="w-20 h-20 md:w-40 md:h-40 border-l-2 border-b-2 border-doom-green/30 p-2 relative">
            <img src="/hulk.gif" alt="Hero 1" className="w-full h-full object-contain" />
            <div className="absolute -top-4 left-0 text-[6px] md:text-[8px] font-tech text-doom-green uppercase whitespace-nowrap">Unit_01: Active</div>
          </div>
        </div>

        {/* Right Character */}
        <div className="absolute right-[-20px] top-[15%] md:right-10 md:top-1/3 opacity-40 md:opacity-100 transition-all duration-700">
          <div className="w-20 h-20 md:w-40 md:h-40 border-r-2 border-t-2 border-doom-green/30 p-2 relative text-right">
            <img src="/spidey.gif" alt="Hero 2" className="w-full h-full object-contain" />
            <div className="absolute -bottom-4 right-0 text-[6px] md:text-[8px] font-tech text-doom-green uppercase whitespace-nowrap">Unit_02: Searching...</div>
          </div>
        </div>
      </div>

      {/* 3. Main Content */}
      <div className="relative w-full max-w-7xl mx-auto px-6 text-center z-10">
        {/* Title with Fluid Scaling */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-avengers text-white leading-none">
            <span className="block mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">ACM</span>
            <span
              className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-doom-green via-emerald-400 to-doom-green glitch-effect-strong py-2"
              data-text="Weekend"
            >
              Weekend
            </span>
          </h1>
        </div>

        {/* Tactical Subtext - Responsive Width */}
        <div className="max-w-xs sm:max-w-md md:max-w-xl mx-auto mb-10 md:mb-12 relative">
          <div className="absolute -left-4 lg:-left-10 top-1/2 w-4 lg:w-8 h-[1px] bg-doom-green/30 hidden sm:block"></div>
          <p className="font-tech text-[10px] md:text-sm text-doom-silver uppercase tracking-[0.15em] md:tracking-[0.2em] leading-relaxed">
            Temporal Displacement Detected <br className="sm:hidden" />
            <span className="text-white block sm:inline mt-1 sm:mt-0">09.05.26 — 10.05.26</span>
            <span className="hidden sm:inline mx-3 text-doom-green">//</span>
            <br className="sm:hidden" />
            <span className="animate-pulse text-doom-green sm:text-doom-silver">Virtual Battlefield</span>
          </p>
          <div className="absolute -right-4 lg:-right-10 top-1/2 w-4 lg:w-8 h-[1px] bg-doom-green/30 hidden sm:block"></div>
        </div>

        {/* Action Buttons - Mobile Column to Tablet Row */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
          <a
            href="#register"
            className="w-full sm:w-auto group relative px-8 md:px-10 py-3 md:py-4 bg-doom-green overflow-hidden text-center"
          >
            <div className="absolute inset-0 w-full h-full bg-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
            <span className="relative font-heading font-black text-black uppercase tracking-tighter text-base md:text-lg">
              Enlist Now
            </span>
          </a>

          <a
            href="#about"
            className="w-full sm:w-auto group px-8 md:px-10 py-3 md:py-4 border border-doom-silver/50 hover:border-doom-green transition-all relative overflow-hidden text-center"
          >
            <div className="absolute inset-0 bg-doom-green/10 translate-y-full group-hover:translate-y-0 transition-transform"></div>
            <span className="relative font-heading font-bold text-white group-hover:text-doom-green uppercase tracking-widest text-xs md:text-sm">
              Briefing
            </span>
          </a>
        </div>
      </div>

      {/* 4. Bottom HUD Elements - Scaled for Mobile */}
      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 font-tech text-[8px] md:text-[10px] text-doom-silver/30 uppercase md:vertical-text">
        System_Ref: 0x442_Doom
      </div>
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 font-tech text-[8px] md:text-[10px] text-doom-silver/30 uppercase">
        Signal: 98.4%
      </div>
    </section>
  );
}