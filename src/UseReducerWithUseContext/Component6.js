import React, { useContext } from 'react';
import { counterContext } from './App';

const Component6 = () => {

    const contextConsumer = useContext(counterContext)
    return (
        <div>
            <button onClick={() => contextConsumer.dispatchCount({ type: 'increment', value: 1 })}>increment</button>&nbsp;
            <button onClick={() => contextConsumer.dispatchCount({ type: 'decrement', value: 1 })}>decrement</button>&nbsp;
            <button onClick={() => contextConsumer.dispatchCount({ type: 'reset', value: 0 })}>reset</button>&nbsp;
        </div>
    );
};

export default Component6;