import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { GoogleLogin } from "@react-oauth/google"
import { Link } from "react-router"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form'
import { z } from "zod"

export const LoginForm = () => {

   
  const loginForm = z.object({
    email: z.email('Email inválido'),
    password: z.string()
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .max(32, "A senha deve ter no máximo 32 caracteres")
    .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
    .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
    .regex(/[0-9]/, "A senha deve conter pelo menos um número")
    .regex(/[^A-Za-z0-9]/, "A senha deve conter pelo menos um caractere especial"),
  });

  type LoginFormType = z.infer<typeof loginForm>;

  const { register, handleSubmit,
    formState: { errors } } = useForm<LoginFormType>(
    {
      resolver: zodResolver(loginForm),
      defaultValues: {
        email: '',
        password: '',
      }
    }
  );

  const onSubmit = (data:LoginFormType) => {
    console.log(data);
    alert("Formulário enviado com sucesso!");

    
    //como seria caso não usasse o zodResolver
    // const isValid = loginForm.safeParse(data);
    // if (!isValid.success) {
    //   isValid.error.issues.forEach((issue) => {
    //     // seta erro manualmente
    //     setError(issue.path[0] as keyof LoginFormType, {
    //       type: "manual",
    //       message: issue.message,
    //     });
    //   });
    //   console.log('isValid.error.issues',isValid.error.issues);
    //   console.log('errors',errors);
    //   return;
    // }
  }

  return (
    <Card className="w-sm max-w-sm p-6">
      <CardHeader>
        <CardTitle className="text-secondary text-bold">Login</CardTitle>
        <CardDescription className="text-primary">Não tem uma conta? <Link to="/register" className="text-indigo-400 underline">Registre-se</Link>.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">
              {errors.email.message}
            </p>
          )}
          <Input type="text" {...register("email")} placeholder="Email" className="mb-4" />
          {errors.password && (
            <p className="text-sm text-red-500 mt-1">
              {errors.password.message}
            </p>
          )}
          <Input type="password" {...register("password")} placeholder="Senha" className="mb-4" />
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