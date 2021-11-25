import axios from 'axios';
import { useEffect, useState } from 'react';
import EnnemyCard from './EnnemyCard';
import LifeBar from './LifeBar';
import './style.css';

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
    <div className="EnemyFighting">
      <EnnemyCard
        ennemyImg={ennemyInfos.picture_big}
        ennemyName={ennemyInfos.name}
      />
      <LifeBar ennemyFan={ennemyInfos.nb_fan} />
    </div>
  );
}
