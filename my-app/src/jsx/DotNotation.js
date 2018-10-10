import React, { Component } from 'react';

class DotNotation extends Component {
    render() {
        const MyComponents = {
            DatePicker: function DatePicker(props) {
                return <div>Imaging a {props.color} datepicker here.</div>
            }
        }

        return (
            <div>
                <h3>DotNotation.js(点表示法)</h3>
                <MyComponents.DatePicker color="red" />
            </div>
        )
    }
}

export default DotNotation;