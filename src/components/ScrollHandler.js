// src/components/ScrollHandler.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollHandler = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollHandler;