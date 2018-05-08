import React, { Component } from 'react';
import './App.css';
import HeroUnit from './Components/HeroUnit';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    axios
      .post('/')
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
      </div>
    );
  }
}

export default App;
