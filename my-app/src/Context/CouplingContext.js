import React, { Component } from 'react';
import { CouplingThemeContext, CouplingThemes} from './CouplingThemeContext';
import  CouplingThemedButton from './CouplingThemedButton';

class Content extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        const { props } = this;

        return (
            <div>
                <CouplingThemedButton />
            </div>
        )
    }
}

class CouplingContext extends Component {

    constructor (props) {
        super(props);

        this.state = {
            theme: CouplingThemes.light,
            CouplingToggleTheme: this.CouplingToggleTheme
        }
    }

    CouplingToggleTheme = () => {
        this.setState(state => ({
            theme: 
                state.theme === CouplingThemes.dark 
                    ? CouplingThemes.light 
                    : CouplingThemes.dark,
        }))
    }

    render() {
        return (
            <CouplingThemeContext.Provider value={this.state}>
                <Content />
            </CouplingThemeContext.Provider>
        )
    }
}

export default CouplingContext;