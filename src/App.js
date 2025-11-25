// src/App.js - Updated with page transitions
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ActivePageProvider } from './contexts/ActivePageContext';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Experience from './pages/Experience';
import Certifications from './pages/Certifications';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { useScrollToTop } from './hooks/useScrollToTop';
import './index.css';
import Resume from './pages/Resume';

const ScrollToTopOnRouteChange = () => {
  useScrollToTop();
  return null;
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Home />
          </PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition>
            <About />
          </PageTransition>
        } />
        <Route path="/skills" element={
          <PageTransition>
            <Skills />
          </PageTransition>
        } />
        <Route path="/portfolio" element={
          <PageTransition>
            <Portfolio />
          </PageTransition>
        } />
        <Route path="/experience" element={
          <PageTransition>
            <Experience />
          </PageTransition>
        } />
        <Route path="/certifications" element={
          <PageTransition>
            <Certifications />
          </PageTransition>
        } />
        <Route path="/testimonials" element={
          <PageTransition>
            <Testimonials />
          </PageTransition>
        } />
        <Route path="/contact" element={
          <PageTransition>
            <Contact />
          </PageTransition>
        } />
        <Route path="*" element={
          <PageTransition>
            <NotFound />
          </PageTransition>
        } />
        <Route path="/resume" element={
          <PageTransition>
            <Resume />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <ActivePageProvider>
      <Router>
        <div className="App bg-background min-h-screen">
          <ScrollToTopOnRouteChange />
          <Navbar />
          <AnimatedRoutes />
          <ScrollToTop />
        </div>
      </Router>
    </ActivePageProvider>
  );
}

export default App;