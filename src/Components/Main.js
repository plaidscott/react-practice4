import React, { Component } from 'react';
import Cardholder from './Cardholder.js';
import api from '../utils/api.js';

import { FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import '../Styles/Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previousSearchInput: '',
      searchInput: '',
      peoplesResponse: [],
      planets: [],
      currentPage: 1,
      totalPersons: 0,
      stillReadingInitalData: true
    }
    this.initialData = this.initialData.bind(this);
    this.handleChangeSearchInput = this.handleChangeSearchInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.changePage = this.changePage.bind(this);
    this.initialPlanetList = this.initialPlanetList.bind(this);
  }
  componentWillMount() {
    // this.initialData(this.state.currentPage);
    this.initialPlanetList();
  }
  initialData(currentPage) {
    api.initialData(currentPage)
      .then( response  => {
        this.setState({
          peoplesResponse: response.data,
          totalPersons: response.headers['x-total-count']

        })
      })
  }

  initialPlanetList() {
    api.requestPlanetList()
      .then( response => {
        this.setState({
          planets: response
        })
      })
  }

  handleChangeSearchInput(e) {
    this.setState({ searchInput: e.target.value});
  }
  handleSearch(e) {
    e.preventDefault();
    if(e.keyCode === 13) {
      this.setState({currentPage: 1})
      api.search(this.state.searchInput, 1)
        .then( response => {
          console.log('response in handleSearch', response);
          this.setState({
            peoplesResponse: response.data,
            totalPersons: response.headers['x-total-count']
          })
        })
      this.setState({
        previousSearchInput: this.state.searchInput,
        searchInput: ''
      })
    }
  }
  handlePageChangeSearch(incrementNumber) {
    console.log(this.state.currentPage,'------------')
    api.search(this.state.previousSearchInput, this.state.currentPage + incrementNumber)
      .then( response => {
        console.log('response in handleSearch', response);
        this.setState({
          peoplesResponse: response.data,
          totalPersons: response.headers['x-total-count']
        })
      })
  }
  changePage(incrementNumber) {
    console.log('increment number', incrementNumber)
    let newPageNumber = this.state.currentPage + incrementNumber;
    console.log('this.changePage');
    this.setState({currentPage: newPageNumber})
    this.handlePageChangeSearch(incrementNumber);
  }


  render() {
    return (
      <div className="Main">
        <div className="searchbar">
          <FormGroup>
            <ControlLabel bsClass="whiteText">Search for anyone within the Star Wars Universe by name, or characterstic</ControlLabel>
            <FormControl
              autoFocus
              type='text'
              value={this.state.searchInput}
              placeholder='Enter Text'
              onChange={this.handleChangeSearchInput}
              onKeyUp={this.handleSearch}
              ></FormControl>
          </FormGroup>
        </div>
        <Cardholder responseArray={this.state.peoplesResponse} currentPage={this.state.currentPage} changePage={this.changePage} totalPersons={this.state.totalPersons} planets={this.state.planets}/>
      </div>
    );
  }
}

export default Main;
