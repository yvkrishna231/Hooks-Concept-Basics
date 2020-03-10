import React, { useState, useEffect } from 'react';
import RunEffectHooks from './RunEffectHooks';

const UseEffectCleanUpHooks = () => {


    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button onClick={() => setDisplay(!display)}>toogle event</button>
            {display && <RunEffectHooks />}
        </div>
    );
};

export default UseEffectCleanUpHooks;