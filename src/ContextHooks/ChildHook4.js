import React from 'react';
import { DataContext, ClickContext } from './ParentHook';

const ChildHook4 = () => {
    return (
        <div>
            <DataContext.Consumer>
                {user => {
                    return (
                        <ClickContext.Consumer>
                            {
                                value => {
                                    return (
                                        <div>
                                            <h2>{user}</h2>
                                            <button onClick={value}>click</button>
                                        </div>
                                    )
                                }
                            }
                        </ClickContext.Consumer>
                    )
                }}
            </DataContext.Consumer>
        </div>
    );
};

export default ChildHook4;