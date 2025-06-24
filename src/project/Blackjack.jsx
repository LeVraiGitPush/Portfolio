import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const imgStyle = {
  width: '100%',
  height: '300px',
  objectFit: 'cover',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true
};

const Blackjack = () => {
  return (
    <div style={{ 
  background: '#111', 
  color: '#fff', 
  padding: '2rem', 
  minHeight: '100vh', 
  overflowY: 'auto' 
}}>
      {/* Bouton retour */}
      <a href="/" style={{ color: '#0af', textDecoration: 'underline', marginBottom: '1rem', display: 'inline-block' }}>
        ← Retour aux projets
      </a>
      <h1>Blackjack IA — Entraînement d'une IA pour le jeu</h1>
      <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>Auteur : LeVraiGitPush</p>

      <Slider {...settings} style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
        <img src="/Portfolio/blackjack/0.JPG" alt="Blackjack 0" style={imgStyle} />
        <img src="/Portfolio/blackjack/1.png" alt="Blackjack 1" style={imgStyle} />
        <img src="/Portfolio/blackjack/2.png" alt="Blackjack 2" style={imgStyle} />
        <img src="/Portfolio/blackjack/6.png" alt="Blackjack 3" style={imgStyle} />
      </Slider>
      <h1>Description:</h1>
      <p>
        Ce projet consiste en un jeu de Blackjack codé en Python pour la logique et en React pour l’interface.
        L’objectif est de permettre à une IA de s’entraîner à jouer de manière optimale, avec des possibilités d'analyse de stratégie et d’automatisation.
        Mon objectif initial était d’exploiter les failles statistiques des jeux de casino en ligne en utilisant les mathématiques, les probabilités et l’automatisation. L’idée était d’inverser la logique habituelle : faire en sorte que, sur le long terme, ce soit le joueur — et non le casino — qui soit avantagé.
Ce projet reposait sur une intelligence artificielle capable d’analyser en temps réel les modèles de jeux et d’optimiser les prises de décision. Déployée à grande échelle sur plusieurs plateformes, cette IA aurait potentiellement pu générer des centaines de milliers d’euros par jour.
      </p>

      <a href="https://github.com/LeVraiGitPush/Blackjack" target="_blank" rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: '1.5rem',
          background: 'var(--section-bg)',
          color: 'var(--text-light)',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          textDecoration: 'none'
        }}>
        🔗 Voir sur GitHub
      </a>
    </div>
  );
};

export default Blackjack;
