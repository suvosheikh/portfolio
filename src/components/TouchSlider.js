// src/components/TouchSlider.js
import React, { useState, useRef, useCallback } from 'react';
import { motion, PanInfo } from 'framer-motion';

const TouchSlider = ({ children, items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [startX, setStartX] = useState(0);
    const touchStartRef = useRef(0);
    const touchMoveRef = useRef(0);

    const handleTouchStart = (e) => {
        touchStartRef.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchMoveRef.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const diff = touchStartRef.current - touchMoveRef.current;
        const threshold = 50;

        if (Math.abs(diff) > threshold) {
            if (diff > 0 && currentIndex < items.length - 1) {
                // Swipe left
                setCurrentIndex(currentIndex + 1);
            } else if (diff < 0 && currentIndex > 0) {
                // Swipe right
                setCurrentIndex(currentIndex - 1);
            }
        }
    };

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, [items.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    }, [items.length]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Auto-play for mobile
    React.useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <div className="relative overflow-hidden">
            {/* Slider Container */}
            <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {items.map((item, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        {children(item, index)}
                    </div>
                ))}
            </div>

            {/* Mobile-friendly Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-3">
                {items.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-accent scale-125'
                                : 'bg-gray-600 hover:bg-gray-500'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Swipe Instructions for Mobile */}
            <div className="text-center mt-4 md:hidden">
                <p className="text-textSecondary text-sm flex items-center justify-center">
                    <span className="material-icons mr-2 text-xs">swipe</span>
                    Swipe to navigate
                </p>
            </div>
        </div>
    );
};

export default TouchSlider;