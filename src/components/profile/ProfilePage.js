import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import './ProfilePage.css'
import './../common/Container.css'

import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import { Typography, Paper, Grid } from 'material-ui';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '90%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className="container profile-container">
      <Grid container>
        {/* User settings */}
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Typography>Username</Typography>
          </Paper>
        </Grid>

        {/* User Details */}
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            <Typography>
              User info
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);
