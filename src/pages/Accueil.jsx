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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '2rem',
        paddingBottom: '4rem', // espace pour la flèche
        textAlign: 'center',
      }}
    >
      {/* ✅ Image centrée et responsive */}
      <img
        src="Portfolio/images/image.jpg"
        alt="Photo de profil"
        style={{
          width: '250px',
          height: '275px',
          borderRadius: '10%',
          objectFit: 'cover',
          boxShadow: '0 0 10px rgba(0,0,0,0.3)',
          marginBottom: '2rem',
          maxWidth: '90%',
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

      {/* ✅ Flèche descendue plus bas */}
      <div
        onClick={() => scrollToSection('apropos')}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
          textAlign: 'center',
          animation: 'bounce 2s infinite',
        }}
      >
        <div style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
          Slide vers la page à propos
        </div>
        <FaArrowDown size={24} color="var(--accent)" />
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


