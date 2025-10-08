import { ModeToggle } from './components/mode-toggle'
import { Button } from './components/ui/button'
import './index.css'
import { ThemeProvider } from "@/components/theme-provider"
function App() {
  return (
    <ThemeProvider>
      <div className="flex justify-center h-screen w-screen items-center">
        <p>Inicial</p>
        <ModeToggle />
        <Button className="" >Click me</Button>
      </div>
    </ThemeProvider>
  )
}
export default App
