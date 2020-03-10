import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './Hooks.css'

const DataFetchingHooks = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)

    const handleOnClick = () => {
        setLoading(true)
        Axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(res => {
                console.log(res);
                setData(res.data);
                setLoading(false)
            }).catch(err => {
                console.log(err);
                setData(err);
            })
    }

    // useEffect(() => {
    //     Axios.get('https://jsonplaceholder.typicode.com/comments')
    //         .then(res => {
    //             console.log(res);
    //             setData(res.data);
    //         }).catch(err => {
    //             console.log(err);
    //             setData(err);
    //         })
    // }, [])

    return (
        <div className='totaldiv'>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(val => {
                        return (
                            <tr key={val.id}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{val.body}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {loading && <p>Loading ...</p>}
            <button onClick={handleOnClick}>data</button>
        </div>
    );
};





export default DataFetchingHooks;