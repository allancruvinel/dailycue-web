import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

interface ChatFiltersProps {
  handleFiltersChange: (chatName: string) => void;
  className?: string;
}

export const ChatFilters = ({
  handleFiltersChange,
  className,
}: ChatFiltersProps) => {
  const [filterChatName, setFilterChatName] = useState("");

  return (
    <div className={`flex gap-4 w-full ${className}`}>
      <Input
        className="w-full"
        placeholder="filtrar por nome do chat"
        value={filterChatName}
        onChange={(e) => setFilterChatName(e.target.value)}
      />

      <Button
        variant="secondary"
        onClick={() => handleFiltersChange?.(filterChatName)}
      >
        <Search className="mr-2 h-4 w-4" />
        Filtrar resultados
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          setFilterChatName("");
          handleFiltersChange?.("");
        }}
      >
        Limpar filtros
      </Button>
    </div>
  );
};
