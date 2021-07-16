import { createTheme } from "@material-ui/core/styles";
import palette from "./palette";
import typography from "./typography";

const theme = createTheme({
  palette,
  typography,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  spacing: 5,
});

export default theme;
