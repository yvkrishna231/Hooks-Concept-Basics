import React, { useReducer } from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
import Component4 from './Component4';


const initialState = {
    firstCounter: 0,
    secondCounter: 0
}

const counterContext = React.createContext();

const counterContext1 = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment': {
            return { ...state, firstCounter: state.firstCounter + action.value }
        }
        case 'decrement': {
            return { ...state, firstCounter: state.firstCounter - action.value }
        }
        case 'increment1': {
            return { ...state, secondCounter: state.secondCounter + action.value }
        }
        case 'decrement1': {
            return { ...state, secondCounter: state.secondCounter - action.value }
        }
        case 'reset': {
            return initialState
        }
        default: {
            return state
        }
    }
}

const App = () => {

    const [count, dispatchCount] = useReducer(reducer, initialState);
    const [count1, dispatchCount1] = useReducer(reducer, initialState);
    const [count2, dispatchCount2] = useReducer(reducer, initialState)

    return (
        <counterContext.Provider value={{ count: count.firstCounter, dispatchCount: dispatchCount }}>
            <counterContext1.Provider value={{ count1: count1.firstCounter, dispatchCount1: dispatchCount1, count2: count2.secondCounter, dispatchCount2: dispatchCount2 }}>
                <div>
                    <h1>{count1.firstCounter}</h1>
                    <h1>{count.firstCounter}</h1>
                    <Component1 />
                    <Component2 />
                    <Component4 />
                </div>
            </counterContext1.Provider>
        </counterContext.Provider >
    );
};

export { counterContext, counterContext1, App as default };