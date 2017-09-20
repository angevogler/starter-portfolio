import React, { Component } from 'react';

class Star extends Component {

  render() {
    if (this.props.fill) {
      return (
        <span onMouseOver={() => this.props.onMouseOver()}
          onClick={this.props.onClick}>&#9733;</span>
      );
    } else {
      return (
        <span onMouseOver={() => this.props.onMouseOver()}
          onClick={this.props.onClick}>&#9734;</span>
      );
    }
  }
}

export default Star;
