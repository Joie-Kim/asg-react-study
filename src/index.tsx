import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import Router from './Router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>
);
