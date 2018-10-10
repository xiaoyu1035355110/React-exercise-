import React, { Component } from 'react';

class Expression extends Component {
    render() {

        let NumberDescriber = (props) => {
            let description;

            if (props.number % 2 === 0) {
                description = <strong>even</strong>
            } else {
                description = <i>odd</i>
            }

            return <div>{props.number} is an {description} number</div>
        } 

        let Item = (props) => {
            return <li>{props.message}</li>
        }

        let MyComponent = () => {
            const todos = ['finish doc', 'submit pr', 'nag dan to review'];
            return (
                <ul>
                    {todos.map(message => {
                        return <Item key={message} message={message} />
                    })}
                </ul>
            )
        }

        return (
            <div>
                <h3>Expression.js(使用 JavaScript 表达式)</h3>
                <NumberDescriber number="9" />
                <h3>JavaScript 表达式</h3>
                <MyComponent />
            </div>
        )
    }
}

export default Expression;