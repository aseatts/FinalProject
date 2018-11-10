import React, { Component } from "react";

import api from "../api/users.js";
// import { link } from "react-router-dom";
import LinkButton from "./LinkButton";
import NavBar from "./navBar/NavBar";
// import Grid from "@material-ui/core/Grid";

import ProfileCreate from "./profile/ProfileCreate.js";
import Profiles from "./profile/Profiles.js";
import ProfileView from "./profile/ProfileView.js";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Introduction from "./Introduction";
import ProfileTypes from "./profile/ProfileType";

// import ClassNames from "./component/ButtonGradTest.js";
// import InputObjects from "./component/profile/InputObjects";

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
        <NavBar> /NavBar</NavBar>
        <ProfileTypes> profileTypes </ProfileTypes>
        <Introduction> intorduction </Introduction>
        <ProfileView> profileView </ProfileView>
        <Profiles> /Profiles</Profiles>
        <ProfileCreate> PRofile Create</ProfileCreate>

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
        <LinkButton to="/profileCreate">FUCKFUCKFUCK</LinkButton>
      </div>
    );
  }
}
