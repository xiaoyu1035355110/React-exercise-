import React, { Component } from 'react';


class NameForm extends Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }

    handleSubmit = (e) => {
        console.log(`A name was submiited: ${this.input.value}`);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        ref={(input) =>  this.input = input } />
                    <input type="submit"
                        value="submit" />
                </form>
            </div>
        );
    }
}

export default NameForm;
