import React, { Component } from 'react';
import api from '../utils/api.js';
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
      hideHomeworldInput: false,
      nameUpdateStatus: 0
    }
    this.handleNameEdit = this.handleNameEdit.bind(this);
    this.handleBirthYearEdit = this.handleBirthYearEdit.bind(this);
    this.handleHairColorEdit = this.handleHairColorEdit.bind(this);
    this.handleHomeworldEdit = this.handleHomeworldEdit.bind(this);
    this.toggleEditNameVisibility = this.toggleEditNameVisibility.bind(this);
    this.toggleEditBirthYearVisibility = this.toggleEditBirthYearVisibility.bind(this);
    this.toggleEditHairColorVisibility = this.toggleEditHairColorVisibility.bind(this);
    this.toggleEditHomeworldVisibility = this.toggleEditHomeworldVisibility.bind(this);
    this.handleNameEditSubmission = this.handleNameEditSubmission.bind(this);
    this.handleHairColorEditSubmission = this.handleHairColorEditSubmission.bind(this);
    this.handleBirthYearEditSubmission = this.handleBirthYearEditSubmission.bind(this);
    this.handleHomeworldEditSubmission = this.handleHomeworldEditSubmission.bind(this);

  }
    handleNameEdit(e) {
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

    handleNameEditSubmission(e) {
      if( e.keyCode === 13 ) {
        let updatedPersonObject = this.props.personObject;
        updatedPersonObject.name = this.state.updatedName
        api.editName(updatedPersonObject)
          .then( response => {
            console.log('response in handleNameEditSubmission', response);
            response.status === 200 ? this.toggleEditNameVisibility() : null;
            this.setState({nameUpdateStatus: response.status})
          })
      }
    }
    handleHairColorEditSubmission(e) {
      if( e.keyCode === 13 ) {
        api.editHairColor()
          .then()
      }
    }
    handleBirthYearEditSubmission(e) {
      if( e.keyCode === 13 ) {
        api.editBirthYear()
          .then()
      }
    }
    handleHomeworldEditSubmission(e) {
      if( e.keyCode === 13 ) {
        api.editHomeworld()
          .then()
      }
    }
  render() {
    return (
      <div className="Card">
        <p onClick={this.toggleEditNameVisibility} >
          name: {this.state.nameUpdateStatus === 0 ? this.props.name : this.state.nameUpdateStatus === 200 ? this.state.updatedName: null}</p>
        {
          this.state.hideNameInput ? (
            <FormGroup>
              <FormControl
                autoFocus
                value={this.state.updatedName}
                onChange={this.handleNameEdit}
                onKeyUp={this.handleNameEditSubmission}
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
