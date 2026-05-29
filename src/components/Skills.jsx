import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── All skill icons as inline SVG / emoji ────────────────────────────────────
const skills = [
  {
    name: "Python",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none">
        <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.89S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.403 3.35-3.403h5.769s3.24.052 3.24-3.13V3.13S18.28 0 11.914 0zm-3.2 1.812a1.04 1.04 0 1 1 0 2.08 1.04 1.04 0 0 1 0-2.08z" fill="#366994"/>
        <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752H12v-.826h8.131S24 18.211 24 12.031c0-6.18-3.403-5.96-3.403-5.96h-2.03v2.867s.109 3.403-3.35 3.403H9.448s-3.24-.052-3.24 3.13v5.399S5.72 24 12.086 24zm3.2-1.812a1.04 1.04 0 1 1 0-2.08 1.04 1.04 0 0 1 0 2.08z" fill="#FFC331"/>
      </svg>
    ),
  },
  {
    name: "TensorFlow",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9">
        <path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31z" fill="#FF8000"/>
        <path d="M22.708 5.856L12.46 0v10.963l6.168 3.564V7.603l4.08 2.356-.016-4.103z" fill="#FF8000"/>
        <path d="M18.628 14.189l-6.168-3.226v6.452l6.168 3.614V14.19z" fill="#FF8000"/>
      </svg>
    ),
  },
  {
    name: "PyTorch",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="#EE4C2C">
        <path d="M12.005 0L4.952 7.053a9.865 9.865 0 000 14.022 9.866 9.866 0 0014.022 0 9.866 9.866 0 000-14.022L16.6 9.427a4.497 4.497 0 010 6.366 4.498 4.498 0 01-6.366 0 4.498 4.498 0 010-6.366zM14.552 2.105a.934.934 0 110 1.868.934.934 0 010-1.868z"/>
      </svg>
    ),
  },
  {
    name: "Scikit-Learn",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9">
        <circle cx="8" cy="8.5" r="4.2" fill="#3499CD"/>
        <circle cx="14.5" cy="8.5" r="4.2" fill="#F7931E"/>
        <circle cx="11.2" cy="14.5" r="4.2" fill="#2D6F9E"/>
      </svg>
    ),
  },
  {
    name: "OpenCV",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none">
        <circle cx="12" cy="6" r="4" fill="#5C3EE8"/>
        <circle cx="5" cy="17" r="4" fill="#3DBDE5"/>
        <circle cx="19" cy="17" r="4" fill="#E85C33"/>
      </svg>
    ),
  },
  {
    name: "FastGPT",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3" fill="#EE4C2C"/>
        <path d="M13.5 7l-4 5h4.5L10.5 17" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "LangChain",
    icon: <span className="text-4xl select-none" role="img" aria-label="LangChain">🦜</span>,
  },
  {
    name: "LangSmith",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none" stroke="#7C98A4" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"/>
      </svg>
    ),
  },
  {
    name: "LangGraph",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none">
        <circle cx="12" cy="5" r="3" fill="#00C4B4"/>
        <circle cx="5" cy="18" r="3" fill="#7C98A4"/>
        <circle cx="19" cy="18" r="3" fill="#7C98A4"/>
        <line x1="12" y1="8" x2="6.5" y2="15.5" stroke="#7C98A4" strokeWidth="1.5"/>
        <line x1="12" y1="8" x2="17.5" y2="15.5" stroke="#7C98A4" strokeWidth="1.5"/>
        <line x1="5" y1="18" x2="19" y2="18" stroke="#7C98A4" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: "Hugging Face",
    icon: <span className="text-4xl select-none" role="img" aria-label="Hugging Face">🤗</span>,
  },
  {
    name: "Pandas",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="#130754">
        <rect x="4" y="2" width="4" height="20" rx="2"/>
        <rect x="16" y="2" width="4" height="20" rx="2"/>
        <rect x="8" y="7" width="8" height="4" rx="1" fill="#E70488"/>
        <rect x="8" y="13" width="8" height="4" rx="1" fill="#E70488"/>
      </svg>
    ),
  },
  {
    name: "NumPy",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="#4DABCF">
        <path d="M11 3L3 7v5l8 4 8-4V7L11 3zM3 14v3l8 4 8-4v-3l-8 4-8-4z"/>
      </svg>
    ),
  },
  {
    name: "Seaborn",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9">
        <rect x="2" y="14" width="3.5" height="8" rx="1" fill="#4C72B0"/>
        <rect x="7" y="9" width="3.5" height="13" rx="1" fill="#5F87C6"/>
        <rect x="12" y="11" width="3.5" height="11" rx="1" fill="#7C9BD4"/>
        <rect x="17" y="5" width="3.5" height="17" rx="1" fill="#9FB8E5"/>
        <line x1="2" y1="22" x2="22" y2="22" stroke="#555" strokeWidth="0.8"/>
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="#336791">
        <path d="M17.128 0a10.134 10.134 0 00-2.755.403l-.063.02A10.922 10.922 0 0012 .24a10.9 10.9 0 00-2.31.183l-.063-.02A10.134 10.134 0 006.872 0C3.308 0 0 2.625 0 7.147c0 2.044.827 3.696 2.123 4.677.22.164.446.298.672.398-.016.295-.026.59-.026.888C2.77 18.61 7.054 24 12 24s9.23-5.391 9.23-10.89c0-.298-.01-.593-.025-.888.226-.1.451-.234.672-.398C23.173 10.843 24 9.19 24 7.147 24 2.625 20.692 0 17.128 0z"/>
        <path d="M12 2.4c1.244 0 2.395.2 3.368.542-1.11.644-2.098 1.615-2.822 2.78a7.201 7.201 0 00-1.092 0c-.724-1.165-1.713-2.136-2.822-2.78A9.417 9.417 0 0112 2.4z" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: "Streamlit",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="#FF4B4B">
        <path d="M21 8.25L12 3 3 8.25v7.5L12 21l9-5.25v-7.5zM12 17.25L5.25 13.5v-3L12 14.25l6.75-3.75v3L12 17.25z"/>
      </svg>
    ),
  },
  {
    name: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="#181717">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: "Flask",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="#000">
        <path d="M10.285 3.312c.03-.04.06-.079.092-.117.265-.33.597-.618.968-.844.09-.054.183-.104.277-.15.026-.012.052-.024.078-.034C12.57 1.8 13.627 1.797 14.5 2.3c.144.083.283.177.414.284l.003.002c.087.072.17.148.248.228.008.008.016.017.024.026.07.076.135.155.196.237.198.267.35.566.444.884.095.322.124.663.076 1-.095.681-.452 1.247-.938 1.617L12.5 8l.5 2H8L8 8l-2.5-1.622C4.57 5.805 4.095 4.868 4.21 3.9c.116-.97.772-1.727 1.603-1.938.28-.07.566-.088.85-.052.17.022.338.063.498.12.16.058.312.133.454.222.246.153.453.36.598.617.082.143.14.299.165.463a1.484 1.484 0 01-.042.639c-.03.105-.073.206-.127.303-.055.097-.12.188-.196.271L7 4.5c0 0 1.065 1.098 2.285 1.05C9.73 5.526 10.136 5.25 10.285 3.312z"/>
        <path d="M9 10c0 0-4.5 4-4.5 8.5C4.5 21 7.5 23 12 23s7.5-2 7.5-4.5C19.5 14 15 10 15 10H9z" fill="#ccc"/>
      </svg>
    ),
  },
  {
    name: "Render",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="#46E3B7">
        <path d="M3 3h8.5a9.5 9.5 0 010 19H3V3zm2 2v15h6.5a7.5 7.5 0 000-15H5z"/>
        <circle cx="17" cy="12" r="2.5" fill="#46E3B7"/>
      </svg>
    ),
  },
  {
    name: "Colab",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none">
        <circle cx="12" cy="12" r="10" fill="#F9AB00"/>
        <path d="M7 12a5 5 0 015-5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
        <path d="M17 12a5 5 0 01-5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
        <polygon points="10,9 15,12 10,15" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: "C++",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="#00599C">
        <path d="M10.5 15.5H8v-2.5H5.5v-2H8V8.5h2.5v2.5H13v2h-2.5V15.5zM20 12c0-4.42-3.58-8-8-8s-8 3.58-8 8 3.58 8 8 8 8-3.58 8-8zM6 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6zm8.5 3.5v-2.5H17v-2h-2.5V8.5h-2v2.5H10v2h2.5V15.5h2z"/>
      </svg>
    ),
  },
  {
    name: "Java",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="#007396">
        <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.749-.891 1.254-.999.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.819M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.542 1.644-2.469 6.197-3.665 5.19-7.624M9.734 23.924c4.322.277 10.959-.153 11.116-2.19 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.631"/>
      </svg>
    ),
  },
];

export default function Skills() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".skills-header", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      tl.from(".skill-circle", {
        y: 40,
        opacity: 0,
        scale: 0.85,
        duration: 0.7,
        stagger: { each: 0.05, from: "center" },
        ease: "power3.out",
      }, "-=0.4");

      gsap.to(".skill-circle", {
        y: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { each: 0.09, from: "random" },
      });

      tl.from(".skills-home-btn", {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
      }, "-=0.3");
    }, containerRef);

    const timer = setTimeout(() => ScrollTrigger.refresh(), 800);
    return () => { ctx.revert(); clearTimeout(timer); };
  }, []);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative w-full bg-[#F4F4F4] overflow-hidden py-20 px-6 md:px-20 select-none"
    >
      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="skills-header text-[12px] md:text-[13px] uppercase tracking-[0.45em] text-[#7C98A4] font-semibold mb-4">
          SKILLS
        </h2>
        <p className="skills-header text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#6B7280]">
          OVER 4 YEARS OF CODING PROFICIENCY
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-[960px] mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-5 justify-items-center">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            title={skill.name}
            className="skill-circle flex flex-col items-center gap-2 cursor-pointer group"
          >
            {/* Circle */}
            <div className="w-[80px] h-[80px] md:w-[90px] md:h-[90px] rounded-full border border-[#7C98A4]/30 hover:border-[#7C98A4] bg-white flex items-center justify-center shadow-sm transition-all duration-300 hover:scale-108 hover:shadow-md group-hover:bg-[#F9FBFC]">
              {skill.icon}
            </div>
            {/* Label */}
            <span className="text-[10px] font-medium tracking-wide text-[#6B7280] text-center leading-tight group-hover:text-[#7C98A4] transition-colors duration-200">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      {/* HOME BUTTON */}
      <div className="skills-home-btn flex justify-center mt-20">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-[52px] h-[52px] rounded-full bg-[#7C98A4] hover:bg-[#68828D] text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 clickable"
          aria-label="Back to Top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </button>
      </div>
    </section>
  );
}
