import React, { useState, useMemo } from 'react';

const App = () => {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementCounterOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementCounterTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0;
        while (i < 1000000000) i++
        return counterOne % 2 === 1
    }, [counterOne])

    return (
        <div>
            <div>
                <button onClick={incrementCounterOne}>incrementCounterOne {counterOne}</button>&nbsp;
                <span>{isEven ? 'odd' : 'even'}</span>
            </div>
            <br />
            <div>
                <button onClick={incrementCounterTwo}>incrementCounterTwo {counterTwo}</button>
            </div>
        </div>
    );
};

export default App;