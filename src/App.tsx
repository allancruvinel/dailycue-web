import { ModeToggle } from './components/mode-toggle'
import './index.css'
import { ThemeProvider } from "@/components/theme-provider"
import {RouterProvider} from 'react-router'
import { routes } from './routes'
function App() {
  return (
    <ThemeProvider>
      {/* <Construction /> */}
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <div className="flex justify-center h-screen w-screen items-center">
        <RouterProvider router={routes} />
      </div>
    </ThemeProvider>
  )
}
export default App
