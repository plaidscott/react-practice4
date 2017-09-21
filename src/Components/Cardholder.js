import React, { Component } from 'react';
import Card from './Card.js'

import '../Styles/Cardholder.css';

class Cardholder extends Component {
  render() {
    return (
      <div className="Cardholder">
        <h1>hi there from Cardholder</h1>
        <Card />
      </div>
    );
  }
}

export default Cardholder;
