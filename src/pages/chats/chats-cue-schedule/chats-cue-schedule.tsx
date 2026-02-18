import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CueScheduleTipsColumns } from "./cue-columns";
import { DataTable } from "../../../components/data-table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CueColumnsFilters } from "./cue-columns-filters";
import { useSearchParams } from "react-router";
import { PaginationComponent } from "@/components/pagination";

export type CueScheduleTips = {
  id: number;
  contentText: string | null;
  frequency: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  selected?: boolean;
};
const data: CueScheduleTips[] = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  contentText: `Dica ${i + 1}: Esta é uma dica de exemplo.`,
  isActive: i % 2 === 0,
  frequency: i % 2 === 0 ? "15 em 15 min" : "domingos as 12h",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  selected: false,
}));

export const ChatsCueSchedule = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [rowIndexSelection, setRowIndexSelection] = useState({});
  const lineSelected = data.filter((item) => item.selected).length;

  const handlePaginate = (page: number) => {
    setSearchParams((prev) => {
      prev.set("page", page.toString());
      return prev;
    });
  };

  const handlePageSizeChange = (pageSize: number) => {
    setSearchParams((prev) => {
      prev.set("pageSize", pageSize.toString());
      prev.set("page", "1");
      return prev;
    });
  };

  const handleFiltersChange = (status: string, content: string) => {
    setSearchParams((prev) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      content ? prev.set("content", content) : prev.delete("content");
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      status ? prev.set("status", status) : prev.delete("status");
      return prev;
    });
  };

  return (
    <div className="flex flex-col items-start justify-center w-full p-4">
      <div className="w-full flex flex-row items-center justify-between">
        <CueColumnsFilters handleFiltersChange={handleFiltersChange} />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              disabled={lineSelected === 0}
              variant="default"
              className="h-8  p-2"
            >
              <span>
                {lineSelected} cue{lineSelected > 1 && "s"} selecionado(s)
              </span>
            </Button>
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
      <div className="w-full mx-auto mt-4">
        <DataTable
          columns={CueScheduleTipsColumns}
          data={data}
          rowSelection={rowIndexSelection}
          onRowSelectionChange={setRowIndexSelection}
        />
        <PaginationComponent
          className="mt-4"
          currentPage={
            searchParams.get("page") ? parseInt(searchParams.get("page")!) : 1
          }
          totalPages={10}
          onPageChange={handlePaginate}
          onPageSizeChange={handlePageSizeChange}
        />
      </div>
    </div>
  );
};
