import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    button: {
      main: '#fbca7b',
      contrastText: '#fff',
    },
    buttonSecondary: {
      main: '#324f30',
      contrastText: '#fff',
    },
  },
});

export default theme;