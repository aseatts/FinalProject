import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MatBtn from "../navBar/NavBar";
import { FormControl, FormLabel, Input, InputLabel } from "@material-ui/core";

class ProfileCreate extends Component {
  render() {
    return (
      <Fragment>
        <MatBtn />
        <FormControl>
          <FormLabel> What Kind Of Persona will we create?</FormLabel>
          <input />{" "}
        </FormControl>
      </Fragment>
    );
  }
}

export default ProfileCreate;
