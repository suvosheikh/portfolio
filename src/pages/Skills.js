// src/pages/Skills.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    { id: 'all', name: 'All Skills', icon: 'apps' },
    { id: 'ai', name: 'AI & Machine Learning', icon: 'smart_toy' },
    { id: 'hardware', name: 'Hardware & Maintenance', icon: 'computer' },
    { id: 'software', name: 'Software Development', icon: 'code' },
    { id: 'business', name: 'Business & Management', icon: 'business_center' },
    { id: 'creative', name: 'Creative & Media', icon: 'palette' }
  ];

  const allSkills = [
    {
      id: 1,
      name: 'Artificial Intelligence (AI)',
      category: 'ai',
      level: 90,
      description: 'Expert in AI technologies including ChatGPT, Generative AI, and machine learning applications',
      certifications: ['ChatGPT and Generative AI in Business', 'Custom ChatGPT Publishing & AI Bootcamp'],
      icon: 'smart_toy'
    },
    {
      id: 2,
      name: 'Computer Hardware Assembly',
      category: 'hardware',
      level: 95,
      description: 'Professional computer assembly, component selection, and hardware optimization',
      certifications: ['Ryans Computers Professional Training'],
      icon: 'build'
    },
    {
      id: 3,
      name: 'Computer Maintenance & Repair',
      category: 'hardware',
      level: 92,
      description: 'Diagnostic, troubleshooting, and repair of computer systems and components',
      certifications: ['Professional Computer Technician'],
      icon: 'handyman'
    },
    {
      id: 4,
      name: 'ChatGPT & Prompt Engineering',
      category: 'ai',
      level: 88,
      description: 'Advanced prompt engineering and ChatGPT integration for business applications',
      certifications: ['ChatGPT Masterclass', 'Prompt Engineering Certification'],
      icon: 'chat'
    },
    {
      id: 5,
      name: 'Project Management',
      category: 'business',
      level: 85,
      description: 'Project planning, execution, and team management using modern methodologies',
      certifications: ['Career Essentials in Project Management - Microsoft'],
      icon: 'assignment'
    },
    {
      id: 6,
      name: 'Business Analysis',
      category: 'business',
      level: 83,
      description: 'Requirements analysis, process modeling, and business process improvement',
      certifications: ['Career Essentials in Business Analysis - Microsoft'],
      icon: 'analytics'
    },
    {
      id: 7,
      name: 'Video Editing',
      category: 'creative',
      level: 80,
      description: 'Professional video editing with Adobe Premiere Pro and motion graphics',
      certifications: ['Mastering Adobe Premiere Pro CC - Udemy'],
      icon: 'videocam'
    },
    {
      id: 8,
      name: 'Cybersecurity',
      category: 'software',
      level: 82,
      description: 'Cybersecurity fundamentals, threat management, and security best practices',
      certifications: ['Career Essentials in Cybersecurity - Microsoft'],
      icon: 'security'
    },
    {
      id: 9,
      name: 'Data Analysis',
      category: 'software',
      level: 78,
      description: 'Data analytics, visualization, and business intelligence reporting',
      certifications: ['Career Essentials in Data Analysis - Microsoft'],
      icon: 'bar_chart'
    },
    {
      id: 10,
      name: 'Digital Marketing',
      category: 'business',
      level: 75,
      description: 'Facebook marketing, Google Ads, and social media advertising strategies',
      certifications: ['Facebook Marketing 2025', 'Google Ads Certification'],
      icon: 'trending_up'
    }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeCategory);

  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Technical <span className="text-accent">Skills</span>
          </h1>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto">
            Comprehensive overview of my technical expertise and professional certifications
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-accent to-blue-500 text-white shadow-lg'
                  : 'bg-secondary text-textSecondary border border-gray-800 hover:border-accent hover:text-accent'
              }`}
            >
              <span className="material-icons mr-2 text-sm">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid lg:grid-cols-2 gap-8"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-secondary to-background p-8 rounded-2xl border border-gray-800 hover:border-accent/50 transition-all duration-500 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-accent to-blue-500 mr-4">
                    <span className="material-icons text-white">{skill.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-semibold group-hover:text-accent transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <div className="text-accent font-medium mt-1">
                      {skill.level}% Proficiency
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-textSecondary leading-relaxed mb-6">
                {skill.description}
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-800 rounded-full h-3 mb-6">
                <div 
                  className="bg-gradient-to-r from-accent to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              {/* Certifications */}
              {skill.certifications.length > 0 && (
                <div>
                  <h4 className="text-textSecondary font-semibold mb-3 flex items-center">
                    <span className="material-icons mr-2 text-sm">verified</span>
                    Related Certifications
                  </h4>
                  <div className="space-y-2">
                    {skill.certifications.map((cert, certIndex) => (
                      <div key={certIndex} className="flex items-center text-textSecondary text-sm">
                        <span className="material-icons text-accent mr-2 text-sm">check_circle</span>
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredSkills.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <span className="material-icons text-6xl text-textSecondary mb-4">search_off</span>
            <h3 className="text-2xl font-heading font-semibold text-textSecondary mb-2">
              No skills found
            </h3>
            <p className="text-textSecondary">
              Try selecting a different category
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Skills;