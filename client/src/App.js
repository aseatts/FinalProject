import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TransitionMaster from "./page/transitionMaster";
import Login from "./component/Login";
import Introduction from "./component/Introduction";
import ProfileTypes from "./component/profile/ProfileType";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Welcome from "./component/Welcome";
import NewPersona from "./page/NewPersona";
import ButtonBases from "./component/transitionButton";
import SpeedDials from "./component/speeddial";
import ProfileCreate from "./component/speeddial";
class App extends Component {
  // componentDidMount() {
  //   const { destination } = this.props.match.params
  //     ? this.props.match.params
  //     : false;
  //   const { source } = this.props.location.state
  //     ? this.props.location.state
  //     : false;
  // }
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Router>
            <Switch>
              <Route exact path="/" component={ProfileCreate} />
              <Route exact path="/" component={ProfileCreate} />
              <Route exact path="/button" component={ButtonBases} />
              <Route exact path="/SpeedDials" component={SpeedDials} />
              <Route exact path="/newPerson" component={NewPersona} />

              <Route exact path="/intro" component={Introduction} />
              <Route exact path="/profileTypes" component={ProfileTypes} />

              <Route component={Router.NoMatch} />
            </Switch>
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
