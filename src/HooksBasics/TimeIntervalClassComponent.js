import React, { Component } from 'react';

class TimeIntervalClassComponent extends Component {

    state = {
        count: 0
    }


    componentDidMount() {
        console.log('componentDidMount Updating')
        this.interval = setInterval(this.tick, 2000);
    }


    tick = () => {
        console.log('tick Updating')
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <h1>{this.state.count}</h1>
            </div>
        );
    }
}

export default TimeIntervalClassComponent;