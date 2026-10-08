"""Rebuild the portfolio resume with the installed PyMuPDF package."""
from pathlib import Path
import shutil
import fitz

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output" / "pdf"
OUT.mkdir(parents=True, exist_ok=True)
PREVIEW = ROOT / "tmp" / "pdfs"
PREVIEW.mkdir(parents=True, exist_ok=True)

CSS = """
body { font-family: sans-serif; font-size: 10pt; line-height: 1.35; color: #263342; }
h1 { font-size: 27pt; color: #142e36; margin: 0 0 3pt; }
h2 { font-size: 10pt; color: #236355; margin: 13pt 0 6pt; letter-spacing: 1pt; }
h3 { font-size: 10.5pt; color: #142e36; margin: 9pt 0 2pt; }
p { margin: 3pt 0; }
ul { margin: 3pt 0 6pt; padding-left: 14pt; }
li { margin-bottom: 3pt; }
a { color: #236355; text-decoration: none; }
.meta { font-size: 9pt; color: #566471; }
.role { font-size: 12pt; margin-bottom: 7pt; }
.stack { font-size: 9pt; color: #566471; }
"""

PAGES = ["""
<h1>YASH BORA</h1>
<p class="role">AI/ML Engineer | Generative AI &amp; Agentic Systems</p>
<p class="meta">Pune, India | +91-8624962343 | <a href="mailto:yashbora567@gmail.com">yashbora567@gmail.com</a></p>
<p class="meta"><a href="https://www.linkedin.com/in/yash-bora-149787290/">LinkedIn</a> | <a href="https://github.com/YashBora21">GitHub</a> | <a href="https://yash-bora-portfolio.vercel.app/">Portfolio</a> | <a href="https://leetcode.com/u/yashbora/">LeetCode</a></p>

<h2>PROFILE</h2>
<p>Final-year Information Technology student with a 9.16/10 CGPA and internship experience building AI agents, RAG pipelines, and machine learning applications. Skilled in Python, LangChain, LangGraph, FastAPI, and PostgreSQL, with experience deploying applications using Docker, Render, and Hugging Face Spaces.</p>

<h2>EXPERIENCE</h2>
<h3>GenAI Intern | Parallel Minds</h3>
<p class="meta">Pune, India | Jul 2026 - Present</p>
<ul>
<li>Build AI agents and Generative AI applications using Python, LangChain, and large language models.</li>
<li>Develop RAG pipelines with embeddings and vector databases; refine prompts to improve response quality.</li>
<li>Build FastAPI REST services and integrate AI workflows with PostgreSQL-backed applications.</li>
</ul>
<h3>AI/ML Intern - GenAI &amp; LLM | Edu Plus Now / UDNAV ERP</h3>
<p class="meta">Pune, India | Jan 2026 - Apr 2026</p>
<ul>
<li>Completed a 120-hour program covering AI, ML, Generative AI, and large language models.</li>
<li>Built Streamlit interfaces and FastAPI services; integrated Gemini and Groq APIs.</li>
<li>Debugged Docker deployment issues and delivered AI tools on Hugging Face Spaces with full SDLC documentation.</li>
</ul>
<h3>Project Intern - Machine Learning &amp; Deep Learning | Edunet Foundation</h3>
<p class="meta">Pune, India | Jan 2025 - Feb 2025</p>
<ul>
<li>Applied 10+ ML/DL models, including CNN and ARIMA, using TensorFlow and Scikit-learn on large datasets.</li>
<li>Delivered three end-to-end AI solutions, including image classifiers, improving processing efficiency by 15%.</li>
<li>Presented weekly findings to mentors and maintained technical documentation for implemented models.</li>
</ul>

<h2>EDUCATION</h2>
<h3>B.E. in Information Technology</h3>
<p>PVG's College of Engineering and Technology, Pune</p>
<p class="meta">2023 - 2027 | CGPA: 9.16 / 10</p>

<h2>TECHNICAL SKILLS</h2>
<p><b>GenAI:</b> LangChain, LangGraph, LangSmith, LangServe, RAG, FAISS, Hugging Face, Transformers, prompt engineering</p>
<p><b>ML / DL:</b> Python, TensorFlow, PyTorch, Scikit-learn, CNN, RNN, LSTM, NLP, OpenCV</p>
<p><b>Backend / deployment:</b> FastAPI, Flask, Streamlit, REST APIs, Docker, Render, Hugging Face Spaces</p>
<p><b>Data:</b> Pandas, NumPy, Matplotlib, Seaborn, PostgreSQL, SQL, MongoDB, Tableau</p>
<p><b>Tools / languages:</b> Git, GitHub, Jupyter, VS Code, C++, Java (Basics)</p>
""", """
<h1 style="font-size: 20pt">YASH BORA</h1>
<p class="meta">AI/ML Engineer | Selected work and achievements</p>
<h2>PROJECTS</h2>

<h3>Multi-modal Agentic Assistant | <a href="https://muitimodal-agent.onrender.com/">Live demo</a></h3>
<p class="stack">Python / LangGraph / LangChain / FastAPI / Streamlit / OCR / Whisper / Render</p>
<ul>
<li>Built an assistant for PDFs, images, audio, YouTube videos, and general queries using a LangGraph planner that decomposes requests, selects tools, and maintains bounded conversation state.</li>
<li>Implemented query-aware chunking, OCR, speech transcription, ambiguity handling, structured outputs, retries, and model fallback; deployed FastAPI and Streamlit services with token-usage monitoring.</li>
</ul>

<h3>Sports RAG Assistant | <a href="https://github.com/YashBora21/Sports-Rag">Source</a> | <a href="https://huggingface.co/spaces/yashbora12/sports-rag">Live demo</a></h3>
<p class="stack">Python / LangChain / FastAPI / Streamlit / FAISS / Groq / Docker</p>
<ul>
<li>Combined BM25 keyword search, FAISS semantic retrieval, reciprocal rank fusion, and cross-encoder reranking, achieving 97% query-routing accuracy.</li>
<li>Automated Wikipedia ingestion for 100K+ documents; built a pipeline over 120K+ vector embeddings, evaluated with RAGAS, and deployed on Hugging Face Spaces using Docker.</li>
</ul>

<h3>Voice-Enabled SQL Analytics Agent</h3>
<p class="stack">Python / LangGraph / FastAPI / Whisper / edge-TTS / Gemini / PostgreSQL</p>
<ul>
<li>Built a voice-to-SQL-to-answer pipeline using a LangGraph ReAct agent, with schema caching, multi-turn memory, and an iterative SQL debugger.</li>
<li>Exposed FastAPI endpoints for voice input, natural-language database queries, and text-to-speech playback.</li>
</ul>

<h3>VeriMed-X | AI Medical Report Verification</h3>
<p class="stack">Python / LangChain / FastAPI / Gemini / PostgreSQL / pgvector / FAISS / Docker</p>
<ul>
<li>Built a report verification pipeline to flag inconsistencies and cross-reference patient history through semantic retrieval, with FastAPI ingestion and structured JSON audit responses.</li>
</ul>

<h3>Plant Disease Detection | <a href="https://github.com/YashBora21/plant">Source</a> | <a href="https://plant-disease-detection-11ax.onrender.com/">Live demo</a></h3>
<p class="stack">Python / TensorFlow / VGG19 / OpenCV / Streamlit / Render</p>
<ul>
<li>Trained a VGG19 CNN on 50K+ leaf images across 38 classes, reaching 96% test accuracy; deployed an image-upload application with disease predictions and confidence scores.</li>
</ul>

<h3>Employee Churn Predictor | <a href="https://github.com/YashBora21/Predict_Employee_Retentions_Porject">Source</a> | <a href="https://predict-employee-retentionst.onrender.com/">Live demo</a></h3>
<p class="stack">Python / XGBoost / Scikit-learn / Render</p>
<ul>
<li>Built an XGBoost model with 92% accuracy using job satisfaction, salary, overtime, and promotion history; deployed an interactive application for employee churn-risk predictions.</li>
</ul>

<h2>PROBLEM SOLVING &amp; CERTIFICATIONS</h2>
<p><b>LeetCode:</b> 343+ problems (155 Easy, 170 Medium, 18 Hard); 100 Days Badge 2026; 30-day maximum streak.</p>
<p>AWS re/Start Graduate / Programming Using Python (NIIT) / Software Engineering Job Simulation (Forage) / ChatGPT For Everyone / Advanced C++</p>
"""]

doc = fitz.open()
for number, content in enumerate(PAGES, 1):
    page = doc.new_page(width=595, height=842)
    spare, scale = page.insert_htmlbox(fitz.Rect(40, 35, 555, 797), content, css=CSS, scale_low=1)
    assert spare >= 0 and scale == 1, f"Resume page {number} overflows"
    page.draw_line((40, 810), (555, 810), color=(0.8, 0.85, 0.85), width=0.5)
    page.insert_text((40, 824), "Yash Bora | AI/ML Engineer", fontsize=8, color=(0.35, 0.4, 0.44))
    page.insert_text((530, 824), f"{number} / 2", fontsize=8, color=(0.35, 0.4, 0.44))

doc.set_metadata({"title": "Yash Bora - AI/ML Engineer Resume", "author": "Yash Bora", "subject": "Generative AI, agentic systems, and machine learning"})
target = OUT / "Yash_Bora_Resume.pdf"
doc.save(target, garbage=4, deflate=True)
for number, page in enumerate(doc, 1):
    page.get_pixmap(matrix=fitz.Matrix(1.5, 1.5)).save(PREVIEW / f"resume-{number}.png")
assert len(doc) == 2
assert all(name in "".join(page.get_text() for page in doc) for name in ["Parallel Minds", "VeriMed-X", "Voice-Enabled", "343+"])
doc.close()
shutil.copyfile(target, ROOT / "public" / target.name)
print(f"Created and checked {target}")
