import React, { Component } from 'react';
import Cardholder from './Cardholder.js';
import api from '../utils/api.js';

import { FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import '../Styles/Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testResponse: '',
      searchInput: ''
    }
    this.testRequest = this.testRequest.bind(this);
    this.handleChangeSearchInput = this.handleChangeSearchInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentWillMount() {
    this.testRequest();
  }
  testRequest() {
    api.test()
      .then( response  => {
        console.log('response in testRequest in Main.js', response);
      })
  }
  handleChangeSearchInput(e) {
    this.setState({ searchInput: e.target.value});
  }
  handleSearch(e) {
    e.preventDefault();
    if(e.keyCode === 13) {
      api.search(this.state.searchInput)
        .then( response => {
          console.log('response in handleSearch', response);
        })
      this.setState({searchInput: ''})
    }
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
        <Cardholder />
      </div>
    );
  }
}

export default Main;
