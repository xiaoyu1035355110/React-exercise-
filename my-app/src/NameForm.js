import React, { Component } from 'react';

class NameForm extends Component {

    constructor (props) {
        super(props);
        this.state = {
            value: '',
            value1: 'Please write an essay about your favorite DOM element.',
            value2: 'cocount',
            isGoing: true,
            numberOfGuest: 2
        }
    }

    //input
    handlerChange = (event) => {
        this.setState({
            value: event.target.value.toUpperCase()
        })
    }

    //textarea
    handlerChange1 = (event) => {
        this.setState({
            value1: event.target.value
        })
    }

    //select
    handlerChange2 = (event) => {
        this.setState({
            value2: event.target.value
        })
    }

    handlerInputChange = (event) => {
        const tartget = event.target;
        const value = event.type === 'checkbox' ? tartget.checked : tartget.value;
        const name = event.name;

        this.setState({
            [name]: value
        })
    }

    handlerSubmit = (event) => {
        console.log('A name was submitted: ' + this.state.value);
        console.log('Textarea value was submitted: ' + this.state.value1);
        console.log('Your favorite flavor is: ' + this.state.value2);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit = { this.handlerSubmit }>
                <label>
                    Name: 
                    <input type='text'
                           value = { this.state.value }
                           onChange = { this.handlerChange }  />
                </label>
                <br/>
                <label>
                    Textarea:
                    <textarea value = { this.state.value1 }
                              onChange = { this.handlerChange1 } />
                </label>
                <br/>
                <label>
                    Pick your fovrite flavor La Croix flavor:
                    <select value = { this.state.value2 } onChange = { this.handlerChange2 }>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <br/>
                <label>
                    Is going:
                    <input name="isGoing"
                           type="checkbox"
                           checked={this.state.isGoing}
                           onChange={this.handlerInputChange} />
                </label>
                <br/>
                <label>
                    Number of guests:
                    <input name="numberOfGuest"
                           type="number"
                           value={this.state.numberOfGuest}
                           onChange={this.handlerInputChange} />
                </label>
                <input type='submit' value="Submit" />
            </form>
        )
    }
}

export default NameForm;