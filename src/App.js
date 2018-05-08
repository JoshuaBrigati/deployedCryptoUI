import React, { Component } from 'react';
import './App.css';
import HeroUnit from './Components/HeroUnit';

class App extends Component {
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
