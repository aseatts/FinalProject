import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MatBtn from "../navBar/NavBar";
import { FormControl, FormLabel, Input, InputLabel } from "@material-ui/core";
import ProfileTypes from "./ProfileType";

class ProfileCreate extends Component {
  render() {
    return (
      <Fragment>
        <MatBtn />
        <FormControl>
          <FormLabel fullWidth={true}>What will you name it?</FormLabel>
          <Input
            id="Thisspecialthing change me"
            placeholder="Kvothe, Reshi or Maedre?"
            fullWidth={true}
          />
        </FormControl>
        <div />
        <ProfileTypes />
      </Fragment>
    );
  }
}

export default ProfileCreate;
