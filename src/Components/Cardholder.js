import React, { Component } from 'react';

import Card from './Card.js';
import '../styles/cardholder.css'



class Cardholder extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.renderCards = this.renderCards.bind(this);
    this.findPlanet = this.findPlanet.bind(this);
  }
  renderCards() {
    let people = this.props.searchResponse;
    return people.map((card) => {
      let homeworldName = this.findPlanet(card.homeworld)
      return (
        <Card
          key={card.id}
          personData={card}
          name={card.name}
          birthYear={card['birth_year']}
          homeworld={homeworldName}
          responsePlanets={this.props.responsePlanets}
          />
      )
    })
  }
  findPlanet(planetURL) {
      let planetArray = this.props.responsePlanets.filter( (planet) => {
        return planet.url === planetURL;
      })
      return planetArray.length === 1 ? planetArray[0].name : 'unkown';
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
