import React, { Component } from 'react';
import Card from './Card.js'

import '../Styles/Cardholder.css';

class Cardholder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      responseObject: {}
    }
    this.renderCards = this.renderCards.bind(this);
  }

  renderCards() {
    
  }
  render() {
    return (
      <div className="Cardholder">
        <Card />
      </div>
    );
  }
}

export default Cardholder;
