import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import HeroUnit from './Components/HeroUnit';
import SignUp from './Components/SignUp';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    axios
      .post('/user/1')
      .then(response => {
        console.log(response.data);
        this.setState(response.data);
      })
      .catch(response => {
        this.setState({});
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HeroUnit />
        </header>
        <div>
          <SignUp />
        </div>
      </div>
    );
  }
}

export default App;
