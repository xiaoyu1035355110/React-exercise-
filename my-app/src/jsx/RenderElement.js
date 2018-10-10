import React, { Component } from 'react';

class RenderElement extends Component {
    render() {

        const showHeader = true;
        const myVariable = false;

        let Header = () => {
            return (
                <div>Header content</div>
            )
        }

        let Message = (props) => {
            return (
                <div>list a length is {props.list.length}</div>
            )
        }

        let MessageList = () => {
            let list = ['first'];
            return (
                <div>{list.length > 0 && <Message list={list} />}</div>
            )
        }

        return (
            <div>
                <h3>RenderElement.js(布尔值、Null 和 Undefined 被忽略)</h3>
                <div />
                <div></div>
                <div>{false}</div>
                <div>{null}</div>
                <div>{undefined}</div>
                <div>{true}</div>

                <h3>false、true、null 或 undefined 输出</h3>
                <div>My JavaScript variable is {String(myVariable)}.</div>

                <h3>showHeader为true时渲染Header组件</h3>
                {showHeader && <Header />}

                <h3>“falsy” 值</h3>
                <MessageList />
            </div>
        )
    }
}

export default RenderElement;