import React from 'react';
import AppBar from './app-bar';

class Header extends React.Component {
  render () {
    return (
      <AppBar title={this.props.appName} />
    );
  }
}
export default Header;
