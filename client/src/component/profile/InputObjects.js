import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
// import { List, ListItem } from "../List";
import { withStyles } from "@material-ui/core/styles";
import { ListItem, List } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

import ClassNames from "../ButtonGradTest";

const Personas = {
  Categorie: [
    { label: "FreeTime Hobby", value: "FreeTime Hobby" },
    { label: "Astrological Sign", value: "Astrological Sign" },
    { label: "AnonEmail", value: "AnonEmail" },
    { label: "Current Obession", value: "Current Obession" },
    { label: "Cats are …", value: "Cats are …" },
    { label: "Dogs are …", value: "Dogs are …" },
    { label: "Cows are …", value: "Cows are …" },
    { label: "Carrots are…", value: "Carrots are…" },
    { label: "Top 2 Favorite Movies", value: "Top 2 Favorite Movies" },
    { label: "Top 2 Favorite songs", value: "Top 2 Favorite songs" },
    { label: "Top 2 favorite places", value: "Top 2 favorite places" },
    { label: "Top 2 ways to stay Active", value: "Top 2 ways to stay Active" },
    {
      label: "Top 2 things that keep you sane",
      value: "Top 2 things that keep you sane"
    },
    { label: "Current Obession", value: "Current Obession" },
    { label: "Game of Thrones", value: "Game of Thrones" },
    { label: "The Kardashians", value: "The Kardashians" },
    { label: "Kimye", value: "Kimye" },
    { label: "Top 2 ways to stay active", value: "Top 2 ways to stay active" },
    {
      label: "Top 2 Favorite forms of Art",
      value: "Top 2 Favorite forms of Art"
    },
    { label: "Favorite Art Venue", value: "Favorite Art Venue" },
    { label: "Favorite New Artist", value: "Favorite New Artist" },
    {
      label: "Current Genre Style Obession",
      value: "Current Genre Style Obession"
    },
    {
      label: "What do you do professionally",
      value: "What do you do professionally"
    },
    {
      label: "What do you want to do professionally?",
      value: "What do you want to do professionally?"
    },
    { label: "What are you studying?", value: "What are you studying?" },
    { label: "What are you reading?", value: "What are you reading?" },
    { label: "Most Recent Project", value: "Most Recent Project" },
    { label: "Next Big Thing", value: "Next Big Thing" },
    { label: "LinkedIn Profile", value: "LinkedIn Profile" },
    { label: "URL", value: "URL" },
    { label: "Yelp Reviews", value: "Yelp Reviews" },
    { label: "Amazon Wish List", value: "Amazon Wish List" },
    { label: "Alias Name", value: "Alias Name" },
    { label: "Facebook Profile", value: "Facebook Profile" },
    { label: "Spotify", value: "Instagram " },
    { label: "Instagram ", value: "Spotify" },
    { label: "Snapchat", value: "Snapvalue" }
  ]
};
// import ProfileCreate from "profileCreate";
const styles = (theme) => ({
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
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

const profTypes = () => ({
  profTypes: [
    { id: 1, name: "dating" },
    { id: 2, name: "medwordical" },
    { id: 3, name: "action" },
    { id: 4, name: "dance" }
  ]
});

class InputObjects extends Component {
  state = {
    profTypes: [
      { id: 1, name: "dating" },
      { id: 2, name: "medwordical" },
      { id: 3, name: "action" },
      { id: 4, name: "dance" }
    ],
    categorie: [
      { label: "FreeTime Hobby", value: "FreeTime Hobby" },
      { label: "Astrological Sign", value: "Astrological Sign" },
      { label: "AnonEmail", value: "AnonEmail" },
      { label: "Current Obession", value: "Current Obession" },
      { label: "Cats are …", value: "Cats are …" },
      { label: "Dogs are …", value: "Dogs are …" },
      { label: "Cows are …", value: "Cows are …" },
      { label: "Carrots are…", value: "Carrots are…" },
      { label: "Top 2 Favorite Movies", value: "Top 2 Favorite Movies" },
      { label: "Top 2 Favorite songs", value: "Top 2 Favorite songs" },
      { label: "Top 2 favorite places", value: "Top 2 favorite places" },
      {
        label: "Top 2 ways to stay Active",
        value: "Top 2 ways to stay Active"
      },
      {
        label: "Top 2 things that keep you sane",
        value: "Top 2 things that keep you sane"
      },
      { label: "Current Obession", value: "Current Obession" },
      { label: "Game of Thrones", value: "Game of Thrones" },
      { label: "The Kardashians", value: "The Kardashians" },
      { label: "Kimye", value: "Kimye" },
      {
        label: "Top 2 ways to stay active",
        value: "Top 2 ways to stay active"
      },
      {
        label: "Top 2 Favorite forms of Art",
        value: "Top 2 Favorite forms of Art"
      },
      { label: "Favorite Art Venue", value: "Favorite Art Venue" },
      { label: "Favorite New Artist", value: "Favorite New Artist" },
      {
        label: "Current Genre Style Obession",
        value: "Current Genre Style Obession"
      },
      {
        label: "What do you do professionally",
        value: "What do you do professionally"
      },
      {
        label: "What do you want to do professionally?",
        value: "What do you want to do professionally?"
      },
      { label: "What are you studying?", value: "What are you studying?" },
      { label: "What are you reading?", value: "What are you reading?" },
      { label: "Most Recent Project", value: "Most Recent Project" },
      { label: "Next Big Thing", value: "Next Big Thing" },
      { label: "LinkedIn Profile", value: "LinkedIn Profile" },
      { label: "URL", value: "URL" },
      { label: "Yelp Reviews", value: "Yelp Reviews" },
      { label: "Amazon Wish List", value: "Amazon Wish List" },
      { label: "Alias Name", value: "Alias Name" },
      { label: "Facebook Profile", value: "Facebook Profile" },
      { label: "Spotify", value: "Instagram " },
      { label: "Instagram ", value: "Spotify" },
      { label: "Snapchat", value: "Snapvalue" }
    ]
  };
  CButton;
  render() {
    const { classes } = this.props;
    return (
      <div>
        <List>
          {this.state.profTypes.map((profType) => (
            <ListItem key={profType._id}>
              <ClassNames
                to={"/profiles/" + profType._id}
                label={profType.name}
              >
                <strong>{profType.name}</strong>{" "}
              </ClassNames>
            </ListItem>
          ))}
        </List>
        <form className={classes.container} noValidate autoComplete="off">
          {this.state.categorie.map((categorie) => (
            <TextField
              id={classes._id}
              label={categorie.value}
              placeholder={categorie.label}
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          ))}
        </form>
      </div>
    );
  }
}
export default withStyles(styles)(InputObjects);
