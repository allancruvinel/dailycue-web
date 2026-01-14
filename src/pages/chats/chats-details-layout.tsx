// import { meRequest } from "@/api/me";
// import { useQuery } from "react-query";

import { NavLink } from "@/components/nav-link";
import { Button } from "@/components/ui/button";
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
import { Outlet } from "react-router";

export const ChatsDetailsLayout = () => {
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
                <DialogTitle>Novo Cue</DialogTitle>
                <DialogDescription>
                  Crie um novo cue para interagir com seus contatos.
                </DialogDescription>
              </DialogHeader>
              <Input placeholder="Nome do cue"></Input>
              <Input placeholder="Descrição do cue"></Input>
              <DialogFooter>
                <Button type="reset">Salvar</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <nav className="w-full">
        <ul className="flex space-x-4 border-b pb-2 mb-4">
          <li>
            <NavLink to="/chats/:id/cueschedules">Cues Programados</NavLink>
          </li>
          <li>
            <NavLink to="/chats/:id/cuerandom">Cues Aleatórios</NavLink>
          </li>
          <li>
            <NavLink to="/chats/:id/settings">Configurações</NavLink>
          </li>
        </ul>
      </nav>
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
};
