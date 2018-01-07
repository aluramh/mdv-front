import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from './components/common/AppHeader';
// import LoginPage from './components/login/LoginPage';
// import SignupPage from './components/signup/SignupPage';
import ProfilePage from './components/profile/ProfilePage';
import theme from './AppThemes'
import { withStyles } from 'material-ui/styles';

const drawerWidth = 250;

const styles = theme => ({
  root: {
    width: '100%',
    height: 'auto',
    minHeight: '430px',
    // marginTop: theme.spacing.unit * 3,
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    // position: 'relative',
    // display: 'flex',
    // width: '100%',
    height: '100%',
    minHeight: '430px'
  },
  appBarText: {
    flex: 1
  },
  drawerButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
  },
  drawerHeader: theme.mixins.toolbar,
  drawerList: {
    width: drawerWidth
  },
  content: {
    backgroundColor: theme.palette.background.default,
    // width: '100%',
    padding: theme.spacing.unit * 3,
    minHeight: '430px',
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <Header classes={classes}></Header>
            <main className={classes.content}>
              <Router>
                {/* <Route path="/login" component={LoginPage}/> */}
                {/* <PropsRoute path='/allbooks' component={Books} booksGetter={getAllBooks}></PropsRoute> */}
                <Route path="/" render={routeProps => <ProfilePage classes={classes} />}/>
                {/* <Route path="/signup" component={SignupPage}/> */}
              </Router>
            </main>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
