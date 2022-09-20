import { ThemeProvider } from '@mui/material/styles'
import { theme } from './styles/theme'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import GpaProvider from './providers/gpa'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GpaProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </GpaProvider>
      <CssBaseline />
    </ThemeProvider>
  )
}
