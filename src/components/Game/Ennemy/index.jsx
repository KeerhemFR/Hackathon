import axios from 'axios';
import { useEffect, useState } from 'react';
import AttackButton from '../AttackButton';
import EnnemyCard from './EnnemyCard';
import LifeBar from './LifeBar';

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

  return (
    <>
      <EnnemyCard
        ennemyImg={ennemyInfos.picture_big}
        ennemyName={ennemyInfos.name}
      />
      <AttackButton />
      {ennemyInfos.nb_fan && <LifeBar ennemyFan={ennemyInfos.nb_fan} />}
    </>
  );
}
