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

const Zenapp = () => {
  return (
    <div style={{ 
  background: 'var(--section-bg)', 
  color: 'var(--text-light)', 
  padding: '2rem', 
  minHeight: '100vh', 
  overflowY: 'auto' 
}}>
      {/* Bouton retour */}
      <a href="/" style={{ color: '#0af', textDecoration: 'underline', marginBottom: '1rem', display: 'inline-block' }}>
        ← Retour aux projets
      </a>
      <h1>Zenapp — Bien-être & Médecine Chinoise</h1>
      <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>Auteur : LeVraiGitPush</p>

      <Slider {...settings} style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
        <img src="/Portfolio/Thot/1.png" alt="Zenapp 1" style={imgStyle} />
        <img src="/Portfolio/Thot/3.png" alt="Zenapp 2" style={imgStyle} />
        <img src="/Portfolio/Thot/4.png" alt="Zenapp 3" style={imgStyle} />
        <img src="/Portfolio/Thot/5.png" alt="Zenapp 4" style={imgStyle} />
        <img src="/Portfolio/Thot/6.png" alt="Zenapp 5" style={imgStyle} />
        <img src="/Portfolio/Thot/7.png" alt="Zenapp 6" style={imgStyle} />
        <img src="/Portfolio/Thot/8.png" alt="Zenapp 7" style={imgStyle} />
        <img src="/Portfolio/Thot/9.png" alt="Zenapp 8" style={imgStyle} />
        <img src="/Portfolio/Thot/10.png" alt="Zenapp 9" style={imgStyle} />
      </Slider>

      <p>
        Zenapp est une application de bien-être guidée par les principes de la médecine traditionnelle chinoise.
        Elle utilise un prompt GPT pour interroger l'utilisateur et établir un diagnostic énergétique personnalisé (yin, yang, organes, éléments).
        L'application propose ensuite des conseils, rituels, produits adaptés, ou des rendez-vous avec des practitiens specialistes via une interface intuitive.
      </p>
      <h1>Description:</h1>
      <a href="https://github.com/LeVraiGitPush/ZenApp" target="_blank" rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: '1.5rem',
          background: '#0af',
          color: '#fff',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          textDecoration: 'none'
        }}>
        🔗 Voir sur GitHub
      </a>
    </div>
  );
};

export default Zenapp;
