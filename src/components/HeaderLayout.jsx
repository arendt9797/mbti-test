import { Link, Outlet, useNavigate } from 'react-router-dom';
import ROUTER_URL from '../constants/routerURL';
import useAuthStore from '../store/authStore';
import { useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '../constants/queryKeys';
import { logoutToast } from '../utils/toastMessages.js';

function HeaderLayout() {
  const queryClient = useQueryClient();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const clearAccessToken = useAuthStore((state) => state.clearAccessToken);
  const navigate = useNavigate();

  // 토큰을 지우고 로그아웃
  const handleLogout = () => {
    logoutToast();
    queryClient.invalidateQueries([queryKeys.USER_PROFILE]);
    clearAccessToken();

    navigate(ROUTER_URL.SIGNIN);
  };

  return (
    <>
      <div className="bg-secondary h-16 flex justify-between items-center text-md sm:text-xl text-primary font-bold px-10 ">
        <Link to={ROUTER_URL.HOME}>홈</Link>
        {isAuthenticated ? (
          <div className="flex gap-3 text-primary items-center">
            <Link to={ROUTER_URL.PROFILE}>프로필</Link>
            <Link to={ROUTER_URL.TEST}>테스트</Link>
            <Link to={ROUTER_URL.RESULTS}>결과보기</Link>
            <button
              onClick={handleLogout}
              className="bg-primary text-secondary hover:bg-secondaryHover p-2 rounded-md duration-200 ease-in-out"
            >
              로그아웃
            </button>
          </div>
        ) : (
          <div className="flex gap-3 text-primary items-center">
            <Link to={ROUTER_URL.RESULTS}>결과보기</Link>
            <Link to={ROUTER_URL.SIGNIN}>로그인</Link>
          </div>
        )}
      </div>
      <Outlet />
    </>
  );
}

export default HeaderLayout;
