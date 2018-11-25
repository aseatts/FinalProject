import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const styles = {
  card: {
    minWidth: 275,
    maxWidth: 350
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  Paper: {}
};

function SimpleCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Welcome to Persona
        </Typography>
        <Typography variant="h5" component="h2">
          {"I am Athena"}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          goddess of wisdom, courage, inspiration, civilization, law and
          justice, strategic warfare, mathematics, strength, strategy, the arts,
          crafts, and skill.
        </Typography>
        <Typography component="p">
          Persona is metaphysical personfication.
          <br />
          {
            '"Together We will  harness the powers embued to you through goddess Athena."'
          }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
