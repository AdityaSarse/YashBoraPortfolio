import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ─── Inline SVG Icons ─────────────────────────────────────────────────────────
const IconPython = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
    <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.89S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.403 3.35-3.403h5.769s3.24.052 3.24-3.13V3.13S18.28 0 11.914 0zm-3.2 1.812a1.04 1.04 0 1 1 0 2.08 1.04 1.04 0 0 1 0-2.08z" fill="#366994" />
    <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752H12v-.826h8.131S24 18.211 24 12.031c0-6.18-3.403-5.96-3.403-5.96h-2.03v2.867s.109 3.403-3.35 3.403H9.448s-3.24-.052-3.24 3.13v5.399S5.72 24 12.086 24zm3.2-1.812a1.04 1.04 0 1 1 0-2.08 1.04 1.04 0 0 1 0 2.08z" fill="#FFC331" />
  </svg>
);
const IconFAISS = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#0067B8">
    <rect x="2" y="2" width="9" height="9" rx="2"/>
    <rect x="13" y="2" width="9" height="9" rx="2" opacity="0.6"/>
    <rect x="2" y="13" width="9" height="9" rx="2" opacity="0.6"/>
    <rect x="13" y="13" width="9" height="9" rx="2" opacity="0.3"/>
  </svg>
);
const IconLangChain = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#1C3C3C">
    <circle cx="8" cy="12" r="4" />
    <circle cx="16" cy="12" r="4" />
    <path d="M11 12h2" stroke="white" strokeWidth="1.5" />
  </svg>
);
const IconGemini = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4">
    <defs><linearGradient id="gm" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#4285F4"/><stop offset="100%" stopColor="#EA4335"/></linearGradient></defs>
    <path d="M12 2L8 12 2 12 7 16.5 5 22 12 17.5 19 22 17 16.5 22 12 16 12z" fill="url(#gm)"/>
  </svg>
);
const IconFastAPI = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#009688">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14v-4H7l5-8v4h4l-5 8z"/>
  </svg>
);
const IconHuggingFace = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#FF9D00">
    <circle cx="12" cy="12" r="10"/>
    <path d="M8 13c.5 2 2 3 4 3s3.5-1 4-3" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <circle cx="9" cy="10" r="1" fill="white"/>
    <circle cx="15" cy="10" r="1" fill="white"/>
  </svg>
);
const IconGroq = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#FF4A00">
    <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 4a6 6 0 110 12A6 6 0 0112 6zm0 2a4 4 0 100 8 4 4 0 000-8z"/>
  </svg>
);
const IconTensorFlow = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4">
    <path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31z" fill="#FF8000"/>
    <path d="M22.708 5.856L12.46 0v10.963l6.168 3.564V7.603l4.08 2.356-.016-4.103z" fill="#FF8000"/>
    <path d="M18.628 14.189l-6.168-3.226v6.452l6.168 3.614V14.19z" fill="#FF8000"/>
  </svg>
);
const IconScikitLearn = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4">
    <circle cx="8" cy="8.5" r="4" fill="#3499CD"/>
    <circle cx="14.5" cy="8.5" r="4" fill="#F7931E"/>
    <circle cx="11" cy="14.5" r="4" fill="#2D6F9E"/>
  </svg>
);
const IconRender = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#46E3B7">
    <path d="M3 3h8.5a9.5 9.5 0 010 19H3V3zm2 2v15h6.5a7.5 7.5 0 000-15H5z"/>
  </svg>
);
const IconDocker = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#2496ED">
    <path d="M13.5 9H15V7.5h-1.5V9zm-3 0H12V7.5h-1.5V9zm-3 0H9V7.5H7.5V9zM13.5 6H15V4.5h-1.5V6zm-3 0H12V4.5h-1.5V6zM9 6h1.5V4.5H9V6zm-3 3h1.5V7.5H6V9zm14.9 1.1c-.3-2.1-2.1-3.1-2.1-3.1-.6 3.5-3.2 4.5-3.2 4.5H1c0 2.5 2 5.5 5.5 5.5h10c3.8 0 5.5-2.9 5.5-5.5 0-.5-.1-1-.1-1.4z"/>
  </svg>
);
const IconVGG = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#7B61FF">
    <rect x="2" y="6" width="20" height="12" rx="2" opacity="0.3"/>
    <rect x="4" y="8" width="4" height="8" rx="1"/>
    <rect x="10" y="8" width="4" height="8" rx="1"/>
    <rect x="16" y="8" width="4" height="8" rx="1"/>
  </svg>
);
const IconXGBoost = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#E67E22">
    <path d="M3 3l7 18L14 12l4 9 3-18"/>
    <circle cx="12" cy="12" r="2" fill="#C0392B"/>
  </svg>
);

// ─── Project Image Components (SVG illustrations) ─────────────────────────────

const SportsRAGImage = () => (
  <svg viewBox="0 0 420 280" className="w-full h-full max-h-[300px] object-contain" xmlns="http://www.w3.org/2000/svg">
    {/* Background */}
    <rect width="420" height="280" fill="#EDF4F8" rx="16"/>
    {/* Grid lines */}
    {[60,120,180,240].map(y => <line key={y} x1="20" y1={y} x2="400" y2={y} stroke="#B8D0DC" strokeWidth="0.5" strokeDasharray="4,4"/>)}
    {[80,160,240,320].map(x => <line key={x} x1={x} y1="20" x2={x} y2="260" stroke="#B8D0DC" strokeWidth="0.5" strokeDasharray="4,4"/>)}
    {/* Central brain/vector node */}
    <circle cx="210" cy="140" r="48" fill="white" stroke="#7C98A4" strokeWidth="2"/>
    <circle cx="210" cy="140" r="36" fill="#EFF6FA" stroke="#7C98A4" strokeWidth="1"/>
    <text x="210" y="136" textAnchor="middle" fontSize="11" fill="#3A6070" fontWeight="700" fontFamily="sans-serif">SPORTS</text>
    <text x="210" y="152" textAnchor="middle" fontSize="11" fill="#3A6070" fontWeight="700" fontFamily="sans-serif">RAG</text>
    {/* Connecting nodes */}
    {[
      { cx: 80, cy: 70, label: "FAISS", color: "#4A90D9" },
      { cx: 340, cy: 70, label: "Gemini", color: "#EA4335" },
      { cx: 60, cy: 210, label: "BM25", color: "#2ECC71" },
      { cx: 360, cy: 210, label: "120K+", color: "#9B59B6" },
    ].map(n => (
      <g key={n.label}>
        <line x1={n.cx} y1={n.cy} x2="210" y2="140" stroke={n.color} strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="6,3"/>
        <circle cx={n.cx} cy={n.cy} r="28" fill="white" stroke={n.color} strokeWidth="1.5"/>
        <text x={n.cx} y={n.cy + 4} textAnchor="middle" fontSize="9" fill={n.color} fontWeight="700" fontFamily="sans-serif">{n.label}</text>
      </g>
    ))}
    {/* Query arrow */}
    <rect x="140" y="220" width="140" height="36" rx="18" fill="#7C98A4" opacity="0.9"/>
    <text x="210" y="243" textAnchor="middle" fontSize="10" fill="white" fontWeight="600" fontFamily="sans-serif">Ask a sports question →</text>
    {/* Pulse dots */}
    <circle cx="210" cy="140" r="58" fill="none" stroke="#7C98A4" strokeWidth="1" strokeDasharray="3,5" opacity="0.4"/>
    <circle cx="210" cy="140" r="72" fill="none" stroke="#7C98A4" strokeWidth="0.5" strokeDasharray="2,6" opacity="0.25"/>
  </svg>
);

const PlantDiseaseImage = () => (
  <svg viewBox="0 0 420 280" className="w-full h-full max-h-[300px] object-contain" xmlns="http://www.w3.org/2000/svg">
    <rect width="420" height="280" fill="#EDF5EF" rx="16"/>
    {/* Leaf shape */}
    <ellipse cx="160" cy="140" rx="90" ry="110" fill="#C8E6C9" transform="rotate(-20 160 140)" opacity="0.7"/>
    <ellipse cx="160" cy="140" rx="60" ry="80" fill="#A5D6A7" transform="rotate(-20 160 140)" opacity="0.8"/>
    {/* Leaf veins */}
    <path d="M130 80 Q160 140 140 200" stroke="#66BB6A" strokeWidth="2" fill="none"/>
    <path d="M130 80 Q170 110 195 105" stroke="#66BB6A" strokeWidth="1.5" fill="none" opacity="0.7"/>
    <path d="M130 80 Q150 165 115 180" stroke="#66BB6A" strokeWidth="1.5" fill="none" opacity="0.7"/>
    {/* Disease spots */}
    <circle cx="155" cy="130" r="12" fill="#F44336" opacity="0.7"/>
    <circle cx="175" cy="155" r="8" fill="#FF8F00" opacity="0.6"/>
    <circle cx="135" cy="160" r="10" fill="#F44336" opacity="0.5"/>
    {/* Detection box */}
    <rect x="135" y="110" width="65" height="65" fill="none" stroke="#F44336" strokeWidth="2" strokeDasharray="6,3" rx="4"/>
    <text x="168" y="105" textAnchor="middle" fontSize="9" fill="#C62828" fontWeight="700" fontFamily="sans-serif">DETECTED</text>
    {/* Neural net on right */}
    <g transform="translate(290, 80)">
      {[0,1,2].map(i => <circle key={i} cx="0" cy={i*40} r="10" fill="white" stroke="#5A8A72" strokeWidth="1.5"/>)}
      {[0,1,2].map(i => <circle key={i} cx="50" cy={i*40+20} r="10" fill="white" stroke="#5A8A72" strokeWidth="1.5"/>)}
      {[0,1,2].map(i => <circle key={i} cx="100" cy={i*40} r="10" fill="white" stroke="#2ECC71" strokeWidth="1.5"/>)}
      {[0,1,2].map(i => [0,1,2].map(j => <line key={`${i}${j}`} x1="10" y1={i*40} x2="40" y2={j*40+20} stroke="#5A8A72" strokeWidth="0.5" opacity="0.5"/>))}
    </g>
    {/* Label */}
    <rect x="240" y="220" width="150" height="32" rx="16" fill="#5A8A72"/>
    <text x="315" y="240" textAnchor="middle" fontSize="10" fill="white" fontWeight="600" fontFamily="sans-serif">VGG19 · 96% Accuracy</text>
  </svg>
);

const ChurnImage = () => (
  <svg viewBox="0 0 420 280" className="w-full h-full max-h-[300px] object-contain" xmlns="http://www.w3.org/2000/svg">
    <rect width="420" height="280" fill="#EEF3F6" rx="16"/>
    {/* Bar chart background */}
    {[40,80,120,160,200,240,280,320,360,400].map(x => <line key={x} x1={x} y1="20" x2={x} y2="230" stroke="#C5D5DD" strokeWidth="0.5"/>)}
    {[60,100,140,180,220].map(y => <line key={y} x1="30" y1={y} x2="400" y2={y} stroke="#C5D5DD" strokeWidth="0.5"/>)}
    {/* Bars */}
    {[
      { x: 50, h: 120, color: '#7C98A4', label: 'Salary' },
      { x: 100, h: 90, color: '#5A8A72', label: 'Perf.' },
      { x: 150, h: 140, color: '#7C98A4', label: 'Years' },
      { x: 200, h: 60, color: '#E74C3C', label: 'OT' },
      { x: 250, h: 100, color: '#7C98A4', label: 'WLB' },
      { x: 300, h: 80, color: '#5A8A72', label: 'Dept.' },
    ].map(b => (
      <g key={b.label}>
        <rect x={b.x} y={230 - b.h} width="30" height={b.h} rx="4" fill={b.color} opacity="0.85"/>
        <text x={b.x+15} y={248} textAnchor="middle" fontSize="8" fill="#6B7280" fontFamily="sans-serif">{b.label}</text>
      </g>
    ))}
    {/* Risk gauge */}
    <circle cx="350" cy="110" r="55" fill="white" stroke="#D9D9D9" strokeWidth="1.5"/>
    <path d="M310 140 A40 40 0 0 1 390 140" fill="none" stroke="#E74C3C" strokeWidth="8" strokeLinecap="round"/>
    <path d="M310 140 A40 40 0 0 1 370 108" fill="none" stroke="#2ECC71" strokeWidth="8" strokeLinecap="round"/>
    {/* Needle */}
    <line x1="350" y1="140" x2="375" y2="112" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="350" cy="140" r="5" fill="#333"/>
    <text x="350" y="175" textAnchor="middle" fontSize="9" fill="#C62828" fontWeight="700" fontFamily="sans-serif">HIGH RISK</text>
    <text x="350" y="60" textAnchor="middle" fontSize="10" fill="#374151" fontWeight="600" fontFamily="sans-serif">Attrition Risk</text>
    {/* XGBoost label */}
    <rect x="60" y="14" width="120" height="22" rx="11" fill="#E67E22" opacity="0.85"/>
    <text x="120" y="29" textAnchor="middle" fontSize="9" fill="white" fontWeight="600" fontFamily="sans-serif">XGBoost · 92% Acc.</text>
  </svg>
);

// ─── Project Data ──────────────────────────────────────────────────────────────
const AgenticImage = () => (
  <div className="workflow w-full space-y-5 text-center text-[#1C3C3C]">
    <p className="text-xs uppercase tracking-[0.2em]">Multimodal workflow</p>
    <div className="rounded-2xl bg-white p-4 border border-[#D9D9D9]">PDF · Image · Audio · YouTube</div>
    <div aria-hidden="true">↓</div>
    <div className="rounded-2xl bg-[#1C3C3C] text-white p-5 font-semibold">LangGraph planner + tools</div>
    <div aria-hidden="true">↓</div>
    <div className="rounded-2xl bg-white p-4 border border-[#D9D9D9]">Structured response</div>
  </div>
);

const VoiceSQLImage = () => (
  <div className="workflow w-full space-y-5 text-center text-[#1C3C3C]">
    <p className="text-xs uppercase tracking-[0.2em]">Voice-to-SQL workflow</p>
    {['Voice input / Whisper', 'LangGraph agent / SQL debugger', 'PostgreSQL / query result', 'Answer / edge-TTS'].map((step, index) => (
      <div key={step} className="rounded-2xl bg-white p-4 border border-[#D9D9D9] text-sm"><span className="text-[#7C98A4] mr-3">0{index + 1}</span>{step}</div>
    ))}
  </div>
);

const MedicalImage = () => (
  <div className="workflow w-full space-y-5 text-center text-[#1C3C3C]">
    <p className="text-xs uppercase tracking-[0.2em]">Medical report verification</p>
    {['Report ingestion', 'Patient history / semantic retrieval', 'LLM consistency checks', 'Structured audit response'].map((step, index) => (
      <div key={step} className="rounded-2xl bg-white p-4 border border-[#D9D9D9] text-sm"><span className="text-[#7C98A4] mr-3">0{index + 1}</span>{step}</div>
    ))}
  </div>
);

const projects = [
  {
    title: "Multi-modal Agentic Assistant",
    screenshot: "/projects/multimodal.webp",
    screenshotLabel: "Live app · Sign-in screen",
    subtitle: "AI Agents · Document, Image & Audio Workflows",
    icon: <IconLangChain />,
    techStack: [
      { name: "Python", icon: <IconPython /> },
      { name: "LangGraph" },
      { name: "LangChain", icon: <IconLangChain /> },
      { name: "FastAPI", icon: <IconFastAPI /> },
      { name: "Streamlit" },
      { name: "OCR / Whisper" },
      { name: "Render", icon: <IconRender /> },
    ],
    liveDemo: "https://muitimodal-agent.onrender.com/",
    github: null,
    bullets: [
      "Built an assistant that processes PDFs, images, audio, YouTube videos, and general queries through tool-based workflows.",
      "Designed a LangGraph planner to decompose requests, select tools, and maintain bounded conversation state, with query-aware chunking and ambiguity handling.",
      "Implemented OCR, Whisper transcription, structured outputs, retries, and model fallback routing; deployed FastAPI and Streamlit services on Render with token-usage monitoring.",
    ],
    ImageComponent: AgenticImage,
    imageBg: "bg-[#EDF5EF]",
  },
  {
    title: "E-commerce Analytics Agent",
    subtitle: "Conversational Analytics · Database Insights",
    screenshot: "/projects/ecommerce.webp",
    screenshotLabel: "Live app · Analytics workspace",
    icon: <IconFastAPI />,
    techStack: [
      { name: "Natural-language queries" },
      { name: "Data analytics" },
      { name: "Charts & statistics" },
      { name: "Render", icon: <IconRender /> },
    ],
    liveDemo: "https://ecommerce-analytics-agent-system.onrender.com/",
    github: null,
    bullets: [
      "Built a conversational workspace for asking questions, calculating statistics, and creating charts from an e-commerce database.",
      "Supports questions about orders, revenue, delivery, and reviews, with suggested prompts for monthly revenue, category sales, and median delivery time.",
      "Connects an interactive question interface to an analytics API, with a deployed demo on Render.",
    ],
    ImageComponent: ChurnImage,
    imageBg: "bg-[#EEF2FF]",
  },
  {
    title: "Voice-Enabled SQL Analytics Agent",
    subtitle: "Agentic Analytics · Speech to Database Insights",
    icon: <IconFastAPI />,
    techStack: [
      { name: "Python", icon: <IconPython /> },
      { name: "LangGraph" },
      { name: "FastAPI", icon: <IconFastAPI /> },
      { name: "Whisper / edge-TTS" },
      { name: "Gemini", icon: <IconGemini /> },
      { name: "PostgreSQL" },
    ],
    liveDemo: null,
    github: null,
    bullets: [
      "Built a voice-to-SQL-to-answer pipeline that turns spoken questions into database queries and spoken responses.",
      "Orchestrated a LangGraph ReAct agent with schema caching, multi-turn memory, and an iterative SQL debugger.",
      "Exposed FastAPI endpoints for voice input, natural-language querying, and text-to-speech playback using Whisper, Gemini, PostgreSQL, and edge-TTS.",
    ],
    ImageComponent: VoiceSQLImage,
    imageBg: "bg-[#EEF3F6]",
  },
  {
    title: "VeriMed-X",
    subtitle: "AI Medical Report Verification Platform",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#7C6EA4">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
      </svg>
    ),
    techStack: [
      { name: "LangChain", icon: <IconLangChain /> },
      { name: "FastAPI", icon: <IconFastAPI /> },
      { name: "Gemini", icon: <IconGemini /> },
      { name: "FAISS", icon: <IconFAISS /> },
      { name: "Python", icon: <IconPython /> },
      { name: "Docker", icon: <IconDocker /> },
    ],
    liveDemo: null,
    github: null,
    bullets: [
      "Built an AI-powered medical report verification platform using LangChain, FastAPI, PostgreSQL with pgvector, and Gemini LLM to detect inconsistencies and potential errors in medical documents.",
      <>Implemented semantic search over medical report embeddings with <span className="font-semibold text-[#2A8C6E]">pgvector + FAISS</span> to cross-reference patient history and flag anomalous findings.</>,
      "Designed a REST API backend with FastAPI enabling real-time report ingestion, verification pipeline execution, and structured JSON audit responses.",
    ],
    ImageComponent: MedicalImage,
    imageBg: "bg-[#F0EEF6]",
  },
  {
    title: "Sports RAG Assistant",
    subtitle: "AI-Powered Sports Intelligence System",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#7C98A4">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.59L6.41 12 7.83 10.58 11 13.75l6.17-6.17L18.59 9 11 16.59z"/>
      </svg>
    ),
    techStack: [
      { name: "Python", icon: <IconPython /> },
      { name: "LangChain", icon: <IconLangChain /> },
      { name: "FAISS", icon: <IconFAISS /> },
      { name: "Gemini", icon: <IconGemini /> },
      { name: "FastAPI", icon: <IconFastAPI /> },
      { name: "HuggingFace", icon: <IconHuggingFace /> },
      { name: "Groq", icon: <IconGroq /> },
      { name: "Docker", icon: <IconDocker /> },
    ],
    liveDemo: "https://huggingface.co/spaces/yashbora12/sports-rag",
    github: "https://github.com/YashBora21/Sports-Rag",
    bullets: [
      <>Built a production RAG pipeline over <span className="font-semibold text-[#2A8C6E]">120K+ vector embeddings</span> with hybrid BM25 + FAISS retrieval and cross-encoder reranking for high-precision sports Q&A.</>,
      "Integrated LLM APIs through LangChain to ground responses in retrieved sports context; combined reciprocal rank fusion and reranking, achieving 97% query-routing accuracy.",
      "Containerized with Docker and deployed to Hugging Face Spaces; evaluated with RAGAS framework across faithfulness, relevancy, and context precision metrics.",
    ],
    ImageComponent: SportsRAGImage,
    imageBg: "bg-[#EDF4F8]",
  },
  {
    title: "Plant Disease Detection",
    subtitle: "Deep Learning · Computer Vision",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#5A8A72">
        <path d="M17 8C8 10 5.9 16.17 3.82 19.34 3.33 20.1 3.83 21 4.72 21h.07c.41 0 .77-.25.93-.63C7.07 17.65 9.04 16 12 16c1.66 0 3 1.34 3 3h2c0-1.71-.68-3.26-1.78-4.4C16.85 13.26 18 11.22 18 9c0-.38-.04-.75-.1-1.1L17 8z"/>
      </svg>
    ),
    techStack: [
      { name: "TensorFlow", icon: <IconTensorFlow /> },
      { name: "VGG19", icon: <IconVGG /> },
      { name: "Python", icon: <IconPython /> },
      { name: "Render", icon: <IconRender /> },
    ],
    liveDemo: "https://plant-disease-detection-11ax.onrender.com/",
    github: "https://github.com/YashBora21/plant",
    bullets: [
      <>Trained VGG19 CNN on 50K+ labeled leaf images to classify <span className="font-semibold text-[#2A8C6E]">38 disease categories at ~96% accuracy</span>, enabling early intervention for farmers and agronomists.</>,
      "Built robust preprocessing pipelines — augmentation, normalization, resizing — to improve model generalization across varying lighting and camera conditions.",
      "Deployed a real-time web app on Render; users upload a leaf image and receive disease category + confidence score within seconds.",
    ],
    ImageComponent: PlantDiseaseImage,
    imageBg: "bg-[#EDF5EF]",
  },
  {
    title: "Employee Churn Predictor",
    screenshot: "/projects/churn.webp",
    screenshotLabel: "Live app · Employee prediction form",
    subtitle: "ML · Retention Analytics System",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#7C98A4">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    ),
    techStack: [
      { name: "Python", icon: <IconPython /> },
      { name: "XGBoost", icon: <IconXGBoost /> },
      { name: "Scikit-Learn", icon: <IconScikitLearn /> },
      { name: "Render", icon: <IconRender /> },
    ],
    liveDemo: "https://predict-employee-retentionst.onrender.com/",
    github: "https://github.com/YashBora21/Predict_Employee_Retentions_Porject",
    bullets: [
      <>Engineered an XGBoost predictive model with <span className="font-semibold text-[#2A8C6E]">92% accuracy</span> using features like job satisfaction, salary band, overtime, and promotion history to flag at-risk employees.</>,
      "Analyzed complex HR datasets to surface key attrition drivers, enabling HR teams to shift from reactive hiring to proactive retention strategies.",
      "Deployed an interactive prediction app on Render — live access for HR professionals to input employee data and receive real-time churn risk scores.",
    ],
    ImageComponent: ChurnImage,
    imageBg: "bg-[#EEF3F6]",
  },
];

const CARD_HEIGHT = 520;

export default function Projects() {
  const containerRef = useRef(null);
  const wrapperRefs = useRef([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const visibility = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.target.classList.toggle('is-visible', entry.isIntersecting));
    });
    cardRefs.current.forEach(card => card && visibility.observe(card));
    const motion = gsap.matchMedia();
    motion.add('(prefers-reduced-motion: no-preference)', () => {
    const ctx = gsap.context(() => {
      gsap.from('.proj-header', {
        y: 30, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 88%', toggleActions: 'play none none none' },
      });

      wrapperRefs.current.forEach((wrapper, idx) => {
        if (!wrapper) return;
        const card = cardRefs.current[idx];
        const reveal = gsap.timeline({
          scrollTrigger: { trigger: wrapper, start: 'top 90%', toggleActions: 'play none none none' },
        });
        reveal.from(card.querySelector('.project-visual'), {
          y: 24, opacity: 0, duration: 0.9, ease: 'power3.out', clearProps: 'transform,opacity',
        }).from(card.querySelectorAll('.project-heading, .project-badges, .project-description'), {
          y: 18, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out', clearProps: 'transform,opacity',
        }, '-=0.4');
      });

      gsap.from('.proj-view-more', {
        y: 24, opacity: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.proj-view-more', start: 'top 93%', toggleActions: 'play none none none' },
      });
    }, containerRef);

    return () => ctx.revert();
    });
    return () => { motion.revert(); visibility.disconnect(); };
  }, []);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative w-full bg-[#F0F2F4] py-20 px-6 md:px-12 select-none"
    >
      {/* Header */}
      <div className="proj-header w-full flex flex-col items-center text-center mb-16">
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
        <p className="text-[14px] text-[#6B7280] font-light">
          End-to-end AI systems — from research to production deployment.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-12 md:gap-16">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            ref={el => (wrapperRefs.current[idx] = el)}
            className="w-full"
          >
            <div
              ref={el => (cardRefs.current[idx] = el)}
              className="project-card bg-white rounded-[28px] border border-[#D1D5DB] hover:border-[#7C98A4] shadow-[0_6px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] transition-[border-color,box-shadow] duration-500 overflow-hidden flex flex-col md:flex-row w-full"
              style={{ minHeight: CARD_HEIGHT }}
            >
              {/* LEFT: Illustrated image */}
              <div className={`project-visual ${proj.imageBg} md:w-[46%] shrink-0 flex flex-col items-center justify-center p-6 md:p-8 min-h-[300px]`}>
                <div className="project-visual-label"><span>SELECTED WORK / 0{idx + 1}</span><span>{proj.screenshot ? 'APP PREVIEW' : 'WORKFLOW'}</span></div>
                {proj.screenshot ? (
                  <a className="project-browser" href={proj.liveDemo} target="_blank" rel="noopener noreferrer" aria-label={`Open ${proj.title} app`}>
                    <div className="project-browser-bar" aria-hidden="true"><i /><i /><i /><span>{new URL(proj.liveDemo).hostname}</span><span>↗</span></div>
                    <img className="project-screenshot" src={proj.screenshot} alt={`${proj.title} — ${proj.screenshotLabel}`} width="1440" height="1000" loading="lazy" decoding="async" />
                  </a>
                ) : <div className="project-art w-full"><proj.ImageComponent /></div>}
                <p className="project-image-caption">{proj.screenshotLabel || 'Architecture illustration'}</p>
                {proj.liveDemo && <a className="project-explore" href={proj.liveDemo} target="_blank" rel="noopener noreferrer" aria-label={`Explore ${proj.title} live demo`}>Explore project <span aria-hidden="true">↗</span></a>}
              </div>

              {/* RIGHT: Content */}
              <div className="flex-1 min-w-0 p-8 md:p-10 flex flex-col justify-between">

                {/* Title + Action Buttons */}
                <div className="project-heading flex items-start justify-between gap-4 mb-3 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#F0F6F4] flex items-center justify-center shrink-0">
                      {proj.icon}
                    </div>
                    <div>
                      <h4 className="text-[20px] md:text-[24px] font-extrabold text-[#111111] leading-tight tracking-tight">
                        {proj.title}
                      </h4>
                      <p className="text-[12px] text-[#7C98A4] font-medium tracking-wide mt-0.5">{proj.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {proj.liveDemo ? (
                      <a
                        href={proj.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 flex items-center gap-2 px-4 py-2 bg-[#2A6B5C] hover:bg-[#1D5047] text-white text-[12px] font-semibold tracking-wide rounded-xl transition-all duration-300 hover:scale-[1.03] shadow-sm clickable"
                      >
                        Live Demo
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <span className="shrink-0 flex items-center gap-2 px-4 py-2 bg-[#E5E7EB] text-[#9CA3AF] text-[12px] font-semibold tracking-wide rounded-xl cursor-default">
                        Demo not linked
                      </span>
                    )}
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 flex items-center gap-2 px-4 py-2 bg-[#111111] hover:bg-[#333] text-white text-[12px] font-semibold tracking-wide rounded-xl transition-all duration-300 hover:scale-[1.03] shadow-sm clickable"
                      >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Source Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Tech badges */}
                <div className="project-badges flex flex-wrap gap-2 mb-5">
                  {proj.techStack.map((tech, tIdx) => (
                    <div
                      key={tIdx}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-[#F4F6F8] rounded-full text-[11.5px] font-medium text-[#374151] border border-[#E5E7EB] hover:border-[#7C98A4] transition-colors duration-200"
                    >
                      {tech.icon}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>

                {/* Bullets */}
                <ul className="project-description space-y-3">
                  {proj.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex gap-3 items-start text-[14px] text-[#374151] leading-relaxed">
                      <span className="mt-[7px] shrink-0 w-2 h-2 rounded-full bg-[#2A8C6E]" />
                      <span className="select-text">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More */}
      <div className="proj-view-more flex justify-center mt-20">
        <a
          href="https://github.com/YashBora21"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 bg-[#2A6B5C] hover:bg-[#1D5047] text-white font-semibold text-[14px] tracking-wide rounded-2xl shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-lg clickable"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          View More on GitHub →
        </a>
      </div>
    </section>
  );
}
