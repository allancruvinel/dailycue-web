import { LoginForm } from "./login-form"
import LogoSemBackground from '@/assets/dailycue_no_background.png'

export const Auth = () => {
  return (
    <div className="flex w-full gap-10 items-center justify-between">
      <img className="w-1/2" src={LogoSemBackground} alt="DailyCue Logo" />
      <div className="flex-1 flex items-center justify-center">
      <LoginForm />
      </div>
      
    </div>
  )
}