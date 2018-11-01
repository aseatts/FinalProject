import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./component/Login";
import NewUser from "./component/NewUser";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Introduction from "./component/Introduction";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartbeat,
  faGhost,
  faBriefcase,
  faGraduationCap,
  faMedkit,
  faDrum,
  faPalette,
  faChild,
  faWind
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faHeartbeat,
  faGhost,
  faBriefcase,
  faGraduationCap,
  faMedkit,
  faDrum,
  faPalette,
  faChild,
  faWind
);
// import newProfile from "./component/newProfile";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <br />
        <div>
          <Introduction />
        </div>
        <br />
        <div>
          <NewUser />
        </div>
        <Router>
          <Switch>
            {/* <Route exact path="/" component={profile} /> */}
            <Route exact path="/New" component={NewUser} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
