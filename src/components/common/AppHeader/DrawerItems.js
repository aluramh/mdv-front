import React from 'react';
import { withRouter } from 'react-router-dom'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import {
  DirectionsCar as CarIcon,
  ViewList as ViewListIcon
} from 'material-ui-icons';

const DrawerItems = ({ history }) => {
  return (
    <div>
      <List>
        <ListItem button onClick={() => history.push('/vehicles')}>
          <ListItemIcon>
            <CarIcon />
          </ListItemIcon>
          <ListItemText primary="Vehicles"/>
        </ListItem>

        <ListItem button onClick={() => history.push('/polizas')}>
          <ListItemIcon>
            <ViewListIcon />
          </ListItemIcon>
          <ListItemText primary="Polizas" />
        </ListItem>
      </List>
    </div>
  );
}

export default withRouter(DrawerItems);
