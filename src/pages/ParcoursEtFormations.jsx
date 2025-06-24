import React from 'react';
import Slider from 'react-slick';
import { FaArrowDown } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const imgStyle = {
  width: '100%',
  height: '250px',
  objectFit: 'cover',
  borderRadius: '10px',
  boxShadow: '0 4px 10px rgba(0,0,0,0.4)'
};

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  pauseOnHover: true
};

const ParcoursEtFormations = ({ scrollToSection }) => {
  return (
    <div
      className="section"
      style={{
        backgroundColor: 'var(--section-bg)',
        color: 'var(--text-light)',
        padding: '2rem',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--accent)' }}>
        Parcours et Formation
      </h2>

      {/* Ligne 1 */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem' }}>
        <div style={{ flex: '1 1 300px', maxWidth: '400px' }}>
          <Slider {...sliderSettings}>
            <img src="/Ingenieur/1.jpg" alt="École 1" style={imgStyle} />
            <img src="/Ingenieur/2.jpg" alt="École 2" style={imgStyle} />
            <img src="/Ingenieur/3.jpg" alt="École 3" style={imgStyle} />
            <img src="/Ingenieur/4.jpg" alt="École 4" style={imgStyle} />
            <img src="/Ingenieur/5.jpg" alt="École 5" style={imgStyle} />
          </Slider>
        </div>
        <div style={{ flex: '2 1 300px' }}>
          <h3>Mon parcours en école d’ingénieur</h3>
          <p>
            Après une classe préparatoire scientifique, j’ai intégré une école d’ingénieur,
            ce qui m’a permis d’acquérir une solide base en mathématiques, physique et informatique.
            Au cours de mon cursus, j’ai également effectué plusieurs stages en ingénierie, 
            qui m'ont permis d’appliquer ces connaissances dans des contextes concrets, 
            de renforcer ma rigueur méthodologique et de mieux comprendre les enjeux industriels et technologiques du terrain.
          </p>
        </div>
      </div>

      {/* Ligne 2 */}
      <div style={{ display: 'flex', flexWrap: 'wrap-reverse', gap: '2rem', marginBottom: '3rem' }}>
        <div style={{ flex: '2 1 300px' }}>
          <h3>Expériences entrepreneuriales et salariées</h3>
          <p> Mes capacités d’adaptation m’ont permis de suivre et de mener à bien plusieurs projets et cursus divers et variés :</p>
          <p>
          J’ai lancé plusieurs projets en ligne, dont une chaîne : YouTube automatisée, des boutiques en dropshipping et en e-commerce. 
          Ces expériences m'ont permis de développer des compétences concrètes en création de contenu, marketing digital, gestion de projet et vente en ligne.
          Parallèlement, mon expérience en entreprise m’a permis d’affiner mes compétences humaines (communication, collaboration, gestion du temps) ainsi que techniques, en travaillant dans des environnements structurés et orientés résultats.
          Par exemple, pour financer mes projets, j’ai travaillé dans la restauration et l’hôtellerie, de Paris à la Suisse, où j’ai eu l’occasion de manager des équipes. Ce travail demande de la rigueur, de l’organisation, de la résilience et une bonne résistance au stress.
          </p>
        </div>
        <div style={{ flex: '1 1 300px', maxWidth: '400px' }}>
          <Slider {...sliderSettings}>
            <img src="/Portfolio/entreprenariat/1.png" alt="Business 1" style={imgStyle} />
            <img src="/Portfolio/entreprenariat/2.png" alt="Business 2" style={imgStyle} />
            <img src="/Portfolio/entreprenariat/3.png" alt="Business 3" style={imgStyle} />
            <img src="/Portfolio/entreprenariat/4.png" alt="Business 4" style={imgStyle} />
          </Slider>
        </div>
      </div>

      {/* Ligne 3 */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem' }}>
        <div style={{ flex: '1 1 300px', maxWidth: '400px' }}>
          <Slider {...sliderSettings}>
            <img src="/Portfolio/gns3/1.png" alt="IT 1" style={imgStyle} />
            <img src="/Portfolio/entreprenariat/58.JPG" alt="IT 2" style={imgStyle} />
            <img src="/Portfolio/etnair/code.png" alt="IT 3" style={imgStyle} />
            <img src="/Portfolio/etnair/portainer.png" alt="IT 4" style={imgStyle} />
          </Slider>
        </div>
        <div style={{ flex: '2 1 300px' }}>
          <h3>Formation actuelle en informatique</h3>
          <p>
            Je suis actuellement en formation en administration systèmes, avec un focus sur le réseau, la virtualisation et la cybersécurité.
            Mon objectif est de pouvoir concevoir, déployer, maintenir et sourtout sécurisé des infrastructures informatiques robustes et évolutives.
            Cette formation me permet de renforcer et de développer mes compétences techniques,
            les architectures réseaux, la gestion des machines virtuelles, les services d’infrastructure, la sécurisation des systèmes et sur des environnements inedits!
          </p>
        </div>
      </div>

      {/* Flèche vers projets */}
      <div
        onClick={() => scrollToSection && scrollToSection('projets')}
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
        <div style={{ fontSize: '0.9rem', marginBottom: '0.3rem' }}>Slide vers Projets</div>
        <FaArrowDown size={24} color="var(--accent)"/>
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

export default ParcoursEtFormations;
