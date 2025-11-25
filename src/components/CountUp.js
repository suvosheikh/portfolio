// src/components/CountUp.js
import React from 'react';
import useCountUp from '../hooks/useCountUp';

const CountUp = ({
    end,
    duration = 2000,
    suffix = '',
    prefix = '',
    className = '',
    startOnView = true
}) => {
    const [count, ref] = useCountUp(end, duration, startOnView);

    return (
        <span ref={ref} className={className}>
            {prefix}{count}{suffix}
        </span>
    );
};

export default CountUp;