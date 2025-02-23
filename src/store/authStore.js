import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// `persist`를 이용하여 새로고침해도 토큰 유지
const useAuthStore = create(
  persist(
    (set) => ({
      accessToken: null,
      isAuthenticated: false,
      setAccessToken: (accessToken) =>
        set({ accessToken, isAuthenticated: !!accessToken }),
      clearAccessToken: () =>
        set({ accessToken: null, isAuthenticated: false }),
    }),
    {
      name: 'auth-storage',
    },
  ),
);

export default useAuthStore;
