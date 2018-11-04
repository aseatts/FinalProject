import React, { Component } from "react";
import PropTypes from "prop-types";
import styles, { theme } from "./css/Styles";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import api from "../api/createProfile";

export default class profile extends Component {
  state = {
    labelname: "",
    labelvalue: ""
  };

  profilePick = (props) => {
    const { classes } = props;
    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Where are we?
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      onClick={this.state.labelname}
                      name="dating"
                      icon={<FontAwesomeIcon size="3x" icon="heartbeat" />}
                      checkedIcon={
                        <FontAwesomeIcon size="3x" icon="heartbeat" />
                      }
                    />
                  }
                  label="Dating"
                />
                {/* Work */}
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FontAwesomeIcon size="3x" icon="briefcase" />}
                      checkedIcon={
                        <FontAwesomeIcon size="3x" icon="briefcase" />
                      }
                      value="checkedH"
                    />
                  }
                  label="Professional"
                />
                {/*Education*/}
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={
                        <FontAwesomeIcon
                          margin={20}
                          size="3x"
                          icon="graduation-cap"
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
                {/* Education */}
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={
                        <FontAwesomeIcon margin={20} size="3x" icon="medkit" />
                      }
                      checkedIcon={
                        <FontAwesomeIcon margin={20} size="3x" icon="medkit" />
                      }
                      value="checkedH"
                    />
                  }
                  label="Patient"
                />
                {/* Band */}
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={
                        <FontAwesomeIcon margin={20} size="3x" icon="drum" />
                      }
                      checkedIcon={
                        <FontAwesomeIcon margin={20} size="3x" icon="drum" />
                      }
                      value="checkedH"
                    />
                  }
                  label="Musician"
                />
                {/* Artist */}
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={
                        <FontAwesomeIcon margin={20} size="3x" icon="palette" />
                      }
                      checkedIcon={
                        <FontAwesomeIcon margin={20} size="3x" icon="palette" />
                      }
                      value="checkedH"
                    />
                  }
                  label="Patient"
                />
                {/* Gaurdian */}
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={
                        <FontAwesomeIcon
                          ClassName="children"
                          size="3x"
                          icon="child"
                        />
                      }
                      checkedIcon={
                        <FontAwesomeIcon
                          ClassName="children"
                          size="3x"
                          icon="child"
                        />
                      }
                      value="checkedH"
                    />
                  }
                  label="Parent"
                />
                {/* Innovator */}
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={
                        <FontAwesomeIcon margin={20} size="3x" icon="wind" />
                      }
                      checkedIcon={
                        <FontAwesomeIcon margin={20} size="3x" icon="wind" />
                      }
                      value="checkedH"
                    />
                  }
                  label="Patient"
                />
              </FormGroup>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Continue</Button>
          </CardActions>
        </Card>
      </div>
    );
  };
}

profile.propTypes = {
  classes: PropTypes.object.isRequired
};
