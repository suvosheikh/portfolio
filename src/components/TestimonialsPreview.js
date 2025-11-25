// src/components/TestimonialsPreview.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { testimonialsData } from '../data/testimonials';

const TestimonialsPreview = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto slide every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonialsData.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonialsData.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial(current =>
      current === testimonialsData.length - 1 ? 0 : current + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(current =>
      current === 0 ? testimonialsData.length - 1 : current - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  // Display only 2 testimonials for preview
  const previewTestimonials = testimonialsData.slice(0, 2);

  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Client <span className="text-accent">Testimonials</span>
          </motion.h2>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto leading-relaxed">
            What clients and colleagues say about working with me
          </p>
        </div>

        {/* Testimonials Grid for Preview */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {previewTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-background to-secondary p-8 rounded-2xl border border-gray-800 hover:border-accent/50 transition-all duration-500 group"
            >
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="material-icons text-yellow-400 text-sm mr-1">
                    star
                  </span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-textSecondary leading-relaxed mb-6 italic text-lg">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-blue-500 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="material-icons text-white text-sm">person</span>
                  )}
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-textSecondary text-sm">{testimonial.position}</p>
                  <p className="text-textSecondary text-xs">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Link
            to="/testimonials"
            className="inline-flex items-center border-2 border-accent text-accent px-8 py-4 rounded-xl font-semibold hover:bg-accent hover:text-white transition-all duration-300 group"
          >
            <span>Read All Testimonials</span>
            <span className="material-icons ml-3 group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;