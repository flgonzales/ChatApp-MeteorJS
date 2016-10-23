import React from 'react';
import _ from 'lodash';
import ColorSet from '../styles/ColorSets';
import Fonts from '../styles/Fonts';

class AppBar extends React.Component {
  constructor(props) {
    super(props);

    this.baseStyle = _.merge({
      backgroundColor: ColorSet.primary,
      color: ColorSet.lightGrey,
      fontFamily: Fonts.sansSerif,
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      margin: 0,
      padding: "5px 10px",
      boxShadow: "1px 1px 5px rgba(0,0,0,0.3)",
    }, props.style || {});

    this.headerStyle = _.merge({
      color: "#fff",
    }, this.props.headerStyle || {});
  }

  render () {
    return (
      <div style={this.baseStyle}>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}


export default AppBar;
