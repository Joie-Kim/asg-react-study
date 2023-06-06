import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './styles/globalStyle.ts';

function App() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
}

export default App;
