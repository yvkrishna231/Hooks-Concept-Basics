import React, { useContext } from 'react';
import Component3 from './Component3';
import { counterContext, counterContext1 } from './App';

const Component2 = () => {

    const contextConsumer = useContext(counterContext1)

    return (
        <div>
            <button onClick={() => contextConsumer.dispatchCount1({ type: 'increment', value: 10 })}>increment1</button>&nbsp;
            <button onClick={() => contextConsumer.dispatchCount1({ type: 'decrement', value: 10 })}>decrement1</button>&nbsp;
            <button onClick={() => contextConsumer.dispatchCount1({ type: 'reset', value: 10 })}>reset1</button>&nbsp;

            <Component3 />
        </div>
    );
};

export default Component2;