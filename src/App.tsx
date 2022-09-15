import { ThemeProvider } from '@mui/material'
import { FreightManagement } from './pages/freightManagement'
import { theme } from './styles/theme'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <FreightManagement />
    </ThemeProvider>
  )
}
