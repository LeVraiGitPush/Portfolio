import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const imgStyle = {
  width: '100%',
  height: '250px',
  objectFit: 'cover',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
};

const cardStyle = {
  width: '100%',
  maxWidth: '480px',
  background: 'var(--card-bg)',
  padding: '1.5rem',
  borderRadius: '16px',
  boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
  color: 'var(--text-light)',
};

const Projets = () => {
  const navigate = useNavigate();
  const goToProjet = (id) => navigate(`/projets/${id}`);

  const projets = [
    {
      id: 4,
      title: 'GNS3+VirtualBox (Infrastructure Reseau Entreprise)',
      images: ['/Portfolio/gns3/1.png', '/Portfolio/gns3/2.png', '/Portfolio/gns3/3.png', '/Portfolio/gns3/4.png'],
      description: "Simulation d'un réseau virtuel d'entreprise avec gestion des acces via VirtualBox et GNS3.",
    },
    {
      id: 3,
      title: 'Etnair',
      images: [
        '/Portfolio/etnair/etnair.png',
        '/Portfolio/etnair/code.png',
        '/Portfolio/etnair/grafana_prometheus.png',
        '/Portfolio/etnair/portainer.png',
      ],
      description: 'Projet RBnB like: Site Web dockerisé/Pipeline CI/CD, monitoring.',
    },
    {
      id: 1,
      title: 'Zenapp',
      images: [
        '/Portfolio/Thot/1.png',
        '/Portfolio/Thot/3.png',
        '/Portfolio/Thot/4.png',
        '/Portfolio/Thot/5.png',
        '/Portfolio/Thot/6.png',
      ],
      description: 'Application bien-être TSX React.',
    },
    {
      id: 2,
      title: 'Blackjack',
      images: [
        '/Portfolio/blackjack/0.JPG',
        '/Portfolio/blackjack/1.png',
        '/Portfolio/blackjack/2.png',
        '/Portfolio/blackjack/6.png',
      ],
      description: 'Jeu complet en React/Python avec règles blackjack.',
    },
  ];

  return (
    <div
      className="section"
      style={{
        padding: '2rem',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--section-bg)',
        color: 'var(--text-light)',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--accent)' }}>
        Mes Projets
      </h1>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Cliquez sur une image pour plus de détail sur le projet
      </h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        {projets.map(({ id, title, images, description }) => (
          <div key={id} style={cardStyle}>
            <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>{title}</h3>
            <Slider {...settings}>
              {images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${title} ${i + 1}`}
                  style={imgStyle}
                  onClick={() => goToProjet(id)}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              ))}
            </Slider>
            <p style={{ textAlign: 'center', marginTop: '1rem' }}>{description}</p>
          </div>
        ))}
      </div>
      <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
        NB : on pourrait aussi compter ce site, réalisé par moi-même JavaScript eheheh :)
      </p>
    </div>
  );
};

export default Projets;
