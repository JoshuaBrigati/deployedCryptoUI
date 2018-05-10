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
      .post("/user/1")
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
      <div className="background">
        <div className="background-container">
          <div className="shitty-container">
            <h1 className="buy-or-sell">Buy or Sell</h1>
            <h1 className="from-text">From</h1>
          </div>
          <div className="text-container">
            <div id="cube" className="animate">
              <div className="coin">BTC</div>
              <div />
              <div className="coin">XRP</div>
              <div />
              <div className="coin">ADA</div>
              <div className="coin">BCH</div>
            </div>

            <div id="cube2" className="animate">
              <div className="coin">ETH</div>
              <div />
              <div className="coin">BTC</div>
              <div />
              <div className="coin">XRP</div>
              <div className="coin">ENG</div>
            </div>
          </div>
          <button className="login-button">Login</button>
          <a className="create-account">Create Account</a>
        </div>
      </div>
    );
  }
}

export default App;
