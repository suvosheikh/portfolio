// src/components/CertificationsPreview.js - Updated with CountUp
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CountUp from './CountUp'; // Import CountUp component

const CertificationsPreview = () => {
  const featuredCertifications = [
    {
      title: 'ChatGPT & Generative AI',
      issuer: 'Udemy',
      date: '2025',
      icon: 'smart_toy',
      category: 'AI & Machine Learning'
    },
    {
      title: 'Google Ads Certification',
      issuer: 'Google',
      date: '2025',
      icon: 'ads_click',
      category: 'Digital Marketing'
    },
    {
      title: 'Business Analysis',
      issuer: 'Microsoft',
      date: '2024',
      icon: 'analytics',
      category: 'Business'
    },
    {
      title: 'Cybersecurity',
      issuer: 'Microsoft',
      date: '2024',
      icon: 'security',
      category: 'Security'
    }
  ];

  const stats = [
    { number: 100, label: 'Total Certifications', suffix: '+' },
    { number: 15, label: 'AI & ML Certs', suffix: '+' },
    { number: 10, label: 'Business Certs', suffix: '+' },
    { number: 8, label: 'Tech Certs', suffix: '+' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Professional <span className="text-accent">Certifications</span>
          </motion.h2>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto leading-relaxed">
            Validated expertise through recognized certifications in AI, technology, and business domains
          </p>
        </div>

        {/* Stats with CountUp Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-secondary to-background p-6 rounded-2xl border border-gray-800 text-center hover:border-accent/50 transition-all duration-500"
            >
              <div className="text-3xl font-bold text-accent mb-2">
                <CountUp
                  end={stat.number}
                  duration={2000 + (index * 200)}
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-textSecondary text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Certifications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredCertifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-secondary to-background p-6 rounded-2xl border border-gray-800 hover:border-accent/50 transition-all duration-500 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-accent to-blue-500">
                  <span className="material-icons text-white text-sm">{cert.icon}</span>
                </div>
                <div className="text-textSecondary text-sm">{cert.date}</div>
              </div>

              <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                {cert.title}
              </h3>

              <div className="text-textSecondary text-sm mb-3">{cert.issuer}</div>

              <div className="text-accent text-xs font-medium px-3 py-1 bg-accent/10 rounded-full inline-block">
                {cert.category}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Link
            to="/certifications"
            className="inline-flex items-center border-2 border-accent text-accent px-8 py-4 rounded-xl font-semibold hover:bg-accent hover:text-white transition-all duration-300 group"
          >
            <span>View All Certifications</span>
            <span className="material-icons ml-3 group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsPreview;