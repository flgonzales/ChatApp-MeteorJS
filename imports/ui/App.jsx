import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {createContainer} from 'meteor/react-meteor-data';

import {Messages} from '../api/messages.js';
import Chatbox from './Chatbox.jsx';
import MessageInput from './MessageInput.jsx';

// App component - represents the whole App
class App extends Component {
  handleSubmit(event) {
    event.preventDefault ();

    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Messages.insert({
      text,
      createdAt: new Date(),
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
      <footer>
        <form className="new-message" onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            ref="textInput"
            placeholder="Type your message here"
          />
        </form>
      </footer>
    </div>
  );
}
}

App.PropTypes = {
  tasks: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    messages: Messages.find().fetch(),
  };
}, App);
