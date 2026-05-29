import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Navbar({ active }) {
  const navRef = useRef(null);

  useEffect(() => {
    if (!active) return;

    // Soft GSAP entrance for the navbar elements
    const ctx = gsap.context(() => {
      gsap.from('.nav-fade-in', {
        y: -20,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.1
      });
    }, navRef);

    return () => ctx.revert();
  }, [active]);

  return (
    <header 
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center py-5 md:py-6 px-10 md:px-24 select-none bg-white/70 backdrop-blur-md border-b border-[#D9D9D9]/50 pointer-events-auto"
    >
      {/* Top Left: Social Icons */}
      <div className="flex items-center gap-8 nav-fade-in pointer-events-auto">
        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/yash-bora-149787290/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#909090] hover:text-[#111111] transition-colors duration-300 hover:-translate-y-0.5 transform inline-block clickable"
          aria-label="LinkedIn"
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>

        {/* Twitter / X */}
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#909090] hover:text-[#111111] transition-colors duration-300 hover:-translate-y-0.5 transform inline-block clickable"
          aria-label="Twitter X"
        >
          <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/YashBora21" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#909090] hover:text-[#111111] transition-colors duration-300 hover:-translate-y-0.5 transform inline-block clickable"
          aria-label="GitHub"
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>

        {/* Instagram */}
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#909090] hover:text-[#111111] transition-colors duration-300 hover:-translate-y-0.5 transform inline-block clickable"
          aria-label="Instagram"
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0 3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
      </div>

      {/* Top Right: GET IN TOUCH */}
      <div className="nav-fade-in pointer-events-auto">
        <a 
          href="mailto:yashbora567@gmail.com"
          className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-[#6B7280] hover:text-[#111111] transition-all duration-300 clickable"
        >
          {/* Mail Icon */}
          <svg className="w-5 h-5 text-inherit" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          <span>GET IN TOUCH</span>
        </a>
      </div>
    </header>
  );
}
