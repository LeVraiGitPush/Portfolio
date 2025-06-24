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

const GNS3 = () => {
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
      <h1>Infrastructure Interne — GNS3 & VirtualBox</h1>
      <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>Auteur : LeVraiGitPush</p>

      <Slider {...settings} style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
        <img src="/Portfolio/gns3/1.png" alt="GNS3 1" style={imgStyle} />
        <img src="/Portfolio/gns3/2.png" alt="GNS3 2" style={imgStyle} />
        <img src="/Portfolio/gns3/3.png" alt="GNS3 3" style={imgStyle} />
      </Slider>
      <h1>Description:</h1>
      <p>
        Création, simulation et maintenance d’un réseau entreprise virtuel complet avec GNS3 et VirtualBox.
        Serveurs RH, Admin, Base de données et Département Recherche interconnectés.
        Systeme d'exploitaion : Debian 12.
      </p>
    </div>
  );
};

export default GNS3;
