import React, { Component } from 'react';
import Card from './Card.js'

import '../Styles/Cardholder.css';

class Cardholder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      responseArray: [{name: 'scott'}],
      cards: [ <Card />, <Card/>]
    }
    this.renderCards = this.renderCards.bind(this);
  }

  renderCards() {
    return this.props.responseArray.map( (person, index) => {
      return (
        <Card key={index} name={person.name}/>
      );
    })
  }
  render() {
    console.log('this.props in cardholder', this.props)
    return (
      <div className="Cardholder">
        {this.renderCards()}
      </div>
    );
  }
}

export default Cardholder;
