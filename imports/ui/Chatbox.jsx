import React, { Component, PropTypes } from 'react';

// import MessageInput from './MessageInput.jsx';

// Chatbox component - represents the sum of all Messages
// export default class Chatbox extends Component {
//   render() {
//     return (
//       <div>
//         <li>{this.props.message.text}</li>
//       </div>
//     );
//   }
// }

// Test
export default class Chatbox extends Component {
  render() {
    return (
      <li> {this.props.chatbox.text}</li>
    );

  }
}

Chatbox.propTypes = {
  chatbox: PropTypes.object.isRequired,
};
// Message.PropTypes = {
//   message: PropTypes.object.isRequired,
// };
