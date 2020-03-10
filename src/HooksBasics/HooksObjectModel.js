import React, { useState } from 'react';

const HooksObjectModel = () => {

    const [name, setName] = useState({ firstName: '', secondName: '' })

    return (
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <input
                type='text'
                value={name.firstName}
                onChange={(e) => setName({ ...name, firstName: e.target.value })}
            /><br />
            <input
                type='text'
                value={name.secondName}
                onChange={(e) => setName({ ...name, secondName: e.target.value })}
            />
            <h4>my first name is {name.firstName}</h4>
            <h4>my first name is {name.secondName}</h4>
            <h3>{JSON.stringify(name)}</h3>
        </div>
    );
};

export default HooksObjectModel;