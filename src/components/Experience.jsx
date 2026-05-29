import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ─── edu plus now logo ────────────────────────────────────────────────────────
const EduPlusNowLogo = () => (
  <svg viewBox="0 0 120 60" className="w-[80px] h-[40px]" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28 48 A22 22 0 1 1 50 10" stroke="url(#arcGrad2)" strokeWidth="7" strokeLinecap="round" fill="none" />
    <line x1="10" y1="30" x2="46" y2="30" stroke="url(#arcGrad2)" strokeWidth="7" strokeLinecap="round" />
    <text x="46" y="14" fontSize="13" fontWeight="900" fill="#00B5A5" fontFamily="sans-serif">+</text>
    <text x="58" y="26" fontSize="11" fontWeight="800" fill="#0D3349" fontFamily="sans-serif" letterSpacing="-0.3">edu</text>
    <text x="58" y="38" fontSize="11" fontWeight="800" fill="#0D3349" fontFamily="sans-serif" letterSpacing="-0.3">plus</text>
    <rect x="57" y="41" width="24" height="11" rx="2" fill="#00B5A5" />
    <text x="69" y="49.5" fontSize="8" fontWeight="700" fill="white" fontFamily="sans-serif" textAnchor="middle">now</text>
    <defs>
      <linearGradient id="arcGrad2" x1="10" y1="10" x2="50" y2="50" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0D3349" />
        <stop offset="100%" stopColor="#00B5A5" />
      </linearGradient>
    </defs>
  </svg>
);

// ─── Edunet Foundation logo ───────────────────────────────────────────────────
const EdunetLogo = () => (
  <div className="flex flex-col items-center justify-center font-sans select-none">
    <span className="text-[19px] font-extrabold text-[#0B2545] tracking-tight leading-none">edunet</span>
    <span className="text-[9px] font-semibold text-[#F26419] tracking-wider leading-none mt-0.5">foundation</span>
  </div>
);

// ─── Tech icon SVGs ───────────────────────────────────────────────────────────
const PythonIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
    <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.89S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.403 3.35-3.403h5.769s3.24.052 3.24-3.13V3.13S18.28 0 11.914 0zm-3.2 1.812a1.04 1.04 0 1 1 0 2.08 1.04 1.04 0 0 1 0-2.08z" fill="#366994"/>
    <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752H12v-.826h8.131S24 18.211 24 12.031c0-6.18-3.403-5.96-3.403-5.96h-2.03v2.867s.109 3.403-3.35 3.403H9.448s-3.24-.052-3.24 3.13v5.399S5.72 24 12.086 24zm3.2-1.812a1.04 1.04 0 1 1 0-2.08 1.04 1.04 0 0 1 0 2.08z" fill="#FFC331"/>
  </svg>
);

const TensorFlowIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
    <path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31z" fill="#FF8000"/>
    <path d="M22.708 5.856L12.46 0v10.963l6.168 3.564V7.603l4.08 2.356-.016-4.103z" fill="#FF8000"/>
    <path d="M18.628 14.189l-6.168-3.226v6.452l6.168 3.614V14.19z" fill="#FF8000"/>
  </svg>
);

const ScikitLearnIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7">
    <circle cx="8" cy="8.5" r="4" fill="#3499CD"/>
    <circle cx="14" cy="8.5" r="4" fill="#F7931E"/>
    <circle cx="11" cy="14" r="4" fill="#2D6F9E"/>
  </svg>
);

const KerasIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="#D00000"/>
    <path d="M7 5h2.5v5.5L13.5 5H17l-4.5 6 5 8h-3.5L10.5 12v7H7V5z" fill="white"/>
  </svg>
);

const SeabornIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7">
    <rect x="3" y="14" width="3" height="7" rx="1" fill="#4C72B0"/>
    <rect x="8" y="9" width="3" height="12" rx="1" fill="#5F87C6"/>
    <rect x="13" y="11" width="3" height="10" rx="1" fill="#7C9BD4"/>
    <rect x="18" y="5" width="3" height="16" rx="1" fill="#9FB8E5"/>
    <line x1="3" y1="21" x2="21" y2="21" stroke="#333" strokeWidth="0.75"/>
  </svg>
);

const JupyterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
    <circle cx="12" cy="12" r="10" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="0.5"/>
    <ellipse cx="12" cy="10" rx="6" ry="2.5" stroke="#F37726" strokeWidth="1.5" fill="none"/>
    <circle cx="6" cy="10" r="1" fill="#F37726"/>
    <circle cx="18" cy="10" r="1" fill="#F37726"/>
    <circle cx="12" cy="17" r="1.2" fill="#979797"/>
  </svg>
);

const OpenAIIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#10A37F">
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.677l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.833-3.387 2.019-1.168a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.411-.663zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
  </svg>
);

const HuggingFaceIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7">
    <circle cx="12" cy="12" r="10" fill="#FFD21E"/>
    <text x="12" y="16" fontSize="11" textAnchor="middle" dominantBaseline="middle">🤗</text>
  </svg>
);

const LangChainIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
    <circle cx="12" cy="12" r="10" fill="#F4F4F4" stroke="#D9D9D9" strokeWidth="1"/>
    <text x="7.5" y="14.5" fontSize="10" textAnchor="middle">🦜</text>
    <text x="16.5" y="14.5" fontSize="10" textAnchor="middle">🔗</text>
  </svg>
);

const GenAIIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#9B5DE5">
    <path d="M12 2l2.4 7.2 7.2 2.4-7.2 2.4-2.4 7.2-2.4-7.2-7.2-2.4 7.2-2.4z"/>
    <path d="M19 4l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" fill="#F15BB5"/>
  </svg>
);

// ─── Experience Data — only the 2 real internships ───────────────────────────
const experiences = [
  {
    logoNode: <EduPlusNowLogo />,
    role: "AI/ML Intern — Artificial Intelligence, Machine Learning, GenAI & LLM",
    companyPrimary: "edu plus now",
    companySub: "UDNAV ERP Software Technologies",
    companySubItalic: "(A Vishwakarma Group Initiative)",
    location: "Pune, India",
    techStack: [
      { name: "Python",       icon: <PythonIcon /> },
      { name: "AI/Neural",    icon: <GenAIIcon /> },
      { name: "OpenAI",       icon: <OpenAIIcon /> },
      { name: "Hugging Face", icon: <HuggingFaceIcon /> },
      { name: "LangChain",    icon: <LangChainIcon /> },
      { name: "GenAI",        icon: <GenAIIcon /> },
    ],
    date: "JAN 2026 – APR 2026",
    bullets: [
      "Completed a 120-hour intensive internship program covering AI, Machine Learning, Generative AI, and Large Language Models (LLMs) in offline mode.",
      "Gained hands-on experience with GenAI concepts including Transformer architectures, LLMs, prompt engineering, and RAG-based systems.",
      "Collaborated with peers on applied AI projects in association with PVG's College of Engineering and Technology, Pune.",
    ]
  },
  {
    logoNode: <EdunetLogo />,
    role: "Project Intern — Machine Learning & Deep Learning",
    companyPrimary: "Edunet Foundation",
    location: "Pune, India",
    techStack: [
      { name: "Python",       icon: <PythonIcon /> },
      { name: "TensorFlow",   icon: <TensorFlowIcon /> },
      { name: "Scikit-Learn", icon: <ScikitLearnIcon /> },
      { name: "Keras",        icon: <KerasIcon /> },
      { name: "Seaborn",      icon: <SeabornIcon /> },
      { name: "Jupyter",      icon: <JupyterIcon /> },
    ],
    date: "JAN 2025 – FEB 2025",
    bullets: [
      "Applied 10+ ML/DL models (CNN, ARIMA) on large-scale datasets using TensorFlow and Scikit-Learn to solve real-world business problems.",
      "Delivered 3 end-to-end AI solutions including image classification systems, achieving a 15% improvement in processing efficiency.",
      "Presented weekly project findings to mentors and maintained detailed technical documentation (SOPs) for all implemented models.",
    ]
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Experience() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 78%',
          toggleActions: 'play none none none'
        }
      });

      tl.from('.exp-header', { y: 35, opacity: 0, duration: 0.85, ease: 'power3.out' });
      tl.from('.experience-card', {
        y: 55, opacity: 0, duration: 1.0, stagger: 0.2, ease: 'power3.out'
      }, '-=0.5');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full bg-[#F0F2F4] py-20 px-6 md:px-12 select-none overflow-hidden"
    >
      {/* ── Header ── */}
      <div className="exp-header w-full flex flex-col items-center text-center mb-14">
        {/* Label */}
        <h2 className="text-[11px] font-semibold tracking-[0.5em] text-[#6B7280] uppercase mb-3">
          E X P E R I E N C E
        </h2>
        {/* Teal underline accent */}
        <div className="w-8 h-[2.5px] bg-[#72B3A2] rounded-full mb-6" />
        {/* Display heading */}
        <h3 className="w-full text-[26px] md:text-[32px] font-bold text-[#111111] leading-tight mb-4">
          Hands-on experience.{' '}
          <span className="relative inline-block">
            Real-world impact.
            <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#111111]" />
          </span>
        </h3>
        {/* Subtitle */}
        <p className="text-[14px] text-[#6B7280] font-light leading-relaxed whitespace-nowrap">
          Some of the internships and training experiences that shaped my journey in AI &amp; ML.
        </p>
      </div>

      {/* ── Two-column card grid ── */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="experience-card bg-white rounded-[22px] p-8 shadow-[0_2px_16px_rgba(0,0,0,0.07)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.11)] transition-shadow duration-300 flex flex-col"
          >
            {/* Logo — centered in a clean circle */}
            <div className="w-[96px] h-[96px] rounded-full bg-[#F7F8FA] border border-[#EBEBEB] flex items-center justify-center mb-7 mx-auto">
              {exp.logoNode}
            </div>

            {/* Role */}
            <h4 className="text-[17px] md:text-[18px] font-semibold text-[#111111] leading-snug mb-3 select-text">
              {exp.role}
            </h4>

            {/* Company primary + optional sub, same line */}
            <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 mb-1 select-text">
              <span className="text-[13px] font-bold text-[#72B3A2]">{exp.companyPrimary}</span>
              {exp.companySub && (
                <>
                  <span className="text-[#BDBDBD] text-[11px] leading-none">·</span>
                  <span className="text-[12px] font-semibold text-[#E07B39]">{exp.companySub}</span>
                </>
              )}
            </div>

            {/* Italic sub + location */}
            {exp.companySubItalic && (
              <div className="text-[11.5px] text-[#6B7280] italic leading-tight mb-0.5 select-text">{exp.companySubItalic}</div>
            )}
            <div className="text-[12px] text-[#9CA3AF] mb-5 select-text">{exp.location}</div>

            {/* Tech stack icons — bigger, raw icons, no double-circle wrapper */}
            <div className="flex flex-wrap gap-2.5 mb-5">
              {exp.techStack.map((tech, tIdx) => (
                <div
                  key={tIdx}
                  title={tech.name}
                  className="w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform duration-200 clickable"
                >
                  {tech.icon}
                </div>
              ))}
            </div>

            {/* Date */}
            <div className="text-[11.5px] tracking-[0.12em] text-[#72B3A2] font-semibold uppercase mb-4">
              {exp.date}
            </div>

            {/* Bullets */}
            <ul className="space-y-2.5 text-[13.5px] text-[#4B5563] font-light leading-relaxed select-text flex-grow">
              {exp.bullets.map((b, bIdx) => (
                <li key={bIdx} className="flex gap-2.5 items-start">
                  <span className="text-[#111111] mt-[5px] shrink-0">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}