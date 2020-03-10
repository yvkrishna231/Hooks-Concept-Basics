import React, { useReducer } from 'react';

const initialState = {

    firstCount: 0,
    secondCount: 10

}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment': {
            return { ...state, firstCount: state.firstCount + action.value }
        }

        case 'decrement': {
            return { ...state, firstCount: state.firstCount - action.value }
        }
        case 'increment1': {
            return { ...state, secondCount: state.secondCount + action.value }
        }

        case 'decrement1': {
            return { ...state, secondCount: state.secondCount - action.value }
        }
        case 'reset': {
            return initialState
        }
        default: {
            return state
        }
    }
}

const ReducerHookCounter2 = () => {

    const [count, dispatchCount] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>My Count Is {count.firstCount}</h1>
            <h1>My Count Is {count.secondCount}</h1>
            <button onClick={() => dispatchCount({ type: 'increment', value: 1 })}>Increment</button>&nbsp;
            <button onClick={() => dispatchCount({ type: 'decrement', value: 1 })}>Decrement</button>&nbsp;
            <button onClick={() => dispatchCount({ type: 'increment', value: 5 })}>Increment 5</button>&nbsp;
            <button onClick={() => dispatchCount({ type: 'decrement', value: 5 })}>Decrement 5</button>&nbsp;
            <button onClick={() => dispatchCount({ type: 'increment1', value: 10 })}>Increment1</button>&nbsp;
            <button onClick={() => dispatchCount({ type: 'decrement1', value: 10 })}>Decrement1</button>&nbsp;
            <button onClick={() => dispatchCount({ type: 'reset', value: 1 })}>Reset</button>
        </div>
    );
};

export default ReducerHookCounter2;