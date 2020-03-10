import React,{memo} from 'react';

const Button = ({ handleClick, children }) => {
    console.log('rendering ' + children)
    return (
        <div>
            <button onClick={handleClick}>{children}</button>
        </div>
    )
}

export default memo(Button);