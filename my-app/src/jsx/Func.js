import React, { Component } from 'react';

class Func extends Component {
    render() {

        let Repeat = (props) => {
            let item = [];
            for (let i = 1; i <= props.numTimes; i++) {
                item.push(props.children(i))
            }

            return <div>{item}</div>;
        }

        let ListOfTheThings = () => {
            return (
                <Repeat numTimes={10}>
                    {index => <div key={index}>This is item {index} in the list</div>}
                </Repeat>
            )
        }

        return (
            <div>
                <h3>Func.js(函数)</h3>
                <ListOfTheThings />
            </div>
        )
    }
}

export default Func;