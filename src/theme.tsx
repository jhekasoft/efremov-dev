import { createMuiTheme } from "@material-ui/core"
import { teal } from "@material-ui/core/colors"

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: teal[800]
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
