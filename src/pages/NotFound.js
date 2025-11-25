// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="pt-20 min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-9xl font-bold text-accent mb-4"
        >
          404
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-heading font-bold mb-4"
        >
          Page Not Found
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-textSecondary mb-8 max-w-md mx-auto"
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            to="/"
            className="inline-flex items-center bg-gradient-to-r from-accent to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 glow-button"
          >
            <span className="material-icons mr-2">home</span>
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;