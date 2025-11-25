// src/components/PortfolioPreview.js - Updated
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useActivePage } from '../contexts/ActivePageContext';

const PortfolioPreview = () => {
  const { setActivePage } = useActivePage();

  const handleViewAllClick = () => {
    setActivePage('/portfolio');
  };

  const projects = [
    {
      title: 'OBS Source Auto Loop Script',
      category: 'Software Development',
      description: 'Lua script for OBS Studio that automatically loops through scene sources using JSON configuration',
      period: 'Apr 2025 - Present',
      skills: ['Lua Scripting', 'OBS Studio', 'Live Streaming', 'JSON Configuration'],
      icon: 'live_tv'
    },
    {
      title: 'AI Business Solutions',
      category: 'Artificial Intelligence',
      description: 'Implementing ChatGPT and Generative AI in business strategy, management, and marketing workflows',
      period: '2024 - Present',
      skills: ['ChatGPT', 'Generative AI', 'Business Strategy', 'AI Automation'],
      icon: 'smart_toy'
    },
    {
      title: 'Computer Hardware Solutions',
      category: 'Hardware & Maintenance',
      description: 'Professional computer assembly, repair, and maintenance services for clients and organizations',
      period: '2023 - Present',
      skills: ['Hardware Assembly', 'Troubleshooting', 'Computer Repair', 'Technical Support'],
      icon: 'computer'
    },
    {
      title: 'Business Analysis Projects',
      category: 'Business Analysis',
      description: 'Requirements analysis, process modeling, and project management for various business needs',
      period: '2024 - Present',
      skills: ['Business Analysis', 'Project Management', 'Requirements Gathering', 'Process Modeling'],
      icon: 'analytics'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Featured <span className="text-accent">Projects</span>
          </motion.h2>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto leading-relaxed">
            Real-world projects showcasing my technical expertise and problem-solving skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-background to-secondary p-8 rounded-2xl border border-gray-800 hover:border-accent/50 transition-all duration-500 group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-accent to-blue-500">
                  <span className="material-icons text-white text-2xl">{project.icon}</span>
                </div>
                <div className="text-textSecondary text-sm text-right">
                  {project.period}
                </div>
              </div>

              <h3 className="text-2xl font-heading font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>

              <div className="text-accent font-medium mb-3">{project.category}</div>

              <p className="text-textSecondary leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-secondary border border-gray-700 px-3 py-1 rounded-full text-textSecondary text-sm hover:text-accent hover:border-accent transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Link
            to="/portfolio"
            onClick={handleViewAllClick}
            className="inline-flex items-center bg-gradient-to-r from-accent to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 glow-button group"
          >
            <span>View All Projects & Details</span>
            <span className="material-icons ml-3 group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioPreview;