import { Link } from 'react-router-dom';
import Button from '../Game/Button';
import SearchBar from './SearchBar';

export default function Choosechar() {
  return (
    <>
      <h1>Choose your singer</h1> <br />
      <SearchBar />
      <Link to="/Game">
        <Button content="Play" />
      </Link>
      <Link to="/">
        <Button content="Return" />
      </Link>
    </>
  );
}
