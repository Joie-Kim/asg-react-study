import { Link, Outlet, useOutletContext, useParams } from 'react-router-dom';
import { IBook } from '../db';

type IBookDetailContext = IBook[];

const BookDetail = () => {
  const { bookId } = useParams();
  const writtenList = useOutletContext<IBookDetailContext>();

  const bookInfo = writtenList.filter(
    (v) => v.id === Number.parseInt(bookId, 10)
  )[0];

  return (
    <div>
      <h2>Detail of {bookInfo.title}</h2>
      <ul>
        <li>
          <Link to='chapters'>Chapters</Link>
        </li>
        <li>
          <Link to='characters'>Characters</Link>
        </li>
      </ul>
      <Outlet context={bookInfo} />
    </div>
  );
};

export default BookDetail;
