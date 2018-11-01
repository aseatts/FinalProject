import React, { Component } from "react";
// import api from "../api/newProfile";

class NewProfile extends Component {
  state = {
    open: [
      {
        n_introduction:
          "Hello I am Athena. We will work together manage the various ways we identify and are identified. "
      },
      {
        p_contextTypes_q: "Which of your components can I help you manage?"
      },
      {
        p_contextTypes_a: ("Business Professional",
        "Single Dating",
        "ParentOfHuman",
        "ParentofNonHuman",
        "HealthAwareHuman",
        "Musician",
        "Artist",
        "OwnerOfObjects")
      },
      { p_name: "What do you want to call this persona?" },
      { personaName: "" }
    ]
  };
  handleNewUser = (open) => {
    let w = this.state.index;
    return console.log(w.value);
  };

  render() {
    // {this.handleNewUser()};
    return (
      <div>
        <card className="getCardClasses" name="intro" />
      </div>
    );
  }

  getcardClasses() {
    let c = this.state.open.value;
    return c;
  }
}
export default NewProfile;
