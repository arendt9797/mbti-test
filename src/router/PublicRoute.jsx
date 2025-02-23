import { Navigate } from 'react-router-dom';
import ROUTER_URL from '../constants/routerURL';
import useIsAuthenticated from '../hooks/useIsAuthenticated';

// 로그인이 되어있지 않은 사용자만 접근 가능
// 로그인한 사용자는 홈 페이지로 리다이렉트
const PublicRoute = ({ children }) => {
  const isAuthenticated = useIsAuthenticated();
  return !isAuthenticated ? children : <Navigate to={ROUTER_URL.HOME} />;
};

export default PublicRoute;
