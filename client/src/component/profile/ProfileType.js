import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ListItem, List } from "@material-ui/core";

import Button from "../ButtonGradTest";
import Grid from "@material-ui/core/Grid";
import API from "../../utils/API";
import Background from "../css/background/BG_awake.png";

// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';

// import ProfileCreate from "profileCreate";

const divStyle = {
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover"
};

const styles = {
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(149, 62, 250, .3)",
    flexGrow: 1,
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    justify: "center",
    direction: "row",
    alignItems: "center"
  },
  label: {
    textTransform: "capitalize"
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    justify: "center",
    direction: "row",
    alignItems: "center"
  },
  CButton: { justify: "center", direction: "row", alignItems: "center" }
};
class profileTypes extends Component {
  state = {
    profTypes: {}
  };
  state = {
    profTypes: []
  };
  componentDidMount() {
    this.loadProfTypes();
  }

  getprofTypes = () => {
    console.log.then((res) => this.setState({ profTypes: res.data }));
    console.log.catch((err) => console.log(err));
  };

  loadProfTypes = () => {
    API.getprofileTypes()
      .then((res) => this.setState({ profTypes: res.data }))

      // .then(console.log(this.state.profType))
      .catch((err) => console.log(err));
  };

  // state = {
  //   profTypes: [
  //     { id: 1, name: "dating" },
  //     { id: 2, name: "medwordical" },
  //     { id: 3, name: "action" },
  //     { id: 4, name: "dance" }
  //   ]
  // };
  classes = this.props;

  S = () => {
    console.log(this.state.profTypes);
  };

  render() {
    return (
      <div div className="cComponent" style={divStyle}>
        <div className={this.props.root}>
          <Grid>
            <Grid
              item
              xs={12}
              container
              justify="center"

              // onClick={() => this.deleteBook(book._id)}
            >
              <List justify="center">
                {" "}
                <h3 justify="center"> Please choose a profile type</h3>
                {this.state.profTypes.map((profType) => (
                  <ListItem justify="center" key={profType._id}>
                    <Button justify="center" to=".">
                      <strong justify="center">
                        {profType.profileTypeName}
                      </strong>
                    </Button>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </div>
        <br /> <br /> <br /> <br /> <br />
        <br /> <br /> <br /> <br /> <br />
        <br /> <br /> <br /> <br /> <br />
      </div>
    );
  }
}
export default profileTypes;
