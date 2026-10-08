import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const resumeData = {
  summary: "Final-year Information Technology student with a 9.16/10 CGPA and internship experience building AI agents, RAG pipelines, and machine learning applications. Skilled in Python, LangChain, LangGraph, FastAPI, and PostgreSQL, with experience deploying applications using Docker, Render, and Hugging Face Spaces.",
  education: [
    {
      degree: "B.E. in Information Technology",
      institution: "PVG's College of Engineering and Technology",
      location: "Pune, India",
      period: "2023 – 2027",
      detail: "CGPA: 9.16 / 10",
    }
  ],
  experience: [
    {
      role: "GenAI Intern",
      company: "Parallel Minds",
      location: "Pune, India",
      period: "Jul 2026 – Present",
      bullets: [
        "Build AI agents and Generative AI applications using Python, LangChain, and large language models.",
        "Develop RAG pipelines with embeddings and vector databases; refine prompts to improve response quality.",
        "Build FastAPI REST services and integrate AI workflows with PostgreSQL-backed applications.",
      ]
    },
    {
      role: "AI/ML Intern — GenAI & LLM",
      company: "Edu Plus Now · UDNAV ERP Software Technologies",
      location: "Pune",
      period: "Jan 2026 – Apr 2026",
      bullets: [
        "Completed 120-hour intensive program on AI, ML, Generative AI, and Large Language Models.",
        "Built AI applications with Streamlit interfaces and FastAPI services; integrated Gemini and Groq APIs.",
        "Debugged Docker deployment issues and delivered AI applications on Hugging Face Spaces with full SDLC documentation.",
      ]
    },
    {
      role: "Project Intern — Machine Learning & Deep Learning",
      company: "Edunet Foundation",
      location: "Pune, India",
      period: "Jan 2025 – Feb 2025",
      bullets: [
        "Applied 10+ ML/DL models (CNN, ARIMA) on large-scale datasets using TensorFlow and Scikit-Learn.",
        "Delivered 3 end-to-end AI solutions including an image classifier, achieving 15% gain in processing efficiency.",
        "Presented weekly findings to mentors; maintained detailed SOPs for all implemented models.",
      ]
    }
  ],
  skills: [
    { label: "ML / DL", value: "Python, TensorFlow, PyTorch, Scikit-Learn, CNNs, RNNs, NLP, OpenCV" },
    { label: "GenAI & LLMs", value: "Transformers, LangChain, LangGraph, LangSmith, LangServe, RAG, FAISS, Hugging Face, Prompt Engineering" },
    { label: "Data & Analytics", value: "Pandas, NumPy, Matplotlib, Seaborn, PostgreSQL, Tableau" },
    { label: "Deployment", value: "FastAPI, Flask, Streamlit, REST APIs, Docker, Render, Hugging Face Spaces" },
    { label: "Tools", value: "Git, GitHub, Jupyter, VS Code, SQL, MongoDB, C++, Java (Basics)" },
  ],
  certifications: [
    "AWS re/Start Graduate",
    "Programming Using Python (NIIT)",
    "ChatGPT For Everyone",
    "Software Engineering Job Simulation (Forage)",
    "Advanced C++",
  ]
};

export default function Resume() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.resume-header', {
        y: 30, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 85%', toggleActions: 'play none none none' }
      });
      gsap.from('.resume-block', {
        y: 40, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 80%', toggleActions: 'play none none none' }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="resume"
      ref={containerRef}
      className="relative w-full bg-[#F4F4F4] py-20 px-6 md:px-16 border-t border-[#D9D9D9]/40 tech-grid-bg"
    >
      {/* Header */}
      <div className="resume-header max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-14">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.5em] text-[#7C98A4] uppercase mb-2">RESUME</p>
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#111111] leading-tight">
            Yash Bora —{' '}
            <span className="relative inline-block text-[#2A8C6E]">
              AI/ML Engineer
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2A8C6E]" />
            </span>
          </h2>
          <p className="text-[13px] text-[#6B7280] mt-1">yashbora567@gmail.com · +91-8624962343</p>
        </div>
        <a
          href="/Yash_Bora_Resume.pdf"
          download="Yash_Bora_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 flex items-center gap-2 px-6 py-3 bg-[#111111] hover:bg-[#333] text-white text-[12px] font-semibold tracking-wide rounded-xl transition-all duration-300 hover:scale-105 shadow-md"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
          Download PDF
        </a>
      </div>

      <div className="max-w-5xl mx-auto space-y-6">

        {/* Summary */}
        <div className="resume-block bg-white rounded-2xl border border-[#E5E7EB] p-7 shadow-sm">
          <h3 className="text-[10px] font-bold tracking-[0.4em] text-[#7C98A4] uppercase mb-3">Summary</h3>
          <p className="text-[14px] text-[#374151] leading-relaxed">{resumeData.summary}</p>
        </div>

        {/* Education */}
        <div className="resume-block bg-white rounded-2xl border border-[#E5E7EB] p-7 shadow-sm">
          <h3 className="text-[10px] font-bold tracking-[0.4em] text-[#7C98A4] uppercase mb-5">Education</h3>
          {resumeData.education.map((e, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-start justify-between gap-2">
              <div>
                <p className="text-[16px] font-bold text-[#111111]">{e.degree}</p>
                <p className="text-[13px] text-[#6B7280]">{e.institution} · {e.location}</p>
                <p className="text-[13px] text-[#2A8C6E] font-semibold mt-1">{e.detail}</p>
              </div>
              <span className="shrink-0 text-[11px] text-[#9CA3AF] tracking-widest font-medium">{e.period}</span>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div className="resume-block bg-white rounded-2xl border border-[#E5E7EB] p-7 shadow-sm">
          <h3 className="text-[10px] font-bold tracking-[0.4em] text-[#7C98A4] uppercase mb-6">Experience</h3>
          <div className="space-y-8">
            {resumeData.experience.map((exp, i) => (
              <div key={i} className={i !== 0 ? "pt-6 border-t border-[#F3F4F6]" : ""}>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-1 mb-3">
                  <div>
                    <p className="text-[16px] font-bold text-[#111111]">{exp.role}</p>
                    <p className="text-[13px] text-[#7C98A4] font-medium">{exp.company} · {exp.location}</p>
                  </div>
                  <span className="shrink-0 text-[11px] text-[#9CA3AF] tracking-widest font-medium">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 items-start text-[14px] text-[#374151] leading-relaxed">
                      <span className="mt-[7px] shrink-0 w-1.5 h-1.5 rounded-full bg-[#2A8C6E]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="resume-block bg-white rounded-2xl border border-[#E5E7EB] p-7 shadow-sm">
          <h3 className="text-[10px] font-bold tracking-[0.4em] text-[#7C98A4] uppercase mb-5">Technical Skills</h3>
          <div className="space-y-3">
            {resumeData.skills.map((s, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-1 sm:gap-4 text-[14px]">
                <span className="shrink-0 w-[130px] font-semibold text-[#111111]">{s.label}</span>
                <span className="text-[#6B7280] leading-relaxed">{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="resume-block bg-white rounded-2xl border border-[#E5E7EB] p-7 shadow-sm">
          <h3 className="text-[10px] font-bold tracking-[0.4em] text-[#7C98A4] uppercase mb-4">Problem Solving</h3>
          <p className="text-[14px] text-[#374151] leading-relaxed">343+ LeetCode problems solved: 155 Easy, 170 Medium, and 18 Hard. Earned the 100 Days Badge 2026 with a 30-day maximum streak.</p>
          <a href="https://leetcode.com/u/yashbora/" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-sm font-semibold text-[#2A6B5C] underline">View LeetCode profile</a>
        </div>

        {/* Certifications */}
        <div className="resume-block bg-white rounded-2xl border border-[#E5E7EB] p-7 shadow-sm">
          <h3 className="text-[10px] font-bold tracking-[0.4em] text-[#7C98A4] uppercase mb-4">Certifications</h3>
          <div className="flex flex-wrap gap-3">
            {resumeData.certifications.map((c, i) => (
              <span key={i} className="px-4 py-2 bg-[#F4F6F8] border border-[#E5E7EB] rounded-full text-[12px] font-medium text-[#374151]">
                {c}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
