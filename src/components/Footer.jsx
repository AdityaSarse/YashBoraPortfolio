import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[#F4F4F4] border-t border-[#D9D9D9]/40 select-none text-center select-none tech-grid-bg">
      <div className="custom-container flex flex-col md:flex-row md:justify-between items-center gap-6">
        {/* Logo Text */}
        <span className="text-[11px] font-bold tracking-[0.3em] text-[#111111] uppercase font-serif">
          YASH BORA — SYSTEMS ENGINE
        </span>
        
        {/* Copyright */}
        <span className="text-[10px] tracking-widest text-[#B6B6B6] uppercase">
          © {currentYear} ALL RIGHTS RESERVED. INVENTED WITH MINIMALISM.
        </span>

        {/* Back To Top */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-[10px] tracking-widest text-[#6B7280] hover:text-[#111111] font-bold uppercase transition-colors duration-300 clickable"
        >
          BACK TO APEX ▲
        </button>
      </div>
    </footer>
  );
}
