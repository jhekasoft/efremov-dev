import React, { ReactNode } from 'react'
import clsx from 'clsx'
// import Link from 'next/link'
import Head from 'next/head'
import { AppBar, Avatar, CssBaseline, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, makeStyles, SwipeableDrawer, Theme, ThemeProvider, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import TelegramIcon from '@material-ui/icons/Telegram'
import GitHubIcon from '@material-ui/icons/GitHub'
import Link from 'next/link'

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
  },
  toolbar: {
    paddingLeft: theme.spacing(2)
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    flexShrink: 0,
  },
  drawerOpen: {
    width: 240
  },
  drawerPaper: {
    width: 240,
    backgroundColor: theme.palette.primary.main
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
  },
}))

const Layout = ({ children }: Props) => {
  const classes = useStyles()
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
          <Link href="/" passHref>
            <ListItem alignItems="flex-start" color="textPrimary" component="a">
              <ListItemAvatar>
                <Avatar alt="Eugene Efremov" src="https://avatars2.githubusercontent.com/u/1534306?s=460&v=4" />
              </ListItemAvatar>
              <ListItemText
                primary="Eugene Efremov"
                secondary="jhekasoft"
                color="textPrimary"
              />
            </ListItem>
          
          </Link>
          <Divider />
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <Link href="/about" passHref key={text}>
              <ListItem button component="a">
                <ListItemIcon>{index % 2 === 0 ? <TelegramIcon /> : <TelegramIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
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
