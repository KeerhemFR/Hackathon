import axios from 'axios';
import { useEffect, useState } from 'react';
import EnnemyCard from './EnnemyCard';

export default function Ennemy() {
  const [ennemyInfos, setEnnemyInfos] = useState([]);
  const [playlist, setPlaylist] = useState({});

  useEffect(() => {
    let ennemyData;
    axios
      .get('http://192.168.1.232:5050/OMG/daft-punk')
      .then(({ data }) => {
        setEnnemyInfos(data);
        ennemyData = data;
      })
      .then(() => {
        console.log('--------', ennemyData);
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
  console.log(playlist);
  return (
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
    </>
  );
}
