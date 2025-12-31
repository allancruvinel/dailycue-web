import { createBrowserRouter } from "react-router";
import { AuthLayout } from "./pages/_layouts/auth";
import { Construction } from "./pages/construction/construction";
import { ErrorPage } from "./pages/error";
import { LoginForm } from "./pages/auth/login-form";
import { RegisterForm } from "./pages/auth/register-form";
import { NotFoundPage } from "./pages/not-found";
import { AppLayout } from "./pages/_layouts/app";
import { Dashboard } from "./pages/dashboard/dashboard";
import { Chats } from "./pages/chats/chats";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Construction /> },
      { path: "/login", element: <LoginForm /> },
      { path: "/register", element: <RegisterForm /> },
    ],
  },
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Construction /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/chats", element: <Chats /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);
