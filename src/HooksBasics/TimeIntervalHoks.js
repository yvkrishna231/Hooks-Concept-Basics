import React, { useState, useEffect } from 'react';

const TimeIntervalHoks = () => {

    const [count, setCount] = useState(0);


    const tick = () => {
        setCount(prevState => prevState + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);


    return (
        <div>
            <h1>{count}</h1>
        </div>
    );
};

export default TimeIntervalHoks;