import React, { Component } from "react";

import "./App.css";
import Login from "./component/Login";
import ProfileCreate from "./component/profile/ProfileCreate.js";
import Profiles from "./component/profile/Profiles.js";
import ProfileView from "./component/profile/ProfileView.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Introduction from "./component/Introduction";
import ProfileTypes from "./component/profile/ProfileType";

// import newProfile from "./component/newProfile";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/intro" component={Introduction} />
            <Route exact path="/profileCreate" component={ProfileCreate} />
            <Route exact path="/profiles" component={Profiles} />
            <Route exact path="/profileTypes" component={ProfileTypes} />
            <Route exact path="/profiles/:id" component={ProfileView} />
            <Route component={Router.NoMatch} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
