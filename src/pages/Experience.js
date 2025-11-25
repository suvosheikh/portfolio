// src/pages/Experience.js - COMPLETE FIXED MOBILE FRIENDLY VERSION (REORDERED)
import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      year: 'Feb 2023 - Present',
      title: 'Computer Professional',
      company: 'Ryans Computers Ltd.',
      duration: '2 yrs 9 mos',
      location: 'Head Office · On-site',
      type: 'Full-time',
      description: 'Leading computer hardware solutions and technical support services at one of Bangladesh\'s premier computer retailers.',
      responsibilities: [
        'Computer hardware assembly, configuration, and optimization',
        'Diagnostic testing and troubleshooting of computer systems',
        'Hardware component selection and compatibility analysis',
        'Technical support and customer service excellence',
        'System performance tuning and maintenance',
        'Quality assurance and testing procedures'
      ],
      skills: ['Computer Hardware', 'Technical Support', 'Hardware Diagnostics', 'System Optimization', 'Customer Service'],
      achievements: [
        'Assembled 100+ custom computer systems for diverse client needs',
        'Achieved 95% first-time repair success rate',
        'Received positive customer feedback for technical expertise',
        'Contributed to improved service delivery processes'
      ],
      icon: 'computer',
      companyLogo: 'https://cdn-icons-png.flaticon.com/512/2172/2172850.png'
    },
    {
      id: 2,
      year: '2022 - 2023',
      title: 'IT Support Specialist',
      company: 'Freelance',
      duration: '1 yr',
      location: 'Remote & On-site',
      type: 'Contract',
      description: 'Provided comprehensive IT support and technical solutions for small businesses and individual clients.',
      responsibilities: [
        'Network setup and configuration',
        'Software installation and troubleshooting',
        'Hardware maintenance and upgrades',
        'Data backup and recovery solutions',
        'Cybersecurity basic implementation',
        'Technical documentation and training'
      ],
      skills: ['IT Support', 'Network Administration', 'Software Troubleshooting', 'Technical Documentation'],
      achievements: [
        'Successfully implemented IT solutions for 15+ clients',
        'Reduced system downtime by 40% through proactive maintenance',
        'Developed customized technical documentation for clients'
      ],
      icon: 'support',
      companyLogo: 'https://cdn-icons-png.flaticon.com/512/1055/1055666.png'
    }
  ];

  const education = [
    {
      id: 1,
      year: '2022 - 2026',
      title: 'Bachelor\'s degree, Computer Science',
      institution: 'University of South Asia',
      location: 'Dhaka, Bangladesh',
      description: 'Comprehensive computer science education covering algorithms, data structures, software engineering, and advanced computing concepts.',
      courses: ['Data Structures & Algorithms', 'Software Engineering', 'Database Systems', 'Computer Networks', 'AI & Machine Learning'],
      icon: 'school',
      institutionLogo: 'https://cdn-icons-png.flaticon.com/512/197/197560.png'
    },
    {
      id: 2,
      year: '2018 - 2022',
      title: 'Diploma in Computer Science & Engineering',
      institution: 'Barguna Polytechnic Institute',
      location: 'Barguna, Bangladesh',
      description: 'Technical education focusing on computer engineering, hardware systems, and practical technical skills.',
      courses: ['Computer Hardware', 'Electronics', 'Programming Fundamentals', 'Technical Drawing', 'Mathematics'],
      icon: 'engineering',
      institutionLogo: 'https://cdn-icons-png.flaticon.com/512/197/197560.png'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Header - Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 md:mb-6">
            Work <span className="text-accent">Experience</span>
          </h1>
          <p className="text-lg md:text-xl text-textSecondary max-w-3xl mx-auto px-4">
            Professional journey in IT and computer technology with demonstrated expertise and achievements
          </p>
        </motion.div>

        {/* 🌟 Technical Expertise Summary (MOVED HERE) 🌟 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-accent/10 to-blue-500/10 rounded-xl md:rounded-2xl p-6 md:p-8 border border-accent/20 mb-12 md:mb-20" // Added margin-bottom to separate from next section
        >
          <h2 className="text-xl md:text-2xl font-heading font-bold mb-4 md:mb-6 text-center">
            Technical Expertise Summary
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">2.5+</div>
              <div className="text-textSecondary text-sm md:text-base">Years Experience</div>
            </div>

            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">100+</div>
              <div className="text-textSecondary text-sm md:text-base">Systems Built</div>
            </div>

            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">15+</div>
              <div className="text-textSecondary text-sm md:text-base">Projects Completed</div>
            </div>

            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-textSecondary text-sm md:text-base">Certifications</div>
            </div>
          </div>
        </motion.div>

        {/* Professional Experience (Remains the same) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 md:mb-12 text-center flex items-center justify-center">
            <span className="material-icons mr-3 text-accent">work</span>
            Professional Experience
          </h2>

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-secondary to-background p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl border border-gray-800 hover:border-accent/50 transition-all duration-500 hover-lift"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 md:mb-6">
                  <div className="flex items-start space-x-3 md:space-x-4 mb-4 lg:mb-0 flex-1">
                    {/* Company Logo */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-accent to-blue-500 rounded-xl flex items-center justify-center overflow-hidden">
                        {exp.companyLogo ? (
                          <img
                            src={exp.companyLogo}
                            alt={`${exp.company} logo`}
                            className="w-10 h-10 md:w-12 md:h-12 object-contain bg-white p-1 rounded-lg"
                          />
                        ) : (
                          <span className="material-icons text-white text-lg md:text-xl">{exp.icon}</span>
                        )}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl md:text-2xl font-heading font-semibold mb-1 md:mb-2 text-white">
                        {exp.title}
                      </h3>
                      <div className="text-lg md:text-xl text-textPrimary mb-1 md:mb-2">
                        {exp.company}
                      </div>
                      <div className="text-accent font-semibold text-sm md:text-base mb-1">
                        {exp.year}
                      </div>
                      <div className="text-textSecondary text-xs md:text-sm">
                        {exp.duration} • {exp.location} • {exp.type}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-textSecondary leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div className="mb-4 md:mb-6">
                  <h4 className="text-textPrimary font-semibold mb-2 md:mb-3 flex items-center text-sm md:text-base">
                    <span className="material-icons mr-2 text-accent text-xs md:text-sm">play_arrow</span>
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-1 md:space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start text-textSecondary text-xs md:text-sm">
                        <span className="material-icons text-accent mr-2 text-xs md:text-sm mt-0.5">check_circle</span>
                        <span className="flex-1">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div className="mb-4 md:mb-6">
                  <h4 className="text-textPrimary font-semibold mb-2 md:mb-3 flex items-center text-sm md:text-base">
                    <span className="material-icons mr-2 text-accent text-xs md:text-sm">psychology</span>
                    Skills Utilized
                  </h4>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-background border border-gray-700 px-2 md:px-3 py-1 rounded-full text-textSecondary text-xs md:text-sm hover:text-accent hover:border-accent transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                {exp.achievements && (
                  <div>
                    <h4 className="text-textPrimary font-semibold mb-2 md:mb-3 flex items-center text-sm md:text-base">
                      <span className="material-icons mr-2 text-accent text-xs md:text-sm">star</span>
                      Key Achievements
                    </h4>
                    <ul className="space-y-1 md:space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-textSecondary text-xs md:text-sm">
                          <span className="material-icons text-green-400 mr-2 text-xs md:text-sm mt-0.5">verified</span>
                          <span className="flex-1">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education (Remains the same) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 md:mb-12 text-center flex items-center justify-center">
            <span className="material-icons mr-3 text-accent">school</span>
            Education
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                className="bg-gradient-to-br from-secondary to-background p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl border border-gray-800 hover:border-accent/50 transition-all duration-500 hover-lift"
              >
                <div className="flex items-start space-x-3 md:space-x-4 mb-4 md:mb-6">
                  {/* Institution Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-accent to-blue-500 rounded-xl flex items-center justify-center overflow-hidden">
                      {edu.institutionLogo ? (
                        <img
                          src={edu.institutionLogo}
                          alt={`${edu.institution} logo`}
                          className="w-10 h-10 md:w-12 md:h-12 object-contain bg-white p-1 rounded-lg"
                        />
                      ) : (
                        <span className="material-icons text-white text-lg md:text-xl">{edu.icon}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-heading font-semibold mb-1 md:mb-2 text-white">
                      {edu.title}
                    </h3>
                    <div className="text-base md:text-lg text-textPrimary mb-1 md:mb-2">
                      {edu.institution}
                    </div>
                    <div className="text-accent font-semibold text-sm md:text-base mb-1">
                      {edu.year}
                    </div>
                    <div className="text-textSecondary text-xs md:text-sm">
                      {edu.location}
                    </div>
                  </div>
                </div>

                <p className="text-textSecondary leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                  {edu.description}
                </p>

                {/* Courses */}
                <div>
                  <h4 className="text-textPrimary font-semibold mb-2 md:mb-3 flex items-center text-sm md:text-base">
                    <span className="material-icons mr-2 text-accent text-xs md:text-sm">menu_book</span>
                    Relevant Courses
                  </h4>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {edu.courses.map((course, idx) => (
                      <span
                        key={idx}
                        className="bg-background border border-gray-700 px-2 md:px-3 py-1 rounded-full text-textSecondary text-xs md:text-sm hover:text-accent hover:border-accent transition-colors duration-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action (Remains the same) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center mt-8 md:mt-12"
        >
          <div className="bg-gradient-to-r from-accent/10 to-blue-500/10 rounded-xl md:rounded-2xl p-6 md:p-8 border border-accent/20">
            <h2 className="text-xl md:text-2xl font-heading font-bold mb-3 md:mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-textSecondary mb-4 md:mb-6 text-sm md:text-base max-w-2xl mx-auto">
              Let's discuss how my technical expertise and experience can contribute to your projects and business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-accent to-blue-500 text-white px-6 md:px-8 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 glow-button flex items-center justify-center text-sm md:text-base"
              >
                <span className="material-icons mr-2 text-sm">mail</span>
                Get In Touch
              </a>
              <a
                href="/portfolio"
                className="border-2 border-accent text-accent px-6 md:px-8 py-3 rounded-xl font-semibold hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center text-sm md:text-base"
              >
                <span className="material-icons mr-2 text-sm">work</span>
                View Projects
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;