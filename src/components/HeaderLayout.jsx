import { Link, Outlet } from 'react-router-dom';
import ROUTER_URL from '../constants/routerURL';

function HeaderLayout() {
  return (
    <>
      <div className='bg-neutral h-16 flex justify-between items-center text-xl text-primary font-bold px-10'>
        <Link to={ROUTER_URL.HOME}>홈</Link>
        <Link to={ROUTER_URL.SIGNIN}>로그인</Link>
      </div>
      <Outlet />
    </>
  );
}

export default HeaderLayout;
