import React, { Component } from 'react';
//显示行
const ToDo = props => (
    <tr>
        <td>
            <label>{props.id}</label>
        </td>
        <td>
            <input />
        </td>
        <td>
            <label>{props.createdAt.toTimeString()}</label>
        </td>
    </tr>
)

class ToDoList extends Component {
    constructor() {
        super();

        const date = new Date();
        const toDoCounter = 1;
        this.state = {
            list: [
                {
                    id: toDoCounter,
                    createdAt: date
                }
            ],
            toDoCounter: toDoCounter
        }
    }

    //添加在头部
    addToStart = () => {
        const date = new Date();
        const nextId = this.state.toDoCounter + 1;
        const newList = [
            {
                id: nextId,
                createdAt: date
            },
            ...this.state.list
        ]

        this.setState({
            list: newList,
            toDoCounter: nextId
        })
    }

    //添加在尾部
    addToEnd = () => {
        const date = new Date();
        const nextId = this.state.toDoCounter + 1;
        const newList = [
            ...this.state.list,
            {
                id: nextId,
                createdAt: date
            }
        ]

        this.setState({
            list: newList,
            toDoCounter: nextId
        })
    }

    //最早的排序
    sortEarliest = () => {
        const sortedList = this.state.list.sort((a, b) => {
            return a.createdAt - b.createdAt
        })

        this.setState({
            list: [...sortedList]
        })
    }

    //最晚的排序
    sortLatest = () => {
        const sortedList = this.state.list.sort((a, b) => {
            return b.createdAt - a.createdAt
        })

        this.setState({
            list: [...sortedList]
        })
    }

    render() {
        return (
            <div>
                <code>key=id</code>
                <br />
                <button onClick={this.addToStart}>Add New to Start</button>
                <button onClick={this.addToEnd}>Add New to End</button>
                <button onClick={this.sortEarliest}>Sort by Earliest</button>
                <button onClick={this.sortLatest}>Sort by Latest</button>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th />
                            <th>created at</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.list.map((todo, index) => (
                                <ToDo key={todo.id} {...todo} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

class Reconciliation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ToDoList />
        )
    }
}

export default Reconciliation;