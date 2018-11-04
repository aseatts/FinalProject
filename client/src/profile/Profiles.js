import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Profiles extends Component {
  render() {
    return (
      <div>
        <button> Profile1 </button>
        <button> Profile2 </button>
        <button> Profile3 </button>
        <button> Profile4 </button>
        <button> Profile5 </button>
        <button> Profile6 </button>
      </div>
    );
  }
  getprofileTypes() {
    let classes = " <button> ";
    classes += this.state.profileTypes.id;
    classes += " <button> ";
    return classes;
  }
}

export default Profiles;
