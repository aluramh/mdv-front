import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { withRouter } from 'react-router-dom'
import { TextField, Button, Paper } from 'material-ui';
import { isEmpty as _isEmpty } from 'lodash'
import userApi from './../../api/user'
import './LoginPage.css'

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  }
});

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      validName: true,
      password: '',
      validPass: true
    }
  }

  componentWillMount = () => {
    userApi.getCurrentSession(user => {
      if (!_isEmpty(user)) {
        this.props.setUser(user)
        this.props.history.push('/profile')
      }
    })
  }

  handleUsernameChange = (e) => {
    const name = e.target.value
    this.setState({ name: e.target.value })

    if (name.length < 6) {
      this.setState({validName: false})
    } else {
      this.setState({validName: true})
    }
  }
  
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value })
  }

  handleLoginFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username: this.state.name, 
      password: this.state.password
    }
    userApi.submitLogin(formData, user => {
      this.props.setUser(user)
      this.props.history.push('/profile')
    })
  }

  validateUsername = (e) => {
    console.log('Form', e)
  }

  render() {
    const { classes } = this.props;
  
    return (
      <Paper className="login-form-container">
        <form 
          // autoComplete="off"
          className="login-form"
          method="post" 
          action="#"
          onSubmit={this.handleLoginFormSubmit}>
          <TextField
            required
            error={this.validName === false}
            label="Username"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleUsernameChange}
            margin="normal">
          </TextField>
          <TextField
            required
            label="Password"
            className={classes.textField}
            type="password"
            onChange={this.handlePasswordChange}
            margin="normal">
          </TextField>
          <Button
            type="submit" 
            raised color="primary" 
            className="btn-login">
            Log in
          </Button>
        </form>
      </Paper>
    );
  }
}

export default withRouter(withStyles(styles)(LoginPage));
