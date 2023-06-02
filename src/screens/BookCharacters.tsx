import { useOutletContext } from 'react-router-dom';
import { IBook } from '../db';

type IBookCharactersContext = IBook;

const BookCharacters = () => {
  const bookInfo = useOutletContext<IBookCharactersContext>();

  return (
    <div>
      <h3>Characters</h3>
      <ul>
        {bookInfo.characters.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookCharacters;
