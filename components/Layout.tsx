import React, { ReactNode } from 'react'
import clsx from 'clsx'
import { AppBar, Avatar, CssBaseline, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, makeStyles, SwipeableDrawer, Theme, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import TelegramIcon from '@material-ui/icons/Telegram'
import GitHubIcon from '@material-ui/icons/GitHub'
import HomeIcon from '@material-ui/icons/Home'
import LaptopIcon from '@material-ui/icons/Laptop'
import TimelineIcon from '@material-ui/icons/Timeline'
import DescriptionIcon from '@material-ui/icons/Description'
import CodeIcon from '@material-ui/icons/Code'
import ContactsIcon from '@material-ui/icons/Contacts'
import Link from 'next/link'
import { teal } from '@material-ui/core/colors'
import { useRouter } from "next/router"

type Props = {
  children?: ReactNode
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // flexGrow: 1,
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    // backgroundColor: theme.palette.primary.dark
  },
  toolbar: {
    paddingLeft: theme.spacing(2)
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none'
  },
  drawer: {
    flexShrink: 0,
  },
  drawerOpen: {
    width: 240
  },
  drawerPaper: {
    width: 240,
    backgroundColor: theme.palette.primary.dark
  },
  drawerContainer: {
    overflow: 'auto',
  },
  drawerList: {
    // width: 240,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingTop: 0
  },
}))

const Layout = ({ children }: Props) => {
  const classes = useStyles()
  const router = useRouter()
  const [state, setState] = React.useState({
    showDrawer: false
  })

  const toggleDrawer = () => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    // if (
    //   event &&
    //   event.type === 'keydown' &&
    //   ((event as React.KeyboardEvent).key === 'Tab' ||
    //     (event as React.KeyboardEvent).key === 'Shift')
    // ) {
    //   return;
    // }

    setState({ ...state, showDrawer: !state.showDrawer });
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar} >
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer()}>
            <MenuIcon />
          </IconButton>
          <Link href="/" passHref>
            <Typography variant="h6" color="textPrimary" component="a" className={classes.title}>
              efremov.dev
            </Typography>
          </Link>
          <IconButton color="inherit" aria-label="menu">
            <TelegramIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="menu">
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        classes={{ paper: classes.drawerPaper }}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: state.showDrawer,
        })}
        anchor="left"
        variant="persistent"
        open={state.showDrawer}
        onOpen={toggleDrawer()}
        onClose={toggleDrawer()}
      >
        <Toolbar />
        <List className={classes.drawerContainer}>
          <ListItem alignItems="flex-start" color="textPrimary">
            <ListItemAvatar>
              <Link href="/" passHref>
                <Avatar 
                  alt="Eugene Efremov"
                  src="https://avatars2.githubusercontent.com/u/1534306?s=460&v=4"
                  component="a" />
              </Link>
            </ListItemAvatar>
            <ListItemText
              primary="Eugene Efremov"
              secondary="jhekasoft"
              color="textPrimary"
            />
          </ListItem>
          <Divider />

          <Link href="/" passHref>
            <ListItem button component="a" selected={router.pathname == "/"}>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
          </Link>
          <Link href="/experience" passHref>
            <ListItem button component="a" selected={router.pathname == "/experience"}>
              <ListItemIcon><LaptopIcon /></ListItemIcon>
              <ListItemText primary="Experience" />
            </ListItem>
          </Link>
          <Link href="/timeline" passHref>
            <ListItem button component="a" selected={router.pathname == "/timeline"}>
              <ListItemIcon><TimelineIcon /></ListItemIcon>
              <ListItemText primary="Timeline" />
            </ListItem>
          </Link>
          <Link href="/publications" passHref>
            <ListItem button component="a" selected={router.pathname == "/publications"}>
              <ListItemIcon><DescriptionIcon /></ListItemIcon>
              <ListItemText primary="Publications" />
            </ListItem>
          </Link>
          <Link href="/own-projects" passHref>
            <ListItem button component="a" selected={router.pathname == "/own-projects"}>
              <ListItemIcon><CodeIcon /></ListItemIcon>
              <ListItemText primary="Own projects" />
            </ListItem>
          </Link>
          <Link href="/contact" passHref>
            <ListItem button component="a" selected={router.pathname == "/contact"}>
              <ListItemIcon><ContactsIcon /></ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItem>
          </Link>
        </List>
      </SwipeableDrawer>
      <main className={classes.content}>
        <Toolbar />
        {children}
      </main>
    </div>
  )
}

export default Layout
