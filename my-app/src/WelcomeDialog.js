import React, { Component } from 'react';

import './css/WelcomeDialog.css';

let Dialog = (props) => {
    return (
        <FancyBorder color="red">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>

            {props.children}
        </FancyBorder>
    )
}

let FancyBorder = (props) => {
    return (
        <div className={"FancyBorder FancyBorder-" + props.color}>
            {props.children}
        </div>
    )
}

class WelcomeDialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            login: event.target.value
        })
    }

    handleSignUp = () => {
        alert(`welcome aboard: ${this.state.login}`);
    }

    render() {
        return (
            <Dialog
                title="Mars Exploration Program"
                message="How should we refer to you?">
                <input
                    value={this.state.login}
                    onChange={this.handleChange} />
                <input type="button" onClick={this.handleSignUp} value="Sign Me Up" />

            </Dialog>
        )
    }
}

export default WelcomeDialog;