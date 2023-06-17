import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './routes/Home';
import ComingSoon from './routes/ComingSoon';
import NowPlaying from './routes/NowPlaying';
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
        path: '/coming-soon',
        element: <ComingSoon />,
      },
      {
        path: '/now-playing',
        element: <NowPlaying />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default Router;
