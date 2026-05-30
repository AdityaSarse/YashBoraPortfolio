import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const changingTexts = [
  "YASH BORA",
  "AI ENGINEER",
  "PROBLEM SOLVER",
  "TECH CREATOR"
];

export default function Hero({ active }) {
  const [textIndex, setTextIndex] = useState(0);
  const textRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    if (!active) return;

    const ctx = gsap.context(() => {
      // 1. Concentric rings compress inward and expand outward in a seamless loop
      gsap.to('.hero-ring', {
        scale: 0.95,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        stagger: {
          each: 0.2,
          from: 'center'
        }
      });

      // 2. Entrance reveal animation for central elements
      gsap.from('.hero-reveal', {
        opacity: 0,
        y: 30,
        duration: 1.5,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.1
      });

      // 3. Circle reveal stagger for the rings themselves at startup
      gsap.from('.hero-ring', {
        opacity: 0,
        scale: 0.7,
        duration: 2.0,
        stagger: 0.1,
        ease: 'power4.out'
      });
    }, heroRef);

    return () => ctx.revert();
  }, [active]);

  useEffect(() => {
    if (!active) return;

    // 4. Text rotation fade/slide upward transition loop
    const interval = setInterval(() => {
      gsap.to(textRef.current, {
        y: -25,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.in',
        onComplete: () => {
          setTextIndex((prev) => (prev + 1) % changingTexts.length);
          gsap.set(textRef.current, { y: 25 });
          gsap.to(textRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power2.out'
          });
        }
      });
    }, 3200);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <section 
      ref={heroRef}
      className="relative flex flex-col items-center justify-center w-full min-h-screen overflow-hidden bg-[#F4F4F4] py-16 px-4 select-none tech-grid-bg"
    >
      {/* BACKGROUND: Concentric Circular Outlines Centered on Screen */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        {/* Ring 1: Inner Orbit */}
        <div className="hero-ring circle-ring w-[240px] h-[240px] border border-[#D9D9D9] absolute rounded-full"></div>
        
        {/* Ring 2: Medium Orbit */}
        <div className="hero-ring circle-ring w-[380px] h-[380px] border border-[#D9D9D9] absolute rounded-full"></div>
        
        {/* Ring 3: Beautiful Accent Double Ring (Slight Blue-Grey) */}
        <div className="hero-ring circle-ring w-[540px] h-[540px] border border-[#7C98A4]/40 absolute rounded-full flex items-center justify-center">
          <div className="w-[530px] h-[530px] border border-[#7C98A4]/15 rounded-full"></div>
        </div>
        
        {/* Ring 4: Large Outer Orbit */}
        <div className="hero-ring circle-ring w-[780px] h-[780px] border border-[#D9D9D9] absolute rounded-full"></div>
        
        {/* Ring 5: Giant Viewport Orbit */}
        <div className="hero-ring circle-ring w-[1100px] h-[1100px] border border-[#D9D9D9]/50 absolute rounded-full"></div>

        {/* Ring 6: Screen Edge Orbit */}
        <div className="hero-ring circle-ring w-[1450px] h-[1450px] border border-[#D9D9D9]/20 absolute rounded-full"></div>
      </div>

      {/* CENTER CONTENT CONTAINER */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-2xl w-full">
        
        {/* 1. Static Grayscale Profile Avatar */}
        <div className="hero-reveal w-[140px] h-[140px] rounded-full overflow-hidden border border-[#D9D9D9] bg-white p-1 shadow-sm mb-6 flex items-center justify-center">
          <img 
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300&h=300" 
            alt="Yash Bora" 
            className="w-full h-full object-cover rounded-full filter grayscale contrast-110 select-none"
            draggable="false"
          />
        </div>

        {/* 2. Role Text */}
        <p className="hero-reveal text-[11px] font-medium tracking-[0.45em] text-[#6B7280] uppercase mb-4 md:mb-6">
          SOFTWARE ENGINEER
        </p>

        {/* 3. Animated Name / Changing Text */}
        <div className="hero-reveal h-[40px] md:h-[64px] flex items-center justify-center overflow-hidden mb-8 md:mb-12">
          <h1 
            ref={textRef} 
            className="text-[28px] md:text-[52px] font-light tracking-[0.2em] md:tracking-[0.25em] text-[#111111] font-serif uppercase select-text"
          >
            {changingTexts[textIndex]}
          </h1>
        </div>

        {/* 4. Navigation Links */}
        <nav className="hero-reveal flex flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-2 border-t border-b border-[#D9D9D9]/40">
          <a 
            href="#about" 
            className="text-[10px] md:text-[11px] font-semibold tracking-[0.25em] text-[#6B7280] hover:text-[#111111] transition-colors duration-300 uppercase clickable"
          >
            ABOUT
          </a>
          <a 
            href="#experience" 
            className="text-[10px] md:text-[11px] font-semibold tracking-[0.25em] text-[#6B7280] hover:text-[#111111] transition-colors duration-300 uppercase clickable"
          >
            EXPERIENCE
          </a>
          <a 
            href="#skills" 
            className="text-[10px] md:text-[11px] font-semibold tracking-[0.25em] text-[#6B7280] hover:text-[#111111] transition-colors duration-300 uppercase clickable"
          >
            SKILLS
          </a>
          <a 
            href="#projects" 
            className="text-[10px] md:text-[11px] font-semibold tracking-[0.25em] text-[#6B7280] hover:text-[#111111] transition-colors duration-300 uppercase clickable"
          >
            PROJECTS
          </a>
        </nav>
      </div>

      {/* BOTTOM ELEMENT: Floating circular home/scroll button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hero-reveal">
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-[50px] h-[50px] rounded-full bg-[#7C98A4] hover:bg-[#68828D] text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer clickable group"
          aria-label="Scroll Down"
        >
          {/* Home / Arrow Down Icon */}
          <svg 
            className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-y-0.5" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </div>
    </section>
  );
}
