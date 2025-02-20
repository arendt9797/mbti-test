import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HeaderLayout from '../components/HeaderLayout';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Test from '../pages/Test';
import Results from '../pages/Results';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/profile', element: <Profile /> },
      { path: '/test', element: <Test /> },
      { path: '/results', element: <Results /> },
      { path: '/signin', element: <SignIn /> },
      { path: '/signup', element: <SignUp /> },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
