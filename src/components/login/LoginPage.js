import React, { Component } from 'react';
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { TextField, Button, Paper } from 'material-ui';

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
    console.log('logged?', this.props)

    if (this.props.isLogged === true) {
      console.log('user is logged. redirecting...')
      this.props.history.push('/profile')
    }
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
  
    axios.post('http://localhost:3000/login', formData).then(res => {
      const userData = res.data.data
      console.log('Successful login.', userData)

      this.props.setUser(userData)
      this.props.history.push('/profile')
    }).catch(e => {
      console.error(e)
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

export default withRouter(LoginPage);
