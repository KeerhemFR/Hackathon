import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Player() {
  const [playerInfos, setPlayerInfos] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://deezerdevs-deezer.p.rapidapi.com/artist/adele',
      headers: {
        'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
        'x-rapidapi-key': '1d5d39d02amsh082d4e0db949ef8p180e55jsnd3a5fcc1c033',
      },
    };

    axios
      .request(options)
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
      <img src={playerInfos.picture_big} alt="" />
      <div>{playerInfos.name}</div>
    </>
  );
}
