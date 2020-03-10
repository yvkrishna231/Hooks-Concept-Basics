import React,{memo} from 'react';

const Count = (props) => {
    console.log('rendering ' + props.text)
    return (
        <div>
            <h3>{props.text} - {props.Count}</h3>
        </div>
    )
}

export default memo(Count);