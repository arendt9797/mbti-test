import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HeaderLayout from '../components/HeaderLayout';
import AuthLayout from '../components/UserLayout';
import Home from '../pages/Home';
import Test from '../pages/Test';
import Profile from '../pages/Profile';
import Results from '../pages/Results';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ROUTER_URL from '../constants/routerURL';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      { path: ROUTER_URL.HOME, element: <Home /> },
      { path: ROUTER_URL.TEST, element: <Test /> },
      { path: ROUTER_URL.RESULTS, element: <Results /> },
      {
        element: <AuthLayout />,
        children: [
          {
            path: ROUTER_URL.PROFILE,
            element: (
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            ),
          },
          {
            path: ROUTER_URL.SIGNIN,
            element: (
              <PublicRoute>
                <SignIn />
              </PublicRoute>
            ),
          },
          {
            path: ROUTER_URL.SIGNUP,
            element: (
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            ),
          },
        ],
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
