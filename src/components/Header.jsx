import React, { useEffect, useState } from 'react';

const themes = [
  { id: 'minimal', label: 'Minimal Luxury' },
  { id: 'zen', label: 'Digital Zen' },
  { id: 'minimalist', label: 'High-Contrast Minimalism' },
  { id: 'jewel', label: 'Jewel Tones' },
];

const Header = ({ scrollToSection }) => {
  const [theme, setTheme] = useState('minimal');

  useEffect(() => {
    document.body.classList.remove(...themes.map(t => `theme-${t.id}`));
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  const linkStyle = {
    color: 'var(--text-light)',
    textDecoration: 'none',
    margin: '0 1rem',
    fontWeight: 'bold',
    borderBottom: '2px solid transparent',
    cursor: 'pointer',
  };

  return (
    <header
      style={{
        background: 'var(--bg-dark)',
        padding: '1rem 2rem',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        borderBottom: '1px solid var(--card-bg)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <nav style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <a onClick={() => scrollToSection('accueil')} style={linkStyle}>
          Accueil
        </a>
        <a onClick={() => scrollToSection('apropos')} style={linkStyle}>
          À propos
        </a>
        <a onClick={() => scrollToSection('parcours')} style={linkStyle}>
          Parcours & Formation
        </a>
        <a onClick={() => scrollToSection('projets')} style={linkStyle}>
          Projets
        </a>
      </nav>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '0.5rem',
          gap: '0.5rem',
          color: 'var(--text-light)',
          fontWeight: 'bold',
        }}
      >
        <label htmlFor="theme-select" style={{ cursor: 'pointer' }}>
          Changer le thème :
        </label>
        <select
          id="theme-select"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          style={{
            padding: '0.4rem 0.8rem',
            backgroundColor: 'var(--card-bg)',
            color: 'var(--text-light)',
            border: '1px solid var(--accent)',
            borderRadius: '8px',
          }}
        >
          {themes.map((t) => (
            <option key={t.id} value={t.id}>
              {t.label}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
};

export default Header;
