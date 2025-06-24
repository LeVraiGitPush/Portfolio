import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

const Accueil = ({ scrollToSection }) => {
  return (
    <div
      className="section"
      style={{
        backgroundColor: 'var(--section-bg)',
        width: '100%',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        color: 'var(--text-light)',
      }}
    >
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <img
          src="/Portfolio/images/photo.jpg"
          alt="Photo de profil"
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            objectFit: 'cover',
            boxShadow: '0 0 10px rgba(0,0,0,0.3)',
            zIndex: 1,
          }}
        />

        <h2>Mon Portfolio</h2>
        <h1>BARTHELEMY Xavier</h1>
        <h2>Administrateur Systèmes & Réseaux</h2>

        <p style={{ maxWidth: '800px', margin: '0 auto' }}>
          J’ai exploré différents domaines de la restauration à l’automatisation de chaînes YouTube,
          la création de boutiques en ligne et le copywriting. Certains projets ont connu des échecs,
          d’autres ont rencontré du succès, mais chacun m’a permis d’apprendre, de progresser et d’affiner ma vision.
        </p>

        <p style={{ maxWidth: '800px', margin: '1rem auto' }}>
          Bienvenue dans mon portfolio où vous pourrez en apprendre plus sur ce profil atypique
          et mes compétences en tant qu'Administrateur en infrastructure sécurisée.
        </p>
      </div>

      <div
        onClick={() => scrollToSection('apropos')}
        style={{
          position: 'absolute',
          bottom: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
          textAlign: 'center',
          animation: 'bounce 2s infinite',
        }}
      >
        <div style={{ fontSize: '0.9rem', marginBottom: '0.3rem', }}>Slide vers la page à propos</div>
        <FaArrowDown size={20} color="var(--accent)"/>
      </div>

      <style>
        {`
          @keyframes bounce {
            0%, 100% {
              transform: translateX(-50%) translateY(0);
            }
            50% {
              transform: translateX(-50%) translateY(-10px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Accueil;

