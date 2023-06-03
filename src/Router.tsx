import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './routes/Home';
import Detail from './routes/Detail';
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
      {
        path: 'character/:id',
        element: <Detail />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default Router;
