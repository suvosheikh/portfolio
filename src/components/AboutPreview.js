// src/components/AboutPreview.js - Final fixed version
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutPreview = () => {
  const profileImage = "https://0.gravatar.com/userimage/133924134/dc216a7686d647c9d076ebbbe098448c?size=600";

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              About <span className="text-accent">Shuvo</span>
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-lg text-textSecondary leading-relaxed">
                Professional IT specialist and computer hardware expert with a passion for transforming technical challenges into efficient solutions.
              </p>

              <p className="text-lg text-textSecondary leading-relaxed">
                With years of experience in computer hardware, AI technologies, and business analysis, I bring technical expertise and strategic thinking to every project.
              </p>
            </div>

            <div className="flex items-center space-x-6 mb-8">
              <div className="flex items-center">
                <span className="material-icons text-accent mr-2">check_circle</span>
                <span className="text-textSecondary">2.5+ Years Experience</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-accent mr-2">check_circle</span>
                <span className="text-textSecondary">50+ Projects</span>
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/about"
                className="inline-flex items-center border-2 border-accent text-accent px-6 py-3 rounded-xl font-semibold hover:bg-accent hover:text-white transition-all duration-300"
              >
                <span>Learn More About Me</span>
                <span className="material-icons ml-2">arrow_forward</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent to-blue-500 rounded-2xl blur-xl opacity-20"></div>

              {/* Image Container */}
              <div className="relative bg-gradient-to-br from-gray-900 to-background rounded-2xl p-3 border border-gray-800 shadow-2xl">
                <div className="w-full h-[400px] rounded-lg overflow-hidden">
                  <img
                    src={profileImage}
                    alt="SA Shuvo Sheikh - Professional IT Specialist"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback */}
                  <div className="hidden w-full h-full bg-gradient-to-br from-secondary to-gray-800 items-center justify-center flex-col">
                    <span className="material-icons text-4xl text-accent mb-2">person</span>
                    <p className="text-textSecondary">SA Shuvo Sheikh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Element */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 bg-accent text-white px-4 py-2 rounded-lg shadow-lg"
            >
              <span className="text-sm font-semibold">Professional</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;