import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { useState } from "react";

interface ScheduleColumnsFiltersProps {
  handleFiltersChange: (status: string, content: string, chat: string) => void;
}

export const ScheduleColumnsFilters = ({
  handleFiltersChange,
}: ScheduleColumnsFiltersProps) => {
  const [filterContent, setFilterContent] = useState("");
  const [filterChat, setFilterChat] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  return (
    <div className="flex gap-4 w-full">
      <Input
        className="w-1/4"
        placeholder="filtrar por texto"
        value={filterContent}
        onChange={(e) => setFilterContent(e.target.value)}
      />
      <Input
        className="w-1/4"
        placeholder="filtrar por chat"
        value={filterChat}
        onChange={(e) => setFilterChat(e.target.value)}
      />
      <Select
        value={filterStatus}
        onValueChange={(value) => setFilterStatus(value)}
      >
        <SelectTrigger className=" max-w-48">
          <SelectValue placeholder="Seleciona o status" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Status</SelectLabel>
            <SelectItem value="pendente">Pendente</SelectItem>
            <SelectItem value="enviado">Enviado</SelectItem>
            <SelectItem value="falhou">Falhou</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button
        variant="secondary"
        onClick={() =>
          handleFiltersChange?.(filterStatus, filterContent, filterChat)
        }
      >
        <Search className="mr-2 h-4 w-4" />
        Filtrar resultados
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          setFilterContent("");
          setFilterStatus("");
          setFilterChat("");
          handleFiltersChange?.("", "", "");
        }}
      >
        Limpar filtros
      </Button>
    </div>
  );
};
