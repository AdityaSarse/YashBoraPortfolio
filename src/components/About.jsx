import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      });
      tl.from('.about-title', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' });
      tl.from('.about-img-container', { scale: 0.95, opacity: 0, y: 40, duration: 1.0, ease: 'power3.out' }, '-=0.5');
      tl.from('.about-heading', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6');
      tl.from('.about-body', { y: 25, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5');
      tl.from('.about-stat', { y: 20, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }, '-=0.4');
      tl.from('.about-home-btn', { scale: 0, opacity: 0, y: 15, duration: 0.6, ease: 'back.out(1.7)' }, '-=0.3');
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-between py-12 px-10 md:px-24 select-none bg-[#F4F4F4] border-b border-[#D9D9D9]/40 overflow-hidden tech-grid-bg"
    >
      {/* Section title */}
      <div className="about-title text-center my-6">
        <h2 className="text-[12px] md:text-[13px] font-semibold tracking-[0.45em] text-[#7C98A4] uppercase font-sans">
          ABOUT
        </h2>
      </div>

      {/* Two-column layout */}
      <div className="w-full flex-grow flex items-center justify-center py-6 md:py-10">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* LEFT: Portrait */}
          <div className="about-img-container flex justify-center lg:justify-start">
            <div className="w-full max-w-[420px] aspect-[4/5] rounded-2xl overflow-hidden bg-black shadow-md border border-[#D9D9D9]/40 p-0">

              <img
                src="/yash.png"
                alt="Yash Bora"
                className="w-full h-full object-cover object-top rounded-xl select-none"
                draggable="false"
              />
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="flex flex-col space-y-6 text-left">
            <h3 className="about-heading text-3xl md:text-[38px] font-bold text-[#111111] leading-tight select-text">
              Building AI that{' '}
              <span className="relative inline-block pb-1 select-text">
                matters
                <span className="absolute bottom-0.5 left-0 w-full h-[1.5px] bg-[#7C98A4]"></span>
              </span>
            </h3>

            <div className="about-body space-y-4 text-[#6B7280] text-[15px] md:text-[16px] leading-relaxed font-light select-text">
              <p>
                Hey 👋 I'm a final-year B.E. Information Technology student at PVG's College of Engineering and Technology, Pune — CGPA 9.16. I'm passionate about building intelligent systems at the intersection of Generative AI, RAG pipelines, and production-grade ML.
              </p>
              <p>
                I've shipped end-to-end AI solutions: from semantic search over 120K+ vector embeddings to deep learning models running at 96% accuracy in production. I enjoy the full stack — data → model → API → Docker → cloud.
              </p>
              <p>
                My long-term goal is to become an AI/ML Engineer contributing to products that create real-world impact through intelligent automation.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {[
                { val: '9.16', label: 'CGPA' },
                { val: '3+', label: 'Projects Deployed' },
                { val: '120K+', label: 'Vectors Indexed' },
              ].map((s) => (
                <div key={s.label} className="about-stat flex flex-col items-center justify-center bg-white rounded-xl py-4 px-2 border border-[#D9D9D9]/60 shadow-sm">
                  <span className="text-[22px] font-bold text-[#111111]">{s.val}</span>
                  <span className="text-[10px] tracking-widest text-[#7C98A4] uppercase mt-1 text-center">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <div className="about-home-btn w-full flex justify-center py-4 z-10">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-[50px] h-[50px] rounded-full bg-[#7C98A4] hover:bg-[#68828D] text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer clickable group"
          aria-label="Back To Top"
        >
          <svg className="w-5 h-5 text-white transition-transform duration-300 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
          </svg>
        </button>
      </div>
    </section>
  );
}
