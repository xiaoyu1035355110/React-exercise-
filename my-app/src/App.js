import React, { Component } from 'react';
import Clock from './Clock';
import EventHandler from './EventHandler';
import Toggle from './Toggle';
import Greeting from './Greeting';
import LoginControl from './LoginControl';
import Page from './Page';
import NumberList from './NumberList';
import NameForm from './NameForm';
import Calculator from './Calculator';
import WelcomeDialog from './WelcomeDialog';
import SplitPane from './SplitPane';
import FilterableProductTable from './FilterableProductTable';

import './css/App.css';

class App extends Component {
  render() {
    let formatDate = (date) => {
      return date.toLocaleDateString();
    }
    
    const comment = {
      date: new Date(),
      text: 'I hope you enjoy learing react',
      author: {
        name: '解佳裕',
        avatarUrl: 'http://placekitten.com/g/64/64'
      }
    }

   

    let Avatar = (props) => {
      return (
          <img className = 'Avatar'
            src = {props.user.avatarUrl} 
            alt = {props.user.name} />
      )
    }

    let UserInfo = (props) => {
      return (
        <div className = 'Comment-userinfo'>
          <div className = 'user-head'>
            <Avatar user = {props.user} />
          </div>
          <div className = 'user-name'>
            {props.user.name}
          </div>
        </div>
      )
    }

    let Comment = (props) => {
      return (
        <div className = 'Comment'>
          <UserInfo user = {props.author} />

          <div className = 'Comment-text'>
            {props.text}
          </div>

          <div className = 'Comment-date'>
            {formatDate(props.date)}
          </div>
        </div>
      )
    }

  


   
    const numbers = [1, 2, 3, 4, 5, 6]
    let PRODUCTS = [
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
      {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
      {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
      {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
      {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
    ];
    return (

      <div>
        <FilterableProductTable products={PRODUCTS} />
        <hr/>
        <SplitPane />
        <WelcomeDialog />
        <Calculator />
        <NameForm />
        <NumberList numbers = { numbers }/>
        <Page />
        <LoginControl />
        <Greeting isLoggedIn = { false } />
        <Toggle />
        <EventHandler />
        <Comment 
          date = {comment.date} 
          text = {comment.text} 
          author = {comment.author} />

        <Clock />
        <Clock />
        <Clock />
      </div>
    );
  }
}

export default App;
