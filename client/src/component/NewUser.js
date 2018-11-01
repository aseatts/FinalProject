import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import red from "@material-ui/core/colors/red";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind } from "@fortawesome/free-solid-svg-icons";

const styles = (theme) => ({
  card: {
    minWidth: 275,
    maxWidth: 1000
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
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    flexGrow: 1
  },
  icon: {
    margin: theme.spacing.unit * 2
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    "&:hover": {
      color: red[800]
    }
  },
  children: {
    padding: -10,
    margin: -2
  },
  icnz: { padding: theme.spacing.unit * 5 },

  demo: {
    height: 240
  },
  paper: {
    padding: theme.spacing.unit * 2,
    height: "100%",
    color: theme.palette.text.secondary
  }
});

function SimpleCard(props) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h2">
              What are we?
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={
                        <FontAwesomeIcon
                          margin={20}
                          size="3x"
                          icon="heartbeat"
                        />
                      }
                      checkedIcon={
                        <FontAwesomeIcon
                          margin={20}
                          size="3x"
                          icon="heartbeat"
                        />
                      }
                      value="checkedH"
                    />
                  }
                  label="Custom icon"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={
                        <FontAwesomeIcon
                          margin={20}
                          size="3x"
                          icon="briefcase"
                        />
                      }
                      checkedIcon={
                        <FontAwesomeIcon
                          margin={20}
                          size="3x"
                          icon="briefcase"
                        />
                      }
                      value="checkedH"
                    />
                  }
                  label="Professional"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={
                        <FontAwesomeIcon
                          margin={20}
                          size="3x"
                          icon="briefcase"
                        />
                      }
                      checkedIcon={
                        <FontAwesomeIcon
                          margin={20}
                          size="3x"
                          icon="graduation-cap"
                        />
                      }
                      value="checkedH"
                    />
                  }
                  label="Professional"
                />
                {/* <FontAwesomeIcon margin={20} size="3x" icon="heartbeat" />
                <FontAwesomeIcon margin={20} size="3x" icon="briefcase" /> */}
                <FontAwesomeIcon size="3x" icon="graduation-cap" />
                <FontAwesomeIcon size="3x" icon="medkit" />/
                <FontAwesomeIcon size="3x" icon="drum" />
                <FontAwesomeIcon size="3x" icon="palette" />
                <FontAwesomeIcon ClassName="children" size="1x" icon="child" />
                <FontAwesomeIcon ClassName="children" size="2x" icon="child" />
                <FontAwesomeIcon ClassName="children" size="1x" icon="child" />
                <FontAwesomeIcon size="3x" icon="wind" />
              </FormGroup>
            </Typography>
          </Paper>

          <div className={classes.root}>
            <Icon
              className={classes.iconHover}
              color="Business"
              style={{ fontSize: 60 }}
              value="add_circle"
            />
          </div>
          <Typography className={classes.pos} color="textSecondary">
            "Business Professional", "Single Dating", "ParentOfHuman",
            "ParentofNonHuman", "HealthAwareHuman", "Musician", "Artist",
            "OwnerOfObjects"
          </Typography>
          <CardActions>
            <Button size="small">Who</Button>
          </CardActions>
          <Typography component="p">
            Persona is a metaphysical expansion of human personfication.
            <br />
            {
              '"Together We will  harness the powers embued to you through goddess Athena."'
            }
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Begin</Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
