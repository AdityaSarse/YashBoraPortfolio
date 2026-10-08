import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const names = [
  { text: 'यश बोरा', lang: 'hi', label: 'Hindi' },
  { text: 'યશ બોરા', lang: 'gu', label: 'Gujarati' },
  { text: 'ヤシュ・ボラ', lang: 'ja', label: 'Japanese' },
  { text: 'Yash Bora', lang: 'fr', label: 'French' },
  { text: '亚什·博拉', lang: 'zh-Hans', label: 'Chinese' },
  { text: '야시 보라', lang: 'ko', label: 'Korean' },
  { text: 'ياش بورا', lang: 'ar', label: 'Arabic' },
  { text: 'Яш Бора', lang: 'ru', label: 'Russian' },
  { text: 'யஷ் போரா', lang: 'ta', label: 'Tamil' },
  { text: 'যশ বোরা', lang: 'bn', label: 'Bengali' },
  { text: 'Yash Bora', lang: 'en', label: 'English' },
];
const technologies = 'Python — LangGraph — FastAPI — Generative AI — PostgreSQL — Docker — RAG — TensorFlow — ';
const colors = ['#168548', '#d62839', '#5a48c8', '#ca6907', '#167c99', '#b02e76', '#168548', '#5a48c8'];

export default function Hero({ active }) {
  const heroRef = useRef(null);
  const loopsRef = useRef([]);
  const pausedRef = useRef(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!active) return;
    const motion = gsap.matchMedia();
    motion.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        gsap.from('.hero-intro, .name-letter, .name-translations, .hero-actions', {
          y: 24, opacity: 0, duration: 0.9, stagger: 0.055, ease: 'power3.out', clearProps: 'transform,opacity',
        });
        const layers = gsap.utils.toArray('.name-language');
        gsap.set(layers.slice(1), { autoAlpha: 0, y: 24, filter: 'blur(7px)' });
        const cycle = gsap.timeline({ repeat: -1 });
        layers.forEach((layer, index) => {
          const next = layers[(index + 1) % layers.length];
          cycle.to(layer, { autoAlpha: 0, y: -22, filter: 'blur(7px)', duration: 0.65, ease: 'power2.inOut' }, '+=2.5')
            .fromTo(next, { autoAlpha: 0, y: 24, filter: 'blur(7px)' }, { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 0.85, ease: 'power3.out', immediateRender: false }, '-=0.25');
        });
        const wave = gsap.to('.tech-wave textPath', {
          attr: { startOffset: '-8%' }, duration: 18, repeat: -1, yoyo: true, ease: 'sine.inOut',
        });
        loopsRef.current = [cycle, wave];
      }, heroRef);
      let inView = true;
      const sync = () => loopsRef.current.forEach(loop => loop.paused(pausedRef.current || !inView || document.hidden));
      const observer = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; sync(); });
      observer.observe(heroRef.current);
      document.addEventListener('visibilitychange', sync);
      sync();
      return () => {
        observer.disconnect();
        document.removeEventListener('visibilitychange', sync);
        loopsRef.current = [];
        ctx.revert();
      };
    });
    return () => motion.revert();
  }, [active]);

  const toggleMotion = () => {
    pausedRef.current = !pausedRef.current;
    setPaused(pausedRef.current);
    loopsRef.current.forEach(loop => loop.paused(pausedRef.current));
  };

  return (
    <section id="home" ref={heroRef} className="reference-hero" data-paused={paused}>
      <svg className="tech-wave" viewBox="0 0 1600 420" fill="none" aria-hidden="true">
        <defs><path id="hero-tech-path" d="M-800 210 Q-600 -30 -400 210 T0 210 T400 210 T800 210 T1200 210 T1600 210 T2000 210 T2400 210" /></defs>
        <text><textPath href="#hero-tech-path" startOffset="0%">{technologies.repeat(7)}</textPath></text>
      </svg>
      <div className="hero-intro">
        <span className="hero-greeting"><span aria-hidden="true">✳</span> Hello, I'm</span>
        <span className="hero-specialty">AI / ML ENGINEER · PUNE, INDIA</span>
      </div>
      <div className="hero-name-stage">
        <h1 className="reference-name" aria-label="Yash Bora">
          {'YASH BORA'.split('').map((letter, index) => letter === ' ' ? <span key={index} className="name-space" aria-hidden="true" /> : (
            <span key={index} className="name-letter" aria-hidden="true" style={{ '--letter-color': colors[index % colors.length] }}>
              <span className="letter-orbit">◇</span>{letter}
            </span>
          ))}
        </h1>
        <div className="name-translations" aria-hidden="true">
          {names.map(name => <div className="name-language" key={name.lang} lang={name.lang}>
            <span className="translated-name" dir="auto">{name.text}</span>
            <span className="language-label">{name.label}</span>
          </div>)}
        </div>
      </div>
      <div className="hero-actions">
        <p>Building AI agents, intelligent search, and ideas that work beyond the demo.</p>
        <div className="hero-links">
          <a href="#projects" className="hero-primary-link">Explore my work <span aria-hidden="true">↘</span></a>
          <a href="/Yash_Bora_Resume.pdf" download>Download résumé <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <div className="hero-bottom">
        <a href="#about">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a>
        <button type="button" className="hero-motion-toggle" onClick={toggleMotion} aria-pressed={paused} aria-label={paused ? 'Resume hero animation' : 'Pause hero animation'}>
          <span aria-hidden="true">{paused ? '▶' : 'Ⅱ'}</span> {paused ? 'Resume motion' : 'Pause motion'}
        </button>
      </div>
    </section>
  );
}
