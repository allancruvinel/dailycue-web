import {api} from '@/lib/axios';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
}

export const loginRequest = async ({email, password}: LoginRequest) => {
  const response = await api.post('/login', { email, password });
  return response.data;
};

export const registerRequest = async (email: string, password: string) => {
  const response = await api.post('/register', { email, password });
  return response.data;
};