// src/pages/Portfolio.js - COMPLETE FIXED MOBILE FRIENDLY VERSION
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const filters = [
    { id: 'all', name: 'All Projects', icon: 'apps' },
    { id: 'software', name: 'Software', icon: 'code' },
    { id: 'ai', name: 'AI Projects', icon: 'smart_toy' },
    { id: 'hardware', name: 'Hardware', icon: 'computer' },
    { id: 'business', name: 'Business', icon: 'business_center' }
  ];

  const projects = [
    {
      id: 1,
      title: 'OBS Source Auto Loop Script',
      category: 'software',
      description: 'A sophisticated Lua script for OBS Studio that automatically cycles through scene sources using JSON configuration. Perfect for streamers and content creators.',
      fullDescription: `This project addresses the need for automated scene management in live streaming environments. The script reads from a JSON configuration file to determine source order, timing, and transition effects. Key features include:

• Dynamic JSON configuration
• Customizable transition intervals
• Support for multiple media types
• Error handling and logging
• Real-time source monitoring

This solution has been particularly valuable for streamers who need to maintain professional broadcast quality while managing multiple content elements simultaneously.`,
      period: 'Apr 2025 - Present',
      status: 'In Development',
      skills: ['Lua Scripting', 'OBS Studio', 'JSON', 'Live Streaming', 'Automation'],
      technologies: ['Lua', 'OBS Studio API', 'JSON', 'Windows API'],
      outcomes: ['Reduced manual scene switching by 90%', 'Improved stream quality consistency', 'Enabled complex multi-source presentations'],
      icon: 'live_tv',
      demoLink: '#',
      codeLink: '#',
      image: 'https://obsproject.com/assets/images/features-new/hero.png?w=600&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'AI-Powered Business Strategy Assistant',
      category: 'ai',
      description: 'Comprehensive implementation of ChatGPT and Generative AI technologies to enhance business strategy, management processes, and marketing innovation.',
      fullDescription: `This project involved developing and implementing AI-driven solutions for business optimization. The work included:

• ChatGPT integration for customer service automation
• Generative AI for content creation and marketing
• AI-powered business process analysis
• Custom GPT development for specific business needs
• Training and implementation support

The solutions have helped organizations reduce operational costs, improve customer engagement, and accelerate decision-making processes through AI-assisted analytics.`,
      period: '2024 - Present',
      status: 'Active',
      skills: ['ChatGPT', 'Generative AI', 'Business Strategy', 'AI Integration', 'Prompt Engineering'],
      technologies: ['OpenAI API', 'Custom GPTs', 'Python', 'Business Intelligence Tools'],
      outcomes: ['40% reduction in customer response time', '25% increase in marketing content output', 'Improved decision-making accuracy'],
      icon: 'smart_toy',
      demoLink: '#',
      codeLink: '#',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Professional Computer Hardware Solutions',
      category: 'hardware',
      description: 'End-to-end computer hardware services including custom PC assembly, component selection, system optimization, and comprehensive maintenance.',
      fullDescription: `This encompasses a wide range of hardware-related services and solutions:

• Custom PC builds for gaming, professional workstations, and servers
• Hardware diagnostics and troubleshooting
• Component-level repair and replacement
• System optimization and performance tuning
• Preventive maintenance programs
• Hardware upgrade planning and implementation

Working with Ryans Computers has provided extensive experience with diverse hardware configurations and client requirements, from basic office systems to high-performance computing setups.`,
      period: '2023 - Present',
      status: 'Ongoing',
      skills: ['Computer Assembly', 'Hardware Diagnostics', 'System Optimization', 'Technical Support', 'Component Selection'],
      technologies: ['Various Hardware Platforms', 'Diagnostic Tools', 'Performance Monitoring Software'],
      outcomes: ['100+ systems built and optimized', '95% first-time repair success rate', 'Significant performance improvements for clients'],
      icon: 'computer',
      demoLink: '#',
      codeLink: '#',
      image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Business Analysis Framework Implementation',
      category: 'business',
      description: 'Development and implementation of business analysis frameworks for requirements gathering, process modeling, and project management.',
      fullDescription: `This project involved creating structured approaches to business analysis:

• Requirements elicitation and documentation
• Business process modeling and optimization
• Stakeholder management frameworks
• Project documentation standards
• Change management procedures

The frameworks have been applied across multiple projects, ensuring consistent analysis quality and effective communication between technical and business stakeholders.`,
      period: '2024 - Present',
      status: 'Implemented',
      skills: ['Business Analysis', 'Requirements Gathering', 'Process Modeling', 'Stakeholder Management', 'Project Documentation'],
      technologies: ['Microsoft Visio', 'JIRA', 'Confluence', 'Business Process Modeling Tools'],
      outcomes: ['Improved requirement accuracy by 60%', 'Reduced project rework by 45%', 'Enhanced stakeholder satisfaction'],
      icon: 'analytics',
      demoLink: '#',
      codeLink: '#',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Cybersecurity Awareness Program',
      category: 'software',
      description: 'Comprehensive cybersecurity awareness and training program development, focusing on threat awareness, best practices, and organizational security.',
      fullDescription: `This initiative involved creating and delivering cybersecurity education:

• Threat landscape analysis and reporting
• Security best practices documentation
• Training material development
• Phishing simulation exercises
• Security policy development

The program has helped organizations improve their security posture and employee awareness of cyber threats.`,
      period: '2024',
      status: 'Completed',
      skills: ['Cybersecurity', 'Security Awareness', 'Training Development', 'Policy Creation', 'Risk Assessment'],
      technologies: ['Security Frameworks', 'Training Platforms', 'Simulation Tools'],
      outcomes: ['85% employee participation rate', '60% reduction in security incidents', 'Improved compliance with security policies'],
      icon: 'security',
      demoLink: '#',
      codeLink: '#',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'E-commerce Platform Optimization',
      category: 'software',
      description: 'Performance optimization and user experience improvements for e-commerce platforms, focusing on load times and conversion rate optimization.',
      fullDescription: `Focused on enhancing e-commerce platform performance through:

• Frontend optimization and lazy loading
• Database query optimization
• Caching strategy implementation
• Mobile responsiveness improvements
• User journey analysis and optimization

Resulted in significant improvements in page load times and user engagement metrics.`,
      period: '2023 - 2024',
      status: 'Completed',
      skills: ['Performance Optimization', 'E-commerce', 'User Experience', 'Conversion Rate Optimization'],
      technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'Google Analytics'],
      outcomes: ['40% faster page load times', '25% improvement in conversion rates', 'Better mobile user experience'],
      icon: 'shopping_cart',
      demoLink: '#',
      codeLink: '#',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop'
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeProjectDetails = () => {
    setShowModal(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const handleDemoClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 md:mb-6">
            Project <span className="text-accent">Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-textSecondary max-w-3xl mx-auto px-4">
            Real-world projects showcasing technical expertise and problem-solving capabilities
          </p>
        </motion.div>

        {/* Filter Buttons - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-2"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center px-3 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-semibold transition-all duration-300 text-xs md:text-base ${activeFilter === filter.id
                ? 'bg-gradient-to-r from-accent to-blue-500 text-white shadow-lg'
                : 'bg-secondary text-textSecondary border border-gray-800 hover:border-accent hover:text-accent'
                }`}
            >
              <span className="material-icons mr-1 md:mr-2 text-sm">{filter.icon}</span>
              <span className="hidden sm:inline">{filter.name}</span>
              <span className="sm:hidden">{filter.name.split(' ')[0]}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid - Mobile Optimized */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-secondary to-background rounded-xl md:rounded-2xl border border-gray-800 hover:border-accent/50 transition-all duration-500 group overflow-hidden hover-lift"
            >
              {/* Project Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${project.status === 'Active' || project.status === 'In Development'
                    ? 'bg-green-500/20 text-green-400'
                    : project.status === 'Ongoing'
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'bg-gray-500/20 text-gray-400'
                    }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-4 md:p-6">
                <div className="flex items-start justify-between mb-3 md:mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-accent to-blue-500 rounded-lg">
                      <span className="material-icons text-white text-sm md:text-base">{project.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-heading font-semibold group-hover:text-accent transition-colors duration-300 line-clamp-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-textSecondary text-xs md:text-sm mt-1">
                        <span>{project.period}</span>
                        <span>•</span>
                        <span className="capitalize">{project.category}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-textSecondary leading-relaxed mb-4 text-sm md:text-base line-clamp-3">
                  {project.description}
                </p>

                {/* Skills */}
                <div className="mb-4 md:mb-6">
                  <h4 className="text-textSecondary font-semibold mb-2 flex items-center text-sm md:text-base">
                    <span className="material-icons mr-2 text-xs md:text-sm">code</span>
                    Technologies & Skills
                  </h4>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {project.skills.slice(0, 4).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-background border border-gray-700 px-2 py-1 rounded-full text-textSecondary text-xs md:text-sm hover:text-accent hover:border-accent transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                    {project.skills.length > 4 && (
                      <span className="bg-background border border-gray-700 px-2 py-1 rounded-full text-textSecondary text-xs">
                        +{project.skills.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Outcomes */}
                {project.outcomes && (
                  <div className="mb-4 md:mb-6">
                    <h4 className="text-textSecondary font-semibold mb-2 flex items-center text-sm md:text-base">
                      <span className="material-icons mr-2 text-xs md:text-sm">trending_up</span>
                      Key Outcomes
                    </h4>
                    <ul className="space-y-1">
                      {project.outcomes.slice(0, 2).map((outcome, outcomeIndex) => (
                        <li key={outcomeIndex} className="flex items-center text-textSecondary text-xs md:text-sm">
                          <span className="material-icons text-accent mr-2 text-xs md:text-sm">check_circle</span>
                          <span className="line-clamp-2">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action Buttons - Mobile Optimized */}
                <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
                  <button
                    onClick={() => openProjectDetails(project)}
                    className="flex items-center justify-center text-accent border border-accent px-3 md:px-4 py-2 rounded-lg hover:bg-accent hover:text-white transition-all duration-300 text-sm md:text-base flex-1"
                  >
                    <span className="material-icons mr-2 text-xs md:text-sm">visibility</span>
                    View Details
                  </button>
                  {project.demoLink && (
                    <button
                      onClick={() => handleDemoClick(project.demoLink)}
                      className="flex items-center justify-center text-textSecondary border border-gray-700 px-3 md:px-4 py-2 rounded-lg hover:border-accent hover:text-accent transition-all duration-300 text-sm md:text-base flex-1"
                    >
                      <span className="material-icons mr-2 text-xs md:text-sm">play_arrow</span>
                      Live Demo
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 md:py-16"
          >
            <span className="material-icons text-4xl md:text-6xl text-textSecondary mb-4">folder_off</span>
            <h3 className="text-xl md:text-2xl font-heading font-semibold text-textSecondary mb-2">
              No projects found
            </h3>
            <p className="text-textSecondary text-sm md:text-base">
              Try selecting a different category filter
            </p>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8 md:mt-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-2xl mx-auto">
            <div className="bg-secondary p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-800">
              <div className="text-xl md:text-2xl font-bold text-accent mb-2">{projects.length}+</div>
              <div className="text-textSecondary text-sm md:text-base">Total Projects</div>
            </div>
            <div className="bg-secondary p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-800">
              <div className="text-xl md:text-2xl font-bold text-accent mb-2">{projects.filter(p => p.status === 'Completed').length}</div>
              <div className="text-textSecondary text-sm md:text-base">Completed</div>
            </div>
            <div className="bg-secondary p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-800">
              <div className="text-xl md:text-2xl font-bold text-accent mb-2">{projects.filter(p => p.status === 'Active').length}</div>
              <div className="text-textSecondary text-sm md:text-base">Active</div>
            </div>
            <div className="bg-secondary p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-800">
              <div className="text-xl md:text-2xl font-bold text-accent mb-2">6+</div>
              <div className="text-textSecondary text-sm md:text-base">Technologies</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {showModal && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeProjectDetails}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-background rounded-xl md:rounded-2xl border border-gray-800 max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-start p-4 md:p-6 border-b border-gray-800">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-gradient-to-r from-accent to-blue-500 rounded-lg">
                      <span className="material-icons text-white text-sm md:text-base">{selectedProject.icon}</span>
                    </div>
                    <div>
                      <h2 className="text-lg md:text-2xl font-heading font-bold text-white truncate">
                        {selectedProject.title}
                      </h2>
                      <div className="flex items-center space-x-4 text-textSecondary text-sm md:text-base">
                        <span>{selectedProject.period}</span>
                        <span>•</span>
                        <span className="capitalize">{selectedProject.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={closeProjectDetails}
                  className="p-2 text-textSecondary hover:text-white hover:bg-gray-800 rounded-lg transition-colors flex-shrink-0 ml-4"
                >
                  <span className="material-icons">close</span>
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-4 md:p-6 max-h-[60vh] overflow-auto">
                {/* Project Image */}
                <div className="mb-4 md:mb-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-48 md:h-64 object-cover rounded-lg"
                  />
                </div>

                {/* Full Description */}
                <div className="mb-4 md:mb-6">
                  <h3 className="text-lg md:text-xl font-heading font-semibold mb-3 text-white">Project Overview</h3>
                  <div className="text-textSecondary leading-relaxed text-sm md:text-base whitespace-pre-line">
                    {selectedProject.fullDescription}
                  </div>
                </div>

                {/* Skills & Technologies */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                  <div>
                    <h4 className="text-textSecondary font-semibold mb-3 flex items-center text-sm md:text-base">
                      <span className="material-icons mr-2 text-xs md:text-sm">code</span>
                      Skills & Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-background border border-gray-700 px-3 py-1 rounded-full text-textSecondary text-xs md:text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-textSecondary font-semibold mb-3 flex items-center text-sm md:text-base">
                      <span className="material-icons mr-2 text-xs md:text-sm">build</span>
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-background border border-gray-700 px-3 py-1 rounded-full text-textSecondary text-xs md:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Outcomes */}
                {selectedProject.outcomes && (
                  <div>
                    <h4 className="text-textSecondary font-semibold mb-3 flex items-center text-sm md:text-base">
                      <span className="material-icons mr-2 text-xs md:text-sm">trending_up</span>
                      Key Outcomes & Achievements
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.outcomes.map((outcome, outcomeIndex) => (
                        <li key={outcomeIndex} className="flex items-start text-textSecondary text-sm md:text-base">
                          <span className="material-icons text-green-400 mr-2 text-xs md:text-sm mt-0.5">check_circle</span>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-6 border-t border-gray-800 bg-secondary space-y-4 md:space-y-0">
                <div className="text-textSecondary text-xs md:text-sm text-center md:text-left">
                  Status: <span className={`px-2 py-1 rounded-full ${selectedProject.status === 'Active' || selectedProject.status === 'In Development'
                    ? 'bg-green-500/20 text-green-400'
                    : selectedProject.status === 'Ongoing'
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'bg-gray-500/20 text-gray-400'
                    }`}>
                    {selectedProject.status}
                  </span>
                </div>
                <div className="flex space-x-2 md:space-x-4">
                  {selectedProject.demoLink && (
                    <button
                      onClick={() => handleDemoClick(selectedProject.demoLink)}
                      className="flex items-center bg-gradient-to-r from-accent to-blue-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl font-semibold hover:shadow-lg transition-all duration-300 text-sm md:text-base"
                    >
                      <span className="material-icons mr-2 text-xs md:text-sm">play_arrow</span>
                      Live Demo
                    </button>
                  )}
                  {selectedProject.codeLink && (
                    <button
                      onClick={() => handleDemoClick(selectedProject.codeLink)}
                      className="flex items-center bg-gray-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl font-semibold hover:bg-gray-700 transition-all duration-300 text-sm md:text-base"
                    >
                      <span className="material-icons mr-2 text-xs md:text-sm">code</span>
                      View Code
                    </button>
                  )}
                  <button
                    onClick={closeProjectDetails}
                    className="flex items-center bg-gray-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl font-semibold hover:bg-gray-700 transition-all duration-300 text-sm md:text-base"
                  >
                    <span className="material-icons mr-2 text-xs md:text-sm">close</span>
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;