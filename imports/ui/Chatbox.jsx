import React, { Component, PropTypes } from 'react';

import {Messages} from '../api/messages.js';

 import MessageInput from './MessageInput.jsx';

 // Chatbox component - represents the sum of all Messages
 export default class Chatbox extends Component {

  render() {
    // Give a different className after been read so it can be styled easily in CSS
    const taskClassName = this.prop.task.checked ? 'checked' : '';

    return (
      <div>
        <span className="text">
          <strong>{this.props.message.username}</strong>: {this.props.message.text}</span>
      </div>
    );
  }
}



Chatbox.propTypes = {
  chatbox: PropTypes.object.isRequired,
};
// Message.PropTypes = {
//   message: PropTypes.object.isRequired,
// };
