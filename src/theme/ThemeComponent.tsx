import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface CustomColors {
    buttonBackground: string;
    buttonText: string;
    // Add more custom colors as needed
  }

  interface Theme {
    customColors: CustomColors;
  }

  interface ThemeOptions {
    customColors?: CustomColors;
  }
}

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
