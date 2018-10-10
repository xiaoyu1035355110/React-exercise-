import React, { Component } from 'react';


class DefalutForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'xiejiayu',
            isShow: true
        }
        this.input = React.createRef();
    }

    handleSubmit = (e) => {
        console.log(`A name was submiited: ${this.input.value}`);
        e.preventDefault();
    }

    handleChange = (e) => {
        console.log(e.target.checked)
        this.setState({
            isShow: e.target.checked
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        defaultValue={this.state.name}
                        type="text"
                        ref={(input) =>  this.input = input } />
                        
                    <label>
                        <input type="checkbox"
                           defaultChecked={this.state.isShow}
                           onChange={this.handleChange}  />
                        {this.state.isShow ? '显示' : '隐藏'}
                    </label>
                    <input type="submit"
                        value="submit" />
                </form>
            </div>
        );
    }
}

export default DefalutForm;
