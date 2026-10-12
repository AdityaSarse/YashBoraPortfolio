import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    logoNode: <img src="/logos/parallelminds.png" alt="Parallel Minds" />,
    role: "GenAI Intern",
    companyPrimary: "Parallel Minds",
    location: "Pune, India",
    techStack: [
      { name: "Python" },
      { name: "LangChain" },
      { name: "OpenAI" },
      { name: "Hugging Face" },
      { name: "GenAI" },
      { name: "FastAPI" },
      { name: "PostgreSQL" },
    ],
    date: "JUL 2026 – PRESENT",
    bullets: [
      "Build AI agents and Generative AI applications in Python using LangChain and large language models for production use cases.",
      "Develop RAG pipelines with embeddings and vector databases to power intelligent information retrieval.",
      "Engineer and iterate on prompts to improve response quality, accuracy, and AI workflow performance.",
      "Build REST APIs with FastAPI and integrate AI services into production-ready applications backed by PostgreSQL.",
    ]
  },
  {
    logoNode: <img src="/logos/eduplus.png" alt="Edu Plus Now" />,
    role: "AI/ML Intern — Artificial Intelligence, Machine Learning, GenAI & LLM",
    companyPrimary: "edu plus now",
    companySub: "UDNAV ERP Software Technologies",
    companySubItalic: "(A Vishwakarma Group Initiative)",
    location: "Pune, India",
    techStack: [
      { name: "Python" },
      { name: "AI/Neural" },
      { name: "OpenAI" },
      { name: "Hugging Face" },
      { name: "LangChain" },
      { name: "GenAI" },
      { name: "Streamlit" },
      { name: "FastAPI" },
      { name: "Gemini" },
      { name: "Groq" },
      { name: "Docker" },
    ],
    date: "JAN 2026 – APR 2026",
    bullets: [
      "Completed a 120-hour intensive internship program covering AI, Machine Learning, Generative AI, and Large Language Models (LLMs) in offline mode.",
      "Built AI applications with Streamlit interfaces and FastAPI services, integrating Gemini and Groq APIs for LLM workflows.",
      "Debugged Docker deployment issues and delivered AI tools on Hugging Face Spaces with full SDLC documentation, in association with PVG's College of Engineering and Technology, Pune.",
    ]
  },
  {
    logoNode: <img src="/logos/edunet.svg" alt="Edunet Foundation" />,
    role: "Project Intern — Machine Learning & Deep Learning",
    companyPrimary: "Edunet Foundation",
    location: "Pune, India",
    techStack: [
      { name: "Python" },
      { name: "TensorFlow" },
      { name: "Scikit-Learn" },
      { name: "Keras" },
      { name: "Seaborn" },
      { name: "Jupyter" },
    ],
    date: "JAN 2025 – FEB 2025",
    bullets: [
      "Applied 10+ ML/DL models (CNN, ARIMA) on large-scale datasets using TensorFlow and Scikit-Learn to solve real-world business problems.",
      "Succeeded in delivering 3 end-to-end AI solutions including image classification systems, achieving a 15% improvement in processing efficiency.",
      "Presented weekly project findings to mentors and maintained detailed technical documentation (SOPs) for all implemented models.",
    ]
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────
const toneFor = (name) => {
  if (['FastAPI', 'PostgreSQL', 'Docker', 'Streamlit'].includes(name)) return 'backend';
  if (['Python', 'LangChain', 'OpenAI', 'Hugging Face', 'GenAI', 'AI/Neural', 'Gemini', 'Groq', 'TensorFlow', 'Scikit-Learn', 'Keras'].includes(name)) return 'ml';
  return 'data';
};

export default function Experience({ selectedSkill, onSelectSkill, onHoverSkills }) {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    const motion = gsap.matchMedia();
    motion.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        gsap.from('.exp-header', { y: 24, opacity: 0, duration: .75, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 82%', once: true } });
        const cards = gsap.utils.toArray('.experience-card');
        cards.forEach((card, index) => {
          gsap.from(card, { y: 28, opacity: 0, duration: .7, delay: index * .1, ease: 'power3.out', clearProps: 'transform,opacity', scrollTrigger: { trigger: card, start: 'top 88%', once: true } });
          ScrollTrigger.create({ trigger: card, start: 'top 70%', onEnter: () => card.classList.add('is-reached'), onLeaveBack: () => card.classList.remove('is-reached') });
        });
        gsap.fromTo('.timeline-progress', { strokeDashoffset: 1 }, { strokeDashoffset: 0, ease: 'none', scrollTrigger: { trigger: timelineRef.current, start: 'top 72%', end: 'bottom 72%', scrub: true } });
      }, containerRef);
      return () => ctx.revert();
    });
    return () => motion.revert();
  }, []);

  const matchingCount = selectedSkill ? experiences.filter(exp => exp.techStack.some(tech => tech.name === selectedSkill)).length : 0;

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
          My professional journey.{' '}
          <span className="relative inline-block">
            Real-world impact.
            <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#111111]" />
          </span>
        </h3>
        {/* Subtitle */}
        <p className="text-[14px] text-[#6B7280] font-light leading-relaxed">
          Some of the internships and training experiences that shaped my journey in AI &amp; ML.
        </p>
        {selectedSkill && <div className="experience-filter" role="status">
          <span>{matchingCount ? `${matchingCount} ${matchingCount === 1 ? 'role' : 'roles'} using ${selectedSkill}` : `No listed role using ${selectedSkill}`}</span>
          <button type="button" onClick={() => onSelectSkill(null)}>Clear filter <span aria-hidden="true">×</span></button>
        </div>}
      </div>

      {/* ── Two-column card grid ── */}
      <div className="experience-timeline-wrap max-w-5xl mx-auto">
        <svg className="experience-timeline-line" viewBox="0 0 18 1000" preserveAspectRatio="none" aria-hidden="true">
          <path d="M9 0 V1000" vectorEffect="non-scaling-stroke" className="timeline-track" />
          <path d="M9 0 V1000" pathLength="1" vectorEffect="non-scaling-stroke" className="timeline-progress" />
        </svg>
      <ol ref={timelineRef} className="experience-timeline" aria-label="Professional experience timeline">
        {experiences.map((exp, idx) => (
          <li
            key={exp.companyPrimary}
            className={`experience-card rounded-[22px] p-8 shadow-[0_2px_16px_rgba(0,0,0,0.07)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.11)] transition-shadow duration-300 flex flex-col${selectedSkill ? (exp.techStack.some(tech => tech.name === selectedSkill) ? ' is-matched' : ' is-dimmed') : ''}`}
            onMouseEnter={() => onHoverSkills(exp.techStack.map(tech => tech.name))}
            onMouseLeave={() => onHoverSkills([])}
            onFocusCapture={() => onHoverSkills(exp.techStack.map(tech => tech.name))}
            onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) onHoverSkills([]); }}
          >
            {/* Logo — centered in a clean circle */}
            <div className="company-logo-wrap">
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
              {exp.techStack.map((tech) => (
                <span
                  key={tech.name}
                  title={tech.name}
                  data-tone={toneFor(tech.name)}
                  className={`experience-tech${selectedSkill === tech.name ? ' is-active' : ''}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>

            {/* Date */}
            <div className="text-[11.5px] tracking-[0.12em] text-[#72B3A2] font-semibold uppercase mb-4">
              {exp.date}
            </div>

            {/* Bullets */}
            <button type="button" className="experience-details-toggle" aria-expanded={expandedIndex === idx} aria-controls={`experience-details-${idx}`} onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}>
              <span>{expandedIndex === idx ? 'Hide details' : 'View details'}</span>
              <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m5 7 5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <div id={`experience-details-${idx}`} className={`experience-details${expandedIndex === idx ? ' is-open' : ''}`} aria-hidden={expandedIndex !== idx}>
            <ul className="space-y-2.5 text-[13.5px] text-[#4B5563] font-light leading-relaxed select-text">
              {exp.bullets.map((b, bIdx) => (
                <li key={bIdx} className="flex gap-2.5 items-start">
                  <span className="text-[#111111] mt-[5px] shrink-0">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            </div>
          </li>
        ))}
      </ol>
      </div>
    </section>
  );
}
