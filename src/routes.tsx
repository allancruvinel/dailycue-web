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
import { Cues } from "./pages/cues/cues";
import { Schedules } from "./pages/schedules/schedules";
import { Configuracoes } from "./pages/configuracoes/configuracoes";
import { Subscription } from "./pages/subscription/subscription";
import { ChatsDetailsLayout } from "./pages/chats/chats-details-layout";
import { ChatsCueSchedule } from "./pages/chats/chats-cue-schedule/chats-cue-schedule";
import { ChatsCueRandom } from "./pages/chats/chats-cue-random/chats-cue-random";
import { ChatsSettings } from "./pages/chats/chats-settings";

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
      {
        path: "/chats/:id",
        element: <ChatsDetailsLayout />,
        children: [
          {
            path: "/chats/:id/cueschedules",
            element: <ChatsCueSchedule />,
          },
          {
            path: "/chats/:id/cuerandom",
            element: <ChatsCueRandom />,
          },
          {
            path: "/chats/:id/settings",
            element: <ChatsSettings />,
          },
        ],
      },
      { path: "/cues", element: <Cues /> },
      { path: "/schedules", element: <Schedules /> },
      { path: "/settings", element: <Configuracoes /> },
      { path: "/subscription", element: <Subscription /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);
