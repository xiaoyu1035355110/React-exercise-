import React, { Component } from 'react';

class NotUsedContext extends Component {
    render() {
        let ThemedButton = props => {
            return (
                <button theme={props.theme} >theme</button>
            )
        }

        let Toolbar = props => {
            return (
                <ThemedButton theme={props.theme}/>
            )
        } 

        return (
            <div>
                <Toolbar theme="dark"/>
            </div>
        )
    }
}

export default NotUsedContext;