import { ToastContainer, Slide } from 'react-toastify';
import Router from './router/Router';

function App() {
  return (
    <>
      <Router />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick={false}
        draggable
        pauseOnHover
        pauseOnFocusLoss={false}
        theme="light"
        transition={Slide}
        limit={3}
      />
    </>
  );
}

export default App;
