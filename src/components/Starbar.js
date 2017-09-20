import React, { Component } from 'react';

import Star from './Star';

class Starbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
    };
  }

  handleSelection(ev, idx) {
    this.setState ({
      rating: idx + 1,
    });
  }

  render() {
    const star = this.state.rating;

    let stars = [];
    for(let i = 0; i < 5; i++) {
      stars.push(
        <Star key={i}
        fill={star > i}
        onMouseOver={ event => this.handleSelection(event, i)}
        onClick={event => this.handleSelection(event, i)}/>
      );
    }

    return (
      <div>
        {stars}
        <p>Rating: {this.state.rating}</p>
      </div>
    )
  }
}

export default Starbar;
