import React, { Component } from 'react';
import PropTypes from 'prop-types';




class Types extends Component {
    render() {
        const children = this.props.children;
        return (
            <div>
                <h1>array: {this.props.optionalArray}</h1>
                <h1>Bool: {typeof (this.props.optionalBool)}</h1>
                <h1>Bool: {typeof (this.props.optionalFunc)}</h1>
                <h1>number: {this.props.optionalNumber}</h1>
                <h1>object: {typeof (this.props.optionalObject )}</h1>
                <h1>string: {this.props.optionalString}</h1>
                <h1>symbol: {typeof (this.props.optionalSymbol)}</h1>
            </div>
        );
    }
}

Types.propTypes = {
    optionalArray: PropTypes.array,
    optionalBool: PropTypes.bool,
    optionalFunc: PropTypes.func,
    optionalNumber: PropTypes.number,
    optionalObject: PropTypes.object,
    optionalString: PropTypes.string,
    optionalSymbol: PropTypes.symbol,
};


export default Types;
