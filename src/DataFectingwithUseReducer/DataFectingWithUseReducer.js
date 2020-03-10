import React, { useReducer, useEffect } from 'react';
import Axios from 'axios';

const initialState = {
    loading: true,
    data: {},
    error: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCHDATA_SUCCESS': {
            return {
                loading: false,
                data: action.payload,
                error: false
            }
        }
        case 'FETCHINGDATA_FAILED': {
            return {
                loading: false,
                data: {},
                error: true
            }
        }
        default: {
            return state
        }
    }
}

const DataFectingWithUseReducer = () => {

    const [data, dispatchData] = useReducer(reducer, initialState);

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                console.log(res)
                dispatchData({ type: 'FETCHDATA_SUCCESS', payload: res.data })
            })
            .catch(err => {
                dispatchData({ type: 'FETCHINGDATA_FAILED' })
            })
    }, [])

    return (
        <div>
            <h3>   {data.loading ? 'Loading...' : data.data.title}  </h3>
            {data.error && <p>something went wrong</p>}
        </div>
    );
};

export default DataFectingWithUseReducer;