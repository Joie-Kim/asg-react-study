import { useOutletContext } from 'react-router-dom';
import { IBook } from '../db';

type IBookChaptersContext = IBook;

const BookChapters = () => {
  const bookInfo = useOutletContext<IBookChaptersContext>();

  return (
    <div>
      <h3>Chapters</h3>
      <ol>
        {bookInfo.chapters.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ol>
    </div>
  );
};

export default BookChapters;
