// src/pages/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  const profileImage = "images/SA-Shuvo-Sheikh.webp";

  // Professional Summary from LinkedIn
  const professionalSummary = `
    Dedicated IT professional with a proven track record in computer hardware, software troubleshooting, 
    and artificial intelligence technologies. Currently serving as a Computer Professional at Ryans Computers Ltd., 
    with expertise in computer maintenance, hardware assembly, and AI-driven business solutions. 
    Leveraged analytical skills to optimize operations and drive efficiency across multiple projects.
  `;

  // Core Competencies
  const coreCompetencies = [
    {
      category: "Hardware & Technical",
      skills: ["Computer Hardware Assembly", "Computer Maintenance & Repair", "Hardware Diagnostics", "System Optimization", "Technical Support"]
    },
    {
      category: "Artificial Intelligence",
      skills: ["ChatGPT & Generative AI", "Prompt Engineering", "AI Business Applications", "Custom GPT Development", "AI Automation"]
    },
    {
      category: "Business & Analysis",
      skills: ["Business Analysis", "Project Management", "Requirements Gathering", "Process Modeling", "Stakeholder Management"]
    },
    {
      category: "Software & Tools",
      skills: ["Adobe Premiere Pro", "Microsoft 365", "Google Ads", "Facebook Marketing", "Cybersecurity"]
    }
  ];

  // Fun Facts & Statistics
  const funFacts = [
    {
      number: "2.5+",
      title: "Years Experience",
      description: "Professional IT experience"
    },
    {
      number: "50+",
      title: "Certifications",
      description: "Professional certifications completed"
    },
    {
      number: "100+",
      title: "Systems Built",
      description: "Computers assembled & optimized"
    },
    {
      number: "15+",
      title: "Projects Completed",
      description: "Successful project deliveries"
    }
  ];

  // Education Background
  const education = [
    {
      degree: "Bachelor's degree, Computer Science",
      institution: "University of South Asia",
      period: "2022 - 2026",
      description: "Comprehensive education in computer science fundamentals, algorithms, data structures, and software engineering principles."
    },
    {
      degree: "Diploma in Computer Science & Engineering",
      institution: "Barguna Polytechnic Institute",
      period: "2018 - 2022",
      description: "Technical education focusing on computer engineering, hardware systems, electronics, and practical technical skills."
    }
  ];

  // Professional Philosophy
  const philosophy = `
    I believe in the transformative power of technology to solve real-world problems. My approach combines 
    technical expertise with strategic thinking, ensuring that every solution not only works technically 
    but also delivers tangible business value. I'm passionate about continuous learning and staying at 
    the forefront of emerging technologies, particularly in the AI and machine learning space.
  `;

  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            About <span className="text-accent">Me</span>
          </h1>
          <p className="text-xl text-textSecondary max-w-4xl mx-auto leading-relaxed">
            IT Professional & Computer Specialist with expertise in hardware solutions, AI technologies, and business analysis
          </p>
        </motion.div>

        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Professional Summary */}
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6 flex items-center">
                <span className="material-icons mr-3 text-accent">person</span>
                Professional Summary
              </h2>
              <div className="space-y-4">
                {professionalSummary.split('\n').map((paragraph, index) => (
                  <p key={index} className="text-lg text-textSecondary leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Core Competencies */}
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6 flex items-center">
                <span className="material-icons mr-3 text-accent">psychology</span>
                Core Competencies
              </h2>
              <div className="space-y-6">
                {coreCompetencies.map((category, index) => (
                  <div key={index} className="bg-secondary p-6 rounded-2xl border border-gray-800">
                    <h3 className="text-xl font-heading font-semibold text-accent mb-4">
                      {category.category}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-background border border-gray-700 px-4 py-2 rounded-full text-textSecondary text-sm hover:text-accent hover:border-accent transition-all duration-300 cursor-pointer"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Philosophy */}
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6 flex items-center">
                <span className="material-icons mr-3 text-accent">lightbulb</span>
                My Philosophy
              </h2>
              <div className="bg-gradient-to-r from-accent/10 to-blue-500/10 p-8 rounded-2xl border-l-4 border-accent">
                <p className="text-lg text-textPrimary italic leading-relaxed">
                  "{philosophy}"
                </p>
              </div>
            </div>
          </motion.div>

          {/* Profile Image & Side Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="relative">
                {/* Background Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-accent to-blue-500 rounded-2xl blur-xl opacity-20"></div>

                {/* Image Container */}
                <div className="relative bg-gradient-to-br from-gray-900 to-background rounded-2xl p-4 border border-gray-800 shadow-2xl">
                  <div className="w-full h-[500px] rounded-xl overflow-hidden">
                    <img
                      src={profileImage}
                      alt="SA Shuvo Sheikh - IT Professional & Computer Specialist"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback */}
                    <div className="hidden w-full h-full bg-gradient-to-br from-secondary to-gray-800 items-center justify-center flex-col">
                      <span className="material-icons text-6xl text-accent mb-4">person</span>
                      <p className="text-textSecondary">SA Shuvo Sheikh</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -bottom-4 -left-4 bg-accent text-white px-4 py-2 rounded-lg shadow-lg">
                <span className="text-sm font-semibold">IT Professional</span>
              </div>
              <div className="absolute -top-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
                <span className="text-sm font-semibold">AI Specialist</span>
              </div>
            </div>

            {/* Fun Facts & Statistics */}
            <div className="grid grid-cols-2 gap-4">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-secondary p-6 rounded-2xl border border-gray-800 hover:border-accent transition-all duration-300 text-center"
                >
                  <div className="text-2xl font-bold text-accent mb-2">{fact.number}</div>
                  <div className="font-heading font-semibold mb-1">{fact.title}</div>
                  <div className="text-textSecondary text-sm">{fact.description}</div>
                </motion.div>
              ))}
            </div>

            {/* Current Status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-2xl border border-green-500/20"
            >
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-green-400 font-semibold">Currently Available</span>
              </div>
              <p className="text-textSecondary text-sm">
                Open to new opportunities and freelance projects in IT support, AI solutions, and computer hardware services.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-heading font-bold mb-12 text-center flex items-center justify-center">
            <span className="material-icons mr-3 text-accent">school</span>
            Education Background
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-secondary to-background p-8 rounded-2xl border border-gray-800 hover:border-accent/50 transition-all duration-500"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-accent to-blue-500">
                    <span className="material-icons text-white">school</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-2">{edu.degree}</h3>
                    <div className="text-lg text-textPrimary mb-2">{edu.institution}</div>
                    <div className="text-accent font-semibold">{edu.period}</div>
                  </div>
                </div>

                <p className="text-textSecondary leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-accent/10 to-blue-500/10 rounded-3xl p-12 border border-accent/20">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-textSecondary mb-8 max-w-2xl mx-auto">
              Interested in collaborating or have a project in mind? I'd love to hear from you and discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-accent to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 glow-button flex items-center justify-center"
              >
                <span className="material-icons mr-2">mail</span>
                Get In Touch
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-accent text-accent px-8 py-4 rounded-xl font-semibold hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <span className="material-icons mr-2">work</span>
                View My Work
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-12"
        >
          <p className="text-textSecondary mb-4">Explore More</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/skills" className="text-accent hover:underline">Skills & Expertise</Link>
            <Link to="/experience" className="text-accent hover:underline">Work Experience</Link>
            <Link to="/certifications" className="text-accent hover:underline">Professional Certifications</Link>
            <Link to="/portfolio" className="text-accent hover:underline">Project Portfolio</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;