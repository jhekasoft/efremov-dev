import { createMuiTheme } from "@material-ui/core"
import { teal } from "@material-ui/core/colors"

const darkMode = true
const palletType = darkMode ? "dark" : "light"
const theme = createMuiTheme({
  palette: {
    type: palletType,
    primary: {
      main: teal[600],
      // contrastText: teal[200],
      light: teal[100],
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
