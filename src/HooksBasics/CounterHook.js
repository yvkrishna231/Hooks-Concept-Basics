import React, { useState } from 'react';

const CounterHook = () => {

    const [count, setCount] = useState(0);
    //one type
    // const handleIncrement = () => {
    //     setCount(prevState => prevState + 1)
    // }


    // const handleDecrement = () => {
    //     setCount(prevState => prevState - 1)
    // }

    // const handleReset = () => {
    //     setCount(0)
    // }

    return (
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <h3>count is {count}</h3>
            {/*one type */}
            {/* <button onClick={handleIncrement}>increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button> */}

            {/*another type */}

            <button onClick={() => setCount(count + 1)}>increment</button>
            <button onClick={() => setCount(count - 1)}>decrement</button>
            <button onClick={() => setCount(0)}>reset</button>
        </div>
    )
};

export default CounterHook;