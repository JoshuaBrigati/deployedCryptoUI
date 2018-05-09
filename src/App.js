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
      .post("/")
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
        <div className="container">
          {/* <header className="App-header">
            <HeroUnit />
          </header> */}
          <section id="text-container">
            <h1 className="buy-or-sell">Buy or Sell</h1>
            <div id="cube" className="animate">
              <div className="coin">BTC</div>
              <div />
              <div className="coin">XRP</div>
              <div />
              <div className="coin">ADA</div>
              <div className="coin">BCH</div>
            </div>
            <h1 className="from-text">From</h1>
            <div id="cube2" className="animate">
              <div className="coin">BTC</div>
              <div />
              <div className="coin">XRP</div>
              <div />
              <div className="coin">ADA</div>
              <div className="coin">BCH</div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
