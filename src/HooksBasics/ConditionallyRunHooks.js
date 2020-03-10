import React, { useState, useEffect } from 'react';

const ConditionallyRunHooks = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('updated successfully')
        document.title = `clicked ${count} times`
    }, [count])

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>click {count} times</button><br />
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            <b>my name is {name}</b>
            <h4>clicked {count} times</h4>
        </div>
    );
};

export default ConditionallyRunHooks;