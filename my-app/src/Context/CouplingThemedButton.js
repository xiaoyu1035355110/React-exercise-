import React, { Component } from 'react';
import { CouplingThemeContext } from './CouplingThemeContext';

class CouplingThemedButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {props} = this;

        return (
            <CouplingThemeContext.Consumer>
                {({theme, CouplingToggleTheme}) => (
                    <button
                        onClick={CouplingToggleTheme}
                        style={{backgroundColor:theme.background, color: theme.foreground}}
                       >
                        Toggle Theme    
                    </button>
                )}
            </CouplingThemeContext.Consumer>
        )
    }
}

export default CouplingThemedButton; 