import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HeaderLayout from '../components/HeaderLayout';
import Home from '../pages/Home';
import Test from '../pages/Test';
import Results from '../pages/Results';
import AuthLayout from '../components/UserLayout';
import UserForm from '../components/UserForm';

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/test', element: <Test /> },
      { path: '/results', element: <Results /> },
      {
        element: <AuthLayout />,
        children: [
          { path: '/profile', element: <UserForm /> },
          { path: '/signin', element: <UserForm /> },
          { path: '/signup', element: <UserForm /> },
        ],
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
