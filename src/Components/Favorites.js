import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import api from '../utils/api.js';

import '../styles/Favorites.css';

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCountUpdated: 0
    }
    this.removeStar = this.removeStar.bind(this);
    this.addStar = this.addStar.bind(this);
  }
  componentWillMount() {
    this.props.starCount ? this.setState({starCountUpdated: this.props.starCount})
    : this.setState({ starCountUpdated : 0})
  }

  removeStar() {
    let Person = this.props.personData
    Person.starCount = this.state.starCountUpdated - 1;
    api.editPerson(Person)
      .then( response => {
        this.setState({ starCountUpdated: response.data.starCount})
      })
  }

  addStar() {
    let Person = this.props.personData
    Person.starCount = this.state.starCountUpdated + 1;
    api.editPerson(Person)
      .then( response => {
        this.setState({ starCountUpdated: response.data.starCount})
      })

  }
  render() {
    return (
      <div className="FavoritesContainer">
        <Button  onClick={this.removeStar} disabled={this.props.starCount === 0}>-</Button>
        <div>Stars: {this.state.starCountUpdated}</div>
        <Button onClick={this.addStar} >+</Button>
      </div>
    )
  }
}

export default Favorites;
