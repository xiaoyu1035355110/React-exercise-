import React, { Component } from 'react';
import Greeting from './Greeting';

class LoginControl extends Component {
    constructor (props) {
        super(props);

        this.state = {
            isLoggedIn: false
        }
    }

    

    handlerLoginClick = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    handlerLogoutClick = () => {
        this.setState({
            isLoggedIn: false
        })
    }

    render() {

        let LoginButton = (props) => {
            return (
                <button onClick = { props.onClick }>
                    login
                </button>
            )
        }

        let LogoutButton = (props) => {
            return (
                <button onClick = { props.onClick }>
                    logout
                </button>
            )
        }

        const isLoggedIn = this.state.isLoggedIn;
        let button = null;

        if (isLoggedIn) {
            button = <LogoutButton onClick = { this.handlerLogoutClick } />
        } else {
            button = <LoginButton onClick = { this.handlerLoginClick } />
        }
        
        return (
            <div>
                <Greeting isLoggedIn = { isLoggedIn } />
                {button}
            </div>
        )
    }
}

export default LoginControl;