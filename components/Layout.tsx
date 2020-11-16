import React, { ReactNode } from 'react'
import clsx from 'clsx'
// import Link from 'next/link'
import Head from 'next/head'
import { AppBar, Avatar, createMuiTheme, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, makeStyles, SwipeableDrawer, Theme, ThemeProvider, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import TelegramIcon from '@material-ui/icons/Telegram'
import GitHubIcon from '@material-ui/icons/GitHub'
import teal from '@material-ui/core/colors/teal'

type Props = {
  children?: ReactNode
  title?: string
}

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: teal[800]
    }
  }
})

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
    backgroundColor: teal[900] // TODO: take color from theme
    // backgroundColor: theme.palette.primary.main
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

const Layout = ({ children, title = 'efremov.dev' }: Props) => {
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
      <ThemeProvider theme={theme}>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar} >
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer()}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              efremov.dev
            </Typography>
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
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Eugene Efremov" src="https://avatars2.githubusercontent.com/u/1534306?s=460&v=4" />
              </ListItemAvatar>
              <ListItemText
                primary="Eugene Efremov"
                secondary="jhekasoft"
              />
            </ListItem>
            <Divider />
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <TelegramIcon /> : <TelegramIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </SwipeableDrawer>
        <main className={classes.content}>
          <Toolbar />
          {children}
        </main>
      </ThemeProvider>
      <NextScript />
    </div>
  )
}

export default Layout
