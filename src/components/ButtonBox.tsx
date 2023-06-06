import { ICountry } from '@/types/country';

interface Props {
  category: ICountry['category'];
  onChange: (ctg: ICountry['category']) => void;
  onDelete: () => void;
}

const ButtonBox = ({ category, onChange, onDelete }: Props) => {
  switch (category) {
    case 'Wish':
      return (
        <span>
          <button onClick={() => onChange('Visited')}>Visited</button>
          <button onClick={onDelete}>Delete</button>
        </span>
      );
    case 'Visited':
      return (
        <span>
          <button onClick={() => onChange('Prefer')}>Prefer</button>
          <button onClick={() => onChange('Wish')}>Wish</button>
        </span>
      );
    case 'Prefer':
      return (
        <span>
          <button onClick={() => onChange('Visited')}>Visited</button>
        </span>
      );
  }
};

export default ButtonBox;
