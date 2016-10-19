import React, { Component } from 'react';
import Chatbox from './Chatbox.jsx';
import MessageInput from './MessageInput.jsx';

// App component - represents the whole App
export default class App extends Component {
  getChatbox() {
    return [
      { _id: 1, text: 'Insert here your message'}
    ];
  }

  renderChatbox() {
    return this.getChatbox().map((chatbox) => (
      <Chatbox key={chatbox._id} chatbox={chatbox} />
    ));
  }

  render () {
    return (
      <div className="container">
        <header>
          <h1>ChatApp</h1>
        </header>

        <p>
          {this.renderChatbox ()}
        </p>
      </div>
    );
  }
}
