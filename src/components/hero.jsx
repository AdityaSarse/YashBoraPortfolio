import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const changingTexts = [
  "YASH BORA",
  "AI ENGINEER",
  "GEN AI BUILDER",
  "ML ENGINEER",
];

export default function Hero({ active }) {
  const [textIndex, setTextIndex] = useState(0);
  const textRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const ctx = gsap.context(() => {
      // Continuous ring pulse
      gsap.to('.hero-ring', {
        scale: 1.05, duration: 4, repeat: -1, yoyo: true,
        ease: 'sine.inOut',
        stagger: { each: 0.3, from: 'center' }
      });

      // Entrance animations
      const tl = gsap.timeline();
      tl.from('.hero-ring', {
        opacity: 0, scale: 0, duration: 1.5, stagger: 0.1,
        ease: 'expo.out'
      })
      .from('.hero-reveal', {
        opacity: 0, y: 40, duration: 1.2, stagger: 0.2,
        ease: 'power4.out'
      }, '-=1');
    }, heroRef);
    return () => ctx.revert();
  }, [active]);

  useEffect(() => {
    if (!active) return;
    const interval = setInterval(() => {
      gsap.to(textRef.current, {
        y: -25, opacity: 0, duration: 0.6, ease: 'power2.in',
        onComplete: () => {
          setTextIndex((prev) => (prev + 1) % changingTexts.length);
          gsap.set(textRef.current, { y: 25 });
          gsap.to(textRef.current, { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' });
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
      {/* Concentric rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="hero-ring circle-ring w-[240px] h-[240px] border border-[#D9D9D9] absolute rounded-full"></div>
        <div className="hero-ring circle-ring w-[380px] h-[380px] border border-[#D9D9D9] absolute rounded-full"></div>
        <div className="hero-ring circle-ring w-[540px] h-[540px] border border-[#7C98A4]/40 absolute rounded-full flex items-center justify-center">
          <div className="w-[530px] h-[530px] border border-[#7C98A4]/15 rounded-full"></div>
        </div>
        <div className="hero-ring circle-ring w-[780px] h-[780px] border border-[#D9D9D9] absolute rounded-full"></div>
        <div className="hero-ring circle-ring w-[1100px] h-[1100px] border border-[#D9D9D9]/50 absolute rounded-full"></div>
        <div className="hero-ring circle-ring w-[1450px] h-[1450px] border border-[#D9D9D9]/20 absolute rounded-full"></div>
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-2xl w-full">

        {/* Profile photo */}
        <div className="hero-reveal w-[160px] h-[160px] rounded-full overflow-hidden border border-[#D9D9D9] bg-black p-0 shadow-sm mb-6 flex items-center justify-center">
          <img
            src="hero.png"
            alt="Yash Bora"
            className="w-full h-full object-cover object-top rounded-full select-none"
            draggable="false"
          />
        </div>

        {/* Role label */}
        <p className="hero-reveal text-[11px] font-medium tracking-[0.45em] text-[#6B7280] uppercase mb-4 md:mb-6">
          AI / ML ENGINEER
        </p>

        {/* Animated name */}
        <div className="hero-reveal h-[40px] md:h-[64px] flex items-center justify-center overflow-hidden mb-8 md:mb-12">
          <h1
            ref={textRef}
            className="text-[28px] md:text-[52px] font-light tracking-[0.2em] md:tracking-[0.25em] text-[#111111] font-serif uppercase select-text"
          >
            {changingTexts[textIndex]}
          </h1>
        </div>

        {/* Nav links */}
        <nav className="hero-reveal flex flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-2 border-t border-b border-[#D9D9D9]/40">
          {['ABOUT', 'EXPERIENCE', 'SKILLS', 'PROJECTS'].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-[10px] md:text-[11px] font-semibold tracking-[0.25em] text-[#6B7280] hover:text-[#111111] transition-colors duration-300 uppercase clickable"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* Scroll button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hero-reveal">
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-[50px] h-[50px] rounded-full bg-[#7C98A4] hover:bg-[#68828D] text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer clickable group"
          aria-label="Scroll Down"
        >
          <svg className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </div>
    </section>
  );
}
