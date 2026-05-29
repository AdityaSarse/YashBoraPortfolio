import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Premium GSAP ScrollTrigger timeline matching reveal specifications
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      });

      // 1. Title slide-up & fade-in reveal
      tl.from('.about-title', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      // 2. Image slide + scale reveal
      tl.from('.about-img-container', {
        scale: 0.95,
        opacity: 0,
        y: 40,
        duration: 1.0,
        ease: 'power3.out'
      }, '-=0.5');

      // 3. Staggered content reveal: Heading first, Body second
      tl.from('.about-heading', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.6');

      tl.from('.about-body', {
        y: 25,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.5');

      // 4. Home floating button reveal
      tl.from('.about-home-btn', {
        scale: 0,
        opacity: 0,
        y: 15,
        duration: 0.6,
        ease: 'back.out(1.7)'
      }, '-=0.4');

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-between py-12 px-10 md:px-24 select-none bg-[#F4F4F4] border-b border-[#D9D9D9]/40 overflow-hidden tech-grid-bg"
    >


      {/* 2. SECTION TITLE: Centered at Top */}
      <div className="about-title text-center my-6">
        <h2 className="text-[12px] md:text-[13px] font-semibold tracking-[0.45em] text-[#7C98A4] uppercase font-sans">
          ABOUT
        </h2>
      </div>

      {/* 3. LAYOUT: Clean two-column responsive grid */}
      <div className="w-full flex-grow flex items-center justify-center py-6 md:py-10">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* LEFT COLUMN: Large Grayscale Portrait */}
          <div className="about-img-container flex justify-center lg:justify-start">
            <div className="w-full max-w-[460px] aspect-[4/5] md:aspect-[4/4.5] rounded-2xl overflow-hidden bg-white shadow-md border border-[#D9D9D9]/40 p-2">
              <img 
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800&h=800" 
                alt="Developer Beanie Portrait" 
                className="w-full h-full object-cover rounded-xl filter grayscale contrast-110 select-none"
                draggable="false"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Text Content */}
          <div className="flex flex-col space-y-6 text-left">
            <h3 className="about-heading text-3xl md:text-[38px] font-bold text-[#111111] leading-tight select-text">
              Here is a <span className="relative inline-block pb-1 select-text">little<span className="absolute bottom-0.5 left-0 w-full h-[1.5px] bg-[#7C98A4]"></span></span> background
            </h3>
            
            <div className="about-body space-y-5 text-[#6B7280] text-[15px] md:text-[17px] leading-relaxed font-light select-text">
              <p>
                Hey 👋 I am a Software / Machine Learning Engineer currently based in the United Kingdom. I did my undergraduate in Mechatronic Engineering in South Africa, and later completed my Masters degree in Computer Science with Artificial Intelligence at the University of Nottingham in the United Kingdom.
              </p>
              <p>
                I absolutely love all things to do with AI, robots and code. I also am a keen track cyclist, having competed both nationally and internationally for South Africa 🇿🇦
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* 4. BOTTOM ELEMENT: Floating Home Button */}
      <div className="about-home-btn w-full flex justify-center py-4 z-10">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-[50px] h-[50px] rounded-full bg-[#7C98A4] hover:bg-[#68828D] text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-108 active:scale-92 cursor-pointer clickable group"
          aria-label="Back To Top"
        >
          {/* Home Icon */}
          <svg className="w-5 h-5 text-white transition-transform duration-300 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
          </svg>
        </button>
      </div>

    </section>
  );
}
