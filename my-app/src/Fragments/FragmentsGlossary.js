import React, { Component } from 'react';
class Glossary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    id: 1,
                    name: 'javascript',
                    as: 'js'
                },
                {
                    id: 2,
                    name: 'typescript',
                    as: 'ts'
                }
            ]
        }
    }
    render() {
        return (
            <dl>
                {this.state.items.map(item => (
                    <React.Fragment key={item.id}>
                        <dt>{item.as}</dt>
                        <dd>{item.name}</dd>
                    </React.Fragment>
                ))}
            </dl>
        )
    }
}

class FragmentsGlossary extends Component {
   

    render() {
        return (
            <div>
                <Glossary  />
            </div>
        )
    }
}

export default FragmentsGlossary;