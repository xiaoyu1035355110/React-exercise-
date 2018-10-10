import React, { Component } from 'react';
class EventHandler extends Component {
    
    handleClick = (e) => {
        e.preventDefault();
        console.log('The link was clicked.')
    }

    render() {
        return(
            <a href="#" onClick = { this.handleClick }>
                click me
            </a>
        )
    }
}
export default EventHandler;