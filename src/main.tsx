import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import {env} from './env.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={env.VITE_GOOGLE_OAUTH_CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)
