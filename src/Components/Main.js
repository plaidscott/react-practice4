import React, { Component } from 'react';
import Cardholder from './Cardholder.js';

import '../Styles/Main.css';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <h1>hi there from main</h1>
        <Cardholder />
      </div>
    );
  }
}

export default Main;
