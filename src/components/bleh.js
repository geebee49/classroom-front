
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Classes from "../components/classes";
import "./styles/student.css"
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import ReportSharpIcon from '@material-ui/icons/ReportSharp';
import ControlPointSharpIcon from '@material-ui/icons/ControlPointSharp';
import ChevronLeftSharpIcon from '@material-ui/icons/ChevronLeftSharp';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: "#e2f3f5",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: -5,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    height: '100vh',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
         
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
         <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
           
          </IconButton>
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose} className={clsx(classes.menuButton, {
              [classes.hide]: !open,
            })}>
              <ChevronLeftSharpIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
        <ListItem button key={'Edit Profile'}>
              <ListItemIcon><EditSharpIcon /></ListItemIcon>
              <ListItemText primary={'Edit Profile'} />
            </ListItem>
            <ListItem button key={'Join A Classroom'}>
              <ListItemIcon><ControlPointSharpIcon /></ListItemIcon>
              <ListItemText primary={'Join A Classroom'} />
            </ListItem>
            <ListItem button key={'Report An Issue'}>
              <ListItemIcon><ReportSharpIcon /></ListItemIcon>
              <ListItemText primary={'Report An Issue'} />
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button key={'My Account'}>
              <ListItemIcon><AccountCircleSharpIcon /></ListItemIcon>
              <ListItemText primary={'My Account'} />
            </ListItem>
            <ListItem button key={'Log Out'}>
              <ListItemIcon><ExitToAppSharpIcon /></ListItemIcon>
              <ListItemText primary={'Log Out'} />
            </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
      <div>
        <div id="student-page">
          <div className="intro">
            <img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/mammootty_1340_29-07-2016_11-43-24.jpg"  alt="Greatest actor after mohanlal" width="50px" height=" 50px"/>
            <h2>Welcome Mammooka</h2>
          </div>
          </div>
        <Classes />
      </div>
    </main>
    </div>
    
  );
  
}