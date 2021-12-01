import axios from 'axios';
import GameContext from 'context/GameContext';
import { useEffect, useState, useContext } from 'react';
import './style.css';

export default function SearchBar() {
  const [needleSinger, setNeedleSinger] = useState('');
  const [result, setResult] = useState({});

  const { setPicture, setName } = useContext(GameContext);

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:5051/OMG/${needleSinger}`)
        .then((response) => response.data)
        .then((data) => {
          setResult(data);
          setName(data.name);
          setPicture(data.picture_big);
        });
    } catch (error) {
      console.error('Oops i did it again!');
    }
  }, [needleSinger]);

  const handleSearchSinger = (e) => {
    setNeedleSinger(e.target.value);
  };

  return (
    <>
      <div className="wrap">
        <form>
          <input
            type="search"
            className="searchSinger"
            placeholder="Firstname-Lastname..."
            onChange={handleSearchSinger}
            value={needleSinger}
          />
          <img
            className="inputLogo"
            alt="Glass icon"
            src="https://img.icons8.com/ios-glyphs/60/ffffff/search--v1.png"
          />
        </form>
      </div>
      <div className="singerResults">
        {needleSinger && (
          <>
            {' '}
            <img
              className="searchSingerImage"
              src={result.picture_medium}
              alt={result.name}
            />
            <p className="searchSingerName">{result.name}</p>{' '}
          </>
        )}
      </div>
    </>
  );
}
