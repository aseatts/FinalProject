import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CSSTransitionGroup from "react-transition-group";
import Login from "../component/Login";
import Introduction from "../component/Introduction";
import ProfileTypes from "../component/profile/ProfileType";
import CssBaseline from "@material-ui/core/CssBaseline";
import Welcome from "../component/Welcome";

export default class extends Component {
  componentDidMount() {
    let { destination } = this.props.match.params;

    let { source } = this.props.location.state;
  }
  viewme = () => {
    console.log(this.source);
  };
  viewme = () => {
    console.log(this.state);
  };
  render() {
    return (
      <React.Fragment>
        {/* <Link
          Hidden={true}
          to={{
            pathname: "../page/transitionMaster.js",
            state: {
              Destination: this.props.match.params,
              sourcePage: this.props.location.state
            }
          }}
        >
          {" "}
        </Link> */}
        <p>"123 `{this.propsdestination}` qwe" </p>
      </React.Fragment>
    );
  }
}
