import React, { Component } from 'react';

import '../styles/card.css'


class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="card">
        <div>name: {this.props.name}</div>
        <div>birthYear: {this.props.birthYear}</div>
        <div>Homeworld: {this.props.homeworld}</div>
      </div>
    );
  }
}

export default Card;
