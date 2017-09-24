import React, { Component } from 'react';

import Card from './Card.js';
import '../styles/cardholder.css'



class Cardholder extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  renderCards() {
    let people = this.props.searchResponse
    return people.map((card) => {
      return (
        <Card
          key={card.id}
          personData={card}
          name={card.name}
          birthYear={card['birth_year']}
          homeworld={card.homeworld}
          />
      )
    })
  }
  render() {
    return (
      <div className="Cardholder">
        <div className='cardholdercontainer'>
          { this.props.searchResponse.length !== 0 ? this.renderCards(): (
            <div className='noContent'>
              <h3>Hi there, welcome to a Star Wars Search Engine. Go ahead and type a characteristic you want to search people by in the Star Wars Universe!</h3>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Cardholder;
