// src/pages/ProjetDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

// Import des pages projets
import Zenapp from '../project/Zenapp';
import Blackjack from '../project/Blackjack';
import Etnair from '../project/Etnair';
import GNS3 from '../project/GNS3';

import ProjetHeader from '../components/ProjetHeader'; // adapte le chemin si besoin

const ProjetDetail = () => {
  const { id } = useParams();

  // Contenu principal selon id
  let content;
  switch (id) {
    case '1':
      content = <Zenapp />;
      break;
    case '2':
      content = <Blackjack />;
      break;
    case '3':
      content = <Etnair />;
      break;
    case '4':
      content = <GNS3 />;
      break;
    default:
      content = (
        <div style={{ 
          textAlign: 'center', 
          padding: '5rem', 
          color: 'var(--text-light)', 
          background: 'var(--section-bg)', 
          height: '100vh' 
        }}>
          <h2>Projet non trouvé</h2>
          <a href="/" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>
            Retour à l'accueil
          </a>
        </div>
      );
  }

  return (
    <>
      <ProjetHeader />
      {content}
    </>
  );
};

export default ProjetDetail;

