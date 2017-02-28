import * as React from 'react';

export default class Counter extends React.Component <any, any> {
    state : any;
    interval : any;

    constructor(props : any) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    componentDidMount() : void {
        this.interval = setInterval(this.tick, 1000);
    }

    tick : () => void = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    componentWillUnmount() : void {
        clearInterval(this.interval);
    }

    render() : React.ReactElement < {} > | null {
        return <h2>Counter: {this.state.counter}</h2>;
    }
}