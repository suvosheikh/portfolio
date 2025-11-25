// src/components/Hero.js - CV BUTTON CHANGED TO PAGE NAVIGATION
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const profileImage = "images/SA-Shuvo-Sheikh.webp";

  // New function for CV button: Opens the '/resume' page in a new tab
  const handleCVClick = () => {
    window.open('/resume', '_blank'); // Opens the CV page in a new tab
    console.log('Navigating to CV page');
  };

  // Modern Button Styles 
  const buttonStyle = "px-4 md:px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center text-sm md:text-base w-full";

  // Custom motion/animation properties
  const motionProps = {
    whileHover: { scale: 1.05, boxShadow: "0 0 20px rgba(var(--accent-rgb), 0.5)" },
    whileTap: { scale: 0.95 }
  };

  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background"></div>

      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">

        {/* 1. Left Content - TEXT & STATS */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white order-1 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center mb-4"
          >
            <div className="w-3 h-3 bg-accent rounded-full mr-3 glow-effect"></div>
            <span className="text-textSecondary uppercase tracking-wider text-sm">Open to Opportunities</span>
          </motion.div>

          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4 md:mb-6 leading-tight">
            Hi, I'm <span className="text-accent bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">SA Shuvo Sheikh</span>
          </h1>

          <h2 className="text-xl md:text-3xl text-textSecondary mb-6 md:mb-8 flex items-center">
            <span className="material-icons mr-3 text-accent text-2xl md:text-3xl">computer</span>
            IT Professional & Computer Specialist
          </h2>

          <p className="text-lg md:text-xl text-textSecondary mb-8 md:mb-10 leading-relaxed max-w-2xl">
            Dedicated <span className="text-accent font-semibold">IT professional</span> with proven expertise in computer hardware, software troubleshooting, and AI technologies. Transforming technical challenges into efficient solutions.
          </p>

          {/* Stats - Stays within the text block */}
          <div className="grid grid-cols-3 gap-6 md:gap-8 pt-6 md:pt-8 border-t border-gray-800 mb-8 md:mb-10">
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-accent mb-1">2.5+</div>
              <div className="text-textSecondary text-xs md:text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-accent mb-1">50+</div>
              <div className="text-textSecondary text-xs md:text-sm">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-accent mb-1">AI</div>
              <div className="text-textSecondary text-xs md:text-sm">Specialist</div>
            </div>
          </div>
        </motion.div>

        {/* 2. Right Content - IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative order-2 lg:order-2 lg:row-span-2"
        >
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative w-full max-w-lg mx-auto">
              {/* Background Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent to-blue-500 rounded-2xl blur-xl opacity-20 animate-pulse"></div>

              {/* Image Frame */}
              <div className="relative bg-gradient-to-br from-gray-900 to-background rounded-2xl p-3 md:p-4 border border-gray-800 shadow-2xl">
                <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden relative">
                  {/* Professional Profile Image */}
                  <img
                    src={profileImage}
                    alt="SA Shuvo Sheikh - IT Professional & Computer Specialist"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback if image fails to load */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary to-gray-800 hidden items-center justify-center flex-col">
                    <span className="material-icons text-4xl md:text-6xl text-accent mb-4">person</span>
                    <p className="text-textSecondary">SA Shuvo Sheikh</p>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 md:w-10 md:h-10 bg-accent rounded-full flex items-center justify-center shadow-lg">
                    <span className="material-icons text-white text-xs md:text-sm">code</span>
                  </div>
                  <Link to="/certifications" className="absolute bottom-4 left-4 group">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300">
                      <span className="material-icons text-white text-xs md:text-sm">verified</span>
                    </div>
                    <div className="absolute bottom-1/2 left-full transform translate-y-1/2 ml-2 px-2 py-1 bg-black text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                      Certified Professional
                      <div className="absolute top-1/2 right-full transform -translate-y-1/2 w-2 h-2 bg-black rotate-45"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-secondary p-3 md:p-4 rounded-xl border border-gray-800 shadow-lg backdrop-blur-sm"
            >
              <div className="flex items-center">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-white text-sm font-semibold">Ryans Computers</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-secondary p-3 md:p-4 rounded-xl border border-gray-800 shadow-lg backdrop-blur-sm"
            >
              <div className="text-center">
                <span className="material-icons text-accent text-xl md:text-2xl mb-1">verified</span>
                <div className="text-white font-bold text-sm">AI Expert</div>
                <div className="text-textSecondary text-xs">Certified</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* 3. BUTTONS (order-3 on mobile, order-3 on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="order-3 lg:order-3"
        >
          {/* Added flex-1 to each motion.div wrapper to ensure uniform size on desktop row */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">

            {/* 1. View Projects Button - Accent to Blue Gradient */}
            <motion.div {...motionProps} className="flex-1">
              <Link
                to="/portfolio"
                className={`bg-gradient-to-r from-accent to-blue-500 text-white ${buttonStyle} hover:shadow-accent/50 glow-button`}
              >
                <span className="material-icons mr-2 text-sm">work</span>
                View Projects
              </Link>
            </motion.div>

            {/* 2. Contact Button - Blue to Cyan Gradient */}
            <motion.div {...motionProps} className="flex-1">
              <Link
                to="/contact"
                className={`bg-gradient-to-r from-blue-500 to-cyan-400 text-white ${buttonStyle} hover:shadow-cyan-400/50 glow-button`}
              >
                <span className="material-icons mr-2 text-sm">mail</span>
                Contact
              </Link>
            </motion.div>

            {/* 3. CV Button - Now a page navigation button */}
            <motion.div {...motionProps} className="flex-1 relative group">
              <button
                onClick={handleCVClick}
                className={`bg-green-600 text-white ${buttonStyle} hover:bg-green-700 hover:shadow-green-600/50 glow-button`}
              >
                {/* Changed icon to 'description' */}
                <span className="material-icons mr-2 text-sm">description</span>
                CV
              </button>

              {/* Tooltip text updated for navigation */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block z-50">
                <div className="bg-black text-white text-xs rounded-lg py-2 px-3 whitespace-nowrap shadow-xl border border-gray-700">
                  <div className="flex items-center">
                    <span className="material-icons mr-1 text-green-400 text-xs">description</span>
                    View My CV Page
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;