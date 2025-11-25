// src/components/ExperiencePreview.js - Updated
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useActivePage } from '../contexts/ActivePageContext';

const ExperiencePreview = () => {
  const { setActivePage } = useActivePage();

  const handleViewAllClick = () => {
    setActivePage('/experience');
  };

  const experiences = [
    {
      year: 'Feb 2023 - Present',
      title: 'Computer Professional',
      company: 'Ryans Computers Ltd.',
      duration: '2 yrs 9 mos',
      location: 'Head Office · On-site',
      description: 'Specialized in computer hardware assembly, maintenance, repair, and technical troubleshooting.',
      skills: ['Computer Hardware', 'Technical Support', 'Hardware Development', 'Troubleshooting']
    },
    {
      year: 'Education',
      title: 'Bachelor of Computer Science',
      company: 'University of South Asia',
      duration: '',
      location: '',
      description: 'Comprehensive education in computer science fundamentals and advanced computing concepts.',
      skills: ['Computer Science', 'Software Engineering', 'Algorithms', 'Data Structures']
    },
    {
      year: 'Diploma',
      title: 'Computer Science & Engineering',
      company: 'Barguna Polytechnic Institute',
      duration: '',
      location: '',
      description: 'Technical education focusing on computer engineering and hardware systems.',
      skills: ['Computer Engineering', 'Hardware Design', 'Technical Drawing', 'Electronics']
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Professional <span className="text-accent">Journey</span>
          </motion.h2>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto leading-relaxed">
            My career path in IT and computer technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex items-start mb-12 last:mb-0"
            >
              {/* Timeline Dot */}
              <div className="flex-shrink-0 relative">
                <div className="w-6 h-6 bg-accent rounded-full glow-effect mr-6 mt-3"></div>
                {index < experiences.length - 1 && (
                  <div className="absolute top-8 left-3 w-0.5 h-24 bg-gray-700"></div>
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1 bg-secondary p-8 rounded-2xl border border-gray-800 hover:border-accent/50 transition-all duration-500">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <div className="text-accent font-semibold text-lg mb-1">{exp.year}</div>
                    <h3 className="text-2xl font-heading font-semibold mb-2">{exp.title}</h3>
                    <div className="text-textPrimary text-xl mb-2">{exp.company}</div>
                  </div>
                  <div className="text-textSecondary text-sm mt-2 lg:mt-0">
                    {exp.duration && <div>{exp.duration}</div>}
                    {exp.location && <div>{exp.location}</div>}
                  </div>
                </div>
                
                <p className="text-textSecondary leading-relaxed mb-4">
                  {exp.description}
                </p>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-background border border-gray-700 px-3 py-1 rounded-full text-textSecondary text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
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
            to="/experience"
            onClick={handleViewAllClick}
            className="inline-flex items-center border-2 border-accent text-accent px-8 py-4 rounded-xl font-semibold hover:bg-accent hover:text-white transition-all duration-300 group"
          >
            <span>View Full Experience & Certifications</span>
            <span className="material-icons ml-3 group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperiencePreview;