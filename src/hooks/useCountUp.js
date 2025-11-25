// src/hooks/useCountUp.js
import { useState, useEffect, useRef } from 'react';

const useCountUp = (end, duration = 2000, startOnView = true) => {
    const [count, setCount] = useState(0);
    const [isInView, setIsInView] = useState(!startOnView);
    const countRef = useRef(null);
    const observerRef = useRef(null);

    useEffect(() => {
        if (startOnView) {
            observerRef.current = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                    }
                },
                { threshold: 0.1 }
            );

            if (countRef.current) {
                observerRef.current.observe(countRef.current);
            }

            return () => {
                if (observerRef.current) {
                    observerRef.current.disconnect();
                }
            };
        } else {
            setIsInView(true);
        }
    }, [startOnView]);

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const increment = end / (duration / 16); // 60fps
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.ceil(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [end, duration, isInView]);

    return [count, countRef];
};

export default useCountUp;