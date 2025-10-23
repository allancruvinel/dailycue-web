import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { GoogleLogin } from "@react-oauth/google"
import { Link } from "react-router"

export const RegisterForm = () => {

  return (
    <Card className="w-sm max-w-sm h-107 p-6">
      <CardHeader>
        <CardTitle className="text-secondary text-bold">Registro</CardTitle>
        <CardDescription className="text-primary">Já tem uma conta? <Link to="/login" className="text-indigo-400 underline">Faça login</Link>.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <Input type="text" placeholder="Nome" className="mb-4" />
          <Input type="email" placeholder="Email" className="mb-4" />
          <Input type="password" placeholder="Senha" className="mb-4" />
          <Input type="password" placeholder="Confirme a Senha" className="mb-4" />  
          <Button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition-colors">
            Criar Conta
          </Button>

          <Separator className="my-4" orientation="horizontal"/>
          <div className="flex justify-center">
            <GoogleLogin theme="filled_black" type="standard" shape="pill" text="continue_with" 
              onSuccess={credentialResponse => {
                console.log("logou com sucesso no google", credentialResponse);
              }}
              onError={() => {
                console.log('Register Failed');
              }}
            />
          </div>
          
        </form>
      </CardContent>
      
    </Card>
  )
}