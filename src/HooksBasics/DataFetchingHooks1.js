
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const DataFetchingHooks1 = () => {

    const [data, setData] = useState({});
    const [id, setId] = useState(null);
    const [idFromButton, setIdFromButton] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true)
        setIdFromButton(id);
        setData([])
    }

    useEffect(() => {
        Axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
            .then(res => {
                console.log(res.data);
                setData(res.data)
                setLoading(false)
            }).catch(err => {
                console.log(err);
                setData(err);
            })
    }, [idFromButton])

    return (
        <div>
            <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
            <button type='button' onClick={handleClick}>Fetch Data</button>
            {loading && <h1>Loading......</h1>}
            <h1>{data.body}</h1>
        </div>
    );
};

export default DataFetchingHooks1;