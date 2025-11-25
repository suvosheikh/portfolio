// src/components/ContactPreview.js - FIXED MOBILE LAYOUT
import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';
import { useActivePage } from '../contexts/ActivePageContext';

const ContactPreview = () => {
  const { setActivePage } = useActivePage();

  const handleContactClick = () => {
    setActivePage('/contact');
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-gradient-to-br from-secondary to-gray-900 rounded-2xl md:rounded-3xl border border-gray-800 p-6 md:p-8 lg:p-12 shadow-2xl">

          {/* Header Section - Fixed for mobile */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6">
              Let's Create <span className="text-accent">Something Amazing</span> Together
            </h2>
            <p className="text-base md:text-xl text-textSecondary max-w-2xl mx-auto leading-relaxed px-2">
              Ready to bring your vision to life? Let's discuss your project and make it extraordinary.
            </p>
          </div>

          {/* FIXED: Grid layout for mobile - Single column on mobile */}
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 items-center">

            {/* Contact Info - Full width on mobile */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <h3 className="text-xl md:text-2xl font-heading font-semibold mb-6 flex items-center justify-center lg:justify-start">
                <FaEnvelope className="mr-3 text-accent" />
                Get In Touch
              </h3>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center p-4 bg-background rounded-xl border border-gray-800 hover:border-accent transition-colors duration-300">
                  <div className="p-2 md:p-3 bg-accent/10 rounded-lg mr-3 md:mr-4">
                    <FaEnvelope className="text-accent text-sm md:text-base" />
                  </div>
                  <div>
                    <div className="text-textSecondary text-xs md:text-sm">Email</div>
                    <div className="text-white font-semibold text-sm md:text-base">mdsuvosheikh@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-background rounded-xl border border-gray-800 hover:border-accent transition-colors duration-300">
                  <div className="p-2 md:p-3 bg-accent/10 rounded-lg mr-3 md:mr-4">
                    <FaEnvelope className="text-accent text-sm md:text-base" />
                  </div>
                  <div>
                    <div className="text-textSecondary text-xs md:text-sm">Location</div>
                    <div className="text-white font-semibold text-sm md:text-base">Dhaka, Bangladesh</div>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-background rounded-xl border border-gray-800 hover:border-accent transition-colors duration-300">
                  <div className="p-2 md:p-3 bg-accent/10 rounded-lg mr-3 md:mr-4">
                    <FaEnvelope className="text-accent text-sm md:text-base" />
                  </div>
                  <div>
                    <div className="text-textSecondary text-xs md:text-sm">Response Time</div>
                    <div className="text-white font-semibold text-sm md:text-base">Within 24 Hours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section - Full width on mobile, comes first */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="bg-gradient-to-br from-accent/10 to-blue-500/10 rounded-xl md:rounded-2xl p-6 md:p-8 border border-accent/20">
                <FaEnvelope className="text-accent text-4xl md:text-5xl mb-3 md:mb-4 mx-auto" />
                <h3 className="text-xl md:text-2xl font-heading font-semibold mb-3 md:mb-4 text-center">Start Your Project</h3>
                <p className="text-textSecondary mb-4 md:mb-6 text-center text-sm md:text-base">
                  Let's discuss your requirements and create a custom solution that exceeds your expectations.
                </p>
                <Link
                  to="/contact"
                  onClick={handleContactClick}
                  className="inline-flex items-center bg-gradient-to-r from-accent to-blue-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 glow-button w-full justify-center group text-sm md:text-base"
                >
                  <FaEnvelope className="mr-2 md:mr-3 text-sm" />
                  Start Conversation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;