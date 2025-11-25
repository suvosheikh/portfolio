// src/pages/Certifications.js - COMPLETE FIXED VERSION
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from '../components/CountUp';

const Certifications = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCert, setSelectedCert] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const filters = [
    { id: 'all', name: 'All Certifications', icon: 'apps' },
    { id: 'ai', name: 'AI & ML', icon: 'smart_toy' },
    { id: 'business', name: 'Business', icon: 'business_center' },
    { id: 'tech', name: 'Technology', icon: 'computer' },
    { id: 'cyber', name: 'Cybersecurity', icon: 'security' },
    { id: 'creative', name: 'Creative', icon: 'palette' }
  ];

  const certifications = [
    {
      id: 1,
      title: 'ChatGPT and Generative AI in Business, Management, Marketing',
      issuer: 'Udemy',
      date: 'Aug 2025',
      category: 'ai',
      credentialId: 'UC-79e56cfb-9171-4ddf-b815-cb5b0953832f',
      skills: ['ChatGPT', 'Generative AI', 'Business Strategy', 'Marketing Automation', 'AI in Management'],
      description: 'Comprehensive course on applying generative AI tools in business strategy, management processes, and marketing innovation.',
      icon: 'smart_toy',
      status: 'completed',
      logo: 'https://cdn-icons-png.flaticon.com/512/5969/5969059.png',
      certificateImage: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
      verifyLink: 'https://www.udemy.com/certificate/UC-79e56cfb-9171-4ddf-b815-cb5b0953832f/'
    },
    {
      id: 2,
      title: 'Custom ChatGPT Publishing & AI Bootcamp Masterclass',
      issuer: 'Udemy',
      date: 'May 2025',
      category: 'ai',
      credentialId: 'UC-810e2f27-73f0-4b8c-8a4d-00a859e5c074',
      skills: ['ChatGPT', 'Custom GPTs', 'AI Automation', 'Prompt Engineering'],
      description: 'Advanced training in GPT customization, publishing, and AI-based automation workflows.',
      icon: 'tune',
      status: 'completed',
      logo: 'https://cdn-icons-png.flaticon.com/512/5969/5969059.png',
      certificateImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      verifyLink: 'https://www.udemy.com/certificate/UC-810e2f27-73f0-4b8c-8a4d-00a859e5c074/'
    },
    {
      id: 3,
      title: 'Executive Diploma in Business Communication',
      issuer: 'UniAthena',
      date: 'May 2025',
      category: 'business',
      credentialId: '2057-3460-4219',
      skills: ['Business Communication', 'Negotiation', 'Public Speaking', 'Leadership Communication'],
      description: 'Executive diploma focusing on professional writing, corporate communication, and strategic business interaction.',
      icon: 'communication',
      status: 'completed',
      logo: 'https://cdn-icons-png.flaticon.com/512/3570/3570768.png',
      certificateImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      verifyLink: 'https://uniathena.com/verify-certificate'
    },
    {
      id: 4,
      title: 'Google Ads Apps Certification',
      issuer: 'Google Digital Academy',
      date: 'May 2025',
      category: 'tech',
      credentialId: '0xb590028ae259d44b620082dcca382c72266452efba422b0478df77d627ada51a',
      skills: ['Google Ads', 'App Campaigns', 'Mobile Advertising', 'Campaign Optimization'],
      description: 'Official Google certification for creating and optimizing app campaigns using Google Ads.',
      icon: 'ads_click',
      status: 'completed',
      logo: 'https://cdn-icons-png.flaticon.com/512/300/300221.png',
      certificateImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      verifyLink: 'https://skillshop.exceedlms.com/student/award/0xb590028ae259d44b620082dcca382c72266452efba422b0478df77d627ada51a'
    },
    {
      id: 5,
      title: 'Mastering Adobe Premiere Pro CC',
      issuer: 'Udemy',
      date: 'May 2025',
      category: 'creative',
      credentialId: 'UC-8b58e4c5-9042-4ee3-9a3c-569979457489',
      skills: ['Adobe Premiere Pro', 'Video Editing', 'Motion Graphics', 'Color Grading'],
      description: 'Professional video editing course covering comprehensive skills in post-production techniques.',
      icon: 'videocam',
      status: 'completed',
      logo: 'https://cdn-icons-png.flaticon.com/512/5969/5969059.png',
      certificateImage: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      verifyLink: 'https://www.udemy.com/certificate/UC-8b58e4c5-9042-4ee3-9a3c-569979457489/'
    },
    {
      id: 6,
      title: 'Career Essentials in Cybersecurity',
      issuer: 'Microsoft',
      date: '2024',
      category: 'cyber',
      credentialId: 'MS-CYBERSEC-2024',
      skills: ['Cybersecurity', 'Threat Management', 'Security Protocols', 'Risk Assessment'],
      description: 'Comprehensive cybersecurity training covering threat management and security best practices.',
      icon: 'security',
      status: 'completed',
      logo: 'https://cdn-icons-png.flaticon.com/512/888/888853.png',
      certificateImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop',
      verifyLink: 'https://learn.microsoft.com/en-us/certifications/'
    }
  ];

  const filteredCerts = activeFilter === 'all'
    ? certifications
    : certifications.filter(cert => cert.category === activeFilter);

  const stats = {
    total: certifications.length,
    ai: certifications.filter(cert => cert.category === 'ai').length,
    business: certifications.filter(cert => cert.category === 'business').length,
    tech: certifications.filter(cert => cert.category === 'tech').length
  };

  const openCertificate = (cert) => {
    setSelectedCert(cert);
    setShowModal(true);
  };

  const closeCertificate = () => {
    setShowModal(false);
    setTimeout(() => setSelectedCert(null), 300);
  };

  const handleVerify = (link) => {
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
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 md:mb-6">
            Professional <span className="text-accent">Certifications</span>
          </h1>
          <p className="text-lg md:text-xl text-textSecondary max-w-3xl mx-auto mb-8 md:mb-12 px-4">
            Validating expertise through recognized certifications and continuous learning
          </p>

          {/* Stats with CountUp Animation - Fixed layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-secondary p-4 md:p-6 rounded-xl md:rounded-2xl text-center border border-gray-800 hover:border-accent/50 transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">
                <CountUp end={stats.total} duration={2500} />
              </div>
              <div className="text-textSecondary text-sm md:text-base">Total Certifications</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-secondary p-4 md:p-6 rounded-xl md:rounded-2xl text-center border border-gray-800 hover:border-accent/50 transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">
                <CountUp end={stats.ai} duration={2000} />
              </div>
              <div className="text-textSecondary text-sm md:text-base">AI & ML Certs</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-secondary p-4 md:p-6 rounded-xl md:rounded-2xl text-center border border-gray-800 hover:border-accent/50 transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">
                <CountUp end={stats.business} duration={1800} />
              </div>
              <div className="text-textSecondary text-sm md:text-base">Business Certs</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-secondary p-4 md:p-6 rounded-xl md:rounded-2xl text-center border border-gray-800 hover:border-accent/50 transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">
                <CountUp end={stats.tech} duration={1600} />
              </div>
              <div className="text-textSecondary text-sm md:text-base">Technology Certs</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Filter Buttons - Fixed for mobile */}
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
              className={`flex items-center px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-semibold transition-all duration-300 text-sm md:text-base ${activeFilter === filter.id
                  ? 'bg-gradient-to-r from-accent to-blue-500 text-white shadow-lg'
                  : 'bg-secondary text-textSecondary border border-gray-800 hover:border-accent hover:text-accent'
                }`}
            >
              <span className="material-icons mr-2 text-sm">{filter.icon}</span>
              {filter.name}
            </button>
          ))}
        </motion.div>

        {/* Certifications Grid - Fixed layout */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {filteredCerts.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-secondary to-background rounded-xl md:rounded-2xl border border-gray-800 hover:border-accent/50 transition-all duration-500 group overflow-hidden hover-lift"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4 md:mb-6">
                  <div className="flex items-start space-x-3 md:space-x-4 flex-1 min-w-0">
                    {/* Logo with fixed size */}
                    <div className="flex-shrink-0">
                      {cert.logo ? (
                        <img
                          src={cert.logo}
                          alt={`${cert.issuer} logo`}
                          className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-lg bg-white p-1"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-accent to-blue-500 rounded-lg flex items-center justify-center ${cert.logo ? 'hidden' : 'flex'}`}>
                        <span className="material-icons text-white text-sm md:text-base">{cert.icon}</span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-heading font-semibold group-hover:text-accent transition-colors duration-300 mb-2 line-clamp-2">
                        {cert.title}
                      </h3>
                      <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-4 text-textSecondary text-sm">
                        <span className="flex items-center">
                          <span className="material-icons mr-1 text-xs">business</span>
                          {cert.issuer}
                        </span>
                        <span className="flex items-center">
                          <span className="material-icons mr-1 text-xs">event</span>
                          {cert.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs md:text-sm flex-shrink-0 ml-2 ${cert.status === 'completed'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                    {cert.status}
                  </div>
                </div>

                <p className="text-textSecondary leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                  {cert.description}
                </p>

                {/* Credential ID */}
                {cert.credentialId && (
                  <div className="mb-4 md:mb-6">
                    <div className="text-textSecondary text-xs md:text-sm mb-1">Credential ID:</div>
                    <code className="bg-background border border-gray-700 px-2 md:px-3 py-1 md:py-2 rounded-lg text-textSecondary text-xs md:text-sm font-mono break-all">
                      {cert.credentialId}
                    </code>
                  </div>
                )}

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-textSecondary font-semibold mb-3 flex items-center text-sm md:text-base">
                    <span className="material-icons mr-2 text-xs md:text-sm">psychology</span>
                    Skills Covered
                  </h4>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-background border border-gray-700 px-2 md:px-3 py-1 rounded-full text-textSecondary text-xs md:text-sm hover:text-accent hover:border-accent transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
                  <button
                    onClick={() => openCertificate(cert)}
                    className="flex items-center justify-center text-accent border border-accent px-3 md:px-4 py-2 rounded-lg hover:bg-accent hover:text-white transition-all duration-300 text-sm md:text-base flex-1"
                  >
                    <span className="material-icons mr-2 text-xs md:text-sm">visibility</span>
                    View Certificate
                  </button>
                  {cert.verifyLink && (
                    <button
                      onClick={() => handleVerify(cert.verifyLink)}
                      className="flex items-center justify-center text-textSecondary border border-gray-700 px-3 md:px-4 py-2 rounded-lg hover:border-accent hover:text-accent transition-all duration-300 text-sm md:text-base flex-1"
                    >
                      <span className="material-icons mr-2 text-xs md:text-sm">verified</span>
                      Verify
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredCerts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 md:py-16"
          >
            <span className="material-icons text-4xl md:text-6xl text-textSecondary mb-4">school</span>
            <h3 className="text-xl md:text-2xl font-heading font-semibold text-textSecondary mb-2">
              No certifications found
            </h3>
            <p className="text-textSecondary text-sm md:text-base">
              Try selecting a different category filter
            </p>
          </motion.div>
        )}

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-8 md:mt-12"
        >
          <p className="text-textSecondary text-sm md:text-base">
            Showing {filteredCerts.length} of {certifications.length} professional certifications
          </p>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {showModal && selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeCertificate}
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
              <div className="flex justify-between items-center p-4 md:p-6 border-b border-gray-800">
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg md:text-2xl font-heading font-bold text-white truncate">
                    {selectedCert.title}
                  </h2>
                  <p className="text-textSecondary text-sm md:text-base">{selectedCert.issuer}</p>
                </div>
                <button
                  onClick={closeCertificate}
                  className="p-2 text-textSecondary hover:text-white hover:bg-gray-800 rounded-lg transition-colors flex-shrink-0 ml-4"
                >
                  <span className="material-icons">close</span>
                </button>
              </div>

              {/* Certificate Image */}
              <div className="p-4 md:p-6 max-h-[50vh] md:max-h-[60vh] overflow-auto">
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="bg-white rounded-lg shadow-2xl overflow-hidden"
                >
                  <img
                    src={selectedCert.certificateImage}
                    alt={`${selectedCert.title} Certificate`}
                    className="w-full h-auto object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback */}
                  <div className="hidden w-full h-64 md:h-96 bg-gradient-to-br from-gray-100 to-gray-300 items-center justify-center flex-col text-gray-600">
                    <span className="material-icons text-4xl md:text-6xl mb-4">image_not_supported</span>
                    <p className="text-sm md:text-base">Certificate image not available</p>
                  </div>
                </motion.div>
              </div>

              {/* Modal Footer */}
              <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-6 border-t border-gray-800 bg-secondary space-y-4 md:space-y-0">
                <div className="text-textSecondary text-xs md:text-sm text-center md:text-left">
                  Credential ID: <code className="bg-background px-2 py-1 rounded">{selectedCert.credentialId}</code>
                </div>
                <div className="flex space-x-2 md:space-x-4">
                  {selectedCert.verifyLink && (
                    <button
                      onClick={() => handleVerify(selectedCert.verifyLink)}
                      className="flex items-center bg-gradient-to-r from-accent to-blue-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl font-semibold hover:shadow-lg transition-all duration-300 text-sm md:text-base"
                    >
                      <span className="material-icons mr-2 text-xs md:text-sm">verified</span>
                      Verify Certificate
                    </button>
                  )}
                  <button
                    onClick={closeCertificate}
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

export default Certifications;