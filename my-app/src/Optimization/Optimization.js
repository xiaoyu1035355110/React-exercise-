import React, { Component, PureComponent } from 'react';
import CounterButton from './CounterButton';
import WordAdder from './WordAdder';

class Optimization extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
    }

    

    render() {
        return (
            <div>
                <hr/>
                <WordAdder />
                <hr/>
                <CounterButton color="red" />
            </div>
        );
    }
}

export default Optimization;
