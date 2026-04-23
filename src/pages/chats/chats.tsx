// import { meRequest } from "@/api/me";
// import { useQuery } from "react-query";

import { createChatRequest } from "@/api/chat";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Link } from "react-router";
import { z } from "zod";
import { toast } from "sonner";

export const Chats = () => {
  const { mutateAsync: createChatFn, isLoading: isCreatingChat } = useMutation({
    mutationFn: createChatRequest,
    onSuccess: () => {
      toast.success("Chat criado com sucesso!");
    },
  });

  const createChatForm = z.object({
    name: z.string().min(1, "O nome do chat é obrigatório"),
    description: z.string().optional(),
  });

  type CreateChatFormType = z.infer<typeof createChatForm>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateChatFormType>({
    resolver: zodResolver(createChatForm),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  return (
    <div className="flex flex-col items-center justify-center w-full p-4">
      <div className="w-full flex flex-row items-center justify-between">
        <h1 className="text-3xl m-4">Chats</h1>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-secondary">Novo Chat</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <form
              className="flex flex-col gap-1.5"
              onSubmit={handleSubmit((data) => {
                createChatFn(data);
              })}
            >
              <DialogHeader>
                <DialogTitle>Novo Chat</DialogTitle>
                <DialogDescription>
                  Crie um novo chat para interagir com seus contatos.
                </DialogDescription>
              </DialogHeader>
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
              {errors.description && (
                <p className="text-red-500 text-sm">
                  {errors.description.message}
                </p>
              )}
              <Input placeholder="Nome do chat" {...register("name")} />
              <Input
                placeholder="Descrição do chat"
                {...register("description")}
              />
              <DialogFooter>
                <Button type="submit" disabled={isCreatingChat}>
                  Salvar
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <Input className="w-full mb-4" placeholder="Buscar chats..." />
      <div className="w-full flex flex-col items-center gap-0.5">
        {Array.from({ length: 60 }).map((_, index) => (
          <Link to={`/chats/${index}`} key={index} className="w-full">
            <Card
              key={index}
              className="w-full hover:cursor-pointer border-2 border-transparent hover:border-primary transition-shadow mb-4"
            >
              <CardHeader className="flex flex-row gap-6.5 items-center">
                <img
                  className="w-12 h-12 bg-fixed rounded-full"
                  src="https://cdn-icons-png.flaticon.com/512/6541/6541074.png"
                  alt=""
                />
                <div>
                  <CardTitle className="text-primary text-bold text-2xl">
                    Nome do chat
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Sobre o que é o chat
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};
