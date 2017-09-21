import React, { Component } from 'react';

import '../Styles/Card.css';

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <p>name: {this.props.name}</p>
      </div>
    );
  }
}

export default Card;
