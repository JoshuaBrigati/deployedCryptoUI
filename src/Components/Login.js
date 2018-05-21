import React, { Component } from "react";
import axios from "axios";

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
      rightName: "",
      originalHeight: "",
      originalWidth: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
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
    var element = document.querySelector(".cube-thingy"),
      style = window.getComputedStyle(element),
      height = style.getPropertyValue("height");
    this.setState({
      originalHeight: height
    });
    var element2 = document.querySelector(".cube-thingy"),
      style2 = window.getComputedStyle(element2),
      width2 = style2.getPropertyValue("width");
    this.setState({
      originalWidth: width2
    });
  }

  SignUp() {
    let cube = document.querySelector(".cube-thingy");
    cube.style.transform = "rotateY( -90deg)";
  }
  Login() {
    let cube = document.querySelector(".cube-thingy");
    cube.style.transform = "none";
  }

  Donate() {
    let cube = document.querySelector(".cube-thingy");
    cube.style.transform = "rotateX( -90deg) translateZ(100px)";
    cube.style.height = "10px";
  }

  ContactUs() {
    let cube = document.querySelector(".cube-thingy");
    cube.style.transform = "rotateY( 90deg)";
  }

  ThankYou() {
    let cube = document.querySelector(".cube-thingy");
    cube.style.transform = "rotateX( 90deg) translateZ(-100px)";
    cube.style.height = this.state.originalHeight;
    //cube.style.height = "10px";
  }

  CryptoDisplay() {
    let cube = document.querySelector(".cube-thingy");
    cube.style.transform = "rotateX(180deg)";
    cube.style.height = this.state.originalHeight;
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
    const ifLoginFront =
      this.state.loginface === "face-front" ? (
        <span className="singin" onClick={this.SignUp.bind(this)}>
          Not a user? Sign Up
        </span>
      ) : (
        <span className="singin" onClick={this.Login.bind(this)}>
          Not a user? Sign Up
        </span>
      );

    const ifSignUpFront =
      this.state.signup === "face-front" ? (
        <span className="singin" onClick={this.SignUp.bind(this)}>
          Already a user? Login
        </span>
      ) : (
        <span className="singin" onClick={this.Login.bind(this)}>
          Already a user? Login
        </span>
      );

    return (
      <div className="background">
        <div className="background-container">
          <ul className="nav">
            <li onClick={this.Login.bind(this)}>{this.state.frontName}</li>
            <li onClick={this.SignUp.bind(this)}>{this.state.rightName}</li>
            <li onClick={this.Donate.bind(this)}>Lambo?</li>
            <li onClick={this.ContactUs.bind(this)}>Contact Us</li>
          </ul>
          <div className="wrapper">
            <div className="cube-thingy">
              <div className="face face-top">
                <div className="content">
                  <h2 className="donate">Donate</h2>
                  <div className="donate-coin">
                    BTC: 1nkja0h3lkna97hnrvb0oi3n789s
                  </div>
                  <br />
                  <div className="donate-coin">ETH: ueqrwiouerwnje</div>
                  <br />
                  <div className="donate-coin">XRP: reoehrpjoehopjhtjopth</div>
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
                        onClick={this.CryptoDisplay.bind(this)}
                      />
                    </div>
                    {ifLoginFront}
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
                        onClick={this.CryptoDisplay.bind(this)}
                      />
                    </div>
                    {ifSignUpFront}
                  </form>
                </div>
              </div>
              <div className="face face-left">
                <div className="content">
                  <h2>Contact Us</h2>
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
                      <input type="submit" onClick={this.ThankYou.bind(this)} />
                    </div>
                  </form>
                </div>
              </div>
              <div className="face face-back">
                <div className="content" />
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
