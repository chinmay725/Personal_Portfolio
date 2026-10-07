import { ThemeProvider } from './context/ThemeContext'
import AppContent from './components/AppContent'

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
