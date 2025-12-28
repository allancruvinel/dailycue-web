import { api } from "@/lib/axios";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const loginRequest = async ({ email, password }: LoginRequest) => {
  const response = await api.post(
    "/login",
    { email, password },
    { withCredentials: true },
  );
  return response.data;
};

export const registerRequest = async ({
  name,
  email,
  password,
}: RegisterRequest) => {
  const response = await api.post("/register", { name, email, password });
  return response.data;
};

export const loginGoogleRequest = async (token: string) => {
  const response = await api.post(
    "/google-login",
    { token: token },
    { withCredentials: true },
  );
  return response.data;
};

export const registerGoogleRequest = async (token: string) => {
  const response = await api.post("/google-register", { token: token });
  return response.data;
};

export const logoutRequest = async () => {
  const response = await api.post("/logout", {}, { withCredentials: true });
  return response.data;
};
