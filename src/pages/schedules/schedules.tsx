import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CueScheduleTipsColumns } from "./schedules-columns";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ScheduleColumnsFilters } from "./schedules-columns-filters";
import { useSearchParams } from "react-router";
import { PaginationComponent } from "@/components/pagination";
import { DataTable } from "@/components/data-table";

export type ScheduledTips = {
  id: number;
  contentText: string | null;
  sendTime: Date | null;
  status: "pendente" | "enviado" | "falhou";
  tipType: "aleatoria" | "programada";
  chat: string;
  selected?: boolean;
};
const data: ScheduledTips[] = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  contentText: `Dica ${i + 1}: Esta é uma dica de exemplo.`,
  sendTime: new Date(),
  status: i % 3 === 0 ? "pendente" : i % 3 === 1 ? "enviado" : "falhou",
  tipType: i % 2 === 0 ? "aleatoria" : "programada",
  chat: `Chat ${i + 1}`,
  selected: false,
}));

export const Schedules = () => {
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
      <h1 className="text-3xl m-4">Cronograma de envios</h1>
      <div className="w-full flex flex-row items-center justify-between">
        <ScheduleColumnsFilters handleFiltersChange={handleFiltersChange} />
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
              Remover do cronograma de envios
            </DropdownMenuItem>
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
