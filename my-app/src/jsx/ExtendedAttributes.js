import React, { Component } from 'react';

class ExtendedAttributes extends Component {
    render() {
        
        const props = {firstName: 'Thank', lastName: 'God'};

        let MyComponent = (props) => {
            return (
                <div>
                    this is {props.children}
                </div>
            )
        }

        let Greeting1 = (props) => {
            return(
                <div>Greeting1:firstName: {props.firstName}, lastName: {props.lastName}</div>
            )
        }

        let Greeting2 = (props) => {
            return (
                <div>Greeting2:firstName: {props.firstName}, lastName: {props.lastName}</div>
            )
        }
        return (
            <div>
                <h3>props.children(字符串常量)</h3>
                <MyComponent>
                    MyComponent children content
                </MyComponent>
                <h3>ExtendedAttributes.js(扩展属性)</h3>
                <Greeting1 firstName="Xie" lastName={'jia yu'} />
                <Greeting2 {...props} />
            </div>
        )
    }
}

export default ExtendedAttributes;