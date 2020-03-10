import React,{memo} from 'react';

const Title = () => {
    console.log('rendering title')
    return (
        <div>
            <h1>This is a callback hook</h1>
        </div>
    )
}

export default memo(Title);