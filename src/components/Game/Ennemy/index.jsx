import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import GameContext from 'context/GameContext';
import EnnemyCard from './EnnemyCard';
import LifeBar from './LifeBar';
import './style.css';

export default function Ennemy() {
  const [playlist, setPlaylist] = useState({});
  const { ennemyInfos, setEnnemyInfos, setEnnemyFan } = useContext(GameContext);

  useEffect(() => {
    let ennemyData;
    axios
      .get('http://192.168.1.232:5050/OMG/daft-punk')
      .then(({ data }) => {
        setEnnemyInfos(data);
        setEnnemyFan(data.nb_fan);
        ennemyData = data;
      })
      .then(() => {
        axios
          .get(`http://192.168.1.232:5050/OMG/music/${ennemyData.id}`)
          .then(({ data }) => {
            setPlaylist(data);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="EnemyFighting">
      <>
        {playlist.data && (
          <audio
            controls
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
        <LifeBar ennemyFan={ennemyInfos.nb_fan} />
      </>
      {playlist.data && (
        <audio
          controls
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
