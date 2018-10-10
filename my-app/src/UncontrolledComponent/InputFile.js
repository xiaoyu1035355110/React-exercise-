import React, { Component } from 'react';


class InputFile extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        console.log(`Selected file - ${this.fileInput.files[0].name}`);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="file"
                        ref={input => this.fileInput = input } />
                    <input type="submit"
                        value="submit" />
                </form>
            </div>
        );
    }
}

export default InputFile;
