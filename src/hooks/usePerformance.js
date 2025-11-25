// src/hooks/usePerformance.js
import { useState, useEffect } from 'react';

export const usePerformance = () => {
    const [isLowEndDevice, setIsLowEndDevice] = useState(false);
    const [reduceMotion, setReduceMotion] = useState(false);

    useEffect(() => {
        // Check device capabilities
        const checkDevice = () => {
            // Check for low-end devices
            const isLowEnd =
                navigator.hardwareConcurrency <= 4 ||
                !('gpu' in navigator) ||
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

            // Check for reduced motion preference
            const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
            setReduceMotion(motionQuery.matches);

            setIsLowEndDevice(isLowEnd);
        };

        checkDevice();

        // Listen for changes
        const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const handleMotionChange = (e) => setReduceMotion(e.matches);
        motionQuery.addEventListener('change', handleMotionChange);

        return () => motionQuery.removeEventListener('change', handleMotionChange);
    }, []);

    return { isLowEndDevice, reduceMotion };
};