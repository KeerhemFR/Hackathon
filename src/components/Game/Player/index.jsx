// import axios from 'axios';
import { useContext } from 'react';
import GameContext from 'context/GameContext';
import './style.css';

export default function Player() {
  const { picture, name, playerLevel } = useContext(GameContext);

  return (
    <article className="playerCard">
      <img className="playerImage" src={picture} alt={name} />
      <p className="playerName">
        &nbsp;&nbsp;{name}
        {playerLevel}
      </p>
    </article>
  );
}
