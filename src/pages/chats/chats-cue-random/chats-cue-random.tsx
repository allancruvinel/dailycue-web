import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cueRandomTipsColumns } from "./cue-columns";
import { DataTable } from "./cue-data-table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CueColumnsFilters } from "./cue-columns-filters";

export type CueRandomTips = {
  id: number;
  contentText: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  selected?: boolean;
};
const data: CueRandomTips[] = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  contentText: `Dica ${i + 1}: Esta é uma dica de exemplo.`,
  isActive: i % 2 === 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  selected: false,
}));

export const ChatsCueRandom = () => {
  const [rowIndexSelection, setRowIndexSelection] = useState({});
  const lineSelected = data.filter((item) => item.selected).length;
  return (
    <div className="flex flex-col items-center justify-center w-full p-4">
      <div className="w-full flex flex-row items-center justify-between">
        <CueColumnsFilters />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {lineSelected > 0 && (
              <Button variant="default" className="h-8  p-2">
                <span>
                  {lineSelected} cue{lineSelected > 1 && "s"} selecionado(s)
                </span>
              </Button>
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Opções</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => alert("Payment ID copied to clipboard")}
            >
              Ativar cues
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => alert("Payment ID copied to clipboard")}
            >
              Desativar cues
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => alert("Payment ID copied to clipboard")}
            >
              Copiar para...
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => alert("Payment ID copied to clipboard")}
            >
              Enviar para...
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Excluir</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="container mx-auto mt-4">
        <DataTable
          columns={cueRandomTipsColumns}
          data={data}
          rowSelection={rowIndexSelection}
          onRowSelectionChange={setRowIndexSelection}
        />
      </div>
    </div>
  );
};
