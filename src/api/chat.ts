import { api } from "@/lib/axios";

export const createChatRequest = async (chatRequest: Chat) => {
  const data = await api.post("/chats", chatRequest, { withCredentials: true });
  return data.data;
};

export interface Chat {
  name: string;
  description?: string;
}
