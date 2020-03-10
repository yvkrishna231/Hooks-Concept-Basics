

import React, { useReducer } from 'react';

const initialState = {
    firstCounter: 0,
    secondCounter: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment': {
            return { ...state, firstCounter: state.firstCounter + action.value }
        }
        case 'decrement': {
            return { ...state, firstCounter: state.firstCounter - action.value }
        }
        case 'reset': {
            return { ...state, firstCounter: 0 }
        }
        case 'increment1': {
            return { ...state, secondCounter: state.secondCounter + action.value }
        }
        case 'decrement1': {
            return { ...state, secondCounter: state.secondCounter - action.value }
        }
        case 'reset1': {
            return { ...state, secondCounter: 0 }
        }
        default: {
            return state
        }
    }
}

const MultipleReducerCounter3 = () => {

    const [count, dispatchCount] = useReducer(reducer, initialState)
    const [count1, dispatchCount1] = useReducer(reducer, initialState)

    return (
        <div>
            <div>
                <h1>My First Count Is {count.firstCounter}</h1>
                <button onClick={() => dispatchCount({ type: 'increment', value: 1 })}>increment</button>&nbsp;
                <button onClick={() => dispatchCount({ type: 'decrement', value: 1 })}>decrement</button>&nbsp;
                <button onClick={() => dispatchCount({ type: 'increment', value: 5 })}>increment 5</button>&nbsp;
                <button onClick={() => dispatchCount({ type: 'decrement', value: 5 })}>decrement 5</button>&nbsp;
                <button onClick={() => dispatchCount({ type: 'reset', value: 1 })}>reset</button>&nbsp;<br />
                <h1>My Second Count Is {count.secondCounter}</h1>
                <button onClick={() => dispatchCount({ type: 'increment1', value: 1 })}>increment1</button>&nbsp;
                <button onClick={() => dispatchCount({ type: 'decrement1', value: 1 })}>decrement2</button>&nbsp;
                <button onClick={() => dispatchCount({ type: 'increment1', value: 10 })}>increment10</button>&nbsp;
                <button onClick={() => dispatchCount({ type: 'decrement1', value: 10 })}>decrement20</button>&nbsp;
                <button onClick={() => dispatchCount({ type: 'reset1', value: 1 })}>reset1</button>&nbsp;
                </div>
            <div>
                <h1>My First Count Is {count1.firstCounter}</h1>
                <button onClick={() => dispatchCount1({ type: 'increment', value: 1 })}>increment</button>&nbsp;
                <button onClick={() => dispatchCount1({ type: 'decrement', value: 1 })}>decrement</button>&nbsp;
                <button onClick={() => dispatchCount1({ type: 'increment', value: 5 })}>increment 5</button>&nbsp;
                <button onClick={() => dispatchCount1({ type: 'decrement', value: 5 })}>decrement 5</button>&nbsp;
                <button onClick={() => dispatchCount1({ type: 'reset', value: 1 })}>reset</button>&nbsp;<br />
                <h1>My Second Count Is {count1.secondCounter}</h1>
                <button onClick={() => dispatchCount1({ type: 'increment1', value: 1 })}>increment1</button>&nbsp;
                <button onClick={() => dispatchCount1({ type: 'decrement1', value: 1 })}>decrement2</button>&nbsp;
                <button onClick={() => dispatchCount1({ type: 'increment1', value: 10 })}>increment10</button>&nbsp;
                <button onClick={() => dispatchCount1({ type: 'decrement1', value: 10 })}>decrement20</button>&nbsp;
                <button onClick={() => dispatchCount1({ type: 'reset1', value: 1 })}>reset1</button>&nbsp;
            </div>
        </div>
    );
};

export default MultipleReducerCounter3;