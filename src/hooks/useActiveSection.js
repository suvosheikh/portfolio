// src/hooks/useActiveSectionManual.js
import { useState, useEffect } from 'react';

export const useActiveSectionManual = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home', 'about', 'skills', 'portfolio',
        'experience', 'certifications', 'testimonials', 'blog', 'contact'
      ];

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (activeSection !== sections[i]) {
              console.log('Manual Detection - Active:', sections[i]);
              setActiveSection(sections[i]);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return activeSection;
};