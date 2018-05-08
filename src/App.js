import React, { Component } from 'react';
import './App.css';
import HeroUnit from './Components/HeroUnit';
import Backend from './utils/Backend';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    Backend.get('/')
      .then(response => {
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
