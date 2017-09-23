import React, { Component } from 'react';
import axios from 'axios';
import {FormGroup, FormControl} from 'react-bootstrap';

import '../Styles/Card.css';

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      updatedName: '',
      updatedBirthYear: '',
      updatedHairColor: '',
      updatedHomeworld: '',
      hideNameInput: false,
      hideBirthYearInput: false,
      hideHairColorInput: false,
      hideHomeworldInput: false
    }
    this.handleNameEdit = this.handleNameEdit.bind(this);
    this.handleBirthYearEdit = this.handleBirthYearEdit.bind(this);
    this.handleHairColorEdit = this.handleHairColorEdit.bind(this);
    this.handleHomeworldEdit = this.handleHomeworldEdit.bind(this);
    this.toggleEditNameVisibility = this.toggleEditNameVisibility.bind(this);
    this.toggleEditBirthYearVisibility = this.toggleEditBirthYearVisibility.bind(this);
    this.toggleEditHairColorVisibility = this.toggleEditHairColorVisibility.bind(this);
    this.toggleEditHomeworldVisibility = this.toggleEditHomeworldVisibility.bind(this);
    this.handleEditEnter = this.handleEditEnter.bind(this);

  }
    handleNameEdit(e) {
      console.log('handleNameEdit in Card e.target.value', e.target.value);
      this.setState({updatedName: e.target.value})
    }
    handleBirthYearEdit(e) {
      console.log('handleBirthYearEdit in Card e.target.value', e.target.value);
      this.setState({updatedBirthYear: e.target.value})
    }
    handleHairColorEdit(e) {
      console.log('handleHairColorEdit in Card e.target.value', e.target.value);
      this.setState({updatedHairColor: e.target.value})
    }
    handleHomeworldEdit(e) {
      console.log('handleHomeworldEdit in Card e.target.value', e.target.value);
      this.setState({updatedHomeworld: e.target.value})
    }

    toggleEditNameVisibility(e) {
      this.setState({ hideNameInput: !this.state.hideNameInput});
    }
    toggleEditBirthYearVisibility(e) {
      this.setState({ hideBirthYearInput: !this.state.hideBirthYearInput});
    }
    toggleEditHairColorVisibility(e) {
      this.setState({ hideHairColorInput: !this.state.hideHairColorInput});
    }
    toggleEditHomeworldVisibility(e) {
      this.setState({ hideHomeworldInput: !this.state.hideHomeworldInput});
    }

    handleEditEnter(e) {

    }
  render() {
    return (
      <div className="Card">
        <p onClick={this.toggleEditNameVisibility} >name: {this.props.name}</p>
        {
          this.state.hideNameInput ? (
            <FormGroup>
              <FormControl
                autoFocus
                value={this.state.updatedName}
                onChange={this.handleNameEdit}
                placeholder='edit name here'
                >
              </FormControl>
            </FormGroup>
          ) : null
        }
        <p onClick={this.toggleEditBirthYearVisibility} >birth year: {this.props.birthYear}</p>
          {
            this.state.hideBirthYearInput ? (
              <FormGroup>
                <FormControl
                  autoFocus
                  value={this.state.updatedBirthYear}
                  onChange={this.handleBirthYearEdit}
                  placeholder='edit Birth year here'
                  >
                </FormControl>
              </FormGroup>
            ) : null
          }
        <p onClick={this.toggleEditHairColorVisibility} >hair color: {this.props.hairColor}</p>
          {
            this.state.hideHairColorInput ? (
              <FormGroup>
                <FormControl
                  autoFocus
                  value={this.state.updatedHairColor}
                  onChange={this.handleHairColorEdit}
                  placeholder='edit hair color here'
                  >
                </FormControl>
              </FormGroup>
            ) : null
          }
        <p onClick={this.toggleEditHomeworldVisibility} >homeworld: {this.props.homeworld}</p>
          {
            this.state.hideHomeworldInput ? (
              <FormGroup>
                <FormControl
                  autoFocus
                  value={this.state.updatedHomeworld}
                  onChange={this.handleHomeworldEdit}
                  placeholder='edit homeworld here'
                  >
                </FormControl>
              </FormGroup>
            ) : null
          }
      </div>
    );
  }
}

export default Card;
