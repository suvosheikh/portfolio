// src/pages/Home.js - Updated with better hash handling
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import AboutPreview from '../components/AboutPreview';
import SkillsPreview from '../components/SkillsPreview';
import PortfolioPreview from '../components/PortfolioPreview';
import ExperiencePreview from '../components/ExperiencePreview';
import TestimonialsPreview from '../components/TestimonialsPreview';
import CertificationsPreview from '../components/CertificationsPreview';
import BlogPreview from '../components/BlogPreview';
import ContactPreview from '../components/ContactPreview';
import Footer from '../components/Footer';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const handleHashChange = () => {
      if (location.hash) {
        const elementId = location.hash.substring(1);
        const element = document.getElementById(elementId);

        if (element) {
          setTimeout(() => {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - 80; // Adjust for navbar height

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 100);
        }
      } else {
        // If no hash, scroll to top
        window.scrollTo(0, 0);
      }
    };

    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [location]);

  return (
    <div className="pt-16">
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <AboutPreview />
      </section>
      <section id="skills">
        <SkillsPreview />
      </section>
      <section id="portfolio">
        <PortfolioPreview />
      </section>
      <section id="experience">
        <ExperiencePreview />
      </section>
      <section id="certifications">
        <CertificationsPreview />
      </section>
      <section id="testimonials">
        <TestimonialsPreview />
      </section>
      <section id="blog">
        <BlogPreview />
      </section>
      <section id="contact">
        <ContactPreview />
      </section>
      <Footer />
    </div>
  );
};

export default Home;