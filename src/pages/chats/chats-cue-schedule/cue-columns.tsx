import type { ColumnDef } from "@tanstack/react-table";
import type { CueScheduleTips } from "./chats-cue-schedule";
import { Checkbox } from "@/components/ui/checkbox";

export const CueScheduleTipsColumns: ColumnDef<CueScheduleTips>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => {
          table.getRowModel().rows.forEach((r) => {
            r.original.selected = !!value;
          });
          return table.toggleAllPageRowsSelected(!!value);
        }}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => {
          row.original.selected = !!value;
          return row.toggleSelected(!!value);
        }}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <div>{row.original.id}</div>,
  },
  {
    accessorKey: "contentText",
    header: "Conteúdo",
    cell: ({ row }) => <div>{row.original.contentText}</div>,
    enableSorting: true,
  },
  {
    accessorKey: "frequency",
    header: "Frequência",
    cell: ({ row }) => <div>{row.original.frequency}</div>,
    enableSorting: true,
  },
  {
    accessorKey: "isActive",
    header: "Situação",
    cell: ({ row }) => <div>{row.original.isActive ? "Ativo" : "Inativo"}</div>,
  },
];
