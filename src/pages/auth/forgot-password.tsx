import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { AxiosError } from "axios";

export const ForgotPasswordForm = () => {
  const forgetPasswordForm = z
    .object({
      email: z.email("Email inválido"),
      repeatEmail: z.string(),
    })
    .refine((data) => data.email === data.repeatEmail, {
      message: "Os emails não coincidem",
      path: ["repeatEmail"],
    });

  type ForgotPasswordFormType = z.infer<typeof forgetPasswordForm>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormType>({
    resolver: zodResolver(forgetPasswordForm),
    defaultValues: {
      email: "",
      repeatEmail: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordFormType) => {
    try {
      //inserir recuperacao de email aqui
      console.log(data);
      toast.success(
        "caso exista esse email salvo enviaremos instruções de recuperação",
      );
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        toast.error(
          "Erro ao criar registro: " +
            (err.response?.data?.message || err.message),
        );
        return;
      }
      toast.error("Erro ao criar registro: " + (err as Error).message);
    }
  };

  return (
    <Card className="w-sm max-w-sm p-6">
      <CardHeader>
        <CardTitle className="text-secondary text-bold">Registro</CardTitle>
        <CardDescription className="text-primary">
          Insira seu email para recuperar o acesso à sua conta
          <p>
            <Link to="/login" className="text-indigo-400 underline">
              Inicio
            </Link>
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
          {errors.repeatEmail && (
            <p className="text-sm text-red-500 mt-1">
              {errors.repeatEmail.message}
            </p>
          )}
          <Input
            type="text"
            {...register("email")}
            placeholder="Email"
            className="mb-4"
          />
          <Input
            type="text"
            {...register("repeatEmail")}
            placeholder="Repetir email"
            className="mb-4"
          />
          <Button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition-colors"
          >
            Enviar email de recuperação
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ForgotPasswordForm;
