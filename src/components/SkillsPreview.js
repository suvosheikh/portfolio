// src/components/SkillsPreview.js - Updated
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useActivePage } from '../contexts/ActivePageContext';

const SkillsPreview = () => {
  const { setActivePage } = useActivePage();

  const handleViewAllClick = () => {
    setActivePage('/skills');
  };

  const skills = [
    {
      icon: 'computer',
      title: 'Computer Hardware & Maintenance',
      description: 'Computer assembly, repair, troubleshooting, and hardware development',
      level: '95%',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'smart_toy',
      title: 'Artificial Intelligence & AI',
      description: 'ChatGPT, Generative AI, Prompt Engineering, AI Business Applications',
      level: '90%',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'analytics',
      title: 'Business Analysis & Project Management',
      description: 'Requirements analysis, project management, business process modeling',
      level: '85%',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const topSkills = [
    'Computer Science', 'Computer Maintenance', 'Computer Hardware Assembly',
    'Computer Repair', 'Artificial Intelligence (AI)', 'ChatGPT', 'Generative AI',
    'Project Management', 'Business Analysis', 'Cybersecurity'
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Technical <span className="text-accent">Expertise</span>
          </motion.h2>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto leading-relaxed">
            Specialized skills in computer technology, AI, and business analysis
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-secondary to-background p-8 rounded-2xl border border-gray-800 hover:border-accent/50 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-accent to-blue-500">
                    <span className="material-icons text-white text-2xl">{skill.icon}</span>
                  </div>
                  <div className="text-2xl font-bold text-accent">{skill.level}</div>
                </div>

                <h3 className="text-2xl font-heading font-semibold mb-4 group-hover:text-accent transition-colors duration-300">
                  {skill.title}
                </h3>

                <p className="text-textSecondary leading-relaxed mb-6">
                  {skill.description}
                </p>

                {/* Progress Bar */}
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-accent to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Top Skills Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-heading font-semibold mb-6 text-textSecondary">Top Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {topSkills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-secondary border border-gray-700 px-4 py-2 rounded-full text-textSecondary hover:text-accent hover:border-accent transition-all duration-300 cursor-pointer"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Link
            to="/skills"
            onClick={handleViewAllClick}
            className="inline-flex items-center bg-gradient-to-r from-accent to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 glow-button group"
          >
            <span>Explore All Skills & Certifications</span>
            <span className="material-icons ml-3 group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsPreview;