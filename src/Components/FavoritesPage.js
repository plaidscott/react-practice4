import React, {Component} from 'react';
// import {Button} from 'react-bootstrap';
import api from '../utils/api.js';

import '../styles/FavoritesPage.css';

class FavoritesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfFavoritedPeople: [],
      processedFavoritePeople: []
    }
    this.getFavoritedPeople = this.getFavoritedPeople.bind(this);
    this.renderFavoritePeopleCards = this.renderFavoritePeopleCards.bind(this);
  }
  componentWillMount() {
    this.getFavoritedPeople(1);
  }
  componentWillUpdate(nextProps, nextState) {
    this.props.favCurrentPage !== nextProps.favCurrentPage ? this.getFavoritedPeople(nextProps.favCurrentPage)
    : null
  }
  getFavoritedPeople(currentPage) {
    api.favoritePeople(currentPage)
      .then( response => {
        this.setState({ listOfFavoritedPeople: response.data})
        this.renderFavoritePeopleCards(response.data);

      })
  }
  renderFavoritePeopleCards(people) {
    let favPeople = people.map( person => {
      return (
        <div key={person.id} className="favCard">
          <p> name: {person.name}</p>
          <p> starCount: {person.starCount}</p>
        </div>
      )
    })
    this.setState({ processedFavoritePeople: favPeople})
  }

  render() {
    return (
      <div className="FavoritesPageContainer">
        {this.state.processedFavoritePeople}
      </div>
    )
  }
}

export default FavoritesPage;
