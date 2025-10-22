import { createBrowserRouter } from "react-router"
import { Auth } from './pages/auth/auth'
import { Construction } from "./pages/construction/construction"
import { ErrorPage } from "./pages/error"
import { AppLayout } from "./pages/_layouts/app"

export const routes = createBrowserRouter([
    {path: '/', element: <AppLayout />, errorElement: <ErrorPage />, children: 
        [
            {path: '/', element: <Construction />},
            {path: '/login', element: <Auth />}
        ]}
    
])