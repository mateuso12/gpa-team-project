import { ThemeProvider } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from 'react-query'
import { theme } from './styles/theme'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@mui/material'

const queryClient = new QueryClient()

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </QueryClientProvider>
      <CssBaseline />
    </ThemeProvider>
  )
}
