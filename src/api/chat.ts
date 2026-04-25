import { api } from "@/lib/axios";

export const createChatRequest = async (chatRequest: Chat) => {
  const data = await api.post("/chats", chatRequest, { withCredentials: true });
  return data.data;
};

export interface ChatSearchParams {
  chatName?: string;
}

export const getChatListRequest = async ({
  chatName,
}: ChatSearchParams): Promise<Chat[]> => {
  const data = await api.get("/chats", {
    withCredentials: true,
    params: {
      chatName: chatName || "",
    },
  });
  return data.data.items;
};

export interface Chat {
  id?: number;
  name: string;
  description?: string;
}
