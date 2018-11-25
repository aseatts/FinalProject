import React, { LinkTo, Component, Fragment } from "react";

import api from "../api/users.js";
import { Link } from "react-router-dom";

import NavBar from "./navBar/NavBar";
// import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import ProfileCreate from "./profile/ProfileCreate.js";
import Grid from "@material-ui/core/Grid";
import Background from "./css/background/BG_awake.png";
import White from "@material-ui/core/colors";
import ProfileTypes from "./profile/ProfileType";
import TranMan from "../page/transitionMaster";
import "../App.css";

import {
  FormControl,
  FormLabel,
  Input,
  Fade,
  CssBaseline,
  Grow,
  Slide
} from "@material-ui/core";
import color from "@material-ui/core/colors/pink";
import profileTypes from "./profile/ProfileType";

export default class welcome extends Component {
  import;
  state = {
    LoginStyles: { fontColor: { White }, textAlign: "center" },
    container: {
      display: "flex"
    },

    initialtoolbar: true,
    welcome: false,
    getIn: false
  };

  handlecheckExisting = (check) => {
    this.setState({ check: true });
  };

  step1 = {
    if(phase1) {
      clearTimeout(phase1);
    }
  };

  phase1 = setTimeout(() => {
    this.setState({
      initialtoolbar: !this.state.initialtoolbar,
      welcome: !this.state.welcome
    });
  }, 4000);

  step2 = {
    if(phase2) {
      clearTimeout(phase2);
    }
  };

  phase2 = setTimeout(() => {
    this.setState({
      welcome: !this.state.welcome,
      getIn: !this.state.getIn
    });
  }, 6000);

  render() {
    return (
      <div class="basicText">
        <Slide in={this.state.initialtoolbar} timeout={2000}>
          <NavBar> </NavBar>
        </Slide>
        <Fade in={this.state.welcome} timeout={2000}>
          <h1 onMount={this.step1}>Welcome</h1>
        </Fade>
        <Grid item xs={12}>
          {" "}
          <div>
            <Grow in={this.state.getIn} timeout={2000}>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to={{
                  pathname: "/newpersona",
                  state: {
                    Destination: "Login",
                    sourcePage: "welcome"
                  }
                }}
              >
                <ButtonBase onMount={this.step2}>
                  <span />

                  {/* // ../page/transitionMaster.js
                   */}
                  <h3> New User </h3>
                </ButtonBase>
              </Link>
            </Grow>
          </div>
          <div>
            <Grow in={this.state.getIn} timeout={2000}>
              <ButtonBase onClick={this.handlecheckNew}>
                {" "}
                <h3> Sign In </h3>
              </ButtonBase>
            </Grow>
          </div>
        </Grid>
        <br />
      </div>
    );
  }
}
