import React, { Component } from 'react';
const ThemeContext = React.createContext('light');
const { Provider, Consumer } = React.createContext('a')
class UseContext extends Component {
    render() {
        let ThemeButton = props => {
            return (
                <ThemeContext.Consumer>
                    {theme => <button {...props} theme={theme}>theme</button>}
                </ThemeContext.Consumer>
            )
        }

        let Toolbar = props => {
            return (
                <div>
                    <ThemeButton />
                </div>
            )
        }

        return (
            <ThemeContext.Provider value="dark">
                <Toolbar />
            </ThemeContext.Provider>
        )
    }
}

export default UseContext;