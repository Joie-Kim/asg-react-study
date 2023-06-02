import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import About from './screens/About';
import AuthorDetail from './screens/AuthorDetail';
import BookChapters from './screens/BookChapters';
import BookCharacters from './screens/BookCharacters';
import BookDetail from './screens/BookDetail';
import Home from './screens/Home';
import NotFound from './screens/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'author/:authorId',
        element: <AuthorDetail />,
        children: [
          {
            path: ':bookId',
            element: <BookDetail />,
            children: [
              {
                path: 'chapters',
                element: <BookChapters />,
              },
              {
                path: 'characters',
                element: <BookCharacters />,
              },
            ],
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
