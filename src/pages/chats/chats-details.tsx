// import { meRequest } from "@/api/me";
// import { useQuery } from "react-query";

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

export const ChatsDetails = () => {
  // const { data: userData } = useQuery({
  //   queryKey: ["me"],
  //   queryFn: meRequest,
  // });
  return (
    <div className="flex flex-col items-center justify-center w-full p-4">
      <div className="w-full flex flex-row items-center justify-between">
        <h1 className="text-3xl m-4">Atendimento TI</h1>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-secondary">Novo Cue</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <form
              className="flex flex-col gap-1.5"
              onSubmit={() => alert("submetido")}
            >
              <DialogHeader>
                <DialogTitle>Novo Chat</DialogTitle>
                <DialogDescription>
                  Crie um novo chat para interagir com seus contatos.
                </DialogDescription>
              </DialogHeader>
              <Input placeholder="Nome do chat"></Input>
              <Input placeholder="Descrição do chat"></Input>
              <DialogFooter>
                <Button type="reset">Salvar</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <Input className="w-full mb-4" placeholder="Buscar chats..." />
      <div className="w-full flex flex-col items-center gap-0.5">
        {Array.from({ length: 60 }).map((_, index) => (
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
        ))}
      </div>
    </div>
  );
};
