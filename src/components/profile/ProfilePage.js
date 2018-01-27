import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { withRouter } from 'react-router-dom'
import './ProfilePage.css'
import './../common/Container.css'
import { 
  Typography, Paper, Grid, Avatar,
  TableRow, TableCell, Table, TableBody
} from 'material-ui';

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
    const { user } = this.props

    return (
      <div className="container profile-container">
        <Grid container>
          {/* User settings */}
          <Grid item xs={12} sm={4}>
            <Paper className="user-section">
              <Avatar
                src="https://pbs.twimg.com/media/DKDRupwXcAYLfCK.jpg"
                className="avatar">
              </Avatar>
              <Typography type="headline" component="h2">{user.username}</Typography>
              <Typography component="h4">{user.nombre}</Typography>              
            </Paper>
          </Grid>
  
          {/* User Details */}
          <Grid item xs={12} sm={8}>
            <Paper className="user-items-section">
              <Typography type="headline" component="h2" style={{textAlign: 'center'}}>User information</Typography>
              <Table className="profile-table">
                <TableBody>
                  {Object.keys(user).map(k => {
                    return (
                      <TableRow key={k}>
                        <TableCell><span className="user-attribute">{k}</span></TableCell>
                        <TableCell><span className="user-attribute-value">{user[k]}</span></TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}


export default withRouter(withStyles(styles)(ProfilePage));
