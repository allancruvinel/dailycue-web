import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { GoogleLogin } from "@react-oauth/google"
import { Link, useNavigate } from "react-router"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { useMutation } from "react-query"
import { registerGoogleRequest, registerRequest } from "@/api/auth"
import { toast } from "sonner"
import { AxiosError } from "axios"

export const RegisterForm = () => {
  const navigate = useNavigate();

  const registerForm = z.object({
    name: z.string().min(2, "O nome deve ter no mínimo 2 caracteres").max(50, "O nome deve ter no máximo 50 caracteres"),  
    email: z.email('Email inválido'),
    password: z.string()
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .max(32, "A senha deve ter no máximo 32 caracteres")
    .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
    .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
    .regex(/[0-9]/, "A senha deve conter pelo menos um número")
    .regex(/[^A-Za-z0-9]/, "A senha deve conter pelo menos um caractere especial"),
    confirmPassword: z.string().min(8, "A senha deve ter no mínimo 8 caracteres")
    .max(32, "A senha deve ter no máximo 32 caracteres")
    .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
    .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
    .regex(/[0-9]/, "A senha deve conter pelo menos um número")
    .regex(/[^A-Za-z0-9]/, "A senha deve conter pelo menos um caractere especial"),
    }).refine((data) => data.password === data.confirmPassword, {
      message: "As senhas não coincidem",
      path: ["confirmPassword"],
    });

  type RegisterFormType = z.infer<typeof registerForm>;

  const { register, handleSubmit,
    formState: { errors } } = useForm<RegisterFormType>(
    {
      resolver: zodResolver(registerForm),
      defaultValues: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      }
    }
  );

  const { mutateAsync: registerRequestfn,isLoading: isRegisteringForm } = useMutation({
    mutationFn: registerRequest,
    onSuccess: () => {
      navigate('/login', {replace: true});
    }
  });
  const { mutateAsync: registerGoogleRequestfn } = useMutation({
    mutationFn: registerGoogleRequest,
    onSuccess: () => {
      navigate('/login', {replace: true});
    }
  });

  const onSubmit = async (data:RegisterFormType) => {
    try {
      await registerRequestfn(data);
      toast.success("Registro realizado com sucesso!");
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        toast.error("Erro ao criar registro: " + (err.response?.data?.message || err.message));
        return;
      }
      toast.error("Erro ao criar registro: " + (err as Error).message);
    }
  }

  const onGoogleRegister = async (token: string) => {
    try {
      await registerGoogleRequestfn(token);
      toast.success("Registro com Google realizado com sucesso!");
    } catch (err: unknown) {
          if (err instanceof AxiosError) {
            toast.error("Erro ao registrar com Google: " + (err.response?.data?.message || err.message));
            return;
          }
          toast.error("Erro ao registrar com Google: " + (err as Error).message);
        }
  }

  return (
    <Card className="w-sm max-w-sm p-6">
      <CardHeader>
        <CardTitle className="text-secondary text-bold">Registro</CardTitle>
        <CardDescription className="text-primary">Já tem uma conta? <Link to="/login" className="text-indigo-400 underline">Faça login</Link>.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">
              {errors.name.message}
            </p>
          )}
          <Input type="text" {...register("name")} placeholder="Nome" className="mb-4" />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">
              {errors.email.message}
            </p>
          )}
          <Input type="text" {...register('email')} placeholder="Email" className="mb-4" />
          {errors.password && (
            <p className="text-sm text-red-500 mt-1">
              {errors.password.message}
            </p>
          )}
          <Input type="password" {...register('password')} placeholder="Senha" className="mb-4" />
          {errors.confirmPassword && (
            <p className="text-sm text-red-500 mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
          <Input type="password" {...register('confirmPassword')} placeholder="Confirme a Senha" className="mb-4" />  
          <Button disabled={isRegisteringForm} type="submit" className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition-colors">
            Criar Conta
          </Button>

          <Separator className="my-4" orientation="horizontal"/>
          <div className="flex justify-center">
            <GoogleLogin theme="filled_black" type="standard" shape="pill" text="continue_with" 
              onSuccess={async credentialResponse => {
                console.log("logou com sucesso no google", credentialResponse);
                await onGoogleRegister(credentialResponse.credential!);
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