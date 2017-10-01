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
      previousTextInput: '',
      searchResponse: [],
      currentPage: 1,
      responseTotalCount: 0,
      responsePlanets: [],
      favCurrentPage: 1,
      favPageVisibility: false
    }
    this.getPlanetList = this.getPlanetList.bind(this);
    this.handleUserTextToSearchInput = this.handleUserTextToSearchInput.bind(this);
    this.handleSearchSubmission = this.handleSearchSubmission.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevFavPage = this.prevFavPage.bind(this);
    this.nextFavPage = this.nextFavPage.bind(this);
    this.handlePageChangeSearch = this.handlePageChangeSearch.bind(this);
    this.favPageButton = this.favPageButton.bind(this);
    this.hoistFavPageVisibility = this.hoistFavPageVisibility.bind(this);
  }
  componentWillMount() {
    this.getPlanetList();
  }
  getPlanetList() {
    api.getPlanetList()
      .then( response => {
        this.setState({
          responsePlanets: response
        })
      })
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
          this.setState({
            searchResponse: response.data,
            responseTotalCount: Number(response.headers['x-total-count']),
            previousTextInput: this.state.userTextInput,
            userTextInput: ''
          })
        })
    }
  }
  handlePageChangeSearch(newPageNumber) {
    api.searchUserInputText(this.state.previousTextInput, newPageNumber)
      .then( response => {
        this.setState({
          searchResponse: response.data,
          responseTotalCount: Number(response.headers['x-total-count']),
          userTextInput: ''
        })
      })
  }
  prevPage() {
    this.setState({
      currentPage: this.state.currentPage - 1
    })
    this.handlePageChangeSearch(this.state.currentPage -1)
  }
  nextPage() {
    this.setState({
      currentPage: this.state.currentPage + 1
    })
    this.handlePageChangeSearch(this.state.currentPage +1)
  }
  prevFavPage() {
    this.setState({
      favCurrentPage: this.state.favCurrentPage - 1
    })
  }
  nextFavPage() {
    this.setState({
      favCurrentPage: this.state.favCurrentPage + 1
    })
  }
  favPageButton() {}

  hoistFavPageVisibility(favPageVisibility) {
    this.setState({favPageVisibility: !this.state.favPageVisibility})
  }
  render() {
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
        <Cardholder
          searchResponse={this.state.searchResponse}
          responsePlanets={this.state.responsePlanets}
          currentPage={this.state.currentPage}
          favCurrentPage={this.state.favCurrentPage}
          hoistFavPageVisibility = {this.hoistFavPageVisibility}
          />
        { this.state.favPageVisibility ? (
          <div className="changePageContainer">
            <Button
              onClick={this.prevFavPage}
              disabled={this.state.favCurrentPage === 1}>
              button for favPage
            </Button>
            <Button
              onClick={this.nextFavPage}
              disabled={this.state.favResponseTotalCount /10 <= this.state.favCurrentPage || this.state.favResponseTotalCount < 10}>
              button for favPage
            </Button>
          </div>
        ) : (
          <div className="changePageContainer">
            <Button
              disabled={this.state.currentPage === 1}
              onClick={this.prevPage}>
              Previous
            </Button>
            <Button
              disabled={this.state.responseTotalCount /10 <= this.state.currentPage || this.state.responseTotalCount < 10}
              onClick={this.nextPage}>
              Next
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default Main;
