import type { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import type { ScheduledTips } from "./schedules";

export const CueScheduleTipsColumns: ColumnDef<ScheduledTips>[] = [
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
    accessorKey: "sendTime",
    header: "Hora de Envio",
    cell: ({ row }) => <div>{row.original.sendTime?.toLocaleString()}</div>,
    enableSorting: true,
  },
  {
    accessorKey: "status",
    header: "Situação",
    cell: ({ row }) => (
      <div>
        {row.original.status === "pendente"
          ? "Pendente"
          : row.original.status === "enviado"
            ? "Enviado"
            : "Falhou"}
      </div>
    ),
  },
  {
    accessorKey: "tipType",
    header: "Tipo de Dica",
    cell: ({ row }) => (
      <div>
        {row.original.tipType === "aleatoria" ? "Aleatória" : "Programada"}
      </div>
    ),
  },
  {
    accessorKey: "chat",
    header: "Chat",
    cell: ({ row }) => <div>{row.original.chat}</div>,
  },
];
