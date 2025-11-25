// src/components/OptimizedImage.js
import React, { useState } from 'react';
import { usePerformance } from '../hooks/usePerformance';

const OptimizedImage = ({
    src,
    alt,
    fallbackSrc,
    className = '',
    ...props
}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const { isLowEndDevice } = usePerformance();

    const handleLoad = () => {
        setIsLoading(false);
    };

    const handleError = () => {
        setIsLoading(false);
        setHasError(true);
    };

    // For low-end devices, use lower quality images
    const optimizedSrc = isLowEndDevice && src.includes('unsplash')
        ? `${src}&q=50&w=800`
        : src;

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {isLoading && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse flex items-center justify-center">
                    <span className="material-icons text-textSecondary">image</span>
                </div>
            )}

            <img
                src={hasError ? fallbackSrc : optimizedSrc}
                alt={alt}
                onLoad={handleLoad}
                onError={handleError}
                loading="lazy"
                className={`w-full h-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'
                    }`}
                {...props}
            />
        </div>
    );
};

export default OptimizedImage;