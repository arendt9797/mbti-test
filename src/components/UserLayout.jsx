import { Outlet, useLocation } from 'react-router-dom';
import ROUTER_URL from '../constants/routerURL';

function UserLayout() {
  const authText = {
    SIGNIN_TEXT: '로그인',
    SIGNUP_TEXT: '회원가입',
    PROFILE_TEXT: '프로필',
  };

  const pageType = {
    [ROUTER_URL.SIGNIN]: authText.SIGNIN_TEXT,
    [ROUTER_URL.SIGNUP]: authText.SIGNUP_TEXT,
    [ROUTER_URL.PROFILE]: authText.PROFILE_TEXT,
  };

  const location = useLocation();
  const pageName = Object.keys(pageType).find((path) =>
    location.pathname.includes(path),
  );
  const currentPage = pageType[pageName];

  return (
    <div className="w-full max-w-sm p-4 sm:p-8 m-auto mt-6 sm:mt-12 shadow-md text-center">
      <h2 className="text-title font-bold mb-8">{currentPage}</h2>
      <Outlet context={{ pageName, authText }} />
    </div>
  );
}

export default UserLayout;
