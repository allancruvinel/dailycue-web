import { ModeToggle } from './components/mode-toggle'
import './index.css'
import { ThemeProvider } from "@/components/theme-provider"
import { Auth } from './pages/auth/auth'
function App() {
  return (
    <ThemeProvider>
      {/* <Construction /> */}
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <div className="flex justify-center h-screen w-screen items-center">
        <Auth />
      </div>
    </ThemeProvider>
  )
}
export default App
