import React, { Component } from 'react';

import '../Styles/Card.css';

class Card extends Component {

  render() {
    return (
      <div className="Card">
        <p>name: {this.props.name}</p>
        <p>birth year: {this.props.birthYear}</p>
        <p>hair color: {this.props.hairColor}</p>
        <p>homeworld: {this.props.homeworld}</p>
      </div>
    );
  }
}

export default Card;
