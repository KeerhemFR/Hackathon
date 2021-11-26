import axios from 'axios';
import { useEffect, useState } from 'react';
import './style.css';

export default function Player() {
  const [playerInfos, setPlayerInfos] = useState([]);

  useEffect(() => {
    axios
      .get('http://192.168.1.232:5050/OMG/adele')
      .then(({ data }) => {
        setPlayerInfos(data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <article className="playerCard">
      <img
        className="playerImage"
        src={playerInfos.picture_big}
        alt={`${playerInfos.name}`}
      />
      <p className="playerName">&nbsp;&nbsp;{playerInfos.name}</p>
    </article>
  );
}
