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
import { Container, useMediaQuery } from '@mui/material';
import TagManager from 'react-gtm-module';

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
    TagManager.initialize({ gtmId: 'GTM-PDXCN6D' });
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Efremov.dev</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
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
                <ListItem button component={Link} href="/">
                    <ListItemText primary="Main" />
                  </ListItem>
                  {menuList.map((item, index) => (
                    <ListItem key={'drawer-menu-' + index} button component={Link} href={item.url}>
                      <ListItemText primary={item.title} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
            <AppBar position="static" color="primary" enableColorOnDark>
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
                  <Typography variant="h6" color="inherit" component={Link} href="/">
                    efremov.dev
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
