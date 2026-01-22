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

export const CueColumnsFilters = () => {
  return (
    <div className="flex gap-4 w-full">
      <Input className="w-1/2" placeholder="filtrar por texto" />
      <Select>
        <SelectTrigger className=" max-w-48">
          <SelectValue placeholder="Seleciona o status" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Status</SelectLabel>
            <SelectItem value="active">Ativo</SelectItem>
            <SelectItem value="inactive">Inativo</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button type="submit" variant="secondary">
        <Search className="mr-2 h-4 w-4" />
        Filtrar resultados
      </Button>
    </div>
  );
};
