import React, { Component } from 'react';

class JsxElement extends Component {
    render() {

        let MyContainer = () => {
            return (
                <div>
                    <MyFirstComponent />
                    <MySecondComponent />
                </div>
            )
        }

        let MyFirstComponent = () => {
            return <div>this is first component</div>
        }

        let MySecondComponent = () => {
            return <div>this is second component</div>
        }

        let ArrayElement = () => {
            return [
                <li key="A">First Item</li>,
                <li key="B">second Item</li>,
                <li key="C">Third Item</li>
            ];
        }

        return (
            <div>
                <h3>JsxElement.js(JSX)</h3>
                <h2>组件嵌套</h2>
                <MyContainer />
                <h2>混合元素</h2>
                <div>
                    here is a list
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                    </ul>
                </div>
                <h2>数组</h2>
                <ArrayElement />
            </div>
        )
    }
}

export default JsxElement;