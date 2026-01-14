import { cueRandomTipsColumns } from "./cue-columns";
import { DataTable } from "./cue-data-table";

export type CueRandomTips = {
  id: number;
  contentText: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

const data: CueRandomTips[] = [
  {
    id: 1,
    contentText: "Dica 1: Mantenha seu código limpo e organizado.",
    isActive: true,
    createdAt: "2024-01-01T12:00:00Z",
    updatedAt: "2024-01-01T12:00:00Z",
  },
  {
    id: 2,
    contentText: "Dica 2: Comente seu código para melhor compreensão.",
    isActive: true,
    createdAt: "2024-01-02T12:00:00Z",
    updatedAt: "2024-01-02T12:00:00Z",
  },
  {
    id: 3,
    contentText: "Dica 3: Utilize controle de versão para gerenciar mudanças.",
    isActive: false,
    createdAt: "2024-01-03T12:00:00Z",
    updatedAt: "2024-01-03T12:00:00Z",
  },
];

export const ChatsCueRandom = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4">
      <div className="w-full flex flex-row items-center justify-between">
        <h1 className="text-3xl m-4">Chats Cue Random</h1>
      </div>
      <div className="container mx-auto">
        <DataTable columns={cueRandomTipsColumns} data={data} />
      </div>
    </div>
  );
};
