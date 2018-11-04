import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { ListItem, List } from "@material-ui/core";

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

// function CButton(props) {
//   const { classes } = props;
class ProfileButton extends React.Component {
  state = {
    profTypes: [
      { id: 1, name: "dating" },
      { id: 2, name: "medwordical" },
      { id: 3, name: "action" },
      { id: 4, name: "dance" }
    ]
  };

  But;

  render() {
    return (
      <Fragment>
        <List>
          {this.state.profTypes.map((profType) => (
            <ListItem key={profType._id}>
              <Button
                to={"/profiles/" + profType._id}
                label={profType.name}
                classes={{
                  root: classes.root, // class name, e.g. `classes-nesting-root-x`
                  label: classes.label
                }}
              >
                {profType.name}
                <strong>{profType.name}</strong>{" "}
              </Button>
            </ListItem>
          ))}
        </List>
        <Button
          classes={{
            root: classes.root, // class name, e.g. `classes-nesting-root-x`
            label: classes.label // class name, e.g. `classes-nesting-label-x`
          }}
        >
          {""}
        </Button>
        /
      </Fragment>
    );
  }
}
ProfileButton.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ProfileButton);
