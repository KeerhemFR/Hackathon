import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GameContext from 'context/GameContext';
import EnnemyCard from './EnnemyCard';
import LifeBar from './LifeBar';
import './style.css';

export default function Ennemy() {
  const [playlist, setPlaylist] = useState({});
  const { ennemyInfos, setEnnemyInfos, setEnnemyFan } = useContext(GameContext);
  const navigate = useNavigate();

  const ennemyTeams = [
    //
    'El-Chombo',
    'Daler-Mehndi',
    '56093772',
    'Las-Ketchup',
    'Patrick-Sebastien',
    'Francky-Vincent',
    '558274',
    'crazy-frog',
    'anais-delva',
    'cascada',
    'mariah-carey',
  ];

  const { ennemyIsDead, setEnnemyIsDead, ennemySelect } =
    useContext(GameContext);

  useEffect(() => {
    if (ennemyTeams[ennemySelect] !== undefined) {
      let ennemyData;
      axios
        .get(`http://localhost:5051/OMG/${ennemyTeams[ennemySelect]}`)
        .then(({ data }) => {
          setEnnemyInfos(data);
          setEnnemyFan(data.nb_fan);
          setEnnemyIsDead(false);
          ennemyData = data;
        })
        .then(() => {
          axios
            .get(`http://localhost:5051/OMG/music/${ennemyData.id}`)
            .then(({ data }) => {
              setPlaylist(data);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      navigate('/GameOver');
    }
  }, [ennemyIsDead]);
  return (
    <div className="EnemyFighting">
      {playlist.data && (
        <audio
          controls
          autoPlay="true"
          loop="true"
          src={playlist.data[0].preview}
          style={{ display: 'none' }}
        >
          <track
            src="captions_en.vtt"
            kind="captions"
            srcLang="en"
            label="english_captions"
          />
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      )}

      <EnnemyCard
        ennemyImg={ennemyInfos.picture_big}
        ennemyName={ennemyInfos.name}
      />
      {ennemyInfos.nb_fan && <LifeBar />}
    </div>
  );
}
