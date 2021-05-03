import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  AppBar,Toolbar, Typography,IconButton,Drawer,List, ListItem,ListItemText, Divider,CssBaseline,ListItemIcon
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DashboardIcon from '@material-ui/icons/DashboardSharp'
import PersonIcon from '@material-ui/icons/Person';
import NewsIcon from '@material-ui/icons/CasinoSharp';
import PagesIcon from '@material-ui/icons/FileCopySharp';
import MenusIcon from '@material-ui/icons/ListSharp';
import AdvancedIcon from '@material-ui/icons/SettingsSharp';
import Students from '../../components/students';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
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
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
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
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
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
        <Toolbar>
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
          <Typography variant="h6" noWrap>
            Mini variant drawer
          </Typography>
        </Toolbar>
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
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
<List component="nav" aria-label="main mailbox folders"  >   
        <ListItem button >
            <ListItemIcon  style={{color:"#0000CD"}}>
                <DashboardIcon />
            </ListItemIcon>
         <ListItemText  primary="Dashboard" />
        </ListItem>
        <ListItem button>
            <ListItemIcon style={{color:"#0000CD"}}>
                <PersonIcon />
            </ListItemIcon>  
            <ListItemText  primary="User" />  
        </ListItem>
        <ListItem  button>
            <ListItemIcon style={{color:"#0000CD"}}>
                <NewsIcon />
            </ListItemIcon>
            <ListItemText  primary="News" />
        </ListItem>
        <ListItem  button>
            <ListItemIcon style={{color:"#0000CD"}}>
                <PagesIcon />
            </ListItemIcon>
            <ListItemText primary="Pages" />
        </ListItem>
        <ListItem  button>
            <ListItemIcon style={{color:"#0000CD"}}>
                <MenusIcon />
            </ListItemIcon>
            <ListItemText primary="Menu" />
        </ListItem>
        <ListItem  button>
            <ListItemIcon style={{color:"#0000CD"}}>
                <AdvancedIcon />
            </ListItemIcon>
            <ListItemText  primary="Advanced" />
        </ListItem>
        <ListItem  >
            <ListItemIcon >  
            </ListItemIcon>
            <ListItemText primary="" />
        </ListItem>
        <ListItem  >
            <ListItemText primary="" />
        </ListItem>
        <ListItem  >
            <ListItemIcon>     
            </ListItemIcon>
            <ListItemText primary="" />
        </ListItem>
        <ListItem  >
            <ListItemIcon>              
            </ListItemIcon>
            <ListItemText primary="" />
        </ListItem>
    </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography> */}
               <Students />
      </main>
    </div>
  );
}
