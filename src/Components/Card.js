import React, { Component } from 'react';
import {FormGroup, FormControl, Button} from 'react-bootstrap';
import api from '../utils/api.js';

import '../styles/card.css'


class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editDisplay: false,
      newName: '',
      newBirthYear: '',
      newHomeworld: '',
      editedPersonResponseObject: {}
    }
    this.editDisplayVisibility = this.editDisplayVisibility.bind(this);
    this.handleEditPerson = this.handleEditPerson.bind(this);
    this.handleNewNameInput = this.handleNewNameInput.bind(this);
    this.handleNewBirthYearInput = this.handleNewBirthYearInput.bind(this);
    this.handleNewHomeworldInput = this.handleNewHomeworldInput.bind(this);
  }

  editDisplayVisibility() {
    this.setState({ editDisplay: !this.state.editDisplay})
  }

  handleEditPerson(e) {
    console.log('this.personData', this.props.personData);
    let personObject = this.props.personData;
    this.state.newName.length > 0 ? personObject.name = this.state.newName : null
    this.state.newBirthYear.length > 0 ? personObject['birth_year'] = this.state.newBirthYear : null
    this.state.newHomeworld.length > 0 ? (
      api.editHomeworldName(this.state.newHomeworldName)
        .then( response => {
          console.log('response in editHomeworldName', response);
        })
    ) : null
    api.editPerson(personObject)
      .then( response => {
        console.log('response.data in editPerson in Card', response.data);
        this.setState({ editedPersonResponseObject: response.data})
      })
    }

  handleNewNameInput(e) {
    this.setState({newName: e.target.value})
  }

  handleNewBirthYearInput(e) {
    this.setState({newBirthYear: e.target.value})
  }

  handleNewHomeworldInput(e) {
    this.setState({newHomeworld: e.target.value})
  }




  render() {
    return (
      <div className="card">
        <div onClick={this.editDisplayVisibility}>
          name: {this.state.editedPersonResponseObject.name ? this.state.editedPersonResponseObject.name: this.props.name}
        </div>
          {this.state.editDisplay
            ? (
              <FormGroup>
                <FormControl
                  type="text"
                  placeholder="Enter new name"
                  value={this.state.newName}
                  onChange={this.handleNewNameInput}
                  >
                </FormControl>
              </FormGroup>
            ) : null
          }
          <div onClick={this.editDisplayVisibility}>
            Birth Year: {this.state.editedPersonResponseObject['birth_year'] ? this.state.editedPersonResponseObject['birth_year']: this.props.birthYear}
          </div>
          {this.state.editDisplay
            ? (
              <FormGroup>
                <FormControl
                  type="text"
                  placeholder="Enter new birth year"
                  value={this.state.newBirthYear}
                  onChange={this.handleNewBirthYearInput}
                  >
                </FormControl>
              </FormGroup>
            ) : null
          }
          <div onClick={this.editDisplayVisibility}>
            Homeworld: {this.props.homeworld}
          </div>
          {this.state.editDisplay
            ? (
              <FormGroup>
                <FormControl
                  type="text"
                  placeholder="Enter new homeworld"
                  value={this.state.newHomeworld}
                  onChange={this.handleNewHomeworldInput}
                  >
                </FormControl>
                <Button onClick={this.handleEditPerson}> Submit Changes</Button>
              </FormGroup>

            ) : null

          }

      </div>
    );
  }
}

export default Card;
