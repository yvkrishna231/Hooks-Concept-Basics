import React, { useState, useEffect } from 'react';

const RunEffectHooks = () => {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const handleMouseMove = (e) => {
        console.log('mouse moves');
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useeffect change');
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            console.log('component will Mount applied');
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <div>
            <h1>{x}</h1>
            <h1>{y}</h1>

        </div>
    );
};

export default RunEffectHooks;