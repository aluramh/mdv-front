import React, { Component } from 'react';
import {
  AppBar, FlatButton, IconButton, FontIcon,
  Drawer, MenuItem, RaisedButton, IconMenu
} from 'material-ui'
// Icons
import Menu from 'material-ui/svg-icons/navigation/menu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const styles = {
  title: { cursor: 'pointer' },
  menu: { color: 'white' }
};

const NavDrawer = ({open, handleClose, handleRequestChange}) => {
  return (
    <div>
      <Drawer
        docked={false}
        width={250}
        open={open}
        onRequestChange={handleRequestChange}>
        <MenuItem onClick={handleClose}>Menu Item</MenuItem>
        <MenuItem onClick={handleClose}>Menu Item 2</MenuItem>
      </Drawer>
    </div>
  );
}

const TopLeft = ({handleToggle}) => {
  return (
    <IconButton onClick={handleToggle}>
      <Menu color={styles.menu.color}/>
    </IconButton>
  )
}

const TopRight = (props) => {
  return (
    <IconMenu
      iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
      <MenuItem primaryText="My Account" />
      <MenuItem primaryText="Sign out" />
    </IconMenu>
  )
}

class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {
      open: false
    };
  };

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});
  handleRequestChange = (open) => this.setState({open})

  render () {
    return (
      <div>
        <AppBar
          title={<span style={styles.title}>Title</span>}
          iconElementLeft={<TopLeft handleToggle={this.handleToggle} />}
          iconElementRight={<TopRight />}>
        </AppBar>
        <NavDrawer 
          open={this.state.open}
          handleClose={this.handleClose}
          handleRequestChange={this.handleRequestChange}>
        </NavDrawer>
      </div>
    )
  }
};

export default Header;
