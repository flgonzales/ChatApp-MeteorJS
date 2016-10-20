import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';

import {Messages} from '../api/messages.js';
import Chatbox from './Chatbox.jsx';
import MessageInput from './MessageInput.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

// App component - represents the whole App
class App extends Component {
  handleSubmit(event) {
    event.preventDefault ();

    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Messages.insert({
      text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });

    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  renderMessages(){
    return this.props.messages.map((message) => (
      <Message key={message._id} message={message} />
    ));
  }

render() {
  return (
    <div className="container">
      <header>
        <h1>ChatApp</h1>
      </header>

        <ul>
          {this.renderMessages()}
        </ul>


        <AccountsUIWrapper />
        {this.props.currentUser ?
          <form className="new-message" onSubmit={this.handleSubmit.bind(this)}>
            <input
              type="text"
              ref="textInput"
              placeholder="Type your message here"
            />
        </form> : ''
      }
      
    </div>
  );
}
}

App.PropTypes = {
  tasks: PropTypes.array.isRequired,
  incompleteCount: PropTypes.number.isRequired,
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  return {
    messages: Messages.find().fetch(),
    currentUser: Meteor.user(),
  };
}, App);
