import { createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: teal[600],
      light: teal[100]
    },
    background: {
      paper: teal[900]
    },
    // secondary: {
    //   main: '#19857b',
    // },
    // error: {
    //   main: red.A400,
    // },
  },
});

export default theme;
