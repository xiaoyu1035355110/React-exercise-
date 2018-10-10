import React, { Component } from 'react';
import NameForm from './NameForm';
import DefalutForm from './DefalutForm';
import InputFile from './InputFile';

class UncontrolledComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <InputFile />
                <hr/>
                <DefalutForm />
                <hr/>
                <NameForm />
                <img src={require('./img/1.png')} style={{width: '100px',height:'100px'}} /> 
            </div>
        );
    }
}

export default UncontrolledComponent;
