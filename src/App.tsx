import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './globalStyle.ts';

function App() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
}

export default App;
