// import { meRequest } from "@/api/me";
// import { useQuery } from "react-query";

import { NavLink } from "@/components/nav-link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";
import { useState } from "react";
import { Outlet } from "react-router";

export const ChatsDetailsLayout = () => {
  // const { data: userData } = useQuery({
  //   queryKey: ["me"],
  //   queryFn: meRequest,
  // });

  const [newRandomCues, setNewRandomCues] = useState<string[]>([]);
  const [inputRandomCuesText, setInputRandomCuesText] = useState("");

  const [inputScheduleCueText, setInputScheduleCueText] = useState("");

  const handleAddRandomCues = (cuesText: string) => {
    setInputRandomCuesText(cuesText);
    if (!cuesText.includes("\n")) return;

    const cues = cuesText
      .split(/\r?\n/)
      .map((cue) => cue.trim())
      .filter(Boolean);
    setNewRandomCues((prev) => [...prev, ...cues]);
    setInputRandomCuesText("");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full p-4">
      <div className="w-full flex flex-row items-center justify-between">
        <h1 className="text-3xl m-4">Atendimento TI</h1>

        <div className="flex gap-1.5">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-secondary">+ Cue Programado</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <form
                className="flex flex-col gap-1.5"
                onSubmit={(e) => e.preventDefault()}
              >
                <DialogHeader>
                  <DialogTitle>Novo Cue</DialogTitle>
                  <DialogDescription>
                    Crie um novo cue para interagir com seus contatos.
                  </DialogDescription>
                </DialogHeader>
                <Textarea
                  value={inputScheduleCueText}
                  onChange={(e) => setInputScheduleCueText(e.target.value)}
                  className="min-h-24"
                  placeholder="insira a frase do cue programado aqui"
                ></Textarea>
                <Separator className="my-4" />
                <RadioGroup defaultValue="single-send" className="w-fit">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="single-send" id="r1" />
                    <Label htmlFor="r1">Enviar uma única vez</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="daily-send" id="r2" />
                    <Label htmlFor="r2">Repetir diariamente</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="weekly-send" id="r3" />
                    <Label htmlFor="r3">Repetir semanalmente</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="monthly-send" id="r4" />
                    <Label htmlFor="r4">Repetir mensalmente</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="custom-send" id="r5" />
                    <Label htmlFor="r5">Personalizado</Label>
                  </div>
                </RadioGroup>
                <Separator className="my-4" />

                <Label htmlFor="schedule">
                  Escolha a data e hora para o envio do cue programado
                </Label>

                <Input id="schedule" type="datetime-local" className="w-full" />
                <Separator className="my-4" />

                <DialogFooter>
                  <Button type="submit">Salvar</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-secondary">+ Cue Aleatório</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <form
                className="flex flex-col gap-1.5"
                onSubmit={(e) => e.preventDefault()}
              >
                <DialogHeader>
                  <DialogTitle>Novo Cue</DialogTitle>
                  <DialogDescription>
                    Crie um novo cue para interagir com seus contatos.
                  </DialogDescription>
                </DialogHeader>
                <Card className="bg-transparent border-dashed border-2 border-secondary w-full flex flex-col gap-2 p-4 overflow-auto h-40">
                  {newRandomCues.map((cue, index) => (
                    <Badge key={index}>
                      {cue}
                      <Button
                        className="w-0 h-0"
                        onClick={() => {
                          setNewRandomCues((prev) =>
                            prev.filter((_, i) => i !== index),
                          );
                        }}
                      >
                        <X className="ml-2 cursor-pointer" />
                      </Button>
                    </Badge>
                  ))}
                </Card>
                <Textarea
                  value={inputRandomCuesText}
                  onChange={(e) => handleAddRandomCues(e.target.value)}
                  className="min-h-24"
                  placeholder="insira as frases aleatórias separadas por ; (ponto e vírgula)"
                ></Textarea>
                <DialogFooter>
                  <Button type="submit">Salvar</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
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
