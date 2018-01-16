import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import './ProfilePage.css'
import './../common/Container.css'
import { Typography, Paper, Grid, Avatar } from 'material-ui';

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
  return (
    <div className="container profile-container">
      <pre>{JSON.stringify(props.user)}</pre>
      <Grid container>
        {/* User settings */}
        <Grid item xs={12} sm={4}>
          <Paper className="user-section">
            <Avatar
              src="https://pbs.twimg.com/media/DKDRupwXcAYLfCK.jpg"
              className="avatar">
            </Avatar>
            <Typography>Username</Typography>
          </Paper>
        </Grid>

        {/* User Details */}
        <Grid item xs={12} sm={8}>
          <Paper className="user-items-section">
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
