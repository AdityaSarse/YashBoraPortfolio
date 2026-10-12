import { useLayoutEffect, useRef } from 'react';
import { ToolCard } from './ToolCard';
import { useToolGridSpotlight } from '../hooks/useToolCardAnimations';

const groups = [
  { title: 'AI & machine learning', skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-Learn', 'Keras', 'OpenCV', 'LangChain', 'LangGraph', 'LangSmith', 'Hugging Face', 'OpenAI', 'Gemini', 'Groq', 'FastGPT'] },
  { title: 'Data & analytics', skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'PostgreSQL', 'MongoDB', 'Jupyter', 'Colab'] },
  { title: 'Applications & deployment', skills: ['FastAPI', 'Flask', 'Streamlit', 'Docker', 'Render', 'AWS', 'React', 'Vite', 'GSAP'] },
  { title: 'Languages & developer tools', skills: ['C++', 'Java', 'Git', 'GitHub', 'VS Code'] },
];

export default function Skills({ selectedSkill, onSelectSkill, hoveredSkills }) {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const sections = [...sectionRef.current.querySelectorAll('.skill-group')];
    const timers = [];
    sections.forEach(section => section.classList.add('is-pending'));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('is-pending');
        entry.target.classList.add('is-revealing');
        const cardCount = entry.target.querySelectorAll('.skill-tile').length;
        timers.push(window.setTimeout(() => entry.target.classList.remove('is-revealing'), 650 + cardCount * 50));
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });
    sections.forEach(section => observer.observe(section));
    return () => { observer.disconnect(); timers.forEach(clearTimeout); };
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="skills-section py-16 px-6 md:px-12 bg-[#F4F4F4]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-xs uppercase tracking-[0.4em] text-[#536B75] font-semibold mb-3">Skills</h2>
          <p className="text-2xl md:text-3xl font-bold text-[#111]">From models to working products.</p>
          <p className="text-sm text-[#6B7280] mt-3">Technologies used across my projects, internships, and training.</p>
        </div>
        <div className="skill-groups">
          {groups.map(group => <ToolGroup key={group.title} group={group} selectedSkill={selectedSkill} onSelectSkill={onSelectSkill} hoveredSkills={hoveredSkills} />)}
        </div>
      </div>
    </section>
  );
}

function ToolGroup({ group, selectedSkill, onSelectSkill, hoveredSkills }) {
  const { gridRef, onMouseMove, onMouseLeave } = useToolGridSpotlight();
  return (
    <div className="skill-group">
      <h3>{group.title}<span>{group.skills.length} tools</span></h3>
      <ul ref={gridRef} className="skill-grid" onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
        {group.skills.map((name, index) => <ToolCard key={name} name={name} index={index} selected={selectedSkill === name} highlighted={hoveredSkills.includes(name)} onSelect={() => onSelectSkill(selectedSkill === name ? null : name)} />)}
      </ul>
    </div>
  );
}
