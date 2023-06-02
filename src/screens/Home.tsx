import { Link } from 'react-router-dom';
import { authors } from '../db';

const Home = () => {
  return (
    <div>
      <h1>Author list</h1>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>
            <Link to={`author/${author.id}`}>{author.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
