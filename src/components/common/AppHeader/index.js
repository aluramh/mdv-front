// Contains the header, the Drawer, and the drawer's items.

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { AppBar, Toolbar, Typography, IconButton } from 'material-ui';
import Menu, { MenuItem } from 'material-ui/Menu';

// Icons
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';

import AppDrawer from './AppDrawer'


const LoggedInNav = ({open, anchorEl, handleMenu, handleClose, history}) => {
  return (
    <div>
      <IconButton
        aria-owns={open ? 'menu-appbar' : null}
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit">
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}>
          <MenuItem onClick={handleClose}><Link to="/profile">My Account</Link></MenuItem>
          <MenuItem onClick={handleClose}>Log out</MenuItem>
        </Menu>
    </div>
  )
}

class MenuAppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: true,
      anchorEl: null,
      open: false
    };
  }  

  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (e) => {
    console.log(e.target)
    this.setState({ anchorEl: null });
  };

  toggleDrawer = () => {
    this.setState({open: !this.state.open});
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const openOverflowMenu = Boolean(anchorEl);

    return (
      <div>
        <AppBar className={classes.appBar} position="fixed">
          <Toolbar>
            <IconButton 
              className={classes.drawerButton} 
              color="inherit" 
              onClick={this.toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.appBarText}>App</Typography>
            {auth
              ? <LoggedInNav 
                  open={openOverflowMenu}
                  anchorEl={anchorEl}
                  handleClose={this.handleClose}
                  handleMenu={this.handleMenu}
                  history={this.props.history}/> 
              : ''}
          </Toolbar>
        </AppBar>
        <AppDrawer
          classes={classes}
          open={this.state.open} 
          toggleDrawer={this.toggleDrawer}>
        </AppDrawer>
      </div>
    );
  }
}

export default withRouter(MenuAppBar);
