import React, { Component } from 'react';
import DotNotation from './DotNotation';
import Capitalize from './Capitalize';
import Expression from './Expression';
import ExtendedAttributes from './ExtendedAttributes';
import JsxElement from './JsxElement';
import Func from './Func';
import RenderElement from './RenderElement';

class Jsx extends Component {
  render() {

    return (

      <div>
        <RenderElement />
        <hr/>
        <Func />
        <hr/>
        <JsxElement />
        <hr/>
        <ExtendedAttributes />
        <hr/>
        <Expression />
        <hr/>
        <Capitalize />
        <hr/>
        <DotNotation />
      </div>
    );
  }
}

export default Jsx;
