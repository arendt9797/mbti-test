import { Outlet } from 'react-router-dom';

function HeaderLayout() {
  return (
    <>
      <div>HeaderLayout</div>
      <Outlet />
    </>
  );
}

export default HeaderLayout;
