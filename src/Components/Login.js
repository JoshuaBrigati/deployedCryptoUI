import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      phone: "",
      password: "",
      loginface: "",
      signup: "",
      frontName: "",
      rightName: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    console.log(this.props.location.state.linkState);
    if (this.props.location.state.linkState === "Login") {
      this.setState({
        loginface: "face-front",
        signup: "face-right",
        frontName: "Login",
        rightName: "SignUp"
      });
    } else {
      this.setState({
        loginface: "face-right",
        signup: "face-front",
        frontName: "SignUp",
        rightName: "Login"
      });
    }
  }

  showSignup() {
    let prism = document.querySelector(".rec-prism");
    prism.style.transform = "rotateY( -90deg)";
  }
  showLogin() {
    let prism = document.querySelector(".rec-prism");
    prism.style.transform = "none";
  }

  showDonate() {
    let prism = document.querySelector(".rec-prism");
    prism.style.transform = "rotateX( -90deg)";
  }

  showContactUs() {
    let prism = document.querySelector(".rec-prism");
    prism.style.transform = "rotateY( 90deg)";
  }

  showThankYou() {
    let prism = document.querySelector(".rec-prism");
    prism.style.transform = "rotateX( 90deg)";
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    axios
      .post("/user/signup", {
        email: this.state.email,
        phone: this.state.phone,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="background">
        <div className="background-container">
          <ul className="nav">
            <li onClick={this.showLogin.bind(this)}>{this.state.frontName}</li>
            <li onClick={this.showSignup.bind(this)}>{this.state.rightName}</li>
            <li onClick={this.showDonate.bind(this)}>Lambo?</li>
            <li onClick={this.showContactUs.bind(this)}>
              Tell us how great we are
            </li>
          </ul>
          <div className="wrapper">
            <div className="rec-prism">
              <div className="face face-top">
                <div className="content">
                  <h2>Donate</h2>
                  <small className="donate-coin">
                    BTC: 1nkja0h3lkna97hnrvb0oi3n789s
                  </small>
                  <br />
                  <small className="donate-coin">ETH: ueqrwiouerwnje</small>
                  <br />
                  <small className="donate-coin">
                    XRP: reoehrpjoehopjhtjopth
                  </small>
                </div>
              </div>
              <div className={`face ${this.state.loginface}`}>
                <div className="content">
                  <h2>Sign in</h2>
                  <form onSubmit={event => event.preventDefault()}>
                    <div className="field-wrapper">
                      <input
                        type="text"
                        name="username"
                        placeholder="username"
                      />
                      <label>Username</label>
                    </div>
                    <div className="field-wrapper">
                      <input
                        type="password"
                        name="password"
                        placeholder="password"
                      />
                      <label>Password</label>
                    </div>
                    <div className="field-wrapper">
                      <input
                        type="submit"
                        onClick={this.showThankYou.bind(this)}
                      />
                    </div>
                    <span
                      className="signup"
                      onClick={this.showSignup.bind(this)}
                    >
                      Not a user? {this.state.rightName}
                    </span>
                  </form>
                </div>
              </div>
              <div className={`face ${this.state.signup}`}>
                <div className="content">
                  <h2>Sign up</h2>
                  <form onSubmit={event => event.preventDefault()}>
                    <div className="field-wrapper">
                      <input
                        type="text"
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        name="email"
                      />
                      <label>E-Mail</label>
                    </div>
                    <div className="field-wrapper">
                      <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                      <label>Password</label>
                    </div>
                    <div className="field-wrapper">
                      <input
                        type="text"
                        name="phone"
                        placeholder="phone number"
                        value={this.state.phone}
                        onChange={this.handleChange}
                      />
                      <label>Phone Number</label>
                    </div>
                    <div className="field-wrapper">
                      <input
                        type="submit"
                        onClick={this.showThankYou.bind(this)}
                      />
                    </div>
                    <span
                      className="singin"
                      onClick={this.showLogin.bind(this)}
                    >
                      Already a user? {this.state.frontName}
                    </span>
                  </form>
                </div>
              </div>
              <div className="face face-left">
                <div className="content">
                  <h2>Tell us how great we are</h2>
                  <form onSubmit={event => event.preventDefault()}>
                    <div className="field-wrapper">
                      <input type="text" name="name" placeholder="name" />
                      <label>Name</label>
                    </div>
                    <div className="field-wrapper">
                      <input type="text" name="email" placeholder="email" />
                      <label>E-Mail</label>
                    </div>
                    <div className="field-wrapper">
                      <textarea placeholder="your message" />
                      <label>Your Message</label>
                    </div>
                    <div className="field-wrapper">
                      <input
                        type="submit"
                        onClick={this.showThankYou.bind(this)}
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="face face-bottom">
                <div className="content">
                  <div className="thank-you-msg">Thank you!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
