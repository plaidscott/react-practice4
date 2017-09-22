import React, { Component } from 'react';
import Card from './Card.js'
import {Button} from 'react-bootstrap';

import '../Styles/Cardholder.css';

class Cardholder extends Component {
  constructor(props) {
    super(props);

    this.renderCards = this.renderCards.bind(this);
    this.handlePreviousPageClick = this.handlePreviousPageClick.bind(this);
    this.handleNextPageClick = this.handleNextPageClick.bind(this);
    this.findHomeworld = this.findHomeworld.bind(this);
  }

  renderCards() {
    console.log('this.props.responseArray', this.props.responseArray);
    let people = this.props.responseArray
    return people.map( (person, index) => {
      let homeworldName = this.findHomeworld(person.homeworld)
      console.log('homeworldName in renderCards', homeworldName);
      return (
        <Card
          key={index}
          name={person.name}
          birthYear={person['birth_year']}
          hairColor={person['hair_color']}
          homeworld={homeworldName}
          />
      );
    })
  }
  findHomeworld(homeworldURL) {
    var planetObject = this.props.planets.filter((planet) => {
      return planet.url === homeworldURL;
    });
    return (planetObject.length !== 0 ? planetObject[0].name : 'unkown')
  }

  handlePreviousPageClick() {
    this.props.changePage(-1);
  }

  handleNextPageClick() {
    this.props.changePage(1);
  }


  render() {
    return (
      <div className="cardholderContainer">
        <div className="Cardholder">
          {this.renderCards()}
        </div>
        <div className="pageChangeButtonsContainer">
          <Button bsStyle='primary' disabled={ this.props.currentPage === 1} onClick={this.handlePreviousPageClick}>previous page</Button>
          <Button bsStyle='primary' disabled={ this.props.totalPersons / 10 < this.props.currentPage}onClick={this.handleNextPageClick}>next page</Button>
        </div>
      </div>
    );
  }
}

export default Cardholder;
