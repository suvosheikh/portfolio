// src/pages/Testimonials.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialsData } from '../data/testimonials';

const Testimonials = () => {
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
            Client <span className="text-accent">Testimonials</span>
          </h1>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto">
            Hear what clients and colleagues have to say about working with me
          </p>
        </motion.div>

        {/* Main Testimonial Slider */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-secondary to-background rounded-2xl border border-gray-800 p-8 md:p-12 relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/5 rounded-full translate-y-12 -translate-x-12"></div>

            <div className="relative z-10">
              {/* Quote Icon */}
              <div className="text-6xl text-accent/20 mb-4">
                <span className="material-icons">format_quote</span>
              </div>

              {/* Rating Stars */}
              <div className="flex mb-6">
                {[...Array(testimonialsData[currentTestimonial].rating)].map((_, i) => (
                  <span key={i} className="material-icons text-yellow-400 text-lg mr-1">
                    star
                  </span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-xl text-textSecondary leading-relaxed mb-8 italic">
                "{testimonialsData[currentTestimonial].text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-blue-500 rounded-full flex items-center justify-center mr-6 overflow-hidden border-2 border-accent/30">
                  {testimonialsData[currentTestimonial].image ? (
                    <img
                      src={testimonialsData[currentTestimonial].image}
                      alt={testimonialsData[currentTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="material-icons text-white">person</span>
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-semibold text-white mb-1">
                    {testimonialsData[currentTestimonial].name}
                  </h3>
                  <p className="text-textSecondary text-lg mb-1">
                    {testimonialsData[currentTestimonial].position}
                  </p>
                  <p className="text-textSecondary text-sm">
                    {testimonialsData[currentTestimonial].company}
                  </p>
                  <p className="text-textSecondary text-xs mt-2">
                    {testimonialsData[currentTestimonial].date}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Slider Controls */}
          <div className="flex justify-center items-center mt-8 space-x-6">
            <button
              onClick={prevTestimonial}
              className="p-3 text-textSecondary hover:text-accent hover:bg-accent/10 rounded-xl transition-all duration-300"
            >
              <span className="material-icons">chevron_left</span>
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial
                      ? 'bg-accent scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 text-textSecondary hover:text-accent hover:bg-accent/10 rounded-xl transition-all duration-300"
            >
              <span className="material-icons">chevron_right</span>
            </button>

            {/* Auto-play Toggle */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="p-3 text-textSecondary hover:text-accent hover:bg-accent/10 rounded-xl transition-all duration-300 ml-4"
            >
              <span className="material-icons text-sm">
                {isAutoPlaying ? 'pause' : 'play_arrow'}
              </span>
            </button>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-textSecondary">
            All Testimonials
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsData.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-secondary to-background p-6 rounded-2xl border border-gray-800 hover:border-accent/50 transition-all duration-500 group cursor-pointer"
                onClick={() => goToTestimonial(index)}
              >
                {/* Rating Stars */}
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="material-icons text-yellow-400 text-sm mr-1">
                      star
                    </span>
                  ))}
                </div>

                {/* Testimonial Text (Truncated) */}
                <p className="text-textSecondary leading-relaxed mb-4 italic text-sm line-clamp-4">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-accent to-blue-500 rounded-full flex items-center justify-center mr-3 overflow-hidden">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="material-icons text-white text-xs">person</span>
                    )}
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-white text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-textSecondary text-xs">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="bg-secondary p-6 rounded-2xl border border-gray-800">
              <div className="text-2xl font-bold text-accent mb-2">{testimonialsData.length}+</div>
              <div className="text-textSecondary text-sm">Happy Clients</div>
            </div>
            <div className="bg-secondary p-6 rounded-2xl border border-gray-800">
              <div className="text-2xl font-bold text-accent mb-2">5.0</div>
              <div className="text-textSecondary text-sm">Average Rating</div>
            </div>
            <div className="bg-secondary p-6 rounded-2xl border border-gray-800">
              <div className="text-2xl font-bold text-accent mb-2">100%</div>
              <div className="text-textSecondary text-sm">Satisfaction</div>
            </div>
            <div className="bg-secondary p-6 rounded-2xl border border-gray-800">
              <div className="text-2xl font-bold text-accent mb-2">2+</div>
              <div className="text-textSecondary text-sm">Years</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;