import axios from 'axios';
import { useEffect, useState } from 'react';
import './style.css';

export default function SearchBar() {
  const [needleSinger, setNeedleSinger] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    const path = `http://192.168.1.232:5050/OMG/${needleSinger}`;
    console.log(path);
    axios
      .get(path)
      .then((response) => response.data)
      .then((data) => {
        setResult(data);
      });
  }, [needleSinger]);

  console.log(result);

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
        <img src={result.picture_medium} alt={result.name} />
        <p>{result.name}</p>
      </div>
    </>
  );
}
