// Project links updated with real URLs
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ─── Inline Tech Badge Icons ──────────────────────────────────────────────────
const IconPython = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
    <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.89S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.403 3.35-3.403h5.769s3.24.052 3.24-3.13V3.13S18.28 0 11.914 0zm-3.2 1.812a1.04 1.04 0 1 1 0 2.08 1.04 1.04 0 0 1 0-2.08z" fill="#366994"/>
    <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752H12v-.826h8.131S24 18.211 24 12.031c0-6.18-3.403-5.96-3.403-5.96h-2.03v2.867s.109 3.403-3.35 3.403H9.448s-3.24-.052-3.24 3.13v5.399S5.72 24 12.086 24zm3.2-1.812a1.04 1.04 0 1 1 0-2.08 1.04 1.04 0 0 1 0 2.08z" fill="#FFC331"/>
  </svg>
);
const IconCNN = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#D00000">
    <rect x="2" y="2" width="20" height="20" rx="4"/>
    <path d="M7 5h2.5v5.5L14 5H17l-4.5 6 5 8h-3.5L10.5 12v7H7V5z" fill="white"/>
  </svg>
);
const IconOpenCV = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
    <circle cx="12" cy="5.5" r="3.5" fill="#5C3EE8"/>
    <circle cx="5" cy="17" r="3.5" fill="#3DBDE5"/>
    <circle cx="19" cy="17" r="3.5" fill="#E85C33"/>
  </svg>
);
const IconKaggle = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#20BEFF">
    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.334"/>
  </svg>
);
const IconStreamlit = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#FF4B4B">
    <path d="M21 8.25L12 3 3 8.25v7.5L12 21l9-5.25v-7.5zM12 17.25L5.25 13.5v-3L12 14.25l6.75-3.75v3L12 17.25z"/>
  </svg>
);
const IconMatplotlib = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#11557C" strokeWidth="1.5"/>
    <path d="M4 16 Q8 8 12 12 Q16 16 20 8" stroke="#11557C" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  </svg>
);
const IconScikitLearn = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4">
    <circle cx="8" cy="8.5" r="4" fill="#3499CD"/>
    <circle cx="14.5" cy="8.5" r="4" fill="#F7931E"/>
    <circle cx="11" cy="14.5" r="4" fill="#2D6F9E"/>
  </svg>
);
const IconPandas = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#130754">
    <rect x="4" y="2" width="3.5" height="20" rx="1.5"/>
    <rect x="16.5" y="2" width="3.5" height="20" rx="1.5"/>
    <rect x="7.5" y="7" width="9" height="4" rx="1" fill="#E70488"/>
    <rect x="7.5" y="13" width="9" height="4" rx="1" fill="#E70488"/>
  </svg>
);
const IconRender = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#46E3B7">
    <path d="M3 3h8.5a9.5 9.5 0 010 19H3V3zm2 2v15h6.5a7.5 7.5 0 000-15H5z"/>
  </svg>
);
const IconTensorFlow = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4">
    <path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31z" fill="#FF8000"/>
    <path d="M22.708 5.856L12.46 0v10.963l6.168 3.564V7.603l4.08 2.356-.016-4.103z" fill="#FF8000"/>
    <path d="M18.628 14.189l-6.168-3.226v6.452l6.168 3.614V14.19z" fill="#FF8000"/>
  </svg>
);
const IconPyTorch = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#EE4C2C">
    <path d="M12.005 0L4.952 7.053a9.865 9.865 0 000 14.022 9.866 9.866 0 0014.022 0 9.866 9.866 0 000-14.022L16.6 9.427a4.497 4.497 0 010 6.366 4.498 4.498 0 01-6.366 0 4.498 4.498 0 010-6.366z"/>
  </svg>
);
const IconGitHub = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#181717">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

// ─── Project Data ─────────────────────────────────────────────────────────────
const projects = [
  {
    title: "Plant Disease Detection",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#5A8A72">
        <path d="M17 8C8 10 5.9 16.17 3.82 19.34 3.33 20.1 3.83 21 4.72 21h.07c.41 0 .77-.25.93-.63C7.07 17.65 9.04 16 12 16c1.66 0 3 1.34 3 3h2c0-1.71-.68-3.26-1.78-4.4C16.85 13.26 18 11.22 18 9c0-.38-.04-.75-.1-1.1L17 8z"/>
        <path d="M10.5 9.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
      </svg>
    ),
    techStack: [
      { name: "CNN", icon: <IconCNN /> },
      { name: "OpenCV", icon: <IconOpenCV /> },
      { name: "Kaggle", icon: <IconKaggle /> },
      { name: "Streamlit", icon: <IconStreamlit /> },
      { name: "Matplotlib", icon: <IconMatplotlib /> },
    ],
    liveDemo: "https://plant-disease-detection-11ax.onrender.com/",
    bullets: [
      <>Trained a CNN on a Kaggle dataset of 50,000+ images to classify 38 plant disease categories with <span className="font-semibold text-[#2A8C6E]">96% accuracy.</span></>,
      "Built robust image preprocessing pipelines using OpenCV (augmentation, normalization, resizing) to improve model generalization.",
      "Developed and deployed a user-friendly Streamlit web application with real-time disease prediction and Matplotlib visualizations.",
    ],
    image: "/project1.svg",
    imageBg: "bg-[#EDF5F0]",
  },
  {
    title: "Employee Attrition Predictor",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#7C98A4">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    ),
    techStack: [
      { name: "Python", icon: <IconPython /> },
      { name: "Scikit-Learn", icon: <IconScikitLearn /> },
      { name: "Pandas", icon: <IconPandas /> },
      { name: "Render", icon: <IconRender /> },
    ],
    liveDemo: "https://predict-employee-retentionst.onrender.com/",
    bullets: [
      <>Engineered a predictive model to forecast employee attrition with <span className="font-semibold text-[#2A8C6E]">92% accuracy</span> using feature engineering and ensemble methods.</>,
      "Analyzed complex HR datasets to identify key factors influencing retention and derived actionable insights for stakeholders.",
      "Deployed the interactive prediction application on Render for live access by HR teams.",
    ],
    image: "/Project2.svg",
    imageBg: "bg-[#EEF3F6]",
  },
  {
    title: "Decentralized AI Cluster",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#7C6EA4">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    ),
    techStack: [
      { name: "Python", icon: <IconPython /> },
      { name: "TensorFlow", icon: <IconTensorFlow /> },
      { name: "PyTorch", icon: <IconPyTorch /> },
      { name: "GitHub", icon: <IconGitHub /> },
    ],
    liveDemo: "https://github.com/YashBora21",
    bullets: [
      "Built a distributed computing protocol to orchestrate and fine-tune large-scale neural networks across decentralized node clusters.",
      "Automated training telemetry routing, localized loss evaluation, and optimized matrix operations using serverless WebGPU pipelines.",
      "Implemented fault-tolerant checkpointing and model versioning across distributed nodes.",
    ],
    image: "/project1.svg",
    imageBg: "bg-[#F0EEF6]",
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Projects() {
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

      tl.from('.proj-header', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' });
      tl.from('.project-card', {
        y: 50, opacity: 0, duration: 0.9, stagger: 0.2, ease: 'power3.out'
      }, '-=0.4');
      tl.from('.proj-view-more', {
        y: 20, opacity: 0, duration: 0.7, ease: 'power3.out'
      }, '-=0.3');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative w-full bg-[#F0F2F4] py-20 px-6 md:px-12 select-none"
    >
      {/* ── Header ── */}
      <div className="proj-header w-full flex flex-col items-center text-center mb-12">
        <h2 className="text-[11px] font-semibold tracking-[0.5em] text-[#6B7280] uppercase mb-5">
          P R O J E C T S
        </h2>
        <h3 className="text-[26px] md:text-[32px] font-bold text-[#111111] leading-tight mb-3">
          Building AI solutions that{' '}
          <span className="relative inline-block text-[#2A8C6E]">
            create impact.
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2A8C6E]" />
          </span>
        </h3>
        <p className="text-[14px] text-[#6B7280] font-light whitespace-nowrap">
          A showcase of real-world projects solving meaningful problems with AI &amp; ML.
        </p>
      </div>

      {/* ── Project Cards ── */}
      <div className="max-w-6xl mx-auto flex flex-col gap-24 relative">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="project-card sticky top-[100px] md:top-[120px] bg-white rounded-[28px] border border-[#D1D5DB] hover:border-[#7C98A4] shadow-[0_6px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden flex flex-col md:flex-row min-h-[500px] md:min-h-[560px]"
            style={{ zIndex: (idx + 1) * 10 }}
          >
            {/* LEFT: Image */}
            <div className={`${proj.imageBg} md:w-[460px] shrink-0 flex items-center justify-center p-8 md:p-12 min-h-[300px] md:min-h-[560px]`}>
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full max-h-[300px] md:max-h-[320px] object-contain select-none rounded-2xl transform hover:scale-[1.02] transition-transform duration-500"
                draggable="false"
              />
            </div>

            {/* RIGHT: Content */}
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-between">
              {/* Title row */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#F0F6F4] flex items-center justify-center shrink-0">
                    {proj.icon}
                  </div>
                  <h4 className="text-[22px] md:text-[26px] font-extrabold text-[#111111] leading-tight tracking-tight">
                    {proj.title}
                  </h4>
                </div>
                <a
                  href={proj.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 flex items-center gap-2 px-5 py-2.5 bg-[#2A6B5C] hover:bg-[#1D5047] text-white text-[13px] font-semibold tracking-wide rounded-xl transition-all duration-300 hover:scale-[1.03] shadow-sm hover:shadow clickable"
                >
                  Live Demo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2.5 mb-6">
                {proj.techStack.map((tech, tIdx) => (
                  <div
                    key={tIdx}
                    className="flex items-center gap-2 px-3.5 py-2 bg-[#F4F6F8] rounded-full text-[12.5px] font-medium text-[#374151] border border-[#E5E7EB] hover:border-[#7C98A4] transition-colors duration-200"
                  >
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>

              {/* Bullets */}
              <ul className="space-y-3.5">
                {proj.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="flex gap-3 items-start text-[14.5px] text-[#374151] leading-relaxed">
                    <span className="mt-[7px] shrink-0 w-2 h-2 rounded-full bg-[#2A8C6E]" />
                    <span className="select-text">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* ── View More Button ── */}
      <div className="proj-view-more flex justify-center mt-12">
        <a
          href="https://github.com/YashBora21"
          aria-label="View all projects on GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 bg-[#2A6B5C] hover:bg-[#1D5047] text-white font-semibold text-[14px] tracking-wide rounded-2xl shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-lg clickable"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 6h-2.18c.07-.44.18-.86.18-1.3C18 2.12 15.88 0 13.3 0c-1.3 0-2.48.52-3.34 1.36L9 3.29 7.96 2.28A4.726 4.726 0 004.7 0C2.12 0 0 2.12 0 4.7c0 .44.11.86.18 1.3H0v2h20V6zm-9.5-3.5c.53-.56 1.27-.9 2.09-.9 1.58 0 2.87 1.29 2.87 2.87 0 .44-.11.86-.25 1.25H8.65c.53-1.07 1.08-1.99 1.85-3.22zM4.7 2C5.98 2 7 3.02 7 4.3c0 .44-.11.86-.25 1.25H2.37C2.23 5.16 2.12 4.74 2.12 4.3 2.12 3.02 3.13 2 4.4 2zM0 9h9v13H5c-2.76 0-5-2.24-5-5V9zm11 13V9h9v8c0 2.76-2.24 5-5 5h-4z"/>
          </svg>
          View More Projects →
        </a>
      </div>
    </section>
  );
}
