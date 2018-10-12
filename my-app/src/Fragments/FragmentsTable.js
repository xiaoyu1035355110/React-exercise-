import React, { Component } from 'react';

class Columns extends Component {
    render() {
        return (
            <React.Fragment>
                <td>1</td>
                <td>2</td>
            </React.Fragment>
        )
    }
}

class FragmentsTable extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <table>
                <thead>
                    <tr>
                        <Columns />
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>one</td>
                        <td>two</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default FragmentsTable;