import { api } from "@/lib/axios";

export interface MeResponse {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

export const meRequest = async (): Promise<MeResponse> => {
  const response = await api.get<MeResponse>("/me", {
    withCredentials: true,
  });
  return response.data;
};
