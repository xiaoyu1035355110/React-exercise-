import React, { Component } from 'react';
import { ThemeContext } from './ThemeContext';

class ThemedButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {props} = this;

        return (
            <ThemeContext.Consumer>
                {
                    theme =>
                    <button {...props} style={{backgroundColor: theme.background}}>theme</button>
                }
            </ThemeContext.Consumer>
        )
    }
}

export default ThemedButton; 