import React, { Component } from 'react';


class Refs1 extends Component {
    constructor(props) {
        super(props);
        this.textInput = null;

    }

    setTextInputRef = element => {
        element.value = 123;
        this.textInput = element;
    }
    focusTextInput = () => {
        if (this.textInput) this.textInput.focus();
    }

    componentDidMount() {
        this.focusTextInput();
    }

    render() {

        return (

            <div>
                <input type="text"
                    ref={this.setTextInputRef} />
                <input type="button"
                    value={'Focus the text input'}
                    onClick={this.focusTextInput} />
            </div>
        );
    }
}

export default Refs1;
