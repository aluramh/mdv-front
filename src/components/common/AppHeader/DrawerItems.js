import React from 'react';
import { withRouter } from 'react-router-dom'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';

const DrawerItems = ({ history }) => {
  return (
    <div>
      <List>
        <ListItem button onClick={() => history.push('/vehicles')}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Vehicles"/>
        </ListItem>

        <ListItem button onClick={() => history.push('/polizas')}>>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Polizas" />
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button component="a" href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
    </div>
  );
}

export default withRouter(DrawerItems);
