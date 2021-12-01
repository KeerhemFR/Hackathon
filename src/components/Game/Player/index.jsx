// import axios from 'axios';
import { useContext } from 'react';
import GameContext from 'context/GameContext';
import './style.css';

export default function Player() {
  const { picture, name } = useContext(GameContext);

  // const [playerInfos, setPlayerInfos] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:5050/OMG/adele')
  //     .then(({ data }) => {
  //       setPlayerInfos(data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <article className="playerCard">
      <img className="playerImage" src={picture} alt={name} />
      <p className="playerName">&nbsp;&nbsp;{name}</p>
    </article>
  );
}
