import axios from 'axios';
import { useEffect, useState } from 'react';
import EnnemyCard from './EnnemyCard';

export default function Ennemy() {
  const [ennemyInfos, setEnnemyInfos] = useState([]);

  useEffect(() => {
    axios
      .get('http://192.168.1.232:5050/OMG/daft-punk')
      .then(({ data }) => {
        setEnnemyInfos(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const ennemyHp = Math.floor(ennemyInfos.nb_fan / 10000);

  return (
    <>
      <EnnemyCard
        ennemyImg={ennemyInfos.picture_big}
        ennemyName={ennemyInfos.name}
      />
    </>
  );
}
