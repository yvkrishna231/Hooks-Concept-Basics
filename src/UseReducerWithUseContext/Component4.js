import React, { useContext } from 'react';
import Component5 from './Component5';
import { counterContext1 } from './App';

const Component4 = () => {

    const counterConsumer = useContext(counterContext1)

    return (
        <div>
            <Component5 />
            <h1>{counterConsumer.count2}</h1>
            <button onClick={() => counterConsumer.dispatchCount2({ type: 'increment1', value: 100 })}>increment100</button>
            <button onClick={() => counterConsumer.dispatchCount2({ type: 'decrement1', value: 100 })}>decrement100</button>
            <button onClick={() => counterConsumer.dispatchCount2({ type: 'reset' })}>reset100</button>
        </div>
    );
};

export default Component4;