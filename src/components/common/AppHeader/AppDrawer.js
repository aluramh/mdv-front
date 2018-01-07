import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';

import DrawerItems from './DrawerItems'

class AppDrawer extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    toggleDrawer: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
  }

  render () {
    const { classes, open, toggleDrawer } = this.props;

    return (
      <div>
        <Drawer open={open} onClose={toggleDrawer}
          classes={{
            paper: classes.drawerPaper
          }}
          className={classes.drawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}>
            <DrawerItems classes={classes} />
          </div>
        </Drawer>
      </div>
    );
  }
}

export default AppDrawer;
