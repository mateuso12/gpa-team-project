import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#004878',
    },
    secondary: {
      main: '#409A3C',
    },
    grey: {
      600: '#66605E',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    h1: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: '42px',
      color: '#26272A',
      letterSpacing: '-0.015em',
    },
    h2: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: '26px',
      color: '#26272A',
      letterSpacing: '0.15em',
    },
    h3: {
      fontSize: '0.875rem',
      fontWeight: 400,
      color: '#26272A',
    },
    subtitle1: {
      fontSize: '0.75rem',
      fontWeight: 400,
    },
  },
})
