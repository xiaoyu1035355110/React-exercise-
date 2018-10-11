import React, { Component } from 'react';
import { ThemeContext, themes} from './ThemeContext';
import  ThemedButton from './ThemedButton';

class Toolbar extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        const { props } = this;

        return (
            <div>
                <ThemedButton onClick={props.changeTheme}>
                    Change Theme
                </ThemedButton>
            </div>
        )
    }
}

class DynamicThemeContext extends Component {

    constructor (props) {
        super(props);
        this.state = {
            theme: themes.light,
        }
    }

    toggleTheme = () => {
        this.setState(state => ({
            theme: 
                state.theme === themes.dark 
                    ? themes.light 
                    : themes.dark,
        }))
    }

    render() {
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme} />
                </ThemeContext.Provider>
                <ThemedButton>
                    Theme Button
                </ThemedButton>
            </div>
        )
    }
}

export default DynamicThemeContext;