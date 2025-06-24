import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

const APropos = ({ scrollToSection }) => (
  <div
    className="section"
    style={{
      backgroundColor: 'var(--section-bg)',
      color: 'var(--text-light)',
      padding: '2rem',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
    }}
  >
    <div
      style={{
        maxWidth: '1000px',
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
      }}
    >
      {/* Colonne gauche */}
      <div style={{ flex: '1 1 300px', minWidth: '280px' }}>
        <h2 style={{ marginBottom: '1rem' }}>Contact</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>📧 Email pro : <a href="mailto:barthe_x@etna-alternance.net">barthe_x@etna-alternance.net</a></li>
          <li>📧 Email perso : <a href="mailto:barthlmyxavier@gmail.com">barthlmyxavier@gmail.com</a></li>
          <li>💬 Discord : LeVraiGitPush</li>
          <li>💬 GitHub : <a href="https://github.com/LeVraiGitPush" target="_blank" rel="noopener noreferrer">LeVraiGitPush</a></li>
          <li>📄 CV : <a href="/Portfolio/CV-Xavier-Barthelemy-AdminSys.pdf" target="_blank" rel="noopener noreferrer">Télécharger mon CV (PDF)</a></li>
          <li>🔗 LinkedIn : <a href="https://www.linkedin.com/in/xavier-barthelemy-766a0322b/" target="_blank" rel="noopener noreferrer">Profil LinkedIn</a></li>
          <li>📞 Téléphone : +33 7 59 53 53 31</li>
        </ul>

        {/* Pastilles tech */}
        <div style={{ marginTop: '2rem' }}>
          <h4 style={{ marginBottom: '0.5rem' }}>Technologies & Environnements</h4>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginTop: '0.5rem',
            }}
          >
            {[
              { name: 'Docker', color: '#326ce5' },
              { name: 'Kubernetes', color: '#326ce5' },
              { name: 'Grafana', color: '#326ce5' },
              { name: 'Prometheus', color: '#326ce5' },
              { name: 'GitHub', color: '#fc6d26' },
              { name: 'GitLab', color: '#fc6d26' },
              { name: 'Debian', color: '#a80030' },
              { name: 'GNS3', color: '#3f51b5' },
              { name: 'Cisco PT', color: '#3f51b5' },
              { name: 'Windows', color: '#a80030' },
              { name: 'Mac', color: '#a80030' },
              { name: 'VirtualBox', color: '#183b61' },
              { name: 'VMware', color: '#183b61' },
              { name: 'React', color: '#f00000' },
              { name: 'Typescript', color: '#f00000' },
              { name: 'Javascript', color: '#f00000' },
              { name: 'Shell', color: '#f00000' },
              { name: 'Bash', color: '#f00000' },
              { name: 'Python', color: '#f00000' },
            ].map((tech, idx) => (
              <span
                key={idx}
                style={{
                  backgroundColor: tech.color,
                  color: '#fff',
                  borderRadius: '15px',
                  padding: '6px 12px',
                  fontSize: '0.85rem',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
                }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Colonne droite */}
      <div style={{ flex: '2 1 400px', minWidth: '300px' }}>
        <h2 style={{ marginBottom: '1rem' }}>À propos de moi</h2>
        <p>
          Je suis un jeune entrepreneur indépendant, passionné par le numérique et l’innovation.
          Après un parcours en classe préparatoire et une expérience en école d’ingénieur,
          j’ai choisi de me lancer dans plusieurs projets de business en ligne.
        </p>
        <p>
          Aujourd'hui je me forme pour mettre à profit mes compétences dans une entreprise.
          J’ai pour ambition de construire des solutions innovantes,
          et maîtriser les connaissances techniques nécessaires pour mes futurs projets.
        </p>

        <h3 style={{ marginTop: '2rem' }}>Compétences techniques</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[
            { label: 'Automatisation de script', level: 80, color: '#f7df1e' },
            { label: 'Securisation des infrastructures', level: 60, color: '#6e5494' },
            { label: 'Gestion de reseau', level: 65, color: '#00acc1' },
            { label: 'Virtualisation', level: 90, color: '#43a047' },
          ].map((skill, index) => (
            <li key={index} style={{ marginBottom: '1rem' }}>
              {skill.label}
              <div style={{ background: '#eee', borderRadius: '5px', height: '10px', marginTop: '4px' }}>
                <div
                  style={{
                    width: `${skill.level}%`,
                    height: '100%',
                    backgroundColor: skill.color,
                    borderRadius: '5px',
                    transition: 'width 0.5s ease-in-out',
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>

     {/* Flèche vers Parcours */}
    <div
      onClick={() => scrollToSection && scrollToSection('parcours')}
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
      <div style={{ fontSize: '0.9rem', marginBottom: '0.3rem' }}>Slide vers Parcours & Formation</div>
      <FaArrowDown size={24} color="var(--accent)"/>
    </div>

    <style>
      {`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @media (max-width: 768px) {
          .section h2 {
            font-size: 1.4rem;
          }
          .section p {
            font-size: 0.95rem;
          }
        }
      `}
    </style>
  </div>
);

export default APropos;
