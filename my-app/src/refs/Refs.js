import React, { Component } from 'react';
import Refs1 from './Refs1';


class Refs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: ''
    }
  }

  componentDidMount() {
    this.refs.myInput.focus();
  }

  handleChange = (e) => {
    this.setState({
      userInput: e.target.value
    })
  }

  clearAndFoucsInput = (e) => {
    this.setState({
      userInput: ''
    })
    const myInput = this.refs.myInput;
    if (myInput !== null) {
      myInput.focus();
    }
  }


  render() {

    return (

      <div>
        <input type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
          ref={'myInput'} />
        <input type="button"
          value={'Reset And Foucs'}
          onClick={this.clearAndFoucsInput} />
        <hr/>
        <input type="text"
               ref={(input) => {
                input.focus()
               }}  />
        <hr/>
        <Refs1 />
      </div>
    );
  }
}

export default Refs;
