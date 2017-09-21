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
      searchInput: '',
      peoplesResponse: []
    }
    this.initialData = this.initialData.bind(this);
    this.handleChangeSearchInput = this.handleChangeSearchInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentWillMount() {
    this.initialData();
  }
  initialData() {
    api.initialData()
      .then( response  => {
        console.log('response in initialData in Main.js', response.data);
        this.setState({ peoplesResponse: response.data})
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
          this.setState({ peoplesResponse: response.data})
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
        <Cardholder responseArray={this.state.peoplesResponse}/>
      </div>
    );
  }
}

export default Main;
