import React, { useState, useEffect } from 'react';
import ChildHook1 from './ChildHook1';


const DataContext = React.createContext();
const ClickContext = React.createContext();

const ParentHook = () => {

    const [name, setName] = useState('krishna');


    const handleClick = () => {
        setName('venkat')
    }

    return (
        <div>
            <DataContext.Provider value={{ name, name1: 'venkat', name2: 'krishna' }} >

                <ClickContext.Provider value={{ village1: 'vrkota', village2: 'lingasamudram' }}>

                    <ChildHook1 />

                </ClickContext.Provider>

            </DataContext.Provider>
        </div >
    );
};

export { DataContext, ClickContext, ParentHook as default }






