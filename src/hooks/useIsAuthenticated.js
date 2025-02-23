import useAuthStore from "../store/authStore";

const useIsAuthenticated = () => {
  const accessToken = useAuthStore((state) => state.accessToken);
  return !!accessToken;
};

export default useIsAuthenticated;
