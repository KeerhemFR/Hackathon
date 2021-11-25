import { Link } from 'react-router-dom';
import omgLogo from '../Assets/omgLogo.png';
import Button from '../Game/Button';
import './style.css';

export default function Home() {
  return (
    <>
      <div className="logo">
        <img className="omgLogo" src={omgLogo} alt="omg" />
      </div>
      <Link to="/ChooseChar">
        <Button className="homeButton" content="Start" />
      </Link>
      <Button className="homeButton" content="Scores" />
    </>
  );
}
