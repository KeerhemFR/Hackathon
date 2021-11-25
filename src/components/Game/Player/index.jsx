import axios from 'axios';
import { useEffect, useState } from 'react';

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
  console.log(playerInfos);

  return (
    <>
      <img src={playerInfos.picture_big} alt={`${playerInfos.name}`} />
      <div>{playerInfos.name}</div>
    </>
  );
}
