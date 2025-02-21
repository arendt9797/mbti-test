import { Outlet, useLocation } from 'react-router-dom';
import ROUTER_URL from '../constants/routerURL';

function UserLayout() {
  const FORM_TYPE = {
    SIGNIN_TEXT: '로그인',
    SIGNUP_TEXT: '회원가입',
    PROFILE_TEXT: '프로필',
  };

  const routes = {
    [ROUTER_URL.SIGNIN]: ROUTER_URL.SIGNIN,
    [ROUTER_URL.SIGNUP]: ROUTER_URL.SIGNUP,
    [ROUTER_URL.PROFILE]: ROUTER_URL.PROFILE,
  };

  const location = useLocation();
  const currentPage = Object.keys(routes).find((key) =>
    location.pathname.includes(key),
  );

  let message;
  if (currentPage === ROUTER_URL.PROFILE) {
    message = FORM_TYPE.PROFILE_TEXT;
  } else if (currentPage === ROUTER_URL.SIGNIN) {
    message = FORM_TYPE.SIGNIN_TEXT;
  } else {
    message = FORM_TYPE.SIGNUP_TEXT;
  }

  return (
    <div className="w-1/3 p-8 m-auto mt-12 shadow-md text-center">
      <h2 className="text-title font-bold mb-8">{message}</h2>
      <Outlet context={{ currentPage, FORM_TYPE }} />
    </div>
  );
}

export default UserLayout;
