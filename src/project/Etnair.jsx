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

const Etnair = () => {
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
      <h1>Etnair — Plateforme de réservation type Rbnb</h1>
      <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>Auteur : BARTHELEMY Xavier(DevOps) Luis JIMENEZ(Dev Backend) Marwah RAJA JAVED KARAMAT(Dev Backend) Hanja RAMARLINA(Dev Frontend) Quentin MOURNIER(Dev Frontend) </p>

      <Slider {...settings} style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
        <img src="/etnair/etnair.png" alt="Etnair 1" style={imgStyle} />
        <img src="/etnair/code.png" alt="Etnair 2" style={imgStyle} />
        <img src="/etnair/grafana_prometheus.png" alt="Etnair 3" style={imgStyle} />
        <img src="/etnair/portainer.png" alt="Etnair 4" style={imgStyle} />
      </Slider>
      <h1>Description:</h1>
      <p>
        Projet full stack de location de logements avec rôle DevOps : déploiement Docker/Kubernetes, CI/CD avec GitLab, monitoring avec Grafana et Prometheus, reverse proxy avec Traefik et gestion des containers via Portainer.
        Etnair est une plateforme de réservation en ligne inspirée d'Airbnb, permettant aux utilisateurs de trouver et réserver des hébergements de manière simple et intuitive. En tant qu'ISR DevOps,
         mon rôle a été essentiel pour assurer le bon fonctionnement de l'infrastructure du site, la gestion du déploiement et la maintenance continue de l'application
      </p>

      <a href="https://github.com/LeVraiGitPush/Etnair-Rbnb-" target="_blank" rel="noopener noreferrer"
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

export default Etnair;
