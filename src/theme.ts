import { createTheme } from '@mui/material/styles';
import { grey, red, teal } from '@mui/material/colors';
import { darkScrollbar } from '@mui/material';

// Create a theme instance.
const lightTheme = createTheme({
  palette: {
    primary: {
      main: teal[500],
      light: teal[100]
    },
    background: {
      default: '#fafafa',
      paper: '#fff'
    },
    // secondary: {
    //   main: '#19857b',
    // },
    // error: {
    //   main: red.A400,
    // },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: teal[700],
      light: teal[100],
      // dark: teal[900]
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e'
    },
    // secondary: {
    //   main: '#19857b',
    // },
    // error: {
    //   main: red.A400,
    // },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: darkScrollbar()
      }
    }
  }
});

export { lightTheme, darkTheme };
