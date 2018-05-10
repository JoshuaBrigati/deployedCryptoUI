import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      phone: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    axios
      .post('/user/signup', {
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
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.email}
          onChange={this.handleChange}
          name="email"
        />
        <input
          type="text"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          name="password"
        />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SignUp;
