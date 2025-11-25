// src/components/BlogPreview.js
import React from 'react';
import { Link } from 'react-router-dom';

const BlogPreview = () => {
  const blogs = [
    {
      title: 'Video Editing Tips 2024',
      excerpt: 'Learn the latest techniques in professional video editing...',
      date: 'Jan 15, 2024'
    },
    {
      title: 'Tech Tools for Creators',
      excerpt: 'Essential software and hardware for content creators...',
      date: 'Dec 20, 2023'
    },
    {
      title: 'Color Grading Masterclass',
      excerpt: 'Transform your footage with professional color grading...',
      date: 'Nov 10, 2023'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Latest Blogs
          </h2>
          <p className="text-textSecondary max-w-2xl mx-auto">
            Insights, tutorials and thoughts on video editing and technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog, index) => (
            <div 
              key={index}
              className="bg-secondary rounded-lg overflow-hidden border border-gray-800 hover:border-accent transition-all duration-300 group"
            >
              <div className="h-48 bg-gray-800 flex items-center justify-center">
                <span className="material-icons text-4xl text-textSecondary group-hover:text-accent">
                  article
                </span>
              </div>
              <div className="p-6">
                <div className="text-textSecondary text-sm mb-2">{blog.date}</div>
                <h3 className="font-heading font-semibold text-lg mb-3">{blog.title}</h3>
                <p className="text-textSecondary text-sm mb-4">{blog.excerpt}</p>
                <button className="text-accent text-sm font-medium hover:glow-text transition-all duration-300">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center text-accent border border-accent px-6 py-3 rounded-lg hover:bg-accent hover:text-white transition-all duration-300"
          >
            Read All Blogs
            <span className="material-icons ml-2">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;