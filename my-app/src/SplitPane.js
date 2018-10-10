import React, { Component } from 'react';
import './css/SplitPane.css';
class SplitPane extends Component {

    render() {
        let Contacts = () => {
            return (
                <div className="Contacts"></div>
            )
        }

        let Chat = () => {
            return (
                <div className="Chat"></div>
            )
        }

        let SplitPane = (props) => {
            return (
                <div className="SplitPane">
                    <div className="SplitPane-left">
                        {props.left}
                    </div>
                    <div className="SplitPane-right">
                        {props.right}
                    </div>
                </div>
            )
        }

        return (
            <SplitPane
                left={
                    <Contacts />
                }

                right={
                    <Chat />
                } />
        )
    }
}
export default SplitPane;