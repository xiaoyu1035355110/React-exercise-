import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Types from'./Types';

class PropTypesIndex extends Component {
  render() {
    const PropTypesObj = {
      //array
      optionalArray:  [1, 2, 3],
      //bool
      optionalBool: false,
      //function
      optionalFunc: () => console.log(1),
      //number
      optionalNumber: 1,
      //object
      optionalObject: {firstName: "xie", lastName: "jiayu"},
      //string
      optionalString: 'jiayu',
      //Symbol
      optionalSymbol: Symbol('Xiejiayu'),
    }
    return (
      <div>
          <Types {...PropTypesObj} />
      </div>
    );
  }
}

export default PropTypesIndex;

