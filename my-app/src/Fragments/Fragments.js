import React, { Component } from 'react';
import FragmentsTable from './FragmentsTable';
import FragmentsGlossary from './FragmentsGlossary';

class Fragments extends Component {
    render() {
        return (
            <div>
                <h3>Fragments</h3>
                <FragmentsTable />
                <h3>带 key 的 Fragments</h3>
                <FragmentsGlossary />
            </div>
        )
    }
}

export default Fragments;