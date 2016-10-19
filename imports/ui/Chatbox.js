import React, { Component, PropTypes } from 'react';

import Message from './Message.js';

// Chatbox component - represents the sum of all Messages
export default clas Chatbox extends Component {
  render() {
    return {
      <li>{this.props.message.text}</li>
    };
  }
}

Message.PropTypes = {
  message: PropTypes.object.isRequired,
};
