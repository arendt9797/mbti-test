import { Outlet, useLocation } from 'react-router-dom';
import ROUTER_URL from '../constants/routerURL';

function UserLayout() {
  const AUTH_TEXT = {
    SIGNIN_TEXT: '로그인',
    SIGNUP_TEXT: '회원가입',
    PROFILE_TEXT: '프로필',
  };

  const PAGE_TYPE = {
    [ROUTER_URL.SIGNIN]: AUTH_TEXT.SIGNIN_TEXT,
    [ROUTER_URL.SIGNUP]: AUTH_TEXT.SIGNUP_TEXT,
    [ROUTER_URL.PROFILE]: AUTH_TEXT.PROFILE_TEXT,
  };

  const location = useLocation();
  const pageName = Object.keys(PAGE_TYPE).find((path) =>
    location.pathname.includes(path),
  );
  const currentPage = PAGE_TYPE[pageName];

  return (
    <div className="w-1/3 p-8 m-auto mt-12 shadow-md text-center">
      <h2 className="text-title font-bold mb-8">{currentPage}</h2>
      <Outlet context={{ pageName, AUTH_TEXT }} />
    </div>
  );
}

export default UserLayout;
