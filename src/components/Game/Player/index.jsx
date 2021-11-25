import axios from 'axios';
import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

export default function Player() {
  const [playerInfos, setPlayerInfos] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5050/OMG/adele')
      .then(({ data }) => {
        setPlayerInfos(data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  console.log(playerInfos);
  // setPlayerLvl();

  return (
    <>
      <img src={playerInfos.picture_big} alt={`${playerInfos.name}`} />
      <div>{playerInfos.name}</div>
    </>
  );
}

// Player.propTypes = {
//   playerLvl: PropTypes.number,
//   setPlayerLvl: PropTypes.func,
// };
// Player.defaultProps = {
//   playerLvl: [],
//   setPlayerLvl: () => {},
// };