// src/pages/Contact.js - FIXED MOBILE LAYOUT
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaYoutube,
  FaPinterest,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaSync
} from 'react-icons/fa';
import { SiUpwork, SiFiverr } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // EmailJS integration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'SA Shuvo Sheikh'
      };

      await emailjs.send(
        'service_asmiqjh', // Replace with your EmailJS service ID
        'template_rs1n55n', // Replace with your EmailJS template ID
        templateParams,
        'rPhxMpXLgmHH6fRzu' // Replace with your EmailJS public key
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'mdsuvosheikh@gmail.com',
      link: 'mailto:mdsuvosheikh@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+8801779980886',
      link: 'tel:+8801779980886'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Dhaka, Bangladesh',
      link: '#'
    },
    {
      icon: <FaClock />,
      title: 'Response Time',
      value: 'Within 24 hours',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: '#',
      label: 'LinkedIn',
      color: 'hover:text-[#0077b5]'
    },
    {
      icon: <FaGithub />,
      url: '#',
      label: 'GitHub',
      color: 'hover:text-gray-400'
    },
    {
      icon: <FaFacebook />,
      url: '#',
      label: 'Facebook',
      color: 'hover:text-[#1877f2]'
    },
    {
      icon: <FaInstagram />,
      url: '#',
      label: 'Instagram',
      color: 'hover:text-[#e4405f]'
    },
    {
      icon: <FaYoutube />,
      url: '#',
      label: 'YouTube',
      color: 'hover:text-[#ff0000]'
    },
    {
      icon: <FaPinterest />,
      url: '#',
      label: 'Pinterest',
      color: 'hover:text-[#bd081c]'
    },
    {
      icon: <SiUpwork />,
      url: '#',
      label: 'Upwork',
      color: 'hover:text-[#14a800]'
    },
    {
      icon: <SiFiverr />,
      url: '#',
      label: 'Fiverr',
      color: 'hover:text-[#1dbf73]'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header - Fixed for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16" // Reduced margin on mobile
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 md:mb-6">
            Get In <span className="text-accent">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-textSecondary max-w-3xl mx-auto px-4">
            Let's discuss your project and create something amazing together. I'm always excited to work on new challenges.
          </p>
        </motion.div>

        {/* FIXED: Grid layout for mobile */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* Contact Information - Now comes FIRST on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 order-2 lg:order-1" // Changed order for mobile
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 md:mb-8 flex items-center">
              <FaEnvelope className="mr-3 text-accent" />
              Let's Connect
            </h2>

            <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center p-4 md:p-6 bg-secondary rounded-xl md:rounded-2xl border border-gray-800 hover:border-accent transition-all duration-300 group cursor-pointer"
                >
                  <div className="p-2 md:p-3 bg-accent/10 rounded-lg md:rounded-xl mr-3 md:mr-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <div className="text-accent text-lg md:text-xl">
                      {info.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-textSecondary text-sm md:text-base">{info.title}</div>
                    <div className="text-white font-semibold text-base md:text-lg">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mb-6 md:mb-8">
              <h3 className="text-lg md:text-xl font-heading font-semibold mb-4 md:mb-6 text-textSecondary">
                Follow Me
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 md:w-12 md:h-12 bg-secondary border border-gray-800 rounded-lg md:rounded-xl flex items-center justify-center text-textSecondary transition-all duration-300 hover:border-accent hover:bg-accent/10 ${social.color}`}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="text-base md:text-lg">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="p-4 md:p-6 bg-gradient-to-r from-accent/10 to-blue-500/10 rounded-xl md:rounded-2xl border border-accent/20"
            >
              <div className="flex items-center mb-2 md:mb-3">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full mr-2 md:mr-3 animate-pulse"></div>
                <span className="text-accent font-semibold text-sm md:text-base">Currently Available</span>
              </div>
              <p className="text-textSecondary text-xs md:text-sm">
                I'm currently accepting new projects and would love to hear about your ideas. Let's schedule a call to discuss how we can work together.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form - Now comes SECOND on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 order-1 lg:order-2" // Changed order for mobile
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 md:mb-8 flex items-center">
              <FaPaperPlane className="mr-3 text-accent" />
              Send Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-textSecondary mb-2 text-sm md:text-base">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-secondary border border-gray-800 rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 text-white placeholder-textSecondary focus:outline-none focus:border-accent transition-colors duration-300 text-sm md:text-base"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-textSecondary mb-2 text-sm md:text-base">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-secondary border border-gray-800 rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 text-white placeholder-textSecondary focus:outline-none focus:border-accent transition-colors duration-300 text-sm md:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-textSecondary mb-2 text-sm md:text-base">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-secondary border border-gray-800 rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 text-white placeholder-textSecondary focus:outline-none focus:border-accent transition-colors duration-300 text-sm md:text-base"
                  placeholder="Project discussion or inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-textSecondary mb-2 text-sm md:text-base">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-secondary border border-gray-800 rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 text-white placeholder-textSecondary focus:outline-none focus:border-accent transition-colors duration-300 resize-none text-sm md:text-base"
                  placeholder="Tell me about your project, requirements, or any questions you have..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-3 md:py-4 rounded-lg md:rounded-xl font-semibold transition-all duration-300 flex items-center justify-center text-sm md:text-base ${isSubmitting
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-accent to-blue-500 hover:shadow-lg glow-button'
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <FaSync className="animate-spin mr-2" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 md:p-4 bg-green-500/20 border border-green-500/50 rounded-lg md:rounded-xl text-green-400 text-center flex items-center justify-center text-sm md:text-base"
                >
                  <FaEnvelope className="mr-2" />
                  Message sent successfully! I'll get back to you within 24 hours.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 md:p-4 bg-red-500/20 border border-red-500/50 rounded-lg md:rounded-xl text-red-400 text-center flex items-center justify-center text-sm md:text-base"
                >
                  <FaEnvelope className="mr-2" />
                  Failed to send message. Please try again or email me directly.
                </motion.div>
              )}
            </form>

            {/* Form Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-4 md:mt-6 text-center"
            >
              <p className="text-textSecondary text-xs md:text-sm">
                Or email me directly at{' '}
                <a href="mailto:mdsuvosheikh@gmail.com" className="text-accent hover:underline">
                  mdsuvosheikh@gmail.com
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;