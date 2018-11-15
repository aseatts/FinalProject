import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ListItem, List } from "@material-ui/core";
import axios from "axios";
import Button from "../ButtonGradTest";
import Grid from "@material-ui/core/Grid";
import API from "../../utils/API";

// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';

// import ProfileCreate from "profileCreate";
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

console.log(API.getprofileTypes);
class profileTypes2 extends Component {
  state = {
    profTypes: []
  };
  componentDidMount() {
    this.getprofTypes();
  }

  getprofTypes = () => {
    API.getprofileTypes()

      .then((res) => this.setState({ profTypes: res.data }))
      .catch((err) => console.log(err));
  };

  // loadProfileTypes = () => {
  //   API.getprofiles()
  //     .then((res) =>
  //       this.setState({
  //         profileTypes: res.data
  //       })
  //     )
  //     .catch((err) => console.log(err));
  // };

  // state = {
  //   profTypes: [
  //     { id: 1, name: "dating" },
  //     { id: 2, name: "medwordical" },
  //     { id: 3, name: "action" },
  //     { id: 4, name: "dance" }
  //   ]
  // };
  classes = this.props;

  //}

  render() {
    return (
      <div container spacing={24}>
        <div className={this.props.root}>
          <Grid>
            <Grid
              item
              xs={12}
              container
              justify="center"
              // onClick={() => this.deleteBook(book._id)}
            >
              <List>
                {this.state.profTypes.map((profType) => (
                  <ListItem key={profType._id}>
                    <Button to={"/profiles/" + profType._id}>
                      <strong>{profType.name}</strong>
                    </Button>
                  </ListItem>
                ))}
              </List>
              /
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
export default profileTypes2;
