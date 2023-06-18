import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './styles/globalStyle.ts';
import Header from './components/Header.tsx';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0px 20px;
  margin: 0 auto;
  max-width: 700px;
`;

const ContentsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  padding: 10px 0;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <ContentsContainer>
        <Outlet />
      </ContentsContainer>
    </Container>
  );
}

export default App;
