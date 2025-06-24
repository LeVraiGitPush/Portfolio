// App.jsx
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/themes.css'; // importe le fichier
import ScrollPage from './ScrollPage';
import ProjetDetail from './pages/ProjetDetail';
;

const NotFound = () => (
  <div style={{
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontFamily: 'Arial'
  }}>
    <h1 style={{ fontSize: '4rem', color: '#00bcd4' }}>404</h1>
    <p style={{ fontSize: '1.5rem' }}>Page non trouvée</p>
    <a href="/" style={{ marginTop: '1rem', color: '#007bff', textDecoration: 'underline' }}>
      Retour à l'accueil
    </a>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ScrollPage />} />
        <Route path="/projets/:id" element={<ProjetDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
