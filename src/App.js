import React, { Component } from "react";
import "./App.css";
//import HeroUnit from "./Components/HeroUnit";
import axios from "axios";

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
      <div class="background">
        <div class="background-container">
          <div class="shitty-container">
            <h1 class="buy-or-sell">Buy or Sell</h1>
            <h1 class="from-text">From</h1>
          </div>
          <div class="text-container">
            <div id="cube" class="animate">
              <div class="coin">BTC</div>
              <div />
              <div class="coin">XRP</div>
              <div />
              <div class="coin">ADA</div>
              <div class="coin">BCH</div>
            </div>

            <div id="cube2" class="animate">
              <div class="coin">ETH</div>
              <div />
              <div class="coin">BTC</div>
              <div />
              <div class="coin">XRP</div>
              <div class="coin">ENG</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
