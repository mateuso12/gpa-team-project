import { ThemeProvider } from '@mui/material/styles'
import { theme } from './styles/theme'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@mui/material'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <CssBaseline />
    </ThemeProvider>
  )
}
