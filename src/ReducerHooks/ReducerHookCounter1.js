import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'increment': {
            return state + 1
        }
        case 'decrement': {
            return state - 1
        }
        case 'reset': {
            return initialState
        }
        default: {
            return state
        }
    }

}

const ReducerHookcounter1 = () => {

    const [count, setCount] = useReducer(reducer, initialState);

    return (
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <h1>My count is {count}</h1>
            <button onClick={() => setCount('increment')}>Increment</button>&nbsp;
            <button onClick={() => setCount('decrement')}>Decrement</button>&nbsp;
            <button onClick={() => setCount('reset')}>Reset</button>
        </div>
    );
};

export default ReducerHookcounter1;