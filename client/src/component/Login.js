import React, { Component } from "react";
import api from "../api/users.js";

export default class Login extends Component {
  import;
  state = {
    username: "",
    password: ""
  };
  handleSignUp = (event) => {
    event.preventDefault();
    console.log("I'm signing up baby", this.state);
    api.signup(this.state).then(function(response) {
      console.log(response);
    });
  };
  captureInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div>
        {" "}
        <input
          onChange={this.captureInput}
          name="username"
          id="username"
          type="text"
          className="validate"
        />
        <label for="username">First Name</label>
        <input onChange={this.captureInput} name="username" />
        <input onChange={this.captureInput} name="password" />
        <button onClick={this.handleSignUp}>Submit</button>
      </div>
    );
  }
}
