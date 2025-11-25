// src/components/Footer.js - Updated with React Icons
import React from 'react';
import SocialIconsCompact from './SocialIconsCompact';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-gray-800">
      {/* Gradient line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-textSecondary text-center md:text-left mb-4 md:mb-0">
            <p>© 2025 SA Shuvo Sheikh — All rights reserved.</p>
            <p className="text-sm mt-1 flex items-center justify-center md:justify-start">
              Made with ❤️ in Bangladesh
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <SocialIconsCompact size={18} className="mb-3" />
            <p className="text-textSecondary text-sm">Connect with me</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;