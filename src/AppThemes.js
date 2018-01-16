import { createMuiTheme } from 'material-ui/styles';
import {red, green} from 'material-ui/colors';
const drawerWidth = 250;

const AppTheme = createMuiTheme({
  palette: {
    primary: red,
    secondary: green,
  }
});

// Styles for items in the app.
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
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
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

export { AppTheme, styles };
