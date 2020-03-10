import React, { useState, useCallback } from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';


const App = () => {

    const [age, setAge] = useState(23);
    const [salary, setSalary] = useState(10000);

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 3000)
    }, [salary])

    return (
        <div>
            <Title />
            <Count text='age' Count={age} />
            <Button handleClick={incrementAge}>increment age</Button>
            <Count text='salary' Count={salary} />
            <Button handleClick={incrementSalary}>increment salary</Button>
        </div>
    )
}

export default App