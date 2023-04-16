// ** MUI Imports
import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#ed6c02",
    },
    error: {
      main: purple[500],
    },
  },
  customColors: {
    buttonBackground: "#FFF",
    buttonText: "#FFFFFF",
  },
});
