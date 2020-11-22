import { createMuiTheme } from "@material-ui/core"
import { teal } from "@material-ui/core/colors"

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: teal[600],
      // contrastText: teal[200],
      // light: teal[200],
      // dark: teal[900]
    }
  },
  typography: {
    fontFamily: [
      '"Fira Sans"',
      // 'Roboto',
      'Arial',
      'sans-serif'
    ].join(',')
  }
})

export default theme
