// Contains the header, the Drawer, and the drawer's items.

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, IconButton } from 'material-ui';
import Menu, { MenuItem } from 'material-ui/Menu';
// Icons
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';

import AppDrawer from './AppDrawer'

const LoggedInNav = ({open, anchorEl, handleMenu, handleClose}) => {
  return (
    <div>
      <IconButton
        aria-owns={open ? 'menu-appbar' : null}
        aria-haspopup="true"
        onClick={handleMenu}
        color="contrast">
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
        open={open}
        onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
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

  handleClose = () => {
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
              color="contrast" 
              onClick={this.toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.appBarText}>App</Typography>
            {auth
              ? <LoggedInNav 
                  open={openOverflowMenu}
                  anchorEl={anchorEl}
                  handleClose={this.handleClose}
                  handleMenu={this.handleMenu}/> 
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

export default MenuAppBar;
