import React, { Component } from 'react';

let FormattedDate = (props) => {
  return (
    <h1>it is {props.date.toLocaleTimeString()}</h1>
  )
}

class Clock extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: new Date() 
    };
  }

  componentDidMount() {
    this.timerHandler = setInterval(() => {
        this.setState({
          date: new Date()
        })
    }, 1000)
  }

  componentWillUnmount() {
    if (this.timerHandler) {
      clearInterval(this.timerHandler);
    }
  }

  render (){
    return (
      <div>
          <h1>hello, world</h1>
          <FormattedDate date = { this.state.date } />
      </div> 
    );
  }
}

export default Clock;