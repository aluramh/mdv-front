import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from './components/common/Header';
import LoginPage from './components/login/LoginPage';
import SignupPage from './components/signup/SignupPage';
import ProfilePage from './components/profile/ProfilePage';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Header></Header>
            {/* <Route path="/login" component={LoginPage}/> */}
            <Route path="/myaccount" component={ProfilePage}/>
            {/* <Route path="/signup" component={SignupPage}/> */}
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
