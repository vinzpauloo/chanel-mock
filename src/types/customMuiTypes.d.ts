import {Theme, ThemeOptions} from '@mui/material/styles'

declare module "@mui/material/styles" {
  interface CustomColors {
    buttonBackground: string;
    buttonText: string;
    // Add more custom colors as needed
  }

  interface Theme extends Theme {
    customColors: CustomColors;
  }

  interface ThemeOptions extends ThemeOptions {
    customColors?: CustomColors;
  }
}