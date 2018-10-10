import React, { Component } from 'react';

class NumberList extends Component {
    render() {
        let ListItem = (props) => {
            return (
                <li>{ props.value }</li>
            )
        }

        const numbers = this.props.numbers;
        const listItems = numbers.map((number, index) => 
           <ListItem 
                key = { index } 
                value = { number } />
        );


        let Blog = (props) => {
            const sidebar = (
                <ul>
                    {props.posts.map((post) => 
                            <li key = { post.id }>
                            { post.title }
                        </li>
                    )}
                </ul>
            )

            const content = props.posts.map((post) => 
                <div key = { post.id } id = { post.id }>
                    <h3>{ post.title }</h3>
                    <div>{ post.content }</div>
                </div>
            )

            return (
                <div>
                    { sidebar }
                    <br/>
                    { content }

                    <ul>
                        { numbers.map((number, index) => 
                            <ListItem 
                                key = { index } 
                                value = { number } />
                        )}
                    </ul>
                </div>
            )
        }

        
        const posts = [
            { id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
            { id: 2, title: 'Installation', content: 'You can install React form npm'},
        ]

        return (
            <div>
                <ul>{ listItems }</ul>
                <Blog posts = { posts } />
            </div>
        )
    }
}

export default NumberList;