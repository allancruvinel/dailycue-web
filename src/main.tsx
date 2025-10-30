import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { env } from "./env.ts";
import queryClient from "./lib/react-query.ts";
import { QueryClientProvider } from "react-query";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId={env.VITE_GOOGLE_OAUTH_CLIENT_ID}>
        <App />
        <Toaster richColors />
      </GoogleOAuthProvider>
    </QueryClientProvider>
  </StrictMode>,
);
