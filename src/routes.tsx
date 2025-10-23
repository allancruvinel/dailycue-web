import { createBrowserRouter } from "react-router"
import { AuthLayout } from './pages/_layouts/auth'
import { Construction } from "./pages/construction/construction"
import { ErrorPage } from "./pages/error"
import { LoginForm } from "./pages/auth/login-form"
import { RegisterForm } from "./pages/auth/register-form"

export const routes = createBrowserRouter([
    {path: '/', element: <AuthLayout />, errorElement: <ErrorPage />, children: 
        [
            {path: '/', element: <Construction />},
            {path: '/login', element: <LoginForm />},
            {path: '/register', element: <RegisterForm />}
        ]}
    
])