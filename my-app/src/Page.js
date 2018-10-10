import React, { Component } from 'react';

class Page extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showWarning: true
        }
    }

    handleToggleClick = () => {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }))
    }

    render() {
        
        let WarningBanner = (porps) => {
            if (!porps.warn) {
                return null;
            }

            return (
                <div className = "warning">
                    Warning!
                </div>
            )
        }

        return (
            <div>
                <WarningBanner warn = { this.state.showWarning } />
                <button onClick = { this.handleToggleClick }>
                    { this.state.showWarning ? 'Hide' : 'Show' }
                </button>
            </div>
        )
    }
}

export default Page;