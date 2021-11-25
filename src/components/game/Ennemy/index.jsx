import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Ennemy() {
  const [ennemyInfos, setEnnemyInfos] = useState([]);

  useEffect(() => {
    axios
      .get('https://cors-anywhere.herokuapp.com/api.deezer.com/artist/27')
      .then(({ data }) => {
        setEnnemyInfos(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(ennemyInfos);

  const ennemyHp = Math.floor(ennemyInfos.nb_fan / 10000);

  return (
    <>
      <img src={ennemyInfos.picture_big} alt="" />
      <div>{ennemyInfos.name}</div>
      <p>{ennemyHp}</p>
    </>
  );
}
