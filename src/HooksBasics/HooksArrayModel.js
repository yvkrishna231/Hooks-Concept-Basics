
import React, { useState } from 'react';

const HooksArrayModel = () => {

    const [items, setItems] = useState([]);

    const handleArrayItems = () => {
        setItems([...items,
        { id: 1, value: 'padma' },
        { id: 2, value: 'venkata' },
        { id: 3, value: 'chenna' },
        { id: 4, value: 'vinod' },
        { id: 5, value: 'sudha' },
        { id: 6, value: 'kiranmay' },

        ])
    }

    return (
        <div>
            <button onClick={handleArrayItems}>data allows</button>
            {items.map(item => (
                <ul key={item.id}>
                    <li>{item.id}  {item.value}</li>
                </ul>
            )
            )}
        </div>
    );
};

export default HooksArrayModel;