// src/components/LoadingSpinner.js
import React, { useState, useEffect } from 'react';

// Apnar dynamic quotes list
const portfolioQuotes = [
  { text: "Design is not just what it looks like and feels like. Design is how it works.", writer: "Steve Jobs" },
  { text: "The details are not the details. They make the design.", writer: "Charles Eames" },
  { text: "Simplicity is the ultimate sophistication.", writer: "Leonardo da Vinci" },
  { text: "Every great developer you know got there by solving problems they were unqualified to solve.", writer: "Patrick McKenzie" },
];

const TARGET_TIME_MS = 5000; // 5 seconds total loading time

const LoadingSpinner = () => {
  // State for dynamic quote
  const [currentQuote, setCurrentQuote] = useState({});
  // State for the progress percentage (0 to 100)
  const [progress, setProgress] = useState(0);

  // Eii block-ta prottek browser reload-e notun kore chole
  useEffect(() => {
    // 1. Randomly select a quote on mount (Browser Reload)
    const randomIndex = Math.floor(Math.random() * portfolioQuotes.length);
    setCurrentQuote(portfolioQuotes[randomIndex]); // Eii line-ta notun quote select kore

    // 2. Progress Bar Logic (same as before)
    const intervalDuration = TARGET_TIME_MS / 100;
    const timer = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 1;
      });
    }, intervalDuration);

    return () => clearInterval(timer);
  }, []); // Empty dependency array means it runs ONCE when the component mounts (after every reload)

  return (
    // ... (JSX for Quote and Progress Bar)
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center p-8 max-w-lg">
        
        {/* Quote Block */}
        <div className="mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}> 
          <p className="text-2xl italic font-serif text-textSecondary leading-relaxed">
            "{currentQuote.text}"
          </p>
          <p className="mt-4 text-lg font-medium text-accent">
            — {currentQuote.writer}
          </p>
        </div>

        {/* Progress Bar Container */}
        <div className="mt-6 w-full mx-auto">
          <p className="text-sm font-light text-textSecondary mb-2 text-left flex justify-between">
             Loading resources... 
             <span className='font-medium text-accent'>{Math.floor(progress)}%</span>
          </p>
          
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent transition-all duration-300 ease-linear"
              style={{ width: `${progress}%` }} 
            ></div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default LoadingSpinner;