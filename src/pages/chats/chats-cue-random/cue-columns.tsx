import type { ColumnDef } from "@tanstack/react-table";
import type { CueRandomTips } from "./chats-cue-random";
import { Checkbox } from "@/components/ui/checkbox";

export const cueRandomTipsColumns: ColumnDef<CueRandomTips>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
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
    accessorKey: "isActive",
    header: "Situação",
    cell: ({ row }) => <div>{row.original.isActive ? "Ativo" : "Inativo"}</div>,
  },
];
