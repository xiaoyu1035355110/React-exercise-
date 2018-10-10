import React, { Component } from 'react';

class CounterButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
    }

    render() {
        return (
            <div>
                <button color={this.props.color}
                        onClick={()=> this.setState(state => ({count: state.count+1}))}>
                Count: {this.state.count}
                </button> 
            </div>
        );
    }
}

export default CounterButton;
