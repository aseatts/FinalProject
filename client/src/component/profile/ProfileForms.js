import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import 

const styles = (theme) => ({
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

const Questions = [
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
];

class ProfileForms extends React.Component {
  state = {
    Persona: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  };

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-with-placeholder"
          label="With placeholder"
          placeholder="Placeholder"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          multiline
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-number"
          label="Number"
          value={this.state.age}
          onChange={this.handleChange("age")}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange("currency")}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          helperText="Please select your currency"
          margin="normal"
          variant="outlined"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Native select"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange("currency")}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu
            }
          }}
          helperText="Please select your currency"
          margin="normal"
          variant="outlined"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="outlined-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          id="outlined-bare"
          className={classes.textField}
          defaultValue="Bare"
          margin="normal"
          variant="outlined"
        />
      </form>
    );
  }
}

ProfileForms.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfileForms);
