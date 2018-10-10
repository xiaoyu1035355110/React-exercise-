import React, { Component } from 'react';

class Capitalize extends Component {
    render() {
        let Hello = (props) => {
            return <div>Hello {props.toWhat}.</div>
        }

        let HelloWorld = () => {
            return (
                <Hello toWhat="World" />
            )
        }

        return (
            <div>
                <h3>Capitalize.js(首字母大写)</h3>
               <HelloWorld />
            </div>
        )
    }
}

export default Capitalize;