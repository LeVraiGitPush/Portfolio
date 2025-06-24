import React, { useRef, useEffect, useCallback } from 'react';
import Accueil from './pages/Accueil';
import APropos from './pages/APropos';
import ParcoursEtFormations from './pages/ParcoursEtFormations';
import Projets from './pages/Projets';
import Header from './components/Header';

const REPEAT = 5;
const MID_INDEX = Math.floor(REPEAT / 2);

const sectionComponents = [
  { id: 'accueil', Component: Accueil },
  { id: 'apropos', Component: APropos },
  { id: 'parcours', Component: ParcoursEtFormations },
  { id: 'projets', Component: Projets },
];

const ScrollPage = () => {
  const scrollRef = useRef();

  const scrollTo = useCallback((targetId) => {
    const container = scrollRef.current;
    if (!container) return;

    const sectionIndex = sectionComponents.findIndex(sec => sec.id === targetId);
    const realIndex = MID_INDEX * sectionComponents.length + sectionIndex;
    const el = document.getElementById(`${targetId}-${realIndex}`);

    if (el) {
      container.scrollTo({
        top: el.offsetTop,
        behavior: 'smooth',
      });
    }
  }, []);

  const duplicatedSlides = Array.from({ length: REPEAT }, (_, repeatIndex) =>
    sectionComponents.map(({ id, Component }, sectionIndex) => {
      const globalIndex = repeatIndex * sectionComponents.length + sectionIndex;
      return (
        <div
          key={`${id}-${globalIndex}`}
          id={`${id}-${globalIndex}`}
          className="section"
        >
          <Component scrollToSection={scrollTo} />
        </div>
      );
    })
  ).flat();

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      const accueilIndex = sectionComponents.findIndex(sec => sec.id === 'accueil');
      const realIndex = accueilIndex + MID_INDEX * sectionComponents.length;
      const el = document.getElementById(`accueil-${realIndex}`);
      if (el) {
        container.scrollTo({
          top: el.offsetTop,
          behavior: 'auto',
        });
      }
    }
  }, []);

  return (
    <>
      <Header scrollToSection={scrollTo} />
      <div ref={scrollRef} className="scroll-container">
        {duplicatedSlides}
      </div>
    </>
  );
};

export default ScrollPage;
