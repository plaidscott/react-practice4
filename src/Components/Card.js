import React, { Component } from 'react';
import axios from 'axios';

import '../Styles/Card.css';

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      updatedName: '',
      updatedBirthYear: '',
      updatedHairColor: '',
      updatedHomeworld: ''
    }
  }

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
