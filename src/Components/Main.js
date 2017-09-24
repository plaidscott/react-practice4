import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import api from '../utils/api.js';

import Cardholder from './Cardholder.js';
import '../styles/main.css'


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: {},
      userTextInput: '',
      searchResponse: [],
      currentPage: 1,
      responseTotalCount: 0
    }
    this.handleUserTextToSearchInput = this.handleUserTextToSearchInput.bind(this);
    this.handleSearchSubmission = this.handleSearchSubmission.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }
  componentWillMount() {
    api.test()
      .then();
  }

  handleUserTextToSearchInput(e) {
    this.setState({
      userTextInput: e.target.value
    })
  }
  handleSearchSubmission(e) {
    if(e.keyCode === 13) {
      api.searchUserInputText(this.state.userTextInput, 1)
        .then( response => {
          console.log('response in handleSearchSubmission', response);
          this.setState({
            searchResponse: response.data,
            responseTotalCount: Number(response.headers['x-total-count']),
            userTextInput: ''
          })
        })
    }
  }
  prevPage() {
    this.setState({
      currentPage: this.state.currentPage - 1
    })
  }
  nextPage() {
    this.setState({
      currentPage: this.state.currentPage + 1
    })
  }
  render() {
    console.log('this.prevProps', this.prevProps);
    return (
      <div className="Main">
        <div className="textToSearchContainer">
          <FormGroup>
            <ControlLabel>Search For any person by characteristic in the star wars universe!</ControlLabel>
            <FormControl
              autoFocus
              type='text'
              placeholder='Enter text to search here'
              value={this.state.userTextInput}
              onChange={this.handleUserTextToSearchInput}
              onKeyUp={this.handleSearchSubmission}
              >
            </FormControl>
          </FormGroup>
        </div>
        <Cardholder searchResponse={this.state.searchResponse}/>
        <div className="changePageContainer">
          <Button disabled={this.state.currentPage === 1} onClick={this.prevPage}>Previous</Button>
          <Button disabled={this.state.responseTotalCount /10 <= this.state.currentPage || this.state.responseTotalCount < 10} onClick={this.nextPage}>Next</Button>
        </div>
      </div>
    );
  }
}

export default Main;
