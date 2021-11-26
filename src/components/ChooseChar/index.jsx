import GameContext from 'context/GameContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Game/Button';
import SearchBar from './SearchBar';
import './style.css';

export default function Choosechar() {
  const { name } = useContext(GameContext);
  return (
    <div className="chooseCharWrapper">
      <h1 className="chooseSinger">Choose your Singer</h1> <br />
      <div className="chooseCharWrapper">
        <SearchBar />
        <div className="searchButtonWrapper">
          {name && (
            <Link to="/Game">
              <Button className="searchBarButton" content="Play" />
            </Link>
          )}

          <Link to="/">
            <Button className="searchBarButton" content="Return" />
          </Link>
        </div>
      </div>
    </div>
  );
}
