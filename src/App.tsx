import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { AppRoutes } from '@/app/router'

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="app-ui-theme">
      <AppRoutes />
    </ThemeProvider>
  )
}
