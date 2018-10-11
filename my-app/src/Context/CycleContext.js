import React, { Component } from 'react';
import { ThemeContext } from './ThemeContext';

class CycleContext extends Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {

    }

    componentDidUpdate (prevProps, prevState) {
        console.log(`prevProps: ${prevProps}, prevState: ${prevState}`);
    }
    render() {
        const {theme, children} = this.props;

        return (
            <button className={theme ? 'dark' : 'light'}>
                {children}
            </button>
        )
    }
}
export default props => {
    <ThemeContext.Consumer>
        {theme =>  <button {...props} style={{backgroundColor: theme.background}}>{this.props.children}</button>}
    </ThemeContext.Consumer>
}

export default CycleContext;