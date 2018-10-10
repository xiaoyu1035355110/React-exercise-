import React, { Component } from 'react';
class Toggle extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            name: 'hello world'
        }

        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick() {
        console.log(this)
        this.setState(prevState  => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    handlerClick1 = () => {
        console.log(this)
    }

    handlerClick2() {
        console.log(this)
    }

    preventPop = (name, e) => {
        e.preventDefault();
        alert(name);
    }


    render() {
        return (
           <div>
                <button onClick = { this.handlerClick }>Toggle({this.state.isToggleOn ? 'on' : 'off'})</button>
                <button onClick = { this.handlerClick1 }>button1</button>
                <button onClick = { (e) => this.handlerClick2(e) }>button2</button>
                <a href="https://reactjs.org" onClick={this.preventPop.bind(this,this.state.name)}>Click</a>
           </div>
        )
    }
}
export default Toggle;