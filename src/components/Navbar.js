// src/components/Navbar.js - COMPLETE FIXED VERSION
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const menuRef = useRef(null);

  const navItems = [
    { name: 'Home', path: '/', icon: 'home' },
    { name: 'About', path: '/about', icon: 'person' },
    { name: 'Skills', path: '/skills', icon: 'psychology' },
    { name: 'Portfolio', path: '/portfolio', icon: 'work' },
    { name: 'Experience', path: '/experience', icon: 'timeline' },
    { name: 'Certifications', path: '/certifications', icon: 'verified' },
    { name: 'Testimonials', path: '/testimonials', icon: 'format_quote' },
    { name: 'Contact', path: '/contact', icon: 'contact_mail' },
  ];

  const homeNavItems = [
    { name: 'Home', path: '/', icon: 'home', section: 'home' },
    { name: 'About', path: '/#about', icon: 'person', section: 'about' },
    { name: 'Skills', path: '/#skills', icon: 'psychology', section: 'skills' },
    { name: 'Portfolio', path: '/#portfolio', icon: 'work', section: 'portfolio' },
    { name: 'Experience', path: '/#experience', icon: 'timeline', section: 'experience' },
    { name: 'Certifications', path: '/#certifications', icon: 'verified', section: 'certifications' },
    { name: 'Testimonials', path: '/#testimonials', icon: 'format_quote', section: 'testimonials' },
    { name: 'Contact', path: '/#contact', icon: 'contact_mail', section: 'contact' },
  ];

  // Determine current navigation items
  const currentNavItems = location.pathname === '/' ? homeNavItems : navItems;

  // Handle active section for home page
  useEffect(() => {
    if (location.pathname === '/') {
      const handleScroll = () => {
        const sections = ['home', 'about', 'skills', 'portfolio', 'experience', 'certifications', 'testimonials', 'contact'];
        const scrollY = window.pageYOffset;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
              setActiveSection(section);
              break;
            }
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check

      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      // Other pages - set active based on pathname
      const currentPath = location.pathname.substring(1);
      setActiveSection(currentPath || 'home');
    }
  }, [location.pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Check if a nav item is active
  const isActive = (item) => {
    if (location.pathname === '/') {
      // Home page - check section
      return item.section === activeSection;
    } else {
      // Other pages - check path
      return item.path === location.pathname;
    }
  };

  // FIXED: Handle navigation click for both desktop and mobile
  const handleNavClick = (item, e) => {
    if (location.pathname === '/' && item.section) {
      e.preventDefault();

      // Close mobile menu first
      setIsMenuOpen(false);

      // Wait for menu to close then scroll
      setTimeout(() => {
        const element = document.getElementById(item.section);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - 80; // Adjust for navbar height

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          setActiveSection(item.section);
        }
      }, 300);
    } else {
      // For other pages, just close the menu
      setIsMenuOpen(false);
    }
  };

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      setIsMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
    } else {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex items-center"
          >
            <div className="text-xl md:text-2xl font-bold text-white glow-text">
              <span className="material-icons text-accent mr-2">computer</span>
              SA Shuvo Sheikh
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {currentNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={(e) => handleNavClick(item, e)}
                className={`transition-all duration-300 flex items-center relative text-sm lg:text-base ${isActive(item)
                  ? 'text-accent glow-text'
                  : 'text-textSecondary hover:text-accent hover:glow-text'
                  }`}
              >
                <span className="material-icons mr-1 text-sm">{item.icon}</span>
                {item.name}
                {isActive(item) && (
                  <div className="absolute -bottom-8 left-0 w-full h-0.5 bg-accent glow-effect"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden" ref={menuRef}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <span className="material-icons text-2xl">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800 overflow-hidden"
            >
              <div className="py-2 space-y-1">
                {currentNavItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={(e) => handleNavClick(item, e)}
                    className={`flex items-center py-4 px-6 transition-all duration-300 text-lg border-l-4 ${isActive(item)
                      ? 'text-accent bg-accent/10 border-accent'
                      : 'text-textSecondary hover:text-accent hover:bg-gray-800/50 border-transparent'
                      }`}
                  >
                    <span className="material-icons mr-4 text-xl">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                    {isActive(item) && (
                      <span className="ml-auto w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                    )}
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Footer */}
              <div className="border-t border-gray-800 p-4 bg-gradient-to-r from-accent/10 to-blue-500/10">
                <div className="text-center">
                  <div className="flex items-center justify-center text-green-400 mb-2">
                    <span className="material-icons text-sm mr-2">circle</span>
                    <span className="text-sm font-semibold">Available for projects</span>
                  </div>
                  <p className="text-textSecondary text-xs">
                    Smooth navigation enabled
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;