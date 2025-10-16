import { createBrowserRouter } from "react-router"
import { Auth } from './pages/auth/auth'
import { Construction } from "./pages/construction/construction"

export const routes = createBrowserRouter([
    {path: '/', element: <Construction />},
    {path: '/login', element: <Auth />}
])