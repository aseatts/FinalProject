import { cyan500, deepPurple500, white } from "@material-ui/core/colors";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
// import Typography from "material-ui/styles/typography";

export const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000"
    }
  }
});
export default createMuiTheme;
