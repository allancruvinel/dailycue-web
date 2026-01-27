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
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "react-router";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldLabel } from "@/components/ui/field";

export type CueRandomTips = {
  id: number;
  contentText: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  selected?: boolean;
};
const data: CueRandomTips[] = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  contentText: `Dica ${i + 1}: Esta é uma dica de exemplo.`,
  isActive: i % 2 === 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  selected: false,
}));

export const ChatsCueRandom = () => {
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
      return prev;
    });
  };

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
        <Pagination className="mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={() => handlePaginate(1 - 1)} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink onClick={() => handlePaginate(1)}>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink onClick={() => handlePaginate(2)} isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink onClick={() => handlePaginate(3)}>
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext onClick={() => handlePaginate(1 + 1)} />
            </PaginationItem>
          </PaginationContent>
          <Field orientation="horizontal" className="w-fit">
            <Select
              defaultValue="25"
              onValueChange={(e) => handlePageSizeChange(Number(e))}
            >
              <SelectTrigger className="w-20" id="select-rows-per-page">
                <SelectValue />
              </SelectTrigger>
              <SelectContent align="start">
                <SelectGroup>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="25">25</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                  <SelectItem value="100">100</SelectItem>
                  <SelectItem value="400">400</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
        </Pagination>
      </div>
    </div>
  );
};
