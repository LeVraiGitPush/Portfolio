import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const themes = [
  { id: 'minimal', label: 'Minimal Luxury' },
  { id: 'zen', label: 'Digital Zen' },
  { id: 'minimalist', label: 'High-Contrast Minimalism' },
  { id: 'jewel', label: 'Jewel Tones' },
];

const ProjetHeader = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState('minimal');

  // Exemple d'état pour gérer la taille responsive du header selon le thème
  const [headerHeight, setHeaderHeight] = useState('70px');

  useEffect(() => {
    document.body.classList.remove(...themes.map(t => `theme-${t.id}`));
    document.body.classList.add(`theme-${theme}`);

    // Ajuste la hauteur en fonction du thème (exemple)
    switch (theme) {
      case 'minimal':
        setHeaderHeight('70px');
        break;
      case 'zen':
        setHeaderHeight('90px'); // plus grand, style zen plus aéré
        break;
      case 'minimalist':
        setHeaderHeight('60px'); // plus compact
        break;
      case 'jewel':
        setHeaderHeight('80px');
        break;
      default:
        setHeaderHeight('70px');
    }
  }, [theme]);

  return (
    <div
      style={{
        background: '#111',
        color: '#fff',
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
        flexWrap: 'wrap',
        gap: '1rem',
        height: headerHeight,
        transition: 'height 0.3s ease',
      }}
    >
      <button
        onClick={() => navigate('/')}
        style={{
          background: '#00bcd4',
          color: '#000',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
          flexShrink: 0,
        }}
      >
        ← Retour à l’accueil
      </button>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          color: 'var(--text-light)',
          fontWeight: 'bold',
          flexShrink: 0,
        }}
      >
        <label
          htmlFor="theme-select-projet"
          style={{ marginRight: '0.5rem', cursor: 'pointer' }}
        >
          Changer le thème :
        </label>
        <select
          id="theme-select-projet"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          style={{
            padding: '0.4rem 0.8rem',
            backgroundColor: 'var(--card-bg)',
            color: 'var(--text-light)',
            border: '1px solid var(--accent)',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: theme === 'zen' ? '1.1rem' : '1rem', // exemple de variation de taille
            transition: 'font-size 0.3s ease',
          }}
        >
          {themes.map((t) => (
            <option key={t.id} value={t.id}>
              {t.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProjetHeader;

