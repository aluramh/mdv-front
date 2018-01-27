import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// Components
import Header from './components/common/AppHeader';
import LoginPage from './components/login/LoginContainer';
import Home from './components/home/Home'
import ProfilePage from './components/profile/ProfilePageContainer';
import VehiclesPage from './components/vehicles/VehiclesPage';

import { styles, AppTheme as theme } from './AppThemes'
import { withStyles } from 'material-ui/styles';

// For Redux store
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import raseApp from './redux/reducers'

let store = createStore(raseApp)

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <div className={classes.root}>
            <main className={classes.content}>
              <Router>
                <div>
                  <Header classes={classes}></Header>
                  <Route path="/" exact component={Home} />
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/profile" component={ProfilePage}/>
                    <Route path="/vehicles" component={VehiclesPage} />
                </div>
              </Router>
            </main>
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
// NOTE: For themes, need to user "withStyles" in each of the components in which it is needed.