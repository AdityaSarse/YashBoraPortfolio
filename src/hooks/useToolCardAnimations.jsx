import { useEffect, useRef } from 'react';

// Tune hover strength here; CSS controls the card scale and glow color.
const TILT_DEGREES = 8;
const GLOW_RADIUS = 220;
const MAGNET_RADIUS = 185;
const MAGNET_DISTANCE = 7;
const activePointer = () => window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches;

export function useToolCardAnimations() {
  const cardRef = useRef(null);
  const frame = useRef(0);
  const pointer = useRef({ x: 0, y: 0 });
  const rectRef = useRef(null);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const onMouseEnter = () => {
    if (!activePointer()) return;
    rectRef.current = cardRef.current?.getBoundingClientRect() ?? null;
    cardRef.current?.classList.add('is-hovered');
    document.getElementById('custom-cursor')?.classList.add('tool-hovered');
  };

  const onMouseMove = (event) => {
    if (!activePointer()) return;
    pointer.current = { x: event.clientX, y: event.clientY };
    if (frame.current) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      const card = cardRef.current;
      if (!card) return;
      const rect = rectRef.current ?? card.getBoundingClientRect();
      const x = pointer.current.x - rect.left;
      const y = pointer.current.y - rect.top;
      card.style.setProperty('--rotate-x', `${((y / rect.height) - 0.5) * -2 * TILT_DEGREES}deg`);
      card.style.setProperty('--rotate-y', `${((x / rect.width) - 0.5) * 2 * TILT_DEGREES}deg`);
      card.style.setProperty('--glare-x', `${x}px`);
      card.style.setProperty('--glare-y', `${y}px`);
      card.style.setProperty('--logo-x', `${((x / rect.width) - 0.5) * 8}px`);
      card.style.setProperty('--logo-y', `${((y / rect.height) - 0.5) * 8}px`);
      card.style.setProperty('--logo-tilt-x', `${((y / rect.height) - 0.5) * -10}deg`);
      card.style.setProperty('--logo-tilt-y', `${((x / rect.width) - 0.5) * 10}deg`);
    });
  };

  const onMouseLeave = () => {
    cancelAnimationFrame(frame.current);
    frame.current = 0;
    rectRef.current = null;
    const card = cardRef.current;
    if (card) {
      card.classList.remove('is-hovered');
      card.style.setProperty('--rotate-x', '0deg');
      card.style.setProperty('--rotate-y', '0deg');
      card.style.setProperty('--logo-x', '0px');
      card.style.setProperty('--logo-y', '0px');
      card.style.setProperty('--logo-tilt-x', '0deg');
      card.style.setProperty('--logo-tilt-y', '0deg');
    }
    document.getElementById('custom-cursor')?.classList.remove('tool-hovered');
  };

  return { cardRef, onMouseEnter, onMouseMove, onMouseLeave };
}

export function useToolGridSpotlight() {
  const gridRef = useRef(null);
  const frame = useRef(0);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const onMouseMove = (event) => {
    if (!activePointer()) return;
    pointer.current = { x: event.clientX, y: event.clientY };
    if (frame.current) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      const cards = [...gridRef.current.querySelectorAll('.skill-tile')];
      // Read every rectangle before writing styles, avoiding forced layout per card.
      const positions = cards.map(card => card.getBoundingClientRect());
      cards.forEach((card, index) => {
        const rect = positions[index];
        const x = pointer.current.x - rect.left;
        const y = pointer.current.y - rect.top;
        const distance = Math.hypot(x - rect.width / 2, y - rect.height / 2);
        const pull = Math.max(0, 1 - distance / MAGNET_RADIUS) * MAGNET_DISTANCE;
        card.style.setProperty('--magnet-x', `${distance ? (x - rect.width / 2) / distance * pull : 0}px`);
        card.style.setProperty('--magnet-y', `${distance ? (y - rect.height / 2) / distance * pull : 0}px`);
        card.style.setProperty('--mx', `${x}px`);
        card.style.setProperty('--my', `${y}px`);
        card.style.setProperty('--glow-opacity', `${Math.max(0, 1 - distance / GLOW_RADIUS)}`);
      });
    });
  };

  const onMouseLeave = () => {
    cancelAnimationFrame(frame.current);
    frame.current = 0;
    gridRef.current?.querySelectorAll('.skill-tile').forEach(card => {
      card.style.setProperty('--glow-opacity', '0');
      card.style.setProperty('--magnet-x', '0px');
      card.style.setProperty('--magnet-y', '0px');
    });
  };

  return { gridRef, onMouseMove, onMouseLeave };
}
