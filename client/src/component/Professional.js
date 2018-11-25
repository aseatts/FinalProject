import React, { Component, Fragment } from "react";

import api from "../api/users.js";
// import { link } from "react-router-dom";

import NavBar from "./navBar/NavBar";
// import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import ProfileCreate from "./profile/ProfileCreate.js";

import Background from "./css/background/BG_awake.png";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FormControl, FormLabel, Input, InputLabel } from "@material-ui/core";

// import ClassNames from "./component/ButtonGradTest.js";
// import InputObjects from ".component/profile/InputObjects";

const divStyle = {
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover"
};

export default class Login extends Component {
  import;
  state = {
    What: "",
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
      <div div className="cComponent" style={divStyle}>
        <NavBar> /NavBar</NavBar>
        <br />
        <Fade in={this.state.check ? false : true}>
          <FormControl>
            <FormLabel fullWidth={true}>Welcome</FormLabel>
            <Input
              justify="center"
              id="PlaceofEmp"
              placeholder="P"
              fullWidth={true}
            />
            <Input
              justify="center"
              id="Password"
              placeholder="Password"
              fullWidth={true}
            />
          </FormControl>
        </Fade>
        <br />
      </div>
    );
  }
}
