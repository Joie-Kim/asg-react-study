import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './routes/Home';
import NotFound from './routes/NotFound';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default Router;
