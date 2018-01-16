import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { withRouter } from 'react-router-dom'
import './ProfilePage.css'
import './../common/Container.css'
import { Typography, Paper, Grid, Avatar } from 'material-ui';

import userApi from './../../api/user'

const styles = theme => ({
  root: {
    width: '90%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

class ProfilePage extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  componentWillMount = () => {
    if (this.props.isLogged === false) {
      this.props.history.push('/login')
    }
  };

  showUserSession = () => {
    userApi.getCurrentSession(res => {
      console.log('Session', res)
    })
  }

  render () {
    return (
      <div className="container profile-container">
        <pre>{JSON.stringify(this.props.user)}</pre>
        <button onClick={this.showUserSession}>Show session</button>
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
}


export default withRouter(withStyles(styles)(ProfilePage));
