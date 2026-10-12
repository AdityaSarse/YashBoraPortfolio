import { useToolCardAnimations } from '../hooks/useToolCardAnimations';
import TechLogo from './TechLogo';

export function ToolCard({ name, index, selected, highlighted, onSelect }) {
  const { cardRef, onMouseEnter, onMouseMove, onMouseLeave } = useToolCardAnimations();

  return (
    <li className="skill-cell" style={{ '--stagger-index': index }}>
      <button
        ref={cardRef}
        type="button"
        className={`skill-tile${selected ? ' is-selected' : ''}${highlighted ? ' is-related' : ''}`}
        aria-pressed={selected}
        aria-label={`${name}: ${selected ? 'clear experience filter' : 'filter experience'}`}
        onClick={onSelect}
        onMouseEnter={onMouseEnter}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <span className="skill-logo-wrap"><TechLogo name={name} /></span>
        <span className="skill-name">{name}</span>
      </button>
    </li>
  );
}
