import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export const Configuracoes = () => (
  <div className="flex flex-col items-start justify-center w-full p-4">
    <h1 className="text-3xl m-4">Configurações</h1>
    <Separator className="w-full my-4" />
    <div className="flex flex-col items-start justify-center w-200 p-4">
      <form
        className="flex flex-col gap-4 w-full"
        onSubmit={() => alert("Configurações salvas!")}
      >
        <Label className="text-2xl">Conta</Label>
        <Label htmlFor="nome">Nome</Label>
        <Input
          id="nome"
          placeholder="Nome do chat"
          defaultValue={"Allan Fellipe Cruvinel"}
          className="w-full"
        />
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          placeholder="Email do chat"
          defaultValue={"allan.cruvinel@example.com"}
          className="w-full"
        />
        <div className="flex items-center gap-3 mb-4">
          <img
            className="w-12 h-12 bg-fixed rounded-full"
            src="https://avatars.githubusercontent.com/u/14288940"
            alt="Ícone de configurações de cues"
            id="selecaoIcone"
          />
          <Label
            htmlFor="selecaoIcone"
            className="bg-secondary p-2.5 rounded-3xl"
          >
            selecionar foto
          </Label>
        </div>
        <Label htmlFor="password">Senha</Label>
        <div className="flex items-center gap-3">
          <Input
            id="password"
            type="password"
            placeholder="Senha atual"
            className="w-full"
          />
          <Input
            id="password"
            type="password"
            placeholder="Nova senha"
            className="w-full"
          />
          <Input
            id="password"
            type="password"
            placeholder="Repetir nova senha"
            className="w-full"
          />
          <Button className="self-end bg-secondary">Resetar Senha</Button>
        </div>
        <Separator className="w-full my-4" />
        <Label className="text-2xl">Preferências</Label>
        <Label htmlFor="fuso-horario">Fuso horário</Label>
        <Select defaultValue="america/sao_paulo">
          <SelectTrigger className="max-w-48 min-w-40">
            <SelectValue placeholder="Fuso horário" className="min-w-48" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fuso horário</SelectLabel>
              <SelectItem value="america/sao_paulo">
                America/Sao_Paulo
              </SelectItem>
              <SelectItem value="america/new_york">America/New_York</SelectItem>
              <SelectItem value="europe/london">Europe/London</SelectItem>
              <SelectItem value="asia/tokyo">Asia/Tokyo</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Label htmlFor="fuso-horario">Notificações</Label>
        <div className="flex gap-3">
          <Checkbox id="send_cue_active" />
          <Label htmlFor="send_cue_active">Enviar Cues</Label>
        </div>
        <Button className="self-end bg-secondary">Salvar Configurações</Button>
      </form>
    </div>
  </div>
);
