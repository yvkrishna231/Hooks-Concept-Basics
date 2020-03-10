import React, { useContext } from 'react';
import ChildHook4 from './ChildHook4';
import { DataContext, ClickContext } from './ParentHook'

const ChildHook3 = () => {

    const data = useContext(DataContext);
    const click = useContext(ClickContext);

    return (
        <div>
            <h1>my name is {data.name1} and iam from {click.village1}</h1>
            <h1>my name is {data.name2} and iam from {click.village2}</h1>
            {/* <ChildHook4 /> */}
        </div>
    );
};

export default ChildHook3;