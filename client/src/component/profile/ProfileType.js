import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
// import { List, ListItem } from "../List";
import { ListItem, List } from "@material-ui/core";

import Button from "@material-ui/core/Button";
import CButton from "../css/Buttons";

import DeleteIcon from "@material-ui/icons/Delete";

// import ProfileCreate from "profileCreate";
const styles = {
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  },
  label: {
    textTransform: "capitalize"
  }
};
class profileTypes extends Component {
  state = {
    profTypes: [
      { id: 1, name: "dating" },
      { id: 2, name: "medwordical" },
      { id: 3, name: "action" },
      { id: 4, name: "dance" }
    ]
  };
  CButton
  render() {
    return (
      <div>
        <List>
          {this.state.profTypes.map((profType) => (
            <ListItem key={profType._id}>
              <Link to={"/profiles/" + profType._id}>
                <strong>{profType.name}</strong>
              </Link>
            </ListItem>
          ))}
        </List>
        <Button
          variant="fab"
          disabled
          aria-label="Delete"
          className="extendedFab"
        >
          <DeleteIcon />{" "}
        </Button>{" "}
        <CButton />
        <List>
          {this.state.profTypes.map((profType) => (
            <ListItem key={profType._id}>
              <CButton to={"/profiles/" + profType._id} label={profType.name}>
                {profType.name}
                <strong>{profType.name}</strong>{" "}
              </CButton>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}
export default profileTypes;
