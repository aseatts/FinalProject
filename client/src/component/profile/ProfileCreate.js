import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { FormControl, FormLabel, Input, InputLabel } from "@material-ui/core";
import ProfileTypes from "./ProfileType";

class ProfileCreate extends Component {
  render() {
    return (
      <Fragment>
        <FormControl>
          <FormLabel fullWidth={true}>
            Provide a Name for you new profile?
          </FormLabel>
          <Input
            id="Thisspecialthing change me"
            placeholder="Kvothe, Reshi or Maedre?"
            fullWidth={true}
          />
        </FormControl>

        <ProfileTypes />
      </Fragment>
    );
  }
}

export default ProfileCreate;
