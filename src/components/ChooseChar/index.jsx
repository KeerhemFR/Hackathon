import { Link } from 'react-router-dom';
import Button from '../Game/Button';
import SearchBar from './SearchBar';
import './style.css';

export default function Choosechar() {
  return (
    <>
      <h1 className="chooseSinger">Choose your singer</h1> <br />
      <div className="chooseCharWrapper">
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
    </>
  );
}
