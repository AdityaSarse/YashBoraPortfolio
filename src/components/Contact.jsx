import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.subject || !formState.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });

      tl.from('.contact-title', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.5')
      .from('.contact-heading', {
        y: 35,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.5')
      .from('.contact-info-item', {
        y: 20,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.5')
      .from('.contact-form-block', {
        y: 40,
        opacity: 0,
        duration: 1.0,
        ease: 'power3.out'
      }, '-=0.5')
      .from('.contact-home-btn', {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(1.7)'
      }, '-=0.4');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative w-full flex flex-col items-center bg-[#F4F4F4] overflow-hidden select-none pt-20 pb-12"
    >
      {/* ── shared width wrapper ── */}
      <div className="w-full max-w-[680px] px-6 flex flex-col items-center">

        {/* 1. SECTION TITLE */}
        <div className="contact-title text-center mb-6 w-full">
          <h2 className="text-[11px] font-normal tracking-[0.5em] text-[#7C98A4] uppercase">
            CONTACT
          </h2>
        </div>

        {/* 3. PRIMARY HEADING */}
        <div className="contact-heading text-center mb-10 w-full">
          <h3 className="text-[26px] md:text-[32px] font-bold text-[#111111] leading-snug">
            I have got just what you need.{' '}
            <span className="relative inline-block">
              Lets talk.
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#111111]" />
            </span>
          </h3>
        </div>

        {/* 4. CONTACT INFO BLOCK — perfectly centered column */}
        <div className="w-full flex flex-col items-center gap-4 mb-10">

          {/* Phone */}
          <div className="contact-info-item flex items-center gap-4 w-full max-w-[340px]">
            <div className="w-9 h-9 rounded-full bg-[#72B3A2]/15 flex items-center justify-center text-[#72B3A2] shrink-0">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.25 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <a href="tel:+918624962343"
              className="text-[15px] text-[#111111] font-light tracking-wide hover:text-[#72B3A2] transition-colors duration-300 clickable">
              +91-8624962343
            </a>
          </div>

          {/* Email */}
          <div className="contact-info-item flex items-center gap-4 w-full max-w-[340px]">
            <div className="w-9 h-9 rounded-full bg-[#72B3A2]/15 flex items-center justify-center text-[#72B3A2] shrink-0">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <a href="mailto:yashbora567@gmail.com"
              className="text-[15px] text-[#111111] font-light tracking-wide hover:text-[#72B3A2] transition-colors duration-300 clickable">
              yashbora567@gmail.com
            </a>
          </div>

          {/* Location */}
          <div className="contact-info-item flex items-center gap-4 w-full max-w-[340px]">
            <div className="w-9 h-9 rounded-full bg-[#72B3A2]/15 flex items-center justify-center text-[#72B3A2] shrink-0">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <span className="text-[15px] text-[#111111] font-light tracking-wide">
              Pune Katraj
            </span>
          </div>

        </div>

        {/* 5. CONTACT FORM BLOCK — same max-width as info block area */}
        <div className="contact-form-block w-full mt-2">
          {submitted ? (
            <div className="text-center py-12 space-y-4 bg-white rounded-2xl shadow-sm border border-[#D9D9D9]/20">
              <div className="w-12 h-12 bg-[#72B3A2] rounded-full flex items-center justify-center mx-auto text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#111111] uppercase tracking-wider">
                Message Sent!
              </h3>
              <p className="text-xs text-[#6B7280] tracking-widest">
                THANK YOU. I WILL GET IN TOUCH WITH YOU SHORTLY.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">

              {/* Row 1: Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={e => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Name"
                  className="bg-[#E8E8E8] border-0 rounded-2xl px-5 py-4 text-sm text-[#111111] placeholder:text-[#9CA3AF] outline-none w-full transition-all duration-300 focus:bg-white focus:ring-2 focus:ring-[#72B3A2]/40 clickable"
                />
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={e => setFormState({ ...formState, email: e.target.value })}
                  placeholder="Email"
                  className="bg-[#E8E8E8] border-0 rounded-2xl px-5 py-4 text-sm text-[#111111] placeholder:text-[#9CA3AF] outline-none w-full transition-all duration-300 focus:bg-white focus:ring-2 focus:ring-[#72B3A2]/40 clickable"
                />
              </div>

              {/* Row 2: Subject */}
              <input
                type="text"
                required
                value={formState.subject}
                onChange={e => setFormState({ ...formState, subject: e.target.value })}
                placeholder="Subject"
                className="bg-[#E8E8E8] border-0 rounded-2xl px-5 py-4 text-sm text-[#111111] placeholder:text-[#9CA3AF] outline-none w-full transition-all duration-300 focus:bg-white focus:ring-2 focus:ring-[#72B3A2]/40 clickable"
              />

              {/* Row 3: Message */}
              <textarea
                rows="5"
                required
                value={formState.message}
                onChange={e => setFormState({ ...formState, message: e.target.value })}
                placeholder="Message"
                className="bg-[#E8E8E8] border-0 rounded-2xl px-5 py-4 text-sm text-[#111111] placeholder:text-[#9CA3AF] outline-none w-full transition-all duration-300 focus:bg-white focus:ring-2 focus:ring-[#72B3A2]/40 resize-none clickable"
              />

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 bg-[#72B3A2] hover:bg-[#5E9E8D] text-white font-semibold text-[13px] tracking-[0.22em] rounded-2xl shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md active:scale-[0.98] uppercase cursor-pointer clickable"
              >
                Submit
              </button>

            </form>
          )}
        </div>

        {/* 6. FLOATING HOME BUTTON */}
        <div className="contact-home-btn flex justify-center mt-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-[50px] h-[50px] rounded-full bg-[#72B3A2] hover:bg-[#5E9E8D] text-white flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer clickable group"
            aria-label="Back To Top"
          >
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </button>
        </div>

      </div>{/* end shared width wrapper */}
    </section>
  );
}
