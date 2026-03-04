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
import { Textarea } from "@/components/ui/textarea";

export const ChatsCueSettings = () => {
  return (
    <div className="flex flex-col items-start justify-center w-200 p-4">
      <div className="flex items-center gap-3 mb-4">
        <img
          className="w-12 h-12 bg-fixed rounded-l-2xl"
          src="https://cdn-icons-png.flaticon.com/512/6541/6541074.png"
          alt="Ícone de configurações de cues"
          id="selecaoIcone"
        />
        <Label htmlFor="selecaoIcone">selecionar icone</Label>
      </div>
      <form
        className="flex flex-col gap-4 w-full"
        onSubmit={() => alert("Configurações salvas!")}
      >
        <Input placeholder="Nome do chat" className="w-full" />
        <Textarea
          placeholder="Descrição do chat"
          className="resize-none min-h-30"
        />
        <div className="flex items-center gap-3">
          <Select>
            <SelectTrigger className="max-w-48 min-w-40">
              <SelectValue placeholder="Plataforma" className="min-w-48" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Plataforma</SelectLabel>
                <SelectItem value="google_chat">Google Chat</SelectItem>
                <SelectItem value="microsoft_teams">Microsoft Teams</SelectItem>
                <SelectItem value="slack">Slack</SelectItem>
                <SelectItem value="discord">Discord</SelectItem>
                <SelectItem value="telegram">Telegram</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input placeholder="URL de envio do webhook" className="w-full" />
          <Button className="self-end">testar</Button>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-3">
            <Checkbox id="monday" value="monday" />
            <Label htmlFor="monday">Ativar Envio de Cues aleatórios</Label>
          </div>
          <div className="flex gap-3">
            <Checkbox id="monday" value="monday" />
            <Label htmlFor="monday">Desabilitar Chat</Label>
          </div>
        </div>
        <div className="flex gap-2">
          <Label>Disparar Cue aleatório a cada</Label>
          <Input type="number" className="w-40" placeholder="minutos" />
          <Label>entre ás</Label>
          <Input type="time" className="w-40" />{" "}
          <Input type="time" className="w-40" /> <Label>começando ás</Label>{" "}
          <Input type="time" className="w-40" />
        </div>

        <p>nos seguintes dias da semana</p>
        <div className="flex items-center gap-3">
          <div className="flex gap-3">
            <Checkbox id="monday" value="monday" />
            <Label htmlFor="monday">Seg</Label>
          </div>
          <div className="flex gap-3">
            <Checkbox id="tuesday" value="tuesday" />
            <Label htmlFor="tuesday">Ter</Label>
          </div>
          <div className="flex gap-3">
            <Checkbox id="wednesday" value="wednesday" />
            <Label htmlFor="wednesday">Qua</Label>
          </div>
          <div className="flex gap-3">
            <Checkbox id="thursday" value="thursday" />
            <Label htmlFor="thursday">Qui</Label>
          </div>
          <div className="flex gap-3">
            <Checkbox id="friday" value="friday" />
            <Label htmlFor="friday">Sex</Label>
          </div>
          <div className="flex gap-3">
            <Checkbox id="saturday" value="saturday" />
            <Label htmlFor="saturday">Sáb</Label>
          </div>
          <div className="flex gap-3">
            <Checkbox id="sunday" value="sunday" />
            <Label htmlFor="sunday">Dom</Label>
          </div>
        </div>
        <Button className="w-full bg-secondary">Salvar Configurações</Button>
      </form>
    </div>
  );
};
