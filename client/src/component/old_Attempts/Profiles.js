import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import api from "../api/createProfile";

export default class profile extends Component {
  state = {
    labelname: "",
    labelvalue: "",
    profileTypes: ""
  };

  createProfile = (event) => {
    event.preventDefault();
    console.log("I'm signing up baby", this.event);
    // api.createProfile(profilePick.classes.name).then(function(response) {
    //   console.log(response);
    // });
  };
  captureInput = (event) => {
    console.log(this);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Create a profile</h1>
        <button
          name="labelname"
          type
          id="labelname"
          onClick={this.captureInput}
        >
          {<FontAwesomeIcon size="3x" icon="heartbeat" />}
        </button>
      </div>
    );
  }
}
