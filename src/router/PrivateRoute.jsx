import { Navigate } from 'react-router-dom';
import ROUTER_URL from '../constants/routerURL';
import useAuthStore from '../store/authStore';

// 로그인한 사용자만 접근 가능
// 로그인이 되어있지 않은 사용자는 로그인 페이지로 리다이렉트
const PrivateRoute = ({ children }) => {
  const isAuthenticated = useAuthStore(state=>state.isAuthenticated)
  return isAuthenticated ? children : <Navigate to={ROUTER_URL.SIGNIN} />;
};

export default PrivateRoute;
