import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import custom sections
import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function App() {
    const [loading, setLoading] = useState(true);
    const [animationStarted, setAnimationStarted] = useState(false);
    const appRef = useRef(null);

    useEffect(() => {
        // 1. Initial Page Loading Animation Timeout
        const timer = setTimeout(() => {
            // Start entrance animations
            setAnimationStarted(true);

            // Simultaneously fade in the main page content wrapper smoothly
            gsap.to('.page-content-wrapper', {
                opacity: 1,
                visibility: 'visible',
                duration: 1.2,
                ease: 'power3.out'
            });

            // Fade out loading screen smoothly
            gsap.to('.preloader-screen', {
                opacity: 0,
                y: -100,
                duration: 1.0,
                ease: 'power4.inOut',
                onComplete: () => {
                    setLoading(false);
                    // Refresh all ScrollTriggers once loader is unmounted
                    setTimeout(() => {
                        ScrollTrigger.refresh();
                    }, 100);
                }
            });
        }, 1600);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (loading) return;

        const ctx = gsap.context(() => {
            // 2. Custom Magnetic Cursor Follower
            const cursor = document.getElementById('custom-cursor');
            const dot = document.getElementById('custom-cursor-dot');

            if (cursor && dot) {
                const onMouseMove = (e) => {
                    gsap.to(cursor, {
                        x: e.clientX,
                        y: e.clientY,
                        duration: 0.35,
                        ease: 'power3.out'
                    });
                    gsap.to(dot, {
                        x: e.clientX,
                        y: e.clientY,
                        duration: 0.08,
                        ease: 'power3.out'
                    });
                };

                window.addEventListener('mousemove', onMouseMove);

                // Bind hovered class transitions to all buttons, links and clickable cards
                const handleMouseEnter = () => cursor.classList.add('hovered');
                const handleMouseLeave = () => cursor.classList.remove('hovered');

                const clickables = document.querySelectorAll('.clickable, a, button');
                clickables.forEach(el => {
                    el.addEventListener('mouseenter', handleMouseEnter);
                    el.addEventListener('mouseleave', handleMouseLeave);
                });

                // Cleanup listener references
                return () => {
                    window.removeEventListener('mousemove', onMouseMove);
                    clickables.forEach(el => {
                        el.removeEventListener('mouseenter', handleMouseEnter);
                        el.removeEventListener('mouseleave', handleMouseLeave);
                    });
                };
            }
        }, appRef);

        return () => ctx.revert();
    }, [loading]);

    useEffect(() => {
        if (loading) return;

        // 3. Scroll Reveal Entrance Animations for Sections using GSAP ScrollTrigger
        const sections = gsap.utils.toArray('.section-reveal');

        sections.forEach((section) => {
            gsap.fromTo(section,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, [loading]);

    return (
        <div ref={appRef} className="relative min-h-screen text-[#111111] font-sans">

            {/* 3D WebGL Constellation Background */}
            <ThreeBackground />

            {/* Modern Soft Preloader Reveal Screen */}
            {loading && (
                <div className="preloader-screen fixed inset-0 w-full h-full bg-[#111111] z-[99999] flex flex-col items-center justify-center select-none text-white">
                    <div className="space-y-4 text-center">
                        <h2 className="text-[10px] tracking-[0.4em] font-semibold text-[#7C98A4] uppercase animate-pulse">
                            LOADING MATRIX
                        </h2>
                        <div className="h-[1px] w-[120px] bg-[#D9D9D9]/20 mx-auto relative overflow-hidden">
                            <div className="absolute inset-0 bg-[#7C98A4] w-2/3 h-full animate-[loading-bar_1.6s_ease-in-out_infinite]"></div>
                        </div>
                        <p className="text-[9px] tracking-widest text-[#B6B6B6]/50 uppercase font-serif">
                            YASH BORA © {new Date().getFullYear()}
                        </p>
                    </div>
                </div>
            )}

            {/* Main Page Layout Core - always rendered to allow mounting / layout calculations and prevent visual pop */}
            <div 
                className="page-content-wrapper relative z-10 w-full min-h-screen flex flex-col"
                style={{ opacity: 0, visibility: 'hidden' }}
            >
                {/* Header & Navigation */}
                <Navbar active={animationStarted} />

                {/* Interactive Concentric Rings Hero Showcase */}
                <Hero active={animationStarted} />

                {/* About Section */}
                <About />

                {/* Experience Section */}
                <Experience />

                {/* Skills Grid */}
                <Skills />

                {/* Projects Portfolio */}
                <Projects />

                {/* Contact Form */}
                <Contact />

                {/* Footer Copyright */}
                <Footer />
            </div>

            {/* Style for loading bar animations */}
            <style>{`
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(150%); }
        }
      `}</style>

        </div>
    );
}
