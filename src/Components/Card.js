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
      updatedHomeworldName: '',
      hideNameInput: false,
      hideBirthYearInput: false,
      hideHairColorInput: false,
      hideHomeworldInput: false,
      nameUpdateStatus: 0,
      hairColorUpdateStatus: 0,
      birthYearUpdateStatus: 0,
      homeworldUpdateStatus: 0
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
      this.setState({updatedBirthYear: e.target.value})
    }
    handleHairColorEdit(e) {
      this.setState({updatedHairColor: e.target.value})
    }
    handleHomeworldEdit(e) {
      this.setState({updatedHomeworldName: e.target.value})
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
        api.editPerson(updatedPersonObject)
          .then( response => {
            this.setState({nameUpdateStatus: response.status})
            return response.status === 200 ? this.toggleEditNameVisibility() : null;
          })
      }
    }
    handleHairColorEditSubmission(e) {
      if( e.keyCode === 13 ) {
        let updatedPersonObject = this.props.personObject;
        updatedPersonObject['hair_color'] = this.state.updatedHairColor;
        api.editPerson(updatedPersonObject)
          .then( response => {
            this.setState({hairColorUpdateStatus: response.status})
            return response.status === 200 ? this.toggleEditHairColorVisibility() : null;
          })
      }
    }
    handleBirthYearEditSubmission(e) {
      if( e.keyCode === 13 ) {
        let updatedPersonObject = this.props.personObject;
        updatedPersonObject['birth_year'] = this.state.updatedBirthYear
        api.editPerson(updatedPersonObject)
          .then( response => {
            this.setState({birthYearUpdateStatus: response.status})
            return response.status === 200 ? this.toggleEditBirthYearVisibility() : null;
          })
      }
    }
    handleHomeworldEditSubmission(e) {
      if( e.keyCode === 13 ) {
        let updatedHomeworldObject = this.props.homeworldObject;
        updatedHomeworldObject.name = this.state.updatedHomeworldName
        api.editHomeworldName(updatedHomeworldObject)
          .then( response => {
            this.setState({homeworldUpdateStatus: response.status})
            return response.status === 200 ? this.toggleEditHomeworldVisibility() : null;

          })
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
        <p onClick={this.toggleEditBirthYearVisibility} >
          birth year: {this.state.birthYearUpdateStatus === 0 ? this.props.birthYear : this.state.birthYearUpdateStatus === 200 ? this.state.updatedBirthYear: null}</p>
          {
            this.state.hideBirthYearInput ? (
              <FormGroup>
                <FormControl
                  autoFocus
                  value={this.state.updatedBirthYear}
                  onChange={this.handleBirthYearEdit}
                  placeholder='edit Birth year here'
                  onKeyUp={this.handleBirthYearEditSubmission}
                  >
                </FormControl>
              </FormGroup>
            ) : null
          }
        <p onClick={this.toggleEditHairColorVisibility} >
          hair color: {this.state.hairColorUpdateStatus === 0 ? this.props.hairColor : this.state.hairColorUpdateStatus === 200 ? this.state.updatedHairColor: null}</p>
          {
            this.state.hideHairColorInput ? (
              <FormGroup>
                <FormControl
                  autoFocus
                  value={this.state.updatedHairColor}
                  onChange={this.handleHairColorEdit}
                  placeholder='edit hair color here'
                  onKeyUp={this.handleHairColorEditSubmission}
                  >
                </FormControl>
              </FormGroup>
            ) : null
          }
        <p onClick={this.toggleEditHomeworldVisibility} >
          homeworld: {this.state.homeworldUpdateStatus === 0 ? this.props.homeworldObject.name : this.state.homeworldUpdateStatus === 200 ? this.state.updatedHomeworldName: null}</p>
          {
            this.state.hideHomeworldInput ? (
              <FormGroup>
                <FormControl
                  autoFocus
                  value={this.state.updatedHomeworld}
                  onChange={this.handleHomeworldEdit}
                  placeholder='edit homeworld here'
                  onKeyUp={this.handleHomeworldEditSubmission}
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
