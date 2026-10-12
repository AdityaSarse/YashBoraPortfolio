const logos = {
  Python: 'python', TensorFlow: 'tensorflow', PyTorch: 'pytorch', 'Scikit-Learn': 'scikitlearn',
  OpenCV: 'opencv', FastGPT: 'fastgpt', LangChain: 'langchain', LangGraph: 'langgraph',
  LangSmith: 'langsmith', 'Hugging Face': 'huggingface', HuggingFace: 'huggingface',
  Pandas: 'pandas', NumPy: 'numpy', Seaborn: 'seaborn', PostgreSQL: 'postgresql',
  Streamlit: 'streamlit', GitHub: 'github', Flask: 'flask', Render: 'render', Colab: 'colab',
  'C++': 'c++', Java: 'java', Docker: 'docker', Git: 'git', MongoDB: 'mongodb',
  'VS Code': 'vscode', Gemini: 'gemini', Groq: 'groq', OpenAI: 'openai', AWS: 'aws',
  React: 'react', Vite: 'vitejs', GSAP: 'gsap', FastAPI: 'fastapi', Jupyter: 'jupyter',
  Matplotlib: 'matplotlib', Keras: 'keras',
};

export default function TechLogo({ name, className = '' }) {
  const file = logos[name];
  return file ? <img src={`/logos/${file}.svg`} className={`tech-logo ${className}`} alt="" aria-hidden="true" loading="lazy" width="40" height="40" /> : null;
}
