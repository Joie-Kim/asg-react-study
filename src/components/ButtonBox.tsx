import { ICountry } from '@/types/country';
import styled from 'styled-components';

const Container = styled.span`
  margin-left: 16px;
  button {
    margin: 0 4px;
    padding: 0;
    width: 40px;
    height: 40px;
    font-size: 24px;
    background-color: ${(props) => props.theme.accentColor};
    border: 1px solid ${(props) => props.theme.accentColor};
    border-radius: 10px;
  }
`;

interface Props {
  category: ICountry['category'];
  onChange: (ctg: ICountry['category']) => void;
  onDelete: () => void;
}

const ButtonBox = ({ category, onChange, onDelete }: Props) => {
  return (
    <Container>
      {category === 'Wish' && (
        <>
          <button onClick={() => onChange('Visited')}>✅</button>
          <button onClick={onDelete}>🗑</button>
        </>
      )}
      {category === 'Visited' && (
        <>
          <button onClick={() => onChange('Prefer')}>👍</button>
          <button onClick={() => onChange('Wish')}>❌</button>
        </>
      )}
      {category === 'Prefer' && (
        <button onClick={() => onChange('Visited')}>👎</button>
      )}
    </Container>
  );
};

export default ButtonBox;
