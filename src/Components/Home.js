import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { isMobile, isIE } from "react-device-detect";

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
    if (isMobile) {
      return (
        <div className="background-container">
          <div className="shitty-container">
            <h1 className="buy-or-sell">
              This content is unavailable on mobile
            </h1>
          </div>
        </div>
      );
    }
    if (isIE) {
      return (
        <div className="background-container">
          <div className="shitty-container">
            <h1 className="buy-or-sell">
              IE is not supported. Download Chrome/Opera/Firefox
            </h1>
          </div>
        </div>
      );
    }

    return (
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
            <div className="coin">TRX</div>
          </div>

          <div id="cube2" className="animate">
            <div className="coin">LTC</div>
            <div />
            <div className="coin">XLM</div>
            <div />
            <div className="coin">XRP</div>
            <div className="coin">ENG</div>
          </div>
        </div>
        <Link to={{ pathname: "/login", state: { linkState: "Login" } }}>
          <button className="login-button">Login</button>
        </Link>
        <Link
          to={{ pathname: "/signup", state: { linkState: "SignUp" } }}
          className="create-account"
        >
          Create Account
        </Link>
      </div>
    );
  }
}

export default App;
