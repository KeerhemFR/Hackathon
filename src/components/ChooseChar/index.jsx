import { Link } from 'react-router-dom';
import Button from '../Game/Button';
import SearchBar from './SearchBar';
import './style.css';

export default function Choosechar() {
  return (
    <div className="chooseCharWrapper">
      <h1 className="chooseSinger">Choose your Singer</h1> <br />
      <SearchBar />
      <div className="searchButtonWrapper">
        <Link to="/Game">
          <Button className="searchBarButton" content="Play" />
        </Link>
        <Link to="/">
          <Button className="searchBarButton" content="Return" />
        </Link>
      </div>
    </div>
  );
}
