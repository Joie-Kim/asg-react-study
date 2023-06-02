import { Link, Outlet, useParams } from 'react-router-dom';
import { authors, books } from '../db';

const AuthorDetail = () => {
  const { authorId } = useParams();
  const authorIdNum = Number.parseInt(authorId, 10);

  const authorName = authors.filter((v) => v.id === authorIdNum)[0].name;
  const writtenList = books.filter((v) => v.authorId === authorIdNum);

  return (
    <div>
      <h1>Written by '{authorName}'</h1>
      <ul>
        {writtenList.map((v) => (
          <li key={v.id}>
            <Link to={`${v.id}`}>{v.title}</Link>
          </li>
        ))}
      </ul>
      <Outlet context={writtenList} />
    </div>
  );
};

export default AuthorDetail;
