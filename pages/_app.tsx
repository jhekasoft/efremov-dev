import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { lightTheme, darkTheme } from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import Copyright from '../src/Copyright';
import Link from '../src/Link';
import TagManager from 'react-gtm-module';
import { ListItemButton } from '@mui/material';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

function getTheme(themeMode: string): Theme {
  return themeMode === 'light' ? lightTheme : darkTheme;
}

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  // const themeMode = prefersDarkMode ? 'dark' : 'light';

  const [state, setState] = React.useState({
    open: false,
    themeMode: 'dark'
  });

  const colorMode = React.useMemo(
    () => ({
        toggleColorMode: () => {
          setState((state) => ({ ...state, themeMode: state.themeMode == 'light' ? 'dark' : 'light' }))
        }
    }),
    []
  )

  const toggleDrawer =
  (open: boolean) =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, open: open });
  };

  const menuList = [
    {title: "Experience", url: "/experience"},
    {title: "Timeline", url: "/timeline"},
    {title: "Publications", url: "/publications"},
    {title: "Projects", url: "/projects"},
    {title: "Contact", url: "/contact"}
  ];

  React.useEffect(() => {
    if (process.env.googleTagId ) {
      TagManager.initialize({ gtmId: process.env.googleTagId || '' });
    }
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{process.env.baseTitle}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta property="og:title" content={process.env.baseTitle} key="title" />
        <meta property="og:description" content="Software engineer. 🧑‍💻 Kyiv, Ukraine. 🇺🇦 Golang, TypeScript, Node.js" />
        <meta property="og:url" content="https://efremov.dev/" />
        <meta property="og:site_name" content={process.env.baseTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://efremov.dev/cover.jpg" />
      </Head>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={getTheme(state.themeMode)}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
            }}
          >
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Drawer
              anchor="left"
              open={state.open}
              onClose={toggleDrawer(false)}
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  <ListItemButton component={Link} href="/">
                    <ListItemText primary="Main" />
                  </ListItemButton>
                  {menuList.map((item, index) => (
                    <ListItemButton key={'drawer-menu-' + index} component={Link} href={item.url}>
                      <ListItemText primary={item.title} />
                    </ListItemButton>
                  ))}
                </List>
              </Box>
            </Drawer>
            <AppBar 
              color="primary"
              enableColorOnDark
              sx={{backdropFilter:"blur(8px)", backgroundColor: "rgba(0, 121, 107, 0.7)"}} // Header's blur
            >
              <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu"
                  onClick={toggleDrawer(true)}
                  sx={{ display: { sm: 'inline-flex', md: 'none' }, mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <IconButton component={Link} href="/" edge="start" color="inherit"
                  sx={{ display: { xs: 'none', sm: 'none', md: 'inline-flex' } }}
                >
                  <Avatar 
                      alt="Eugene Efremov"
                      src="https://avatars2.githubusercontent.com/u/1534306?s=460&v=4"
                      sx={{ width: 24, height: 24 }}
                  />
                </IconButton>
                <Box>
                  <Typography variant="h6" color="inherit" component={Link} href="/" sx={{ textDecoration: 'none' }}>
                    {process.env.baseTitle}
                  </Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                  {menuList.map((item, index) => (
                    <Button key={'top-menu-' + index} component={Link} href={item.url} color="inherit">
                      {item.title}
                    </Button>
                  ))}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', width: 'fit-content' }}>
                  <Divider orientation="vertical" flexItem />
                  <IconButton aria-label="Dark/Light mode" color="inherit"
                    onClick={colorMode.toggleColorMode} title="Dark/Light mode">
                    {state.themeMode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                  </IconButton>
                  <Divider orientation="vertical" flexItem />
                  <IconButton aria-label="Telegram" color="inherit"
                    href="https://t.me/jhekasoft" target="__blank" title="Telegram">
                    <TelegramIcon />
                  </IconButton>
                  <IconButton aria-label="GitHub" color="inherit"
                    href="https://github.com/jhekasoft" target="__blank" title="GitHub">
                    <GitHubIcon />
                  </IconButton>
                </Box>
              </Toolbar>
            </AppBar>

            <Toolbar variant="dense"></Toolbar> {/* For AppBar margin */}
            <Component {...pageProps} />
            <Box
              component="footer"
              sx={{
                py: 1,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) => theme.palette.action.selected
                  // theme.palette.mode === 'light'
                  //   ? theme.palette.grey[200]
                  //   : theme.palette.grey[800],
              }}
            >
              <Copyright />
            </Box>
          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  );
}
