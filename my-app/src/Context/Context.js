import React, { Component } from 'react';
import NotUsedContext from './NotUsedContext';
import UseContext from './UseContext';
import DynamicThemeContext from './DynamicThemeContext';
import CouplingContext from './CouplingContext';

class Context extends Component {
    render() {
        return (
            <div>
                <h3>父子耦合Context</h3>
                <CouplingContext />
                <hr />
                <h3>动态使用Context</h3>
                <DynamicThemeContext />
                <hr />
                <h3>使用Context</h3>
                <UseContext />
                <hr />
                <h3>不使用Context</h3>
                <NotUsedContext />
            </div>
        )
    }
}

export default Context;