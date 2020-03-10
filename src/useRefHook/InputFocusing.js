import React, { useEffect, useRef } from 'react';

const InputFocusing = () => {

    const focus = useRef(null);

    useEffect(() => {
        focus.current.focus()
    })

    return (
        <div>
            <input ref={focus} type='text' placeholder='focus' />
        </div>
    );

};

export default InputFocusing;