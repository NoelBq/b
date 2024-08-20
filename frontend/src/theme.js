import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  palette: {
    primary: {
      main: '#0e0d22',
      light: '#545454',
    },
    secondary: {
      main: '#ff9f24',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});
