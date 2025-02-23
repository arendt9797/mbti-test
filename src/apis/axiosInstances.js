import axios from "axios";
import useAuthStore from "../store/authStore";

export const authApi = axios.create({
  baseURL: import.meta.env.VITE_AUTH_API_URL,
});

export const resultApi = axios.create({
  baseURL: import.meta.env.VITE_TEST_RESULT_API_URL,
});

// 인터셉터를 통해 토큰이 있다면 요청에 자동으로 추가하도록 구현
authApi.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  token && (config.headers.Authorization = `Bearer ${token}`);
  return config;
});