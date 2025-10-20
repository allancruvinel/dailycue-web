import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { GoogleLogin } from "@react-oauth/google"

export const LoginForm = () => {

  return (
    <Card className="w-sm max-w-sm h-82 p-6">
      <CardHeader>
        <CardTitle className="text-secondary text-bold">Login</CardTitle>
        <CardDescription className="text-primary">Por favor, entre com sua conta</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <Input type="email" placeholder="Email" className="mb-4" />
          <Input type="password" placeholder="Senha" className="mb-4" />
          <Button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition-colors">
            Entrar
          </Button>

          <Separator className="my-4" orientation="horizontal"/>
          <div className="flex justify-center">
            <GoogleLogin theme="filled_black" type="standard" shape="pill"
              onSuccess={credentialResponse => {
                console.log("logou com sucesso no google", credentialResponse);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
          </div>
          
        </form>
      </CardContent>
      
    </Card>
  )
}