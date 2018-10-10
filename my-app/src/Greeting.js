import React, { Component } from 'react';

class Greeting extends Component {

    constructor (props) {
        super(props);

       this.state = { 
           
       };
    }

    render() {
        const message = ['React', 'Re: React', 'Re:Re: React'];
        let isLoggedIn = this.props.isLoggedIn;

        let UserGreeting = () => {
            return (
                <div>welcome back</div>
            )
        }
    
        let GuestGreeting = () => {
            return (
                <div>Please sign up</div>
            )
        }

        let MailBox = (props) => {
            const unreadMessage = props.unreadMessage;

            return (
                <div>
                    <h1>hello</h1>
                    {unreadMessage.length > 0 && 
                        <h2>
                            You have { unreadMessage.length } unread message.
                        </h2>
                    }
                </div>
            )
        }

        if (isLoggedIn) {
            return (
                <div>
                    <UserGreeting />
                    <MailBox unreadMessage = { message } />
                    <div>
                        The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
                    </div>
                </div>
            )
        }

        return (
            <GuestGreeting />
        )
    }
}

export default Greeting;